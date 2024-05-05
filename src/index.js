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

    let currentScrollPos = window.scrollY;
    if (currentScrollPos >= 0 && currentScrollPos < 650) {
      skillBar[1].children[0].style.color = "blue";
      skillBar[1].children[0].style.textDecoration = "underline";

      skillBar[1].children[1].style.color = "black";
      skillBar[1].children[1].style.textDecoration = "none";

      skillBar[1].children[2].style.color = "black";
      skillBar[1].children[2].style.textDecoration = "none";
    } else if (currentScrollPos >= 650 && currentScrollPos < 1800) {
      skillBar[1].children[0].style.color = "black";
      skillBar[1].children[0].style.textDecoration = "none";

      skillBar[1].children[1].style.color = "blue";
      skillBar[1].children[1].style.textDecoration = "underline";

      skillBar[1].children[2].style.color = "black";
      skillBar[1].children[2].style.textDecoration = "none";
    } else if (currentScrollPos >= 1800) {
      skillBar[1].children[0].style.color = "black";
      skillBar[1].children[0].style.textDecoration = "none";

      skillBar[1].children[1].style.color = "black";
      skillBar[1].children[1].style.textDecoration = "none";

      skillBar[1].children[2].style.color = "blue";
      skillBar[1].children[2].style.textDecoration = "underline";
    } else {
      skillBar[1].children[0].style.color = "black";
      skillBar[1].children[1].style.color = "black";
      skillBar[1].children[0].style.textDecoration = "none";
      skillBar[1].children[1].style.textDecoration = "none";
    }

    skillBar[1].children[0].addEventListener("click", () => {
      navItems.removeChild(navItems.querySelector("ul"));
      xmark.style.display = "none";
      bar.style.display = "block";
      window.scrollTo({
        top: 0,
        behavior: "smooth", // optional: for smooth scrolling
      });
    });

    skillBar[1].children[1].addEventListener("click", () => {
      navItems.removeChild(navItems.querySelector("ul"));
      xmark.style.display = "none";
      bar.style.display = "block";
      window.scrollTo({
        top: 650,
        behavior: "smooth", // optional: for smooth scrolling
      });
    });

    skillBar[1].children[2].addEventListener("click", () => {
      navItems.removeChild(navItems.querySelector("ul"));
      xmark.style.display = "none";
      bar.style.display = "block";
      console.log("1350 is running");
      window.scrollTo({
        top: 1800,
        behavior: "smooth", // optional: for smooth scrolling
      });
    });
  }
});

const skillBar = document.querySelectorAll("ul");

skillBar[0].children[0].addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // optional: for smooth scrolling
  });
});

skillBar[0].children[1].addEventListener("click", () => {
  window.scrollTo({
    top: 650,
    behavior: "smooth", // optional: for smooth scrolling
  });
});

skillBar[0].children[2].addEventListener("click", () => {
  window.scrollTo({
    top: 1350,
    behavior: "smooth", // optional: for smooth scrolling
  });
});

window.addEventListener("scroll", () => {
  let currentScrollPos = window.scrollY;
  if (currentScrollPos >= 0 && currentScrollPos < 650) {
    skillBar[0].children[0].style.color = "blue";
    skillBar[0].children[0].style.textDecoration = "underline";

    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[1].style.textDecoration = "none";

    skillBar[0].children[2].style.color = "black";
    skillBar[0].children[2].style.textDecoration = "none";
  } else if (currentScrollPos >= 650 && currentScrollPos < 1350) {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.textDecoration = "none";

    skillBar[0].children[1].style.color = "blue";
    skillBar[0].children[1].style.textDecoration = "underline";

    skillBar[0].children[2].style.color = "black";
    skillBar[0].children[2].style.textDecoration = "none";
  } else if (currentScrollPos >= 1350) {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.textDecoration = "none";

    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[1].style.textDecoration = "none";

    skillBar[0].children[2].style.color = "blue";
    skillBar[0].children[2].style.textDecoration = "underline";
  } else {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[0].style.textDecoration = "none";
    skillBar[0].children[1].style.textDecoration = "none";
  }

  console.log("currentScrollPos", currentScrollPos, skillBar[0].children[1]);


  console.log("(navItems.querySelector66", navItems.querySelector("ul"));
  // if (navItems.querySelector("ul")!=null) {
  //   navItems.removeChild(navItems.querySelector("ul"));
  //   xmark.style.display = "none";
  //   bar.style.display = "block";
  // }
});
