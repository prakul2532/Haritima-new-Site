window.addEventListener("scroll",function(){
    let box = document.querySelector(".fakebox");
    if(window.scrollY >= 100) {
        box.classList.add("reversal")
    } else {
        box.classList.remove("reversal")
    }
});
window.addEventListener("scroll",function(){
    let mainContent = document.querySelector(".mainContent")
    let missionImage1 = document.querySelector(".image1")
    if (window.scrollY >= 140) {
        mainContent.classList.add("missionAnimation")
        missionImage1.classList.add("missionImageAnimation")
    } else {
        mainContent.classList.remove("missionAnimation")
        missionImage1.classList.remove("missionImageAnimation")
    }
})
window.addEventListener("scroll",function(){
    let newsAnimator = document.querySelector(".newsAlignment")
    if (window.scrollY >= 1000) {
        newsAnimator.classList.add("articlesAnimation")
    } else {
        newsAnimator.classList.remove("articlesAnimation")
    }
})
window.addEventListener("scroll",function(){
    let first_update = document.querySelector(".update1")
    let first_update_image = document.querySelector(".EVS_image_1")
    if (window.scrollY >= 2170) {
        first_update.classList.add("updatesAnimation")
        first_update_image.classList.add("updatesImageAnimation")
    } else {
        first_update.classList.remove("updatesAnimation")
        first_update_image.classList.remove("updatesImageAnimation")
    }
})
window.addEventListener("scroll",function(){
    let second_update = document.querySelector(".update2")
    let second_update_image = document.querySelector(".EVS_image_2")
    if (window.scrollY >= 2500) {
        second_update.classList.add("updatesReverseAnimation")
        second_update_image.classList.add("updatesReverseImageAnimation")
    } else {
        second_update.classList.remove("updatesReverseAnimation")
        second_update_image.classList.remove("updatesReverseImageAnimation")
    }
})
window.addEventListener("scroll",function(){
    let third_update = document.querySelector(".update3")
    let third_update_image = document.querySelector(".EVS_image_3")
    if (window.scrollY >= 2900) {
        third_update.classList.add("updatesAnimation")
        third_update_image.classList.add("updatesImageAnimation")
    } else {
        third_update.classList.remove("updatesAnimation")
        third_update_image.classList.remove("updatesImageAnimation")
    }
})
let colorTransit = document.querySelector(".circularBox")
let positionTransit = document.querySelector(".boxColorPallete")
let originalBox = document.querySelector(".fakebox")
let isChanged = false;
function changeBackground() {
    if (isChanged === false){
        colorTransit.classList.add("colorTransition");
        positionTransit.classList.add("shiftedCircularBox");
        document.body.style.backgroundColor = "#CFBB99";
        originalBox.style.backgroundColor = "#CFBB99";
        document.querySelectorAll(".box").forEach(function(box){
            box.style.backgroundColor = "#CFBB99";
        })
        document.querySelectorAll(".header").forEach(function(header){
            header.style.color = "#889063";
        })
        document.querySelector(".outro_footer").style.backgroundColor = "#CFBB99";
        isChanged = true;
    } else {
        colorTransit.classList.remove("colorTransition");
        positionTransit.classList.remove("shiftedCircularBox");
        document.body.style.backgroundColor = "#889063";
        originalBox.style.backgroundColor = "#889063";
        document.querySelectorAll(".box").forEach(function(box){
            box.style.backgroundColor = "#889063";
        })
        document.querySelectorAll(".header").forEach(function(header){
            header.style.color = "#CFBB99";
        })
        document.querySelector(".outro_footer").style.backgroundColor = "#889063";
        isChanged = false;
    }
}
let quest1 = document.querySelector(".question1")
let quest2 = document.querySelector(".question2")
let quest3 = document.querySelector(".question3")
let quest4 = document.querySelector(".question4")
isChanged = false
function question_opening1(){
    if (isChanged === false) {
        quest1.style.display = "flex";
        quest1.classList.add(".animation_Faq_Box");
        isChanged = true 
    } else {
        quest1.style.display = "none";
        quest1.classList.remove(".animation_Faq_Box");
        isChanged = false
    }
}
function question_opening2(){
    if (isChanged === false) {
        quest2.style.display = "flex";
        quest2.classList.add(".animation_Faq_Box");
        isChanged = true 
    } else {
        quest2.style.display = "none";
        quest2.classList.remove(".animation_Faq_Box");
        isChanged = false
    }
}
function question_opening3(){
    if (isChanged === false) {
        quest3.style.display = "flex";
        quest3.classList.add(".animation_Faq_Box");
        isChanged = true 
    } else {
        quest3.style.display = "none";
        quest3.classList.remove(".animation_Faq_Box");
        isChanged = false
    }
}
function question_opening4(){
    if (isChanged === false) {
        quest4.style.display = "flex";
        quest4.classList.add(".animation_Faq_Box");
        isChanged = true 
    } else {
        quest4.style.display = "none";
        quest4.classList.remove(".animation_Faq_Box");
        isChanged = false
    }
}