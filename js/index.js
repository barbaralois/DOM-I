const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// other two images
let headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src']);

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// nav
let theNav =
  document.body.firstElementChild.firstElementChild.firstElementChild;

let navOne = theNav.firstElementChild;
navOne.textContent = siteContent.nav['nav-item-1'];

let navTwo = navOne.nextElementSibling;
navTwo.textContent = siteContent.nav['nav-item-2'];

let navThree = navTwo.nextElementSibling;
navThree.textContent = siteContent.nav['nav-item-3'];

let navFour = navThree.nextElementSibling;
navFour.textContent = siteContent.nav['nav-item-4'];

let navFive = navFour.nextElementSibling;
navFive.textContent = siteContent.nav['nav-item-5'];

let navSix = navFive.nextElementSibling;
navSix.textContent = siteContent.nav['nav-item-6'];

// cta
let title =
  document.body.firstElementChild.firstElementChild.nextElementSibling
    .firstElementChild.firstElementChild;
title.textContent = siteContent.cta.h1;

let getStarted = title.nextElementSibling;
getStarted.textContent = siteContent.cta.button;

//variables for targeting main content
let mainContent =
  document.body.firstElementChild.firstElementChild.nextElementSibling
    .nextElementSibling;

let topContent = mainContent.firstElementChild;

let middleContent = topContent.nextElementSibling;

let bottomContent = middleContent.nextElementSibling;

// main content
let featureHeader = topContent.firstElementChild.firstElementChild;
featureHeader.textContent = siteContent['main-content']['features-h4'];

let featureContent = featureHeader.nextElementSibling;
featureContent.textContent = siteContent['main-content']['features-content'];

let aboutHeader =
  topContent.firstElementChild.nextElementSibling.firstElementChild;
aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutContent = aboutHeader.nextElementSibling;
aboutContent.textContent = siteContent['main-content']['about-content'];

let servicesHeader = bottomContent.firstElementChild.firstElementChild;
servicesHeader.textContent = siteContent['main-content']['services-h4'];

let servicesContent = servicesHeader.nextElementSibling;
servicesContent.textContent = siteContent['main-content']['services-content'];

let productHeader =
  bottomContent.firstElementChild.nextElementSibling.firstElementChild;
productHeader.textContent = siteContent['main-content']['product-h4'];

let productContent = productHeader.nextElementSibling;
productContent.textContent = siteContent['main-content']['product-content'];

let visionHeader =
  bottomContent.firstElementChild.nextElementSibling.nextElementSibling
    .firstElementChild;
visionHeader.textContent = siteContent['main-content']['vision-h4'];

let visionContent = visionHeader.nextElementSibling;
visionContent.textContent = siteContent['main-content']['vision-content'];

// contact
let contactSection = mainContent.nextElementSibling;

let contactHeader = contactSection.firstElementChild;
contactHeader.textContent = siteContent.contact['contact-h4'];

let contactAdd = contactHeader.nextElementSibling;
contactAdd.textContent = siteContent.contact.address;

let contactPhone = contactAdd.nextElementSibling;
contactPhone.textContent = siteContent.contact.phone;

let contactEmail = contactPhone.nextElementSibling;
contactEmail.textContent = siteContent.contact.email;

// footer
let copyright = contactSection.nextElementSibling.firstElementChild;
copyright.textContent = siteContent.footer.copyright;
