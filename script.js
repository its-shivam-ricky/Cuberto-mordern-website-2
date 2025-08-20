Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", { videos: ["videos/0.mp4", "videos/1.mp4", "videos/2.mp4"] });
let sections = document.querySelectorAll(".fleftelm");
let images = document.querySelectorAll("#fright .images img");



gsap.to(sections, {
  yPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#fimages",
    start: "top top",
    end: "+=" + window.innerHeight * sections.length,
    scrub: true,
    pin: true,
  },
});


Shery.imageEffect(".images", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index);
                },
            });
        });
    },
});




// === Contact Form AJAX ===
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const statusEl = document.getElementById("contactStatus");
  const API_BASE = "http://localhost:5000"; // backend origin

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "Sending...";

    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        statusEl.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        statusEl.textContent = `❌ ${data.msg || "Failed to send."}`;
      }
    } catch (err) {
      console.error(err);
      statusEl.textContent = "❌ Network error. Is the backend running?";
    }
  });
})();



