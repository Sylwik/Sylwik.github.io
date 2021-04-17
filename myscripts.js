// nav slide

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
                link.style.animation = `navLinkFade 0.5s ${index/4 + 0.5}s`;
                link.style.animationFillMode = "forwards";
            }
        });
        burger.classList.toggle('x');
    });
};
navSlide();

    //Hiding navbar

var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', ()=>{
    if(window.innerWidth > 800){
        if (prevScrollpos > window.pageYOffset) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-50px";
          }
          prevScrollpos = window.pageYOffset;
    }
});

// triangles moving while scrolling

const triangles = document.getElementById("triangles");
window.onscroll = function (){
    triangles.style.bottom = window.pageYOffset + "px";
    triangles.style.opacity = (100 - (window.pageYOffset)/5) + "%";
};

// projects array

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
        "tags": "#React #CSS #design",
        "href": "https://sylwik.github.io/calculator/"
    },
    {
        "img": "page2.jpg",
        "title": "Portfolio template",
        "tags": "#HTML #CSS #design",
        "href": ""
    },
    {
        "img": "page3.jpg",
        "title": "WoW survey form",
        "tags": "#HTML #CSS #design",
        "href": ""
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
    let project = document.createElement('div');
    document.getElementById("swiper-wrapper").appendChild(project);
    project.className = "swiper-slide";
}
let swiperSlide = document.getElementsByClassName("swiper-slide");
for (let i = 0; i < swiperSlide.length; i++){
    let projectBox = document.createElement('a');
    projectBox.className = "project-box";
    projectBox.href = projectsArray[i].href;
    projectBox.target = '_blank';
    swiperSlide[i].appendChild(projectBox);
};
let projectBox = document.getElementsByClassName("project-box");
for(let i = 0; i < projectBox.length; i++){
    let img = document.createElement('img');
    img.src = projectsArray[i].img;
    projectBox[i].appendChild(img);
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

// skills array

let skillsArray = [
    {
        "skill": "CSS",
        "percentage": "70%"
    },
    {
        "skill": "HTML",
        "percentage": "70%"
    },
    {
        "skill": "SCSS",
        "percentage": "60%"
    },
    {
        "skill": "JavaScript",
        "percentage": "40%"
    },
    {
        "skill": "React",
        "percentage": "20%"
    },
    {
        "skill": "Angular",
        "percentage": "10%"
    },
    {
        "skill": "Node.js",
        "percentage": "10%"
    },
    {
        "skill": "Python",
        "percentage": "0%"
    },
    {
        "skill": "Gimp",
        "percentage": "40%"
    },
    {
        "skill": "jQuery",
        "percentage": "10%"
    }
];
let delay = 0;
for(d of skillsArray){
    let skill = document.createElement('div');
    document.getElementById("skills").appendChild(skill);
    skill.className = "skill";
    skill.setAttribute("data-aos", "fade-up");
    skill.setAttribute("data-aos-delay", delay);
    skill.setAttribute("data-aos-offset", 0);
    delay += 150;
};
let skillClass = document.getElementsByClassName('skill');
for (let i = 0; i < skillClass.length; i++) {
    let desc = document.createElement('div');
    desc.className = "description"; 
    skillClass[i].appendChild(desc);
    desc.innerText = skillsArray[i].skill;
    let bar = document.createElement('div');
    bar.className = "bar";
    skillClass[i].appendChild(bar);
    let percentage = document.createElement('div');
    percentage.className = "percentage";
    skillClass[i].appendChild(percentage);
    percentage.innerText = skillsArray[i].percentage;
    for(let j = 0; j < 4; j++){
        let span = document.createElement('span');
        skillClass[i].appendChild(span);
    }; 
};
let barClass = document.getElementsByClassName('bar');
for (let i = 0; i < barClass.length; i++) {
    let full = document.createElement('div');
    full.className = "full";
    barClass[i].appendChild(full);
    full.style.width = skillsArray[i].percentage;
    let circle = document.createElement('img');
    circle.src = "round.png";
    barClass[i].appendChild(circle);
    circle.style.left = skillsArray[i].percentage;
};

// skills animation

if(window.pageYOffset >= 1050){
    
}

// clock

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


