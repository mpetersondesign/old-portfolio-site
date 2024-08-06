function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState != "loading") fn();
    });
  }
}

const aliens = document.querySelectorAll(".alien");

function setupAlien(alien) {

const speed = Math.floor(Math.random() * 10) + 1;
  console.log(speed);
  alien.setAttribute("data-rellax-speed", speed);
  alien.style.top = `${Math.random() * 100}%`;
  alien.setAttribute("data-rellax-percentage", Math.random().toString());
  alien.style.width = `${(speed * 10) + 80}px`;
}

aliens.forEach((alien) => {
    setupAlien(alien);
});

ready(function () {
  const typewriter = new window.Typewriter(".hero h1", {
    loop: true,
  });

  typewriter
    .typeString("I'm Matt Peterson.")
    .pauseFor(2500)
    .deleteChars(14)
    .typeString("a graphic designer.")
    .pauseFor(1000)
    .deleteChars(16)
    .typeString("ame designer.")
    .pauseFor(1000)
    .deleteChars(7)
    .typeString("veloper.")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Let's work together.")
    .pauseFor(2000)
    .start();

  new window.Rellax(".rellax");
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        document.querySelector("nav").classList.add("nav--scrolled");
    } else {
        document.querySelector("nav").classList.remove("nav--scrolled");
    }
});