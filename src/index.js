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
      if (e == "Resume") {
        li.className =
          "flex text-sm justify-center items-center gap-x-2 bg-blue-600 text-white rounded-md px-4 py-1 active:text-black hover:text-green-300 cursor-pointer";

        const a = document.createElement("a");
        a.target = "_blank";
        a.href = "./assets/newResume.pdf";
        a.className = "flex gap-x-2 justify-center items-center";

        const div1 = document.createElement("div1");
        const div2 = document.createElement("div1");
        const div3 = document.createElement("div1");
        div2.innerHTML = "Download";
        div3.innerHTML = "Resume";
        div1.appendChild(div2);
        div1.appendChild(div3);

        const div4 = document.createElement("div4");
        div4.className = "text-2xl";

        const i = document.createElement("i");
        i.className = "fa-solid fa-download";

        div4.appendChild(i);

        a.appendChild(div1);
        a.appendChild(div4);

        li.appendChild(a);
      } else {
        li.style.padding = "0.5rem 0";
        li.innerText = e;
      }
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

      skillBar[1].children[3].style.color = "black";
      skillBar[1].children[3].style.textDecoration = "none";
    } else if (currentScrollPos >= 650 && currentScrollPos < 1350) {
      skillBar[1].children[0].style.color = "black";
      skillBar[1].children[0].style.textDecoration = "none";

      skillBar[1].children[1].style.color = "blue";
      skillBar[1].children[1].style.textDecoration = "underline";

      skillBar[1].children[2].style.color = "black";
      skillBar[1].children[2].style.textDecoration = "none";

      skillBar[1].children[3].style.color = "black";
      skillBar[1].children[3].style.textDecoration = "none";
    } else if (currentScrollPos >= 1350 && currentScrollPos < 2700) {
      skillBar[1].children[0].style.color = "black";
      skillBar[1].children[0].style.textDecoration = "none";

      skillBar[1].children[1].style.color = "black";
      skillBar[1].children[1].style.textDecoration = "none";

      skillBar[1].children[2].style.color = "blue";
      skillBar[1].children[2].style.textDecoration = "underline";

      skillBar[1].children[3].style.color = "black";
      skillBar[1].children[3].style.textDecoration = "none";
    } else if (currentScrollPos >= 2700) {
      skillBar[1].children[0].style.color = "black";
      skillBar[1].children[0].style.textDecoration = "none";

      skillBar[1].children[1].style.color = "black";
      skillBar[1].children[1].style.textDecoration = "none";

      skillBar[1].children[2].style.color = "black";
      skillBar[1].children[2].style.textDecoration = "none";

      skillBar[1].children[3].style.color = "blue";
      skillBar[1].children[3].style.textDecoration = "underline";
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

    skillBar[1].children[3].addEventListener("click", () => {
      navItems.removeChild(navItems.querySelector("ul"));
      xmark.style.display = "none";
      bar.style.display = "block";
      console.log("1350 is running");
      window.scrollTo({
        top: 3600,
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

skillBar[0].children[3].addEventListener("click", () => {
  window.scrollTo({
    top: 2700,
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

    skillBar[0].children[3].style.color = "black";
    skillBar[0].children[3].style.textDecoration = "none";
  } else if (currentScrollPos >= 650 && currentScrollPos < 1350) {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.textDecoration = "none";

    skillBar[0].children[1].style.color = "blue";
    skillBar[0].children[1].style.textDecoration = "underline";

    skillBar[0].children[2].style.color = "black";
    skillBar[0].children[2].style.textDecoration = "none";

    skillBar[0].children[3].style.color = "black";
    skillBar[0].children[3].style.textDecoration = "none";
  } else if (currentScrollPos >= 1350 && currentScrollPos < 2700) {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.textDecoration = "none";

    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[1].style.textDecoration = "none";

    skillBar[0].children[2].style.color = "blue";
    skillBar[0].children[2].style.textDecoration = "underline";

    skillBar[0].children[3].style.color = "black";
    skillBar[0].children[3].style.textDecoration = "none";
  } else if (currentScrollPos >= 2700) {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.textDecoration = "none";

    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[1].style.textDecoration = "none";

    skillBar[0].children[2].style.color = "black";
    skillBar[0].children[2].style.textDecoration = "none";

    skillBar[0].children[3].style.color = "blue";
    skillBar[0].children[3].style.textDecoration = "underline";
  }

  console.log("currentScrollPos", currentScrollPos, skillBar[0].children[1]);

  console.log("(navItems.querySelector66", navItems.querySelector("ul"));
  // if (navItems.querySelector("ul")!=null) {
  //   navItems.removeChild(navItems.querySelector("ul"));
  //   xmark.style.display = "none";
  //   bar.style.display = "block";
  // }
});

const addButton = document.querySelector(".addButton");
const comment = document.querySelector(".comment");
const allcomment = document.querySelector(".allcomment");
const popup = document.querySelector(".popup");

console.log("addButton: ", addButton, comment);
addButton.addEventListener("click", (event) => {
  console.log("event", event);
  event.preventDefault();
  if (comment.value == "") {
    comment.style.border = "2px solid red";
  } else {
    popup.style.display = "flex";
    comment.style.border = "none";
  }
});

const cancel = document.querySelector(".cancel");
const submit = document.querySelector(".submit");
cancel.addEventListener("click", (event) => {
  event.preventDefault();
  popup.style.display = "none";
});

submit.addEventListener("click", async (event) => {
  event.preventDefault();
  const name = document.querySelector(".name");
  console.log("innertext: ", comment.value);
  if (name.value == "") {
    name.style.border = "2px solid red";
  } else {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div1.style.color = "grey";
    div2.style.fontSize = "1.5rem";
    div2.style.color = "white";
    div1.style.marginLeft = "0.5rem";
    div1.innerHTML = comment.value;
    div2.innerHTML = name.value;
    const div3 = document.createElement("div");
    div3.style.marginTop = "0.5rem";
    div3.style.marginLeft = "0.5rem";
    div3.appendChild(div2);
    div3.appendChild(div1);
    allcomment.appendChild(div3);
    comment.value = "";
    name.value = "";
    popup.style.display = "none";
  }
});
