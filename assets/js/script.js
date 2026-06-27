const navbar=document.getElementById("navbar");
window.addEventListener("scroll",()=>{
navbar.classList.toggle("scrolled",window.scrollY>50);

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


const counters = document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const update=()=>{
        const target=+counter.getAttribute("data-target");
        const count=+counter.innerText;
        const speed=40;
        const increment=Math.ceil(target/speed);

        if(count<target){
            counter.innerText=count+increment;
            setTimeout(update,40);

        }else{
            counter.innerText=target+"+";
        }
    };
    update();

});