// domain-name.com/api/new-meetup


import { MongoClient } from 'mongodb'

//Only post requests will trigger this.
const handler = async (req, res) => {

    if (req.method === "POST") {
        const data = req.body
        // const { title, image, address, description } = data

        //never run this code on the client side. 
        const client = await MongoClient.connect('mongodb+srv://admin:rn_h_q8A_ELhx3c@cluster0.5vozs.mongodb.net/meetupsDB?retryWrites=true&w=majority')
        const db = client.db()

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)

        client.close()
        res.status(201).json({ message: 'Meetup added successfully' })
    }


}

export default handler