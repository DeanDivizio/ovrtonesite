'use server';

const sgMail = require('@sendgrid/mail')
export const SubmitForm = ({ fullname, email, message }) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'deandivizio@ovrtonemedia.com',
        from: 'contact@ovrtonemedia.com',
        subject: 'OVRTONE CONTACT FORM SUBMISSION',
        text: 'OVRTONE Received a new contact form submission',
        html: `<p><strong>Name: </strong>${fullname} <br><strong>Email: </strong>${email} <br><strong>Message: </strong>${message}</p>`,
    }
    return sgMail
    .send(msg)
    .then(() => {
        console.log(`Email sent: ${fullname} ${email} ${message}`)
    })
    .catch((error) => {
        console.error(`error sending email(${fullname} ${email} ${message}): ${error}`)
        throw error; // Reject the Promise with the error
    })
}