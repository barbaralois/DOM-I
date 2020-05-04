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

// TASKS ONE AND TWO
// other two images
let headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src']);

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// nav
let theNav = document.querySelector('nav');

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
let title = document.querySelector('.cta-text h1');
title.textContent = siteContent.cta.h1;

let getStarted = title.nextElementSibling;
getStarted.textContent = siteContent.cta.button;

// main content
let featureHeader = document.querySelector('.top-content div:nth-child(1) h4');
featureHeader.textContent = siteContent['main-content']['features-h4'];

let featureContent = featureHeader.nextElementSibling;
featureContent.textContent = siteContent['main-content']['features-content'];

let aboutHeader = document.querySelector('.top-content div:nth-child(2) h4');
aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutContent = aboutHeader.nextElementSibling;
aboutContent.textContent = siteContent['main-content']['about-content'];

let servicesHeader = document.querySelector(
  '.bottom-content div:nth-child(1) h4'
);
servicesHeader.textContent = siteContent['main-content']['services-h4'];

let servicesContent = servicesHeader.nextElementSibling;
servicesContent.textContent = siteContent['main-content']['services-content'];

let productHeader = document.querySelector(
  '.bottom-content div:nth-child(2) h4'
);
productHeader.textContent = siteContent['main-content']['product-h4'];

let productContent = productHeader.nextElementSibling;
productContent.textContent = siteContent['main-content']['product-content'];

let visionHeader = document.querySelector(
  '.bottom-content div:nth-child(3) h4'
);
visionHeader.textContent = siteContent['main-content']['vision-h4'];

let visionContent = visionHeader.nextElementSibling;
visionContent.textContent = siteContent['main-content']['vision-content'];

// contact
let contactSection = document.querySelector('.contact');

let contactHeader = contactSection.firstElementChild;
contactHeader.textContent = siteContent.contact['contact-h4'];

let contactAdd = contactHeader.nextElementSibling;
contactAdd.textContent = siteContent.contact.address;

let contactPhone = contactAdd.nextElementSibling;
contactPhone.textContent = siteContent.contact.phone;

let contactEmail = contactPhone.nextElementSibling;
contactEmail.textContent = siteContent.contact.email;

// footer
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;

// TASK THREE
// adding elements to Nav
let careers = document.createElement('a');
careers.setAttribute('href', '#');
careers.textContent = 'Careers';

let home = document.createElement('a');
home.setAttribute('href', '#');
home.textContent = 'Home';

theNav.appendChild(careers);
theNav.prepend(home);

// changing nav color to green
let navElements = document.querySelectorAll('a');

navElements.forEach((element) => (element.style.color = 'green'));

// stretch - changing other elements on the page
navElements.forEach(
  (element) => (
    (element.style.fontWeight = 'bold'),
    (element.style.textDecoration = 'underline')
  )
);

let paragraphs = document.querySelectorAll('.text-content');
paragraphs.forEach(
  (paragraph) => (paragraph.style.border = '2px dashed green')
);

contactSection.style.display = 'flex';
contactSection.style.flexDirection = 'column';
contactSection.style.alignItems = 'center';
