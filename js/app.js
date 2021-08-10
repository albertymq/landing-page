/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navbarlist = document.getElementById("navbar__list");
const heading = document.querySelector("h1");
const backtotopbutton = document.querySelector(".backtotop");

/**
 * End Global Variables

 * Begin Main Functions
 *
 */

// build the nav
const buildthenav = function () {
  sections.forEach((section) => {
    let secid = section.id;
    //create new list element
    const newlist = document.createElement("li");
    newlist.classList.add("menu__link");
    //create new link element in the list element
    const linkinlist = document.createElement("a");
    linkinlist.textContent = secid;
    //get the href attribute
    let att = document.createAttribute("href");
    att.value = `#${secid}`;
    linkinlist.setAttributeNode(att);
    //add scrollintoview to the link
    linkinlist.addEventListener("click",function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      })
    })
    //add the link to the list item
    newlist.appendChild(linkinlist);
    //add the list to the nacbar element
    navbarlist.appendChild(newlist);
  });
};

buildthenav();

// Add class 'active' to section when near top of viewport
// get section top relative position
const getposition = function (section) {
  return section.getBoundingClientRect().top;
};

const activation = function () {
  //use section1 as default relative position
  let top = Math.abs(getposition(section1));
  let activesection = section1;
  sections.forEach((section) => {
    //remove active class first
    section.classList.remove("active");
    //get the section whihc has the smallest relative top position abs value
    let newposition = Math.abs(getposition(section));
    if (newposition < top) {
      activesection = section;
      top = newposition;
    }
  });
  //add active for the section shosen
  activesection.classList.add("active");
};

activation();

// back to top Button
// get header bottom position
const getbottom = function (element) {
  return element.getBoundingClientRect().bottom;
};

// scrolltoTop function
const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// control the button display according to the viewport position
const displayBackToTopButton = function () {
  let headerposition = getbottom(heading);
  if (headerposition < 0) {
    backtotopbutton.setAttribute("style", "display: flex;");
  } else {
    backtotopbutton.setAttribute("style", "display: none;");
  }
};

backtotopbutton.addEventListener("click", heading.scrollIntoView());

window.addEventListener("scroll", function () {
  activation();
  displayBackToTopButton();
});

