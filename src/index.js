const hamburgerMenu = document.getElementById("hamburgerMenu");
console.log("hamburgerMenu", hamburgerMenu);
const navItems = document.getElementById("navItems");
const xmark = document.getElementById("xmark");
const bar = document.getElementById("bar");
xmark.style.display = "none";

const intro = document.getElementById("intro");
const skillClass = document.getElementsByClassName("skill");
const myskills = document.getElementsByClassName("myskills");
const projects = document.getElementsByClassName("projects");
const education = document.getElementsByClassName("education");

let hamMenu = false;

const removeBgEffect = () => {
  // const intro = document.getElementById("intro");
  // const skillClass = document.getElementsByClassName("skill");
  // const myskills = document.getElementsByClassName("myskills");
  // const projects = document.getElementsByClassName("projects");
  // const education = document.getElementsByClassName("education");

  intro.style.filter = "blur(0)";
  intro.style.backgroundColor = "rgba(0, 0, 0, 0)";
  skillClass[0].style.backgroundColor = "rgba(0, 0, 0,0)";
  skillClass[0].style.filter = "blur(0)";
  skillClass[1].style.backgroundColor = "rgba(0, 0, 0, 0)";
  skillClass[1].style.filter = "blur(0)";
  skillClass[2].style.backgroundColor = "rgba(0, 0, 0, 0)";
  skillClass[2].style.filter = "blur(0)";
  myskills[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
  myskills[0].style.filter = "blur(0)";
  projects[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
  projects[0].style.filter = "blur(0";
  education[0].style.filter = "blur(0)";
  education[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
};

const showBgEffect = () => {
  // const intro = document.getElementById("intro");
  // const skillClass = document.getElementsByClassName("skill");
  // const myskills = document.getElementsByClassName("myskills");
  // const projects = document.getElementsByClassName("projects");
  // const education = document.getElementsByClassName("education");

  intro.style.filter = "blur(5px)";
  intro.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  skillClass[0].style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  skillClass[0].style.filter = "blur(5px)";
  skillClass[1].style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  skillClass[1].style.filter = "blur(5px)";
  skillClass[2].style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  skillClass[2].style.filter = "blur(5px)";
  myskills[0].style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  myskills[0].style.filter = "blur(5px)";
  projects[0].style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  projects[0].style.filter = "blur(5px)";
  education[0].style.filter = "blur(5px)";
  education[0].style.backgroundColor = "rgba(0, 0, 0, 0.9)";
};

const removeHamburgerMenu = () => {
  const navUl = document.createElement("ul");
  navUl.style.padding = "1rem 0";
  navUl.className =
    "flex flex-col justify-center items-center bg-blue-50 text-black";

  navItems.removeChild(navItems.querySelector("ul"));
  xmark.style.display = "none";
  bar.style.display = "block";
  removeBgEffect();
};

const showHamburgerMenu = () => {
  const navUl = document.createElement("ul");
  navUl.style.padding = "1rem 0";
  navUl.className =
    "flex flex-col justify-center items-center bg-blue-50 text-black";

  showBgEffect();
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
        "flex text-sm justify-center items-center gap-x-2 bg-blue-600 text-white rounded-md px-4 py-1 active:text-black hover:text-green-300 cursor-pointer mt-2";

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
      navUl.appendChild(li);
    } else if (e == "Coding profile") {
      const divContainer = document.createElement("div");
      const div = document.createElement("div");
      div.className = "flex justify-center items-center gap-x-2";
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const i1 = document.createElement("i");
      i1.className = "fa-solid fa-sort-up";
      div2.appendChild(i1);
      div1.innerHTML = "Coding Profile";
      div.appendChild(div1);
      div.appendChild(div2);
      const div3 = document.createElement("div");
      const i2 = document.createElement("i");
      i2.className = "fa-solid fa-caret-down";
      divContainer.appendChild(div);
      navUl.appendChild(divContainer);

      const option = document.createElement("div");
      option.className = "flex justify-center items-center flex-col";

      const optionItem1 = document.createElement("li");
      const optionItem2 = document.createElement("li");
      const optionItem3 = document.createElement("li");
      const optionItem4 = document.createElement("li");

      option.appendChild(optionItem1);
      option.appendChild(optionItem2);
      option.appendChild(optionItem3);
      option.appendChild(optionItem4);

      const a1 = document.createElement("a");
      const a2 = document.createElement("a");
      const a3 = document.createElement("a");
      const a4 = document.createElement("a");

      optionItem1.appendChild(a1);
      optionItem2.appendChild(a2);
      optionItem3.appendChild(a3);
      optionItem4.appendChild(a4);

      optionItem1.className =
        "text-sm my-1 underline text-blue-600 hover:text-blue-800";
      optionItem2.className =
        "text-sm my-1 underline text-blue-600 hover:text-blue-800";
      optionItem3.className =
        "text-sm my-1 underline text-blue-600 hover:text-blue-800";
      optionItem4.className =
        "text-sm my-1 underline text-blue-600 hover:text-blue-800";

      a1.href = "https://leetcode.com/u/sonu2027/";
      a2.href = "https://www.geeksforgeeks.org/user/takeinfo2u/";
      a3.href =
        "https://www.naukri.com/code360/profile/433a370a-3604-4a65-b6a5-bcfe5d32fffe";
      a4.href = "https://www.hackerrank.com/profile/takeinfo2u";
      a1.innerHTML = "LeetCode";
      a2.innerHTML = "GeeksforGeeks";
      a3.innerHTML = "CodingNinja";
      a4.innerHTML = "HackerRank";
      a1.target = "_blank";
      a2.target = "_blank";
      a3.target = "_blank";
      a4.target = "_blank";

      div2.addEventListener("click", () => {
        div2.style.display = "none";
        i1.style.display = "none";
        div3.style.display = "block";
        i2.style.display = "block";
        div3.appendChild(i2);
        div.appendChild(div3);
        divContainer.appendChild(option);
      });

      div3.addEventListener("click", () => {
        div3.style.display = "none";
        i2.style.display = "none";
        div2.style.display = "block";
        i1.style.display = "block";
        div2.appendChild(i1);
        div.appendChild(div2);
        divContainer.removeChild(option);
      });
    } else {
      li.style.padding = "0.5rem 0";
      li.innerText = e;
      navUl.appendChild(li);
    }
  });

  navItems.appendChild(navUl);

  const skillBar = document.querySelectorAll("ul");

  let currentScrollPos = window.scrollY;
  console.log("currentScrollPos in small screen", currentScrollPos);
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
    removeBgEffect();
    hamMenu=false
  });

  skillBar[1].children[1].addEventListener("click", () => {
    navItems.removeChild(navItems.querySelector("ul"));
    xmark.style.display = "none";
    bar.style.display = "block";
    window.scrollTo({
      top: 650,
      behavior: "smooth", // optional: for smooth scrolling
    });
    removeBgEffect();
    hamMenu=false
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
    removeBgEffect();
    hamMenu=false
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
    removeBgEffect();
    hamMenu=false
  });
};

