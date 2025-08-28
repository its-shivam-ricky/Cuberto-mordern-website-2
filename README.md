# 🌐Cuberto Modern Website - 2
Actually its a clone of Cuberto website - its not the same but you will love it❤️<br>
A **modern animated portfolio-style website** built with **HTML, CSS, JavaScript, and GSAP (ScrollTrigger)**.  
It features smooth scrolling, pinned sections, synchronized text-image animations, a wave-style image transition, and a fully functional **Contact Form** with a Node.js/Express backend integration (email sending via Nodemailer) .

---

# 🚀 Features
**🎨 Modern UI/UX** inspired by Cuberto<br>
**🖱️ Interactive Hover & Magnet Effects** using Shery.js<br>
**🎥 Media Hover Previews**(video hover on headings)<br>
**🌍 Smooth Scroll Animations with GSAP + ScrollTrigger**<br>
**🖼️ 3D & Image Distortion Effects** using Three.js<br>
**📱 Responsive Design** (optimized for mobile & desktop)<br>
**📩 Contact Form with Backend Support**<br>
 - Frontend form built with validation<br>
 - Sends form data via AJAX request to backend (/contact endpoint)<br>
 - Displays success/error messages dynamically<br>
 
---

# 🛠️ Tech Stack
**Frontend:**
- HTML5, CSS3, JavaScript
- GSAP (GreenSock) + ScrollTrigger
- Shery.js (Magnet & Hover effects)
- Remix Icons
- Three.js (3D effects)

**Backend:**
- Node.js / Express (server for contact form)
- REST API endpoint (/contact)
- JSON response handling
  
---

## 🖼️ Preview / Screenshorts

<img width="2874" height="1614" alt="Screenshot 2025-08-21 021126" src="https://github.com/user-attachments/assets/1e375ed1-2a6e-4fa3-be46-6b996b0cc535" />
<img width="2875" height="1616" alt="Screenshot 2025-08-21 021229" src="https://github.com/user-attachments/assets/b3432f06-aa7d-4c6c-884e-763ee1390e91" />
<img width="2879" height="1617" alt="Screenshot 2025-08-21 021506" src="https://github.com/user-attachments/assets/4434c580-ea6e-4933-9cf0-c5e60b61a03e" />
<img width="2874" height="1616" alt="Screenshot 2025-08-21 021528" src="https://github.com/user-attachments/assets/963d8bf9-b099-45e0-a13a-d10afd92ab9b" />


---

📂 Project Structure
<img width="1284" height="485" alt="Screenshot 2025-08-20 195218" src="https://github.com/user-attachments/assets/f320ba29-0182-404f-b96a-6882af75777c" />

---

# ⚙️ Installation & Setup

## 1️⃣ Clone this repo
git clone https://github.com/your-username/modern-website-2.git
cd modern-website-2

## 2️⃣ Backend Setup
cd backend
npm install


Create a .env file in backend/:

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=your-email@gmail.com
PORT=5000

----

## Start the server:

node server.js


Server runs at: http://localhost:5000

---

## 3️⃣ Frontend Setup

Open index.html using Live Server (VS Code extension) OR run:

npx http-server

and visit: http://127.0.0.1:8080

---

## 📧 Contact Form

Fill the form and click Send Message

The backend will send an email to your configured address (EMAIL_TO in .env)

---


## 🔮 Future Improvements:

🌊 Advanced WebGL wave/ripple effects <br>
🗄️ Save contact messages to MongoDB <br>
🌙 Dark/Light theme toggle <br>
📱 More responsive mobile optimization <br>

---

📜 License

This project is MIT Licensed — feel free to use & modify it.
