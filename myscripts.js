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
        burger.classList.toggle('rotated');
    });
};
navSlide();

(function(){
    // Nav show on mouseover 
    let hiddenNav = document.getElementById("invisible-nav");
    let navbar = document.getElementById("navbar");
    hiddenNav.addEventListener("mouseover", ()=>{
        navbar.style.top = "0";
    });
    navbar.addEventListener("mouseover", ()=>{
        navbar.style.top = "0";
    });
    hiddenNav.addEventListener("mouseout", ()=>{
        if(window.pageYOffset > 60){
            navbar.style.top = "-60px";
        }
    });
    //Hiding navbar
    var prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', ()=>{
        if(window.innerWidth > 800){
            if (prevScrollpos > window.pageYOffset || window.pageYOffset < 60) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-60px";
            }
            prevScrollpos = window.pageYOffset;
        }
    });
})();

//Image changes on mouseover
(function(){
    let box = document.getElementById("face-box");
    let count = 0;
    if(window.innerWidth > 1080){
        box.addEventListener('mouseover', ()=>{
            if(count == 0){
                let beret = document.getElementById("beret");
                let mustache = document.getElementById("mustache");
                beret.setAttribute("style", "opacity:1; animation: beret-fall .2s linear forwards;");
                mustache.setAttribute("style", "opacity:1;");
                box.addEventListener('mouseout', ()=>{
                    beret.setAttribute("style", "opacity:0;");
                    mustache.setAttribute("style", "opacity:0;");
                });
            } else if(count == 1){
                let mask = document.getElementById("mask");
                mask.setAttribute("style", "opacity:1;");
                box.addEventListener('mouseout', ()=>{
                    mask.setAttribute("style", "opacity:0;");
                });
            } else if (count == 2){
                let hat = document.getElementById("hat");
                let eyePatch = document.getElementById("eye-patch");
                let parrot = document.getElementById("parrot");
                hat.setAttribute("style", "opacity:1;");
                eyePatch.setAttribute("style", "opacity:1;");
                parrot.setAttribute("style", "transform: rotate(-20deg); right: -315px;");
                box.addEventListener('mouseout', ()=>{
                    hat.setAttribute("style", "opacity:0;");
                    eyePatch.setAttribute("style", "opacity:0;");
                    parrot.setAttribute("style", "transform: rotate(20deg); right: -340px;");
                });
            } else if(count == 3){
                let blush = document.getElementById("blush");
                let textCloud = document.getElementById("text-cloud");
                blush.setAttribute("style", "opacity:.9;");
                textCloud.setAttribute("style", "opacity:1;");
                box.addEventListener('mouseout', ()=>{
                    blush.setAttribute("style", "opacity:0;");
                    textCloud.setAttribute("style", "opacity:0;");
                });
            } else if(count == 4){
                let quote = document.getElementById("quote");
                quote.setAttribute("style", "opacity:1;");
            }
            count++;
        });
    }
    
    
})();

// Portfolio tabs
(function(){
    let tabs = document.getElementsByClassName("tab");
    let oldYear = "2024";
    for(const tab of tabs){
        tab.addEventListener("click", ()=>{
            if(!tab.classList.contains("active")){
                for(const tab of tabs){
                    if(tab.classList.contains("active")){
                        tab.classList.remove("active");
                    }
                }
                tab.classList.add("active");
                let container = document.getElementById("projects-container");
                let years = document.getElementsByClassName("year");
                for(const yearContainer of years){
                    if(yearContainer.dataset.year == tab.dataset.year){
                        if(oldYear > yearContainer.dataset.year){
                            yearContainer.setAttribute("style", "display:flex; opacity:0; left:100vw;");
                        } else{
                            yearContainer.setAttribute("style", "display:flex; opacity:0; left:-100vw;");
                        }
                        container.style.height = yearContainer.offsetHeight + "px";
                        setTimeout(()=>{
                            yearContainer.setAttribute("style", "display:flex; left:0; opacity:1;");
                        }, 100);
                        oldYear = yearContainer.dataset.year;
                    } else if(yearContainer.dataset.year > tab.dataset.year){
                        yearContainer.setAttribute("style", "display:flex; left:-100vw; opacity:0;");
                        setTimeout(()=>{
                            yearContainer.setAttribute("style", "display: none;");
                        }, 500);
                    } else if(yearContainer.dataset.year < tab.dataset.year){
                        yearContainer.setAttribute("style", "display:flex; left:100vw; opacity:0;");
                        setTimeout(()=>{
                            yearContainer.setAttribute("style", "display: none; ");
                        }, 500);
                    }
                }
            }
        });
    }
})();

