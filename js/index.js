const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//Task 1
document.getElementById('cta-img').setAttribute('src', siteContent.cta['img-src']);
document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];

//Task 2
//declare nav bar variable
const navBar = document.querySelector('nav');
console.log('nav');
//grab all nav links
const navLinks = document.querySelectorAll('nav a');
console.log(navLinks);

//first nav link
const navLinkOne = navLinks[0];
console.log(navLinkOne);

navLinkOne.textContent = siteContent['nav']['nav-item-1'];


//second nav link
const navLinkTwo = navLinks[1];
console.log(navLinkTwo);


navLinkTwo.textContent = siteContent['nav']['nav-item-2'];


//third nav link
const navLinkThree = navLinks[2];
console.log(navLinkThree);

navLinkThree.textContent = siteContent['nav']['nav-item-3'];

// forth nav link

const navLinkFour = navLinks[3];
console.log(navLinkFour);

navLinkFour.textContent = siteContent['nav']['nav-item-4'];

// fifth nav link
const navLinkFive = navLinks[4];
console.log(navLinkFive);

navLinkFive.textContent = siteContent['nav']['nav-item-5'];

//sixth nav link

const navLinkSix = navLinks[5];
console.log(navLinkSix);

navLinkSix.textContent = siteContent['nav']['nav-item-6'];

// CTA 
const callAct = document.getElementsByClassName('cta');
console.log('callAct');

// h1
const h1 = document.querySelector('h1');
console.log(h1);

h1.innerHTML = `DOM<br> Is<br> Awesome`;

//button
const button = document.querySelector('button');
console.log(button);

button.textContent = siteContent['cta']['button'];

//main content 
const mainContent = document.querySelector('main-content');
console.log(mainContent);

//allh4 items

const allH4 = document.querySelectorAll('h4');
console.log(allH4);

//features allH4

const features = allH4[0];
console.log(features);

features.textContent = siteContent['main-content']['features-h4'];

//about allH4

const about = allH4[1];
console.log(about);

about.textContent = siteContent['main-content']['about-h4'];

// services allH4

const services = allH4[2];
console.log(services);

services.textContent = siteContent['main-content']['services-h4'];

//product allH4

const product = allH4[3];
console.log(product);

product.textContent = siteContent['main-content']['product-h4'];

//vision allH4

const vision = allH4[4];
console.log(vision);

vision.textContent = siteContent['main-content']['vision-h4'];


//contact allH4

const contact = document.querySelector('.contact');
console.log(contact);
contact.textContent = siteContent.contact['.contact'];