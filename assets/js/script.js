window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("navbar-scrolled");

    }else{
        navbar.classList.remove("navbar-scrolled");
    }

});


const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText =
            target + "+";

        }

    };

    updateCounter();

});

const ctx =
document.getElementById("companyChart");

if(ctx){

new Chart(ctx,{

    type:"bar",

    data:{

        labels:[
            "Produksi",
            "Kualitas",
            "Ekspor",
            "Inovasi",
            "Efisiensi"
        ],

        datasets:[{

            label:"Performance Index",

            data:[
                95,
                98,
                85,
                90,
                92
            ]

        }]

    },

    options:{

        responsive:true,

        scales:{
            r:{
                beginAtZero:true,
                max:100
            }
        }

    }

});

}