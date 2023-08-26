import content from "./menu/content.js";
import contentHTML from "./menu/html.js";
import contentCSS from "./menu/css.js";
import contentJS from "./menu/javascript.js";
import contentJSON from "./menu/seo.js";
import contentSitemap from "./menu/sitemap.js";
import contentHTAccess from "./menu/htaccess.js";
import contentRobots from "./menu/robots.js";

// ------------------------------
// build html for the menu burger
// ------------------------------

const navBurger =
  '<div id="mainMenuBurger"><div class="line"></div><div class="line"></div><div class="line"></div></div>';

// ------------------------------
// build html for the menu items
// content imported content
// ------------------------------

let navMenuItems = "";

for (const item in content) {
  var title = `${content[item].title}`;
  var link = `${content[item].link}`;
  navMenuItems += '<a href="' + link + '"><h2>' + title + "</h2></a>";
}

// ------------------------------
// insert HTML built for Main Menu
// ------------------------------

document.getElementById("navMainRow").innerHTML = navBurger + navMenuItems;

// ----------------------------------------------------------

// ------------------------------
// set attribute for dropdown menu
// ------------------------------
document.getElementById("dropDownMenu").setAttribute("style", "display: none;");

// ------------------------------
// insert HTML id for dropdown menu
// if conditions to use correct dropdown 
// ------------------------------

let dropDownItems = "";
let ddcontent = "";
var currentPath = window.location.pathname;
var folderName = currentPath.split("/")[1];


if (folderName === "html") {
  ddcontent = contentHTML;
} else if (folderName === "css") {
  ddcontent = contentCSS;
} else if (folderName === "javascript") {
  ddcontent = contentJS;
} else if (folderName === "seo") {
  ddcontent = contentJSON;
} else if (folderName === "htaccess") {
  ddcontent = contentHTAccess;
} else if (folderName === "sitemap") {
  ddcontent = contentSitemap;
} else if (folderName === "robots") {
  ddcontent = contentRobots;
} else {
  ddcontent = content;
}

for (const item in ddcontent) {
  var title = `${ddcontent[item].title}`;
  var link = `${ddcontent[item].link}`;
  dropDownItems += '<a href="' + link + '"><h2>' + title + "</h2></a>";
}

document.getElementById("dropDownMenu").innerHTML = dropDownItems;

// -----------------------------------------------------
// This controls the dropdown menubar
// event listener waiting for a click
// on the burger
// -----------------------------------------------------

var dropdownContent = document.getElementById("dropDownMenu");
var dropdownButton = document.getElementById("mainMenuBurger");

function showDropdown() {
  dropdownContent.style.display = "block";
}

function hideDropdown() {
  dropdownContent.style.display = "none";
}

dropdownButton.addEventListener("click", function (event) {
  if (dropdownContent.style.display === "none") {
    showDropdown();
  } else {
    hideDropdown();
  }
});

window.addEventListener("click", function (event) {
  if (event.target !== dropdownContent && event.target !== dropdownButton) {
    hideDropdown();
  }
});
