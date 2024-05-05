const hamburgerMenu = document.getElementById("hamburgerMenu");
console.log("hamburgerMenu", hamburgerMenu);
const navItems = document.getElementById("navItems");

const xmark = document.getElementById("xmark");
const bar = document.getElementById("bar");
xmark.style.display = "none";

hamburgerMenu.addEventListener("click", () => {
  const navUl = document.createElement("ul");
  navUl.style.padding = "1rem 0";
  navUl.className =
    "flex flex-col justify-center items-center bg-blue-50 text-black";

  if (navItems.innerHTML.length > 0) {
    navItems.removeChild(navItems.querySelector("ul"));
    xmark.style.display = "none";
    bar.style.display = "block";
  } else {
    xmark.style.display = "block";
    bar.style.display = "none";
    const listItem = [
      "Intro",
      "Skills",
      "Projects",
      "Education",
      "Coding profile",
      "Resume",
    ];

    listItem.map((e) => {
      const li = document.createElement("li");
      li.style.padding = "0.5rem 0";
      li.innerText = e;
      navUl.appendChild(li);
    });

    navItems.appendChild(navUl);

    const skillBar = document.querySelectorAll("ul");
    console.log("skill", skillBar[1].children[1]);
    const skill = document.getElementsByClassName("skill");
    skillBar[1].children[1].addEventListener("click", () => {
      navItems.removeChild(navItems.querySelector("ul"));
      xmark.style.display = "none";
      bar.style.display = "block";
      skill[0].scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const intro = document.getElementById("intro");
    skillBar[1].children[0].addEventListener("click", () => {
      navItems.removeChild(navItems.querySelector("ul"));
      xmark.style.display = "none";
      bar.style.display = "block";
      intro.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    window.addEventListener("scroll", () => {
      let currentScrollPos = window.scrollY;
      if (currentScrollPos >= 736) {
        skillBar[1].children[0].style.color = "black";
        skillBar[1].children[0].style.textDecoration = "none";
        skillBar[1].children[1].style.color = "blue";
        skillBar[1].children[1].style.textDecoration = "underline";
      } else if (currentScrollPos >= 0 && currentScrollPos < 736) {
        skillBar[1].children[1].style.color = "black";
        skillBar[1].children[1].style.textDecoration = "none";
        skillBar[1].children[0].style.color = "blue";
        skillBar[1].children[0].style.textDecoration = "underline";
      } else {
        skillBar[1].children[0].style.color = "black";
        skillBar[1].children[1].style.color = "black";
        skillBar[1].children[0].style.textDecoration = "none";
        skillBar[1].children[1].style.textDecoration = "none";
      }

      console.log(
        "currentScrollPos",
        currentScrollPos,
        skillBar[0].children[1]
      );
    });
  }
});

const skillBar = document.querySelectorAll("ul");
console.log("skill", skillBar[0].children[1]);
const skill = document.getElementsByClassName("skill");
skillBar[0].children[1].addEventListener("click", () => {
  skill[0].scrollIntoView({ behavior: "smooth", block: "start" });
});

skillBar[0].children[2].addEventListener("click", () => {
  window.scrollTo({
    top: 600,
    behavior: "smooth", // optional: for smooth scrolling
  });
});

const intro = document.getElementById("intro");
skillBar[0].children[0].addEventListener("click", () => {
  intro.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("scroll", () => {
  let currentScrollPos = window.scrollY;
  if (currentScrollPos >= 380) {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.textDecoration = "none";
    skillBar[0].children[1].style.color = "blue";
    skillBar[0].children[1].style.textDecoration = "underline";
  } else if (currentScrollPos >= 0 && currentScrollPos < 380) {
    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[1].style.textDecoration = "none";
    skillBar[0].children[0].style.color = "blue";
    skillBar[0].children[0].style.textDecoration = "underline";
  } else {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[0].style.textDecoration = "none";
    skillBar[0].children[1].style.textDecoration = "none";
  }

  console.log("currentScrollPos", currentScrollPos, skillBar[0].children[1]);
});
