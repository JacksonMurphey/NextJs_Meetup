//domain-name.com/[unique meetup id]
//This will be our detail page. 

import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetails from '../../components/meetups/MeetupDetails'
import React from 'react'

const MeetupDetailsPage = (props) => {


    return (
        <React.Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetails
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </React.Fragment>
    )
}




//this must be used when pregenerating dynamic pages, when using getstaticProps()
export const getStaticPaths = async () => {

    const client = await MongoClient.connect('mongodb+srv://admin:rn_h_q8A_ELhx3c@cluster0.5vozs.mongodb.net/meetupsDB?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
    client.close()


    return {
        fallback: 'blocking', //false means our all our meetupId values are supported and addressed below. If this false, and you dont address all values, you will get a 404 page for unlisted ones. true or 'blocking' nextjs will not with 404 if it cannot find page immeadiately, will generate it and cache.
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        }))

        //below is how we hard coded in our data.
        // [
        //     {
        //         params: {
        //             meetupId: 'm1',
        //         },
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2'
        //         },
        //     }
        // ],
    }
}


export const getStaticProps = async (context) => {


    const meetupId = context.params.meetupId //params.meetupId is from the folder name [meetupId]
    //fetch data for single meetup here.
    const client = await MongoClient.connect('mongodb+srv://admin:rn_h_q8A_ELhx3c@cluster0.5vozs.mongodb.net/meetupsDB?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })
    client.close()


    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetupDetailsPage