// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS: front-end origin yahan allow karo
app.use(cors({
    origin: [
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    methods: ["POST", "OPTIONS"]
}));

app.use(express.json());

// Basic validation helper
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body || {};

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, msg: "All fields are required." });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({ success: false, msg: "Invalid email." });
        }

        // Gmail SMTP (App Password use karo)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // your-email@gmail.com
                pass: process.env.EMAIL_PASS  // Gmail App Password (16 chars)
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER, // jaha receive karna hai
            subject: `New Contact Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        res.json({ success: true, msg: "Message sent successfully." });
    } catch (err) {
        console.error("Mail error:", err);
        res.status(500).json({ success: false, msg: "Server error. Please try again later." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
