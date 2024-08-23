import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { OTP_TIME, RESET_TIME } from '../constants.js';

const generateOTP = (time) => {
    const code = crypto.randomBytes(3).toString('hex');
    const expires = new Date(Date.now() + time * 60 * 1000);
    const otp = {
        code: code,
        expire: expires,
    };
    return [otp, code];
};

const sendOTP = (email, otp, purpose, data = {}) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    let subject, text, html;

    if (purpose === 'registration') {
        subject = 'Your Registration OTP Code';
        text = `Dear ${data.fullname},

Thank you for registering with us. To complete your registration, please use the following One-Time Password (OTP):

Your OTP code: ${otp}

Dears code is valid for ${OTP_TIME} minutes. Please do not share this code with anyone.

If you did not request this code, please ignore this email.

Best regards,
Competitive Programming Camp City University,
(CPCCU)
`;
    } else if (purpose === 'reset') {
        subject = 'Your Password Reset OTP Code';
        html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
    <style>
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: transparent;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
            border: 1px solid #007bff;
            cursor: pointer;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <p>Dear ${data.fullname},</p>
    <p>We received a request to reset your password. To proceed, please click the button below to set a new password for your account:</p>
    <a href="${process.env.WEB_DOMAIN}/reset-password/${data.code}/${data.token}" class="button" target="_blank">Reset Password</a>
    <p>This link will direct you to a secure page where you can enter and confirm your new password. The link is valid for ${RESET_TIME} minutes, so please use it as soon as possible.</p>
    <p>Best regards,<br>
    Competitive Programming Camp City University,<br>
    (CPCCU)</p>
</body>
</html>
`;
    } else {
        throw new Error('Invalid purpose specified for OTP email.');
    }

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text,
        html: html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

export { generateOTP, sendOTP };
