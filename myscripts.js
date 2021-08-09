// Mobile nav slide
const navSlide = ()=>{
    const burger = document.querySelector("#burger");
    const nav = document.querySelector("#nav-list");
    const navLinks = document.querySelectorAll("#nav-list li");
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active'); 
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ${index/4 + 0.5}s forwards`;
            }
        });
        burger.classList.toggle('x');
    });
};
navSlide();

// Nav show on mouseover 
let hiddenNav = document.getElementById("invisible-nav");
hiddenNav.addEventListener("mouseover", ()=>{
    document.getElementById("navbar").style.top = "0";
});
document.getElementById("navbar").addEventListener("mouseover", ()=>{
    document.getElementById("navbar").style.top = "0";
});
hiddenNav.addEventListener("mouseout", ()=>{
    document.getElementById("navbar").style.top = "-60px";
});

//Hiding navbar
var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', ()=>{
    if(window.innerWidth > 800){
        if (prevScrollpos > window.pageYOffset) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-60px";
          }
          prevScrollpos = window.pageYOffset;
    }
});

// Skewed section 
let skewed = document.querySelector("#skewed");

window.addEventListener('scroll', function(){
    let value = -7 + window.scrollY/60;
    if (window.scrollY < 420) {
        skewed.style.transform = "skewY("+ value +"deg)";
    }
})

// Projects array

let projectsArray = [
    {
        "img": "markdown.png",
        "title": "Markdown Previewer",
        "tags": "#React #CSS #design",
        "href": "https://sylwik.github.io/Markdown-Previewer/"
    },
    {
        "img": "heat.png",
        "title": "Heat Map",
        "tags": "#HTML #D3 #design",
        "href": "https://sylwik.github.io/Heat-Map/"
    },
    {
        "img": "calculator.png",
        "title": "Calculator",
        "tags": "#React #JavaScript #CSS #design",
        "href": "https://sylwik.github.io/calculator/"
    },
    {
        "img": "szkolenia.jpg",
        "title": "Szkolenia NaturaTour",
        "tags": "#WordPress #CSS #front-end #commercial",
        "href": "http://szkolenia.naturatour.pl/"
    },
    {
        "img": "luxkon.jpg",
        "title": "Luxkon24",
        "tags": "#CSS #JavaScript #WordPress #front-end #commercial",
        "href": "https://www.dev.luxkon24.pl/"
    },
    {
        "img": "choropleth.png",
        "title": "Choropleth Map",
        "tags": "#HTML #D3 #design",
        "href": "https://sylwik.github.io/Choropleth-Map/"
    },
    {
        "img": "page5.jpg",
        "title": "Random quotes machine",
        "tags": "#React #CSS #design",
        "href": "https://sylwik.github.io/Random-quote-machine/"
    }
];
for (let i = 0; i < projectsArray.length; i++){
    let projectBox = document.createElement('a');
    document.getElementById("projects-container").appendChild(projectBox);
    projectBox.className = "project-box";
    projectBox.href = projectsArray[i].href;
    projectBox.target = '_blank';
}
let projectBox = document.getElementsByClassName("project-box");
for(let i = 0; i < projectBox.length; i++){
    let img = document.createElement('img');
    img.src = projectsArray[i].img;
    img.classList.add("page-image");
    projectBox[i].appendChild(img);
    let linkIcon = document.createElement('img');
    linkIcon.src = "external-link.png";
    linkIcon.classList.add("link-image");
    projectBox[i].appendChild(linkIcon);
    let projectText = document.createElement('div');
    projectText.className = "project-text";
    projectBox[i].appendChild(projectText);
};
let projectText = document.getElementsByClassName("project-text");
for (let i = 0; i < projectText.length; i++){
    let header = document.createElement('h2');
    header.innerText = projectsArray[i].title;
    projectText[i].appendChild(header);
    let divider = document.createElement('div');
    divider.className = "divider";
    projectText[i].appendChild(divider);
    let tags = document.createElement('p');
    tags.innerText = projectsArray[i].tags;
    projectText[i].appendChild(tags);
};

// Skills array

let skillsArray = [
    {
        subject: "CSS",
        image: "css.png"
    },
    {
        subject: "HTML",
        image: "html.png"
    },
    {
        subject: "SCSS/SASS",
        image: "sass.png"
    },
    {
        subject: "JavaScript",
        image: "js.png"
    },
    {
        subject: "WordPress",
        image: "wordpress.png"
    },
    {
        subject: "React",
        image: "react.png"
    },
    {
        subject: "Gimp",
        image: "gimp.png"
    },
    {
        subject: "D3",
        image: "d3.png"
    }
];
for(d of skillsArray){
    let skill = document.createElement('div');
    document.getElementById("skills").appendChild(skill);
    skill.className = "skill";
};
let skillClass = document.getElementsByClassName('skill');
for (let i = 0; i < skillClass.length; i++) {
    let img = document.createElement("img");
    img.src = skillsArray[i].image;
    skillClass[i].appendChild(img);
};

// Skill overlay
let skill = document.getElementsByClassName("skill");
	for(let i = 0; i < skill.length; i++) {
			let redBox = document.createElement("div"); 
			skill[i].appendChild(redBox);
			redBox.classList.add("red-box");
			let desc = document.createElement("p"); 
			desc.innerText = skillsArray[i].subject;
			redBox.appendChild(desc);
	}

// Clock
const hrHand = document.getElementById("hr-hand");
const minHand = document.getElementById("min-hand");
let numArr = document.getElementsByClassName("num-a");
let lastPosition = 11;
let newPosition;
let dif;
let lastHrAngle = 0;
let newHrAngle;
let minAngle = 0;
for(let i = 0; i < 12; i++){
    numArr[i].onmouseover = function(){
        newPosition = i;
        dif = newPosition - lastPosition;
        if(dif >= 7){
            newHrAngle = lastHrAngle - 30*(12-dif);
            hrHand.style.transitionDuration = ""+(Math.abs((newHrAngle - lastHrAngle)/50))+"s";
            hrHand.style.transform = 'rotate('+newHrAngle+'deg)';
        }
        else if(dif <= -6){
            newHrAngle = lastHrAngle + 30*(12+dif);
            hrHand.style.transitionDuration = ""+(Math.abs((newHrAngle - lastHrAngle)/50))+"s";
            hrHand.style.transform = 'rotate('+newHrAngle+'deg)';
        }
        else if(lastPosition != newPosition){
            newHrAngle = lastHrAngle + 30*dif;
            hrHand.style.transitionDuration = ""+(Math.abs((newHrAngle - lastHrAngle)/50))+"s";
            hrHand.style.transform = 'rotate('+newHrAngle+'deg)';
        }
        if (lastPosition != newPosition){
            minAngle = minAngle + 360*(newHrAngle - lastHrAngle)/30;
            minHand.style.transitionDuration = ""+(Math.abs((newHrAngle - lastHrAngle)/50))+"s";
            minHand.style.transform = 'rotate('+minAngle+'deg)';
        }
        lastPosition = i;
        lastHrAngle = newHrAngle;
        };
};

const secHand = document.getElementById("sec-hand");
let m = 6;
function secRotate(){
    secHand.style.transform = 'rotate('+m+'deg)';
    m += 6;
};
setInterval(secRotate, 1000);


