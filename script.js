/*const form= document.getElementById("form");
const email= document.getElementById("email-input");
const password= document.getElementById("password-input");
const rpassword= document.getElementById("repeat-password");
const error= document.getElementById("error-message");

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let errors=[]
    if(email){
        errors=getSignupFormError(email.value, password.value,rpassword.value );
    }
    else{
        errors= getSignupFormError(email, password);
    }
    if(errors.length > 0){
        error_message.innerText =errors.join(". ");
    }
    if(errors==="no email"){
        error_message.clear(`${errors}`);
    }
})

function getSignupFormError(email, password, rpassword){
    let errors =[];
    if(email === ''||email ==null){
        errors.push("Email  is required")
        email.parentElement.classList.add("incorrect")
    }if(password === ''||password ==null){
        errors.push("password  is required")
        email.parentElement.classList.add("incorrect")
    }if(rpassword === ''||rpassword ==null){
        errors.push("confirm password required")
        email.parentElement.classList.add("incorrect")
    }
    return errors;
}*/
const account1 = {
    email: "fat@gmail.com",
    password: 123123,
  };
  
const account2 = {
    email: "fat@gmail.com",
    password: 123123,
  };

const emailField= document.getElementById("email-input");
const passwordField= document.getElementById("password-input");
const popup= document.getElementById("popup");


function validation(){
    if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be at least 6";
        return false;
    }
    else if(document.Formfill.cPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password";
        return false;
    }
    else if(document.Formfill.Password.value!==document.Formfill.cPassword.value){
        document.getElementById("result").innerHTML="Password doesn't match";
        return false;
    }
    else if(document.Formfill.Password.value==document.Formfill.cPassword.value){
        popup.classList.add("open-slide");
        return false;
    }
}
function CloseSlide(){
    popup.classList.remove("open-slide");
}

function preventReload(event) {
    event.preventDefault();
    console.log("Button clicked, but the page didn't reload!");
}

const profile= {};

function storeInputValue() {
    const logins = {
        email:emailField.value,
        password: passwordField.value
    }
    profile = {...logins};
    console.log("Stored Value:", logins);
}
console.log(profile);

const signinbtn= document.querySelector(".signinbtn");
const signupbtn= document.querySelector(".signupbtn");
const formbox= document.querySelector(".form-box");
const body= document.querySelector("body");

signupbtn.onclick=function(){
    formbox.classList.add("active");
    body.classList.add("active");
}

signinbtn.onclick=function(){
    formbox.classList.remove("active");
    body.classList.remove("active");
}

function userValidLogin(){

}

const bodyWidth = body.offsetWidth;
const bodyHeight = body.offsetHeight;

const middleX = bodyWidth / 2;
const middleY = bodyHeight / 2;
console.log(middleX, middleY);

