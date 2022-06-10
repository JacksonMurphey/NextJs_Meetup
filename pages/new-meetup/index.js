//domain-name.com/new-meetup
//This will be our page for creating a new meetup

import Head from 'next/head'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
import React from 'react'

const NewMeetupPage = () => {

    const router = useRouter()

    const addMeetupHandler = async (meetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)
        router.push('/')
    }


    return (
        <React.Fragment>
            <Head>
                <title>Add a Meetup</title>
                <meta name='description' content='Add your own Meetups, create networking opportunities' />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </React.Fragment>
    )
}

export default NewMeetupPage