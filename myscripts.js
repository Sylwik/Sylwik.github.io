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
    }
];
for(d of skillsArray){
    let skill = document.createElement('div');
    document.getElementById("skills").appendChild(skill);
    skill.className = "skill";
} 
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
}
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
}

// zegar

const hrHand = document.getElementById("hr-hand");
const minHand = document.getElementById("min-hand");
let numArr = document.getElementsByClassName("num-a");

for(let i = 1; i < 13; i++){
    numArr[i-1].onmouseover = function(){
        let n = i * 30;
        hrHand.style.transform = 'rotate('+n+'deg)';
        minHand.style.transform = 'rotate(360deg)';
        };
};

const secHand = document.getElementById("sec-hand");
let n = 6;
function secRotate(){
    secHand.style.transform = 'rotate('+n+'deg)';
    n += 6;
};
setInterval(secRotate, 1000);
