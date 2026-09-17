let color = localStorage.getItem("bodyColor");
document.body.style.backgroundColor = color;
let AuthenticationBox = localStorage.getItem("bodyColor")
if (AuthenticationBox === "#889063"){
    document.querySelectorAll(".fieldsetStyling").forEach(function(fieldsetStyling){
        fieldsetStyling.style.boxShadow = "0px 0px 100px #CFBB99";
    });
} else {
    document.querySelectorAll(".fieldsetStyling").forEach(function(colourStyling){
        colourStyling.style.boxShadow = "0px 0px 100px #889063";
    });
}
let formChange = document.querySelector(".formAlignment");
let formLogin = document.querySelector(".formAlignment2")

function FormChange() {
    formChange.classList.add("DisperSign");
    formChange.addEventListener("animationend",()=>{
        history.pushState(null,"","Login.html");
        document.title = "Login";
        formChange.style.display = "none";
        formLogin.classList.add("showLoginForm");
        document.querySelector(".imageSignUp").src = "../static/image_Login.png";
    },{once: true});
    formLogin.classList.remove("DisperLogin");
}
function FormChange2() {
    formLogin.classList.add("DisperLogin");
    formLogin.addEventListener("animationend",()=>{
        history.pushState(null,"","SignUp.html");
        document.title = "Sign-Up";
        formLogin.classList.remove("showLoginForm");
        formChange.style.display = "flex";
        document.querySelector(".imageSignUp").src = "../static/image_SignUP.png";
    },{once:true});
    formChange.classList.remove("DisperSign");
}