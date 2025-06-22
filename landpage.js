const menu = document.querySelector("nav ul");
const barMenu = document.querySelector(".bar");

barMenu.addEventListener('click',  () => {
    menu.classList.toggle("active");
    barMenu.classList.toggle("active");
});

// slider transform
const leftArr = document.querySelector(".leftarrow");
const rightArr = document.querySelector(".rightarrow");
const dotsWrapper = document.querySelector(".dots");
const dots = document.querySelectorAll(".dots span");
const slides = document.querySelector(".slides");
const slider = document.querySelectorAll(".slide-img");

let slideindex = 0;

const setIndex = () => {
    document.querySelector(".dots .active").classList.remove("active");
    const percentPerSlides = 100 / slider.length;
    slides.style.transform = `translateX(-${slideindex * percentPerSlides}%)`;
    dots[slideindex].classList.add("active");
};

setInterval(() => {
    slideindex = (slideindex + 1) % slider.length;
    setIndex();
}, 3000);

dots.forEach((dot, ind) => {
    dot.addEventListener("click",function(){
        slideindex= ind;
        setIndex();
        
    });
});

leftArr.addEventListener("click", function () {
    slideindex = slideindex > 0 ? slideindex - 1 : 0;
    setIndex();
});

rightArr.addEventListener("click", function () {
    slideindex = 
    slideindex < slider.length - 1 ? slideindex + 1 : slider.length -1;
    setIndex();
});



// SECTION 2 - ABOUT
const galleryImg = document.querySelectorAll(".img img");
const textbox = document.querySelectorAll(".title-block .title");
const contentBox = document.querySelectorAll(".text-block > div ");
const Vision = document.querySelector('.Vision');

textbox.forEach(function (text){
    text.addEventListener("click", function (){
        const listImg = text.getAttribute("id");

        galleryImg.forEach(img => {
            const currentAlt = img.getAttribute("alt");
            if(currentAlt === listImg) {
                img.classList.add("active");
            }else{
                img.classList.remove("active");
            }
        });

        contentBox.forEach(block => {
            
            (block.classList.contains(listImg))
            ? block.style.display = "block" 
            : block.style.display = "none";
            if(listImg==='Vision') return Vision.style.display = "flex";
        });
    });
});

const progress = document.querySelectorAll(".progress-done");
for(let i = 0; i < progress.length; i++){
    // console.log(progress[i]);
    setTimeout (function () {
        progress[i].style.width = progress[i].getAttribute("data-done") + "%";
        progress[i].style.opacity = 1;
        progress[i].innerText = progress[i].getAttribute("data-done") + "%";
    },5000);
}

//SECTION 3 -  SERVICES
//FREQUENTLY ASKED QUESTIONS
const questions = document.querySelectorAll(".faq-question");//lấy tất cả phân tử có class "fag-quétion"

//B2: duyệt qua từng câu hỏi:
questions.forEach(function(e){
    //Gắn sự kiện khi click vào từng câu hỏi
    e.onclick = function () {
        //Tìm phần tử cha của câu hỏi ( chính là faq_list)
        let faqlist = this.parentElement;
        faqlist.classList.toggle("active");// bật tắt nhấn cùng 1 câu hỏi
    //     //Đầu tiên, ẩn tất cả các câu trả lời.
    //     let allanswers = document.querySelectorAll(".faq-list");
    //     allanswers.forEach(function(item){
    //         item.classList.remove("active");
    //     });
    // // Hiện câu trả lời của câu hỏi vừa click
    // faqlist.classList.add("active");
    }
});

//bar- video
const video = document.querySelector(".video");
const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");

speed.addEventListener("mousemove", function (e) {
    // console.log((e.pageX));
    // console.log(speed.offsetWidth);
    console.log(speed.offsetLeft);
    const x = e.pageX - speed.offsetLeft;
    const percent = x / speed.offsetWidth;
    const min = 0.1;
    const max = 5;
    const width = Math.round(percent * 100) + "%";
    const playBackRate = percent * (max - min) + min;
    bar.style.width = width;
    bar.textContent = playBackRate.toFixed(2) + "X";
    video.playBackRate = playBackRate;
});

//PRICES - BẢNG GIÁ 
const packages = document.querySelectorAll(".price-table .table");

packages.forEach( function(ptag){
    ptag.addEventListener("click", function() {
        packages.forEach(function(p){
            p.classList.remove("active");
        });
    ptag.classList.add("active");
    const parent = document.querySelector(".price-table");
    const middlepkg = packages[1];
   
    parent.removeChild(ptag);
    parent.insertBefore(ptag,parent.children[1]);
    
    });
});


