function openHamburgerMenu() {
  let navMenu = document.getElementById('mobile-nav-menu')
  let navMenuInner = document.getElementById('mobile-nav-menu-inner');
  let menuIcon = document.getElementById('menu-icon');
  scrollToTop();
  disableScroll();
  navMenu.style.display = 'block';
  setTimeout( function() {
    let navMenuInner = document.getElementById('mobile-nav-menu-inner');
    let menuIcon = document.getElementById('menu-icon');
    navMenuInner.style.left = '0';
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  });
}

function cleanUpHamburgerMenu() {
  let navMenuInner = document.getElementById('mobile-nav-menu-inner');
  let navMenu = document.getElementById('mobile-nav-menu')
  navMenu.style.display = 'none';
  navMenuInner.removeEventListener("webkitTransitionEnd", cleanUpHamburgerMenu);
  navMenuInner.removeEventListener("transitionend", cleanUpHamburgerMenu);
  navMenuInner.removeEventListener("msTransitionEnd", cleanUpHamburgerMenu);
  navMenuInner.removeEventListener("oTransitionEnd", cleanUpHamburgerMenu);
}

function closeHamburgerMenu() {
  let navMenuInner = document.getElementById('mobile-nav-menu-inner');
  let menuIcon = document.getElementById('menu-icon');
  enableScroll();
  menuIcon.classList.remove('fa-times');
  menuIcon.classList.add('fa-bars');
  navMenuInner.addEventListener("webkitTransitionEnd", cleanUpHamburgerMenu);
  navMenuInner.addEventListener("transitionend", cleanUpHamburgerMenu);
  navMenuInner.addEventListener("msTransitionEnd", cleanUpHamburgerMenu);
  navMenuInner.addEventListener("oTransitionEnd", cleanUpHamburgerMenu);
  navMenuInner.style.left = '100%';
}

function toggleHamburgerMenu() {
  let navMenuInner = document.getElementById('mobile-nav-menu-inner');
  if (navMenuInner.style.left == '0px') {
    closeHamburgerMenu();
  } else {
    openHamburgerMenu();
  }
  let menu = document.getElementById('hamburger-menu');
  menu.classList.toggle('clicked');
}

function updateNavMenuStyle() {
  let desktopNavMenu = document.querySelector('.topnav');
  let desktopButtons = document.querySelector('.nav-buttons');
  // Check for overflow
  if (desktopNavMenu.clientWidth < desktopNavMenu.scrollWidth || desktopNavMenu.clientHeight < desktopNavMenu.scrollHeight) {
    menu.style.display = 'block';
    desktopButtons.style.visibility = 'hidden';
  } else {
    menu.style.display = 'none';
    let mobileNavMenu = document.getElementById('mobile-nav-menu');
    if (mobileNavMenu.style.display == 'block') {
      closeHamburgerMenu();
      if (menu.classList.contains('clicked')) {
        menu.classList.remove('clicked');
      }
    }
    desktopButtons.style.visibility = 'visible';
  }
}

function scrollToTop() {
  window.scrollTo(0,0);
}

function disableScroll() {
  window.addEventListener('scroll', scrollToTop);
}

function enableScroll() {
  window.removeEventListener('scroll', scrollToTop);
}

let menu = document.getElementById('hamburger-menu');
menu.addEventListener('click', toggleHamburgerMenu);
window.addEventListener('resize', updateNavMenuStyle);
updateNavMenuStyle();
setTimeout(updateNavMenuStyle, 200); // hacky fix for ios. 
