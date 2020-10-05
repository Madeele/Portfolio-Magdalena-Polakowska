"use strict";

// page change funcionality
function pageChange() {
  let page = "home_page";
  if (location.hash) {
    page = location.hash.slice(1);
  }

  window.scrollTo(0,0);

  showPage(page);
}
  
pageChange();

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");

  for (let page of pages) {
    page.style.display = "none";
  }
}
  
// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "flex";
  setActiveTab(pageId);
  closeNav();
}

function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");

  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  }
}