import { MongoClient } from 'mongodb';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);



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

        const msg = {
            to: 'mertuygur02@gmail.com', // Change to your recipient
            from: 'mertuygur44@outlook.com', // Change to your verified sender
            subject: 'Türkçe Blog Sitesinden',
            text: `${newMessage.email}`,
            html: `${newMessage.email} - ${newMessage.message}`,
          }
          sgMail
            .send(msg)
            .then(() => {
              console.log('Email gönderildi.');
              res.status(200).json({
                message: "Email başarıyla gönderildi."
              })
            })
            .catch((error) => {
              console.error(error);
              res.status(500).json({
                message: "Email gönderilemedi."
              })
            })
    }
}

export default handler;