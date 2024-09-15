let exitLoginForm = document.querySelector(".login-form")
let exitBtn = document.querySelector(".exit-form")
let Openlogin = document.querySelector(".open-login")
let Openlogin2 = document.querySelector("#open-login")
exitBtn.onclick = function(){
    exitLoginForm.style.display ="none"
}
Openlogin.onclick = function(){
    exitLoginForm.style.display ="block"
    
}
Openlogin2.onclick = function(){
    exitLoginForm.style.display ="block"
}