hamburgerMenu.addEventListener("click", (e) => {
  if (navItems.innerHTML.length > 0) {
    hamMenu = false;
    removeHamburgerMenu();
  } else {
    showHamburgerMenu();
    hamMenu = true;
  }
});

document.body.addEventListener("click", (e) => {
  console.log("hammenu in body clicking", hamMenu);
  if (hamMenu == true) {
    removeHamburgerMenu();
    hamMenu = false;
  }
});

const navbar = document.getElementsByClassName("navbar");
navbar[0].addEventListener("click", (e) => {
  e.stopPropagation();
});

const skillBar = document.querySelectorAll("ul");

skillBar[0].children[0].addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // optional: for smooth scrolling
  });
  removeBgEffect()
  hamMenu=false
});

skillBar[0].children[1].addEventListener("click", () => {
  window.scrollTo({
    top: 650,
    behavior: "smooth", // optional: for smooth scrolling
  });
  removeBgEffect()
  hamMenu=false
});

skillBar[0].children[2].addEventListener("click", () => {
  window.scrollTo({
    top: 1350,
    behavior: "smooth", // optional: for smooth scrolling
  });
  removeBgEffect()
  hamMenu=false
});

skillBar[0].children[3].addEventListener("click", () => {
  window.scrollTo({
    top: 2400,
    behavior: "smooth", // optional: for smooth scrolling
  });
  removeBgEffect()
  hamMenu=false
});

window.addEventListener("scroll", () => {
  console.log("hammenu is in scroll", hamMenu);
  let currentScrollPos = window.scrollY;
  if (currentScrollPos >= 0 && currentScrollPos < 650) {
    skillBar[0].children[0].style.color = "blue";
    skillBar[0].children[0].style.borderBottom = "2px solid blue";

    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[1].style.borderBottom = "0";

    skillBar[0].children[2].style.color = "black";
    skillBar[0].children[2].style.borderBottom = "0";

    skillBar[0].children[3].style.color = "black";
    skillBar[0].children[3].style.borderBottom = "0";
  } else if (currentScrollPos >= 650 && currentScrollPos < 1350) {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.borderBottom = "0";

    skillBar[0].children[1].style.color = "blue";
    skillBar[0].children[1].style.borderBottom = "2px solid blue";

    skillBar[0].children[2].style.color = "black";
    skillBar[0].children[2].style.borderBottom = "0";

    skillBar[0].children[3].style.color = "black";
    skillBar[0].children[3].style.borderBottom = "0";
  } else if (currentScrollPos >= 1350 && currentScrollPos < 2400) {
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.borderBottom = "0";

    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[1].style.borderBottom = "0";

    skillBar[0].children[2].style.color = "blue";
    skillBar[0].children[2].style.borderBottom = "2px solid blue";

    skillBar[0].children[3].style.color = "black";
    skillBar[0].children[3].style.borderBottom = "0";
  } else if (currentScrollPos >= 2400) {
    console.log("hello");
    skillBar[0].children[0].style.color = "black";
    skillBar[0].children[0].style.borderBottom = "0";

    skillBar[0].children[1].style.color = "black";
    skillBar[0].children[1].style.borderBottom = "0";

    skillBar[0].children[2].style.color = "black";
    skillBar[0].children[2].style.borderBottom = "0";

    skillBar[0].children[3].style.color = "blue";
    skillBar[0].children[3].style.borderBottom = "2px solid blue";
  }

  console.log(
    "currentScrollPos in big screen",
    currentScrollPos,
    skillBar[0].children[1]
  );

  console.log("(navItems.querySelector66", navItems.querySelector("ul"));
  // if (navItems.querySelector("ul")!=null) {
  //   navItems.removeChild(navItems.querySelector("ul"));
  //   xmark.style.display = "none";
  //   bar.style.display = "block";
  // }
});

const codingProfile = document.getElementsByClassName("coding-profile");
const arrowup = document.getElementsByClassName("arrowup");
console.log("arrowup", arrowup);
const arrowdown = document.getElementsByClassName("arrowdown");

arrowup[0].addEventListener("click", () => {
  console.log("clicked");
  codingProfile[0].style.display = "block";
  arrowdown[0].style.display = "block";
  arrowup[0].style.display = "none";
});

arrowdown[0].addEventListener("click", () => {
  codingProfile[0].style.display = "none";
  arrowdown[0].style.display = "none";
  arrowup[0].style.display = "block";
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
