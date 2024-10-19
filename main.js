var email=document.getElementById("email");
var free=document.querySelector(".free");
var valid=document.querySelector(".valid")
free.addEventListener("click",()=>{
    if(email.value.indexOf("@gamil") != -1){
        valid.innerHTML="thanks for you";
        email.value="";
    }else{
        valid.innerHTML="please enter availd email adress";
        email.value="";
    }
})