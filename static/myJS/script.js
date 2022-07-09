//location.reload()
// const alldiv = document.querySelectorAll('div');
// //alert(alldiv.length);
// for (i = alldiv.length-10; i<alldiv.length;i++){ 
// alldiv[i].classList.add("invisible")};
// console.log(alldiv[17])
// for (i = 17; i < alldiv.length; i++) {  
//   alldiv[i].addEventListener('mouseover', function () {
//   alldiv[i].classList.replace('invisible','visible')
//  })
//   };
// document.querySelectorAll('p').classList.add("invisible")
// document.querySelectorAll('h3').classList.add("invisible")
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function bgChange() {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + .2 + ')';
  document.body.style.backgroundColor = rndCol;
};
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

//  document.querySelector('html').addEventListener('click', function() {
//  alert('Aïe, arrêtez de cliquer !!');
//      });

//autre syntaxe possible
let myHTML = document.querySelector('h3');
if (myHTML) {
  myHTML.addEventListener('click', function () { alert('prout premier h3 tag') })
};

let myH1 = document.querySelector('h1');
if (myH1) {
  myH1.addEventListener('click', function () { alert('prout premier h1 tag') })
};

// exemple encore à tester
let myImage = document.getElementById('main_image')
if (myImage) {
  myImage.addEventListener('mouseover', function () {
    if (myImage) {
      let mySrc = myImage.getAttribute('src');
      console.log(mySrc)
      if (mySrc === '../static/img/HSV.jpg') {
        myImage.setAttribute('src', '../static/img/HSV-matrix.jpg');
      } else {        
        myImage.setAttribute('src', '../static/img/HSV.jpg');
      }
    }
  })
};



let balise = true;
function ChangerCouleur(Identifiant) {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + 1 + ')'
  document.getElementById(Identifiant).style.color = rndCol;
  balise = true;
};

myTitle = document.getElementById("mytitle1")
myTitle.addEventListener('mouseover', function () {
  if (balise === true) {
    ChangerCouleur('mytitle1');

  }
});

myH1.addEventListener('clik', function () {
  if (balise === true) {
    ChangerCouleur(Identifiant);
    balise = false
    console.log(balise);;
  }

})

if (document.getElementById('no_auth')) {
  console.log(document.querySelector("#divbtt"));
} else {
  console.log(document.getElementById("footer"));
};



var divbtt = document.getElementById("divbtt"),
  btnbtt = document.getElementById("btnbtt"),
  body = document.body,
  scrollMax = document.scrollingElement.scrollTopMax,
  docElem = document.documentElement,
  offset = 100,
  isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  scrollPos, docHeight;
console.log(effect);
docHeight = Math.max(body.scrollHeight, body.offsetHeight,
  docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);


if (docHeight != 'undefined') {
  offset = docHeight * 0.95;
}
if (divbtt) {// le if c'est pour éviter des erreurs "uncaught" dans la console quand l'utilisateur n'est pas connecté et que
  //le bouton n'est pas disponible pour cette fonction.
  window.addEventListener("scroll", function (event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
    divbtt.className = (scrollPos > scrollMax * 0.95) ? "visible" : "invisible"
  });
}

if (btnbtt) {//cf.com plus haut, idem
  var effect = btnbtt.getAttribute('aria-pressed');
  btnbtt.addEventListener("click", function (event) {
    bgChange();
    event.preventDefault();
    if (isFirefox) {
      docElem.scrollTop = 0;
    }
    else { body.scrollTop = 0; }
    btnbtt.setAttribute('class', 'btn position-fixed bottom-0 end-50');
    console.log(effect);
  });
};
console.log(effect);
document.querySelector('p').click();

//effet sur le titre de la page d'accueil "Bienvenue sur mon" qui apparaît lettre par lettre
const text = document.getElementById("mytitle1");
console.log(text);
const strText = text.textContent;
const splitText = strText.split("");
console.log(splitText)
text.textContent = "";
for (i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>"
}
const span_text = text.querySelectorAll('span')
for (i = 0; i < span_text.length; i++) {  
  const span = span_text[i]
  span.classList.add('op-0')

}
//creation d'un element bootstrap badge pour insérer le txt "BLOG TECH" à la suite de l'animation "Bienvenue...""
let badge_container = document.querySelector('#badge')
badge_container.classList.add('container', 'justify-content-center')
let badge = document.createElement('span');
badge.textContent = "BLOG-TECH";
badge.classList.add('badge','bg-info',"op-0")
text.appendChild(badge_container)
badge_container.appendChild(badge)
console.log(badge_container)

