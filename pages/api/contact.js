import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, message } = req.body;

        if (!message) {
            res.status(422).json({ message: 'Mesaj kısmı boş olmamalıdır.' })
            return;
        }

        const newMessage = {
            email,
            message
        };

        let client;
        try {
            client = await MongoClient.connect('mongodb+srv://hachiko:hachiko2k@messages.p8yow.mongodb.net/tr-blog?retryWrites=true&w=majority');
        } catch (e) {
            res.status(500).json({ message: 'Error' });
            return;
        }
        const db = client.db();
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (e) {
            client.close();
            res.status(500).json({ message: "Error" });
            return;
        }

        client.close();
        res.status(201).json({ message: 'Mesaj iletildi.' })
    }
}

export default handler;