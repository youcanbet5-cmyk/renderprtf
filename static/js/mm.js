document.addEventListener("DOMContentLoaded", function () {

  /* ---------------- MOBILE MENU ---------------- */

  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {

    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }


  /* ---------------- DESKTOP CTA ---------------- */

  const navCta = document.getElementById('nav-cta-desktop');

  function handleCTA() {
    if (!navCta) return;
    navCta.style.display = window.innerWidth >= 769 ? 'inline-flex' : 'none';
  }

  handleCTA();
  window.addEventListener('resize', handleCTA);



  /* ---------------- TAB FILTER ---------------- */

  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.work-card');

  if (tabs.length) {

    tabs.forEach(tab => {

      tab.addEventListener('click', () => {
        document.querySelectorAll("video").forEach(v => v.pause());


        const category = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        cards.forEach(card => {

          card.style.display = "none";

          if (card.dataset.category === category) {
            card.style.display = "";
          }

        });

      });

    });

    document.querySelector('.tab-btn.active')?.click();
  }



  /* ---------------- REVEAL ANIMATION ---------------- */

  const reveals = document.querySelectorAll(".reveal, .reveal-up");

  function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(el => {

      const revealTop = el.getBoundingClientRect().top;

      if (revealTop < windowHeight - 60) {
        el.classList.add("active");
      }

    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

});

const serviceCards = document.querySelectorAll(".service-card");

window.addEventListener("mousemove", (e) => {

  cards.forEach(card => {

    const rect = card.getBoundingClientRect();

    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(
      e.clientX - cardCenterX,
      e.clientY - cardCenterY
    );

    // 👇 adjust this number to control range
    if (distance < 220) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }

  });

});
const tiltCards = document.querySelectorAll(".service-card");

tiltCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    card.style.boxShadow =
      `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(0,0,0,.35)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });

});
const lava = document.querySelector('.lava-particles');

for (let i = 0; i < 40; i++) {

  const flake = document.createElement('span');

  // random horizontal position
  flake.style.left = Math.random() * 100 + "%";

  // ⭐ SIZE MIX
  const size = Math.random();

  if (size < 0.6) {
    // tiny dust
    const s = 2 + Math.random() * 3;
    flake.style.width = s + "px";
    flake.style.height = s + "px";
    flake.style.opacity = .4;
  }
  else {
    // ember
    const s = 4 + Math.random() * 5;
    flake.style.width = s + "px";
    flake.style.height = s + "px";
    flake.style.opacity = .8;
  }

  // random speed
  flake.style.animationDuration = (8 + Math.random() * 12) + "s";

  lava.appendChild(flake);
}
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const revealTimeline = () => {
    const triggerPoint = window.innerHeight * 0.85;

    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerPoint) {
        item.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealTimeline);
  revealTimeline(); // run once on load
});
/* ===== ONLY ONE VIDEO PLAYS (ULTRA RELIABLE) ===== */

function setupSingleVideoPlayback() {

  const videos = document.querySelectorAll("video");

  videos.forEach(video => {

    video.addEventListener("play", () => {

      videos.forEach(otherVideo => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });

    });

  });

}

/* run after page loads */
document.addEventListener("DOMContentLoaded", setupSingleVideoPlayback);

/* ===============================
   PRO VIDEO CONTROL SYSTEM
   =============================== */

document.addEventListener("DOMContentLoaded", () => {

  const videos = document.querySelectorAll("video");



  videos.forEach(video => {

    video.addEventListener("play", () => {

      videos.forEach(other => {
        if (other !== video) {
          other.pause();
        }
      });

    });

  });



  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      // if video NOT visible → pause
      if (!entry.isIntersecting) {
        entry.target.pause();
      }

    });

  }, {
    threshold: 0.4
  });


  videos.forEach(video => observer.observe(video));




  const tabs = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {

    tab.addEventListener('click', () => {

      videos.forEach(video => video.pause());

    });

  });

});





