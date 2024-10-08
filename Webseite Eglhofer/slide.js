const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 6000);
    
}
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;

    }
    else if(index < 0){
        slideIndex = slides.length - 1;

    }
    
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide")
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'block';
  });
  
  document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
  });


  [].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})
