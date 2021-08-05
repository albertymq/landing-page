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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildnavbar = function () {
  let navitems = "";
  sections.forEach((section) => {
    const sectionid = section.id;
    const sectionname = section.dataset.nav;
    navitems += `<li class = "menu__link"><a href = "#${sectionid}">${sectionname}</a></li>`;
  });
  navbarlist.innerHTML = navitems;
};

buildnavbar();

// Add class 'active' to section when near top of viewport
// get section top relative position
const getposition = function(section){
  return section.getBoundingClientRect().top;
}

//add active to section
const addactive = function(section){
  section.classList.add('active');
}

//remove active from section
const removeactive = function(section){
  section.classList.remove('active');
}


const activation = function(){
  //use section1 as default relative position
  let top = Math.abs(getposition(section1));
  let activesection = section1;
  sections.forEach((section)=>{
    //remove active class first
    removeactive(section);
    //get the section whihc has the smallest relative top position abs value
    let newposition = Math.abs(getposition(section));
    if(newposition<top){
      activesection = section;
      top = newposition;
    }
  })
  //add active for the section shosen
  addactive(activesection);
}

activation();

window.addEventListener("scroll",activation);

// Scroll to anchor ID using scrollTO event

const scrollto = function(){
  const sectionlinks = document.querySelectorAll('a');
  sectionlinks.forEach((sectionlink)=>{
    sectionlink.addEventListener('click', function(e){
      e.preventDefault;
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})
    })
  })
}

scrollto();


