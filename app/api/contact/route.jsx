import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

const dotenv = require('dotenv');
dotenv.config();





export async function POST(request) {



    // const myEmail = process.env.NEXT_PUBLIC_EMAIL;
    // const username = process.env.NEXT_PUBLIC_USERNAME;
    // const password = process.env.NEXT_PUBLIC_PASSWORD;
    // const host = process.env.NEXT_PUBLIC_HOST;
    // const port = process.env.NEXT_PUBLIC_PORT;




    const myEmail = process.env.EMAIL;
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const host = process.env.HOST;
    const port = process.env.PORT;



    const formData = await request.formData()
    const fname = formData.get('fname')
    const lname = formData.get('lname')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')




    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: myEmail,
            pass: password
        }
    });




    try {
        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
        <p>First Name: ${fname} </p>
        <p>Last Name: ${lname} </p>
        <p>Email: ${email} </p>
        <p>Phone: ${phone} </p>
        <p>Message: ${message} </p>
        `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {

        console.log(error)
        return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
        // return NextResponse.json({ error: error }, { status: 500 })
        // return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }








}
