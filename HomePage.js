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