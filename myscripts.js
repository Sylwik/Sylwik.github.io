// nav

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

// skills

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
for(d of skillsArray){
    let skill = document.createElement('div');
    document.getElementById("skills").appendChild(skill);
    skill.className = "skill";
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