//création de deux boites à mettre cote a cote de l'image pour pouvoir régler la largeur du fond...
// let block1 = document.create elem

let char = 0;
var rand = Math.random()*100;
if (rand<80){rand = 100};
console.log(rand);
//for the animation of my Title I call a setInterval function that repeats the function onTick each 300ms or so
let timer = setInterval(onTick, rand);
//defining timelineMax objects
const tl = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax();
//selecting my elements to animate
const main_container = document.querySelector("#main_container");
const img_container = document.querySelector('#container_main_image');
const dflex = document.querySelector('#d-flex')
const dflexAll = document.querySelectorAll('.d-flex')
console.log(dflexAll)
// Pour l'image HSV on veut lui assigner une largeur égale à la taille finale de l'animation, autrement
// le container auquel elle est liée au départ aura une width de 100% et au moment de l'apparition de l'image
// il sera réduit à 50% (comme le veut l'animation et les dimensions d'affichage requise pour cette image).
// j'assigne donc ici à l'image une classe bootstrap w-50 qui veut dire width = 50% 
// et je la supprime plus loin grâce la fonction delay_x() définie plus bas.
const HSV = document.querySelector('#main_image');
HSV.classList.add('invisible');
// selection de la légende de la photo
const myName = document.querySelector('#name');


//Now i want a background  to set in place
tl.fromTo(main_container,1,{opacity:0},{opacity:1}).fromTo(main_container, 1, { height: "0%" }, { height: "100%", ease: Bounce },"-=1")
.fromTo(main_container, 1, { width: "0%" }, { width: "100%", ease: Bounce },"-=1");

//definition of onTick which is the function of setInterval above which is called repeatedly 
//until every span of my text "Bienvenue sur mon" has appeared
// ATTENTION: le coeur de la fonction est dans le else, chaque span est affiché
function onTick() {console.log("onTick");rand = Math.random()*300;
  if (char === splitText.length) {setTimeout(function(){badge.classList.remove("op-0");},300);
  tl.fromTo(badge,3,{width:"0%"},{width:"30%"}).fromTo(badge, 3,{opacity:0},{opacity:1},"-=3")
// here i want to delay a bit the animation on the img_container
//setTimeout(function(){
  delay_x(dflex,"op-0",2)
  tl.fromTo(img_container,1,{opacity:0},{opacity:1})
  .fromTo(img_container, 1, { height: "0%" }, { height: "100%", ease: Bounce },"-=1")
  .fromTo(img_container, 1, { width: "0%" }, { width: "50%", ease: Bounce },"-=1");
  delay_x(HSV,"invisible",1)
  delay_x(img_container,"op-0",1);  
//},300);
// animation de la légende de l'image
  delay_x(myName,"op-0",1);
  tl.fromTo(myName, 4, {opacity:0},{opacity:1});    
    complete();
    return;
  } else {
  const span = text.querySelectorAll('span')[char];
  setTimeout(function(){span.classList.replace('op-0', 'op-100')},100);
  char++;}  
};


// cette fonction supprime une classe sur l'élément choisi avec un délai particulier pour l
function delay_x(element_x,class_Name,dtime)
{
  setTimeout(function(){element_x.classList.remove(class_Name)},dtime);
}

function complete() 
{
  clearInterval(timer);
  timer = null
};

const section2 = document.getElementById("section2");
console.log(section2);
console.log(section2.children);
function mkinvisible() 
{
  for(i=0;i<section2.children.length;i++)
  {
    section2.children[i].classList.add('invisible');
  }
};
mkinvisible()
console.log(section2.children)

window.addEventListener('wheel',mkvisible);
function mkvisible(event) 
{ const section2 = document.getElementById("section2");
  for(i=0;i<section2.children.length;i++)
  {const child = section2.children[i]; 
  delay_x(child,'invisible',99);
  }
};