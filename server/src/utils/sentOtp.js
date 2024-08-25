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
        const fullname = data.fullname || 'User';
        subject = 'Complete Your Registration';
        text = `Dear ${fullname},\n\nThank you for registering with us. Your One-Time Password (OTP) for registration is: ${otp}\n\nThis OTP is valid for ${OTP_TIME} minutes. Please do not share this code with anyone.\n\nIf you did not request this, please ignore this email.\n\nBest regards,\nCompetitive Programming Camp City University (CPCCU)`;
        html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registration OTP</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    color: #333;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 8px;
                    border: 1px solid #ddd;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .header img {
                    width: 120px;
                    display: block;
                    margin: 0 auto 20px;
                }
                .otp-container {
                    display: flex;
                    justify-content: center;
                    margin: 20px 0;
                }
                .otp {
                    font-size: 1.5em;
                    font-weight: bold;
                    background-color: #007bff;
                    color: #ffffff;
                    padding: 15px;
                    border-radius: 5px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                }
                .footer {
                    font-size: 0.9em;
                    color: #555;
                    text-align: center;
                    margin-top: 20px;
                }
                .footer a {
                    color: #007bff;
                    text-decoration: none;
                    font-weight: bold;
                }
                .footer a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="https://res.cloudinary.com/dua4uga2s/image/upload/f_auto,q_auto/alxvgtkggfbv1e3y5fsy" alt="CPCCU Logo">
                </div>
                <p>Dear ${fullname},</p>
                <p>Thank you for registering with us! To complete your registration, please use the following One-Time Password (OTP):</p>
                <div class="otp-container">
                    <p class="otp" onclick="copyOTP('${otp}')">${otp}</p>
                </div>
                <p>This OTP is valid for ${OTP_TIME} minutes. Please do not share this code with anyone.</p>
                <p>If you did not request this, please ignore this email.</p>
                <div class="footer">
                    Best regards,<br>
                    Competitive Programming Camp City University (CPCCU)<br>
                    <a href="${process.env.WEB_DOMAIN}" target="_blank">Visit our website</a>
                </div>
            </div>
            <script>
                function copyOTP(otp) {
                    const tempInput = document.createElement('input');
                    tempInput.value = otp;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    alert('OTP copied to clipboard!');
                }
            </script>
        </body>
        </html>
        `;
    } else if (purpose === 'reset') {
        subject = 'Password Reset Request';
        text = `Dear ${data.fullname},\n\nWe received a request to reset your password. Click the link below to set a new password.\n\nBest regards,\nCompetitive Programming Camp City University (CPCCU)`;
        html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            border: 1px solid #ddd;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header img {
            width: 120px;
            display: block;
            margin: 0 auto 20px;
        }
        .button {
            display: inline-block;
            padding: 15px 25px;
            font-size: 16px;
            color: #ffffff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .button:hover {
            background-color: #0056b3;
        }
        .footer {
            font-size: 0.9em;
            color: #555;
            text-align: center;
            margin-top: 20px;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://res.cloudinary.com/dua4uga2s/image/upload/f_auto,q_auto/alxvgtkggfbv1e3y5fsy" alt="CPCCU Logo">
        </div>
        <p>Dear ${data.fullname},</p>
        <p>We received a request to reset your password. Click the button below to set a new password for your account:</p>
        <a href="${process.env.WEB_DOMAIN}/reset-password/${data.code}/${data.token}" class="button" target="_blank">Reset Password</a>
        <p>The link is valid for ${RESET_TIME} minutes. Please use it as soon as possible.</p>
        <div class="footer">
            Best regards,<br>
            Competitive Programming Camp City University (CPCCU)<br>
            <a href="${process.env.WEB_DOMAIN}" target="_blank">Visit our website</a>
        </div>
    </div>
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
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
};

export { generateOTP, sendOTP };
