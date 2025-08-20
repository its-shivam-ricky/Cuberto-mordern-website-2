# 🌐 Modern Website - 2
Actually its a clone of Cuberto website - its not the same but you will love it❤️
A **modern animated portfolio-style website** built with **HTML, CSS, JavaScript, and GSAP (ScrollTrigger)**.  
It features smooth scrolling, pinned sections, synchronized text-image animations, a wave-style image transition, and a fully functional **Contact Form** with a Node.js/Express backend (email sending via Nodemailer).

---

## 🚀 Features
- 🎨 **Modern UI/UX** inspired design
- 🔄 **Scroll-based animations** using GSAP ScrollTrigger
- 📌 **Pinned image & text sections** with smooth sync transitions
- 🌊 **Wave animation** on image change
- 📱 Responsive layout
- 📧 **Contact Form** with backend integration (Node.js + Express + Nodemailer)
- 🔒 Email sending secured with Gmail App Passwords

---

## 🖼️ Preview


📂 Project Structure
<img width="1284" height="485" alt="Screenshot 2025-08-20 195218" src="https://github.com/user-attachments/assets/f320ba29-0182-404f-b96a-6882af75777c" />


⚙️ Installation & Setup

1️⃣ Clone this repo
git clone https://github.com/your-username/modern-website-2.git
cd modern-website-2

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in backend/:

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=your-email@gmail.com
PORT=5000

----

Start the server:

node server.js


Server runs at: http://localhost:5000

---

3️⃣ Frontend Setup

Open index.html using Live Server (VS Code extension) OR run:

npx http-server

and visit: http://127.0.0.1:8080

---

📧 Contact Form

Fill the form and click Send Message

The backend will send an email to your configured address (EMAIL_TO in .env)

---

🛠️ Tech Stack

Frontend:

- HTML5
- CSS3
- JavaScript (ES6)
- GSAP + ScrollTrigger

Backend:

- Node.js
- Express.js
- Nodemailer
- dotenv
- CORS

----

🔮 Future Improvements

🌊 Advanced WebGL wave/ripple effects <br>
🗄️ Save contact messages to MongoDB <br>
🌙 Dark/Light theme toggle <br>
📱 More responsive mobile optimization <br>

---

📜 License

This project is MIT Licensed — feel free to use & modify it.
