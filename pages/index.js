//domain-name.com/ 
//This is our root route. 


import Head from 'next/head'
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import React from 'react'
// import { useEffect, useState } from 'react'


const HomePage = (props) => {
    //Since we are running the 'getStaticProps()' function below, we no longer need to manage state, or use useEffect()
    // const [loadedMeetups, setLoadedMeetups] = useState([])
    // useEffect(() => {
    //     //fetch request
    //     setLoadedMeetups(DUMMYDATA)
    // }, [])


    return (
        <React.Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name='description' content='Browse a large list of highly active React Meetups' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </React.Fragment>
    )
}

//static generation   alternatively :(SSG)-static site generation
//below function only works in our pages. This allows you to load data before rendering 
//this code will never run on our clients side.
export const getStaticProps = async () => {
    //fetch data from API here
    const client = await MongoClient.connect('mongodb+srv://admin:rn_h_q8A_ELhx3c@cluster0.5vozs.mongodb.net/meetupsDB?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()

    //you must always return an obj. 
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10 //# of seconds NEXTJS will wait till it regenerates this page. This ensures your data is never older than 10seconds, you can set to any time-frame
    }
}


//alternative solution for getStaticProps()
//This solution always runs on the server side on deployment
//Only use this is you need access to request/response data. or if your data changes very frequently
// export const getServerSideProps = async (context) => {
//     const req = context.req
//     const res = context.res

//     //fetch data from API here.

//     return {
//         props: {
//             meetups: DUMMYDATA
//         }
//     }
// }

//if you dont have data that changes frequently, then getStaticProps is more efficient.

export default HomePage