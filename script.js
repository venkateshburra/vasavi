document.addEventListener("DOMContentLoaded", () => {
  // Reveal animations on scroll
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll,
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("active");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // Subtitle reveal effect (typing effect)
  const subtitle = document.querySelector(".subtitle");
  const text = subtitle.innerText;
  subtitle.innerHTML = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      subtitle.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };

  setTimeout(typeWriter, 1000);

  // Hero image interactive parallax-ish hover
  const imageContainer = document.querySelector(".hero-image-container");
  const image = document.querySelector("#vasu-image");

  if (imageContainer && image) {
    imageContainer.addEventListener("mousemove", (e) => {
      const { left, top, width, height } =
        imageContainer.getBoundingClientRect();
      const mouseX = e.clientX - left - width / 2;
      const mouseY = e.clientY - top - height / 2;

      image.style.transform = `scale(1.1) translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`;
    });

    imageContainer.addEventListener("mouseleave", () => {
      image.style.transform = `scale(1) translate(0, 0)`;
    });
  }
});
