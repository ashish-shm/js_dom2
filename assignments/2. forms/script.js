let name = document.querySelector(".name");
let email = document.querySelector(".emailAddress");
let password = document.querySelector(".passwordField");
let signUp = document.querySelector(".btn");
let error = document.querySelector(".error");





function signUpForm(event) {
  console.log(event.value);
  if(name.value === "") {
    error.innerText = "Name can't be empty";
    console.log()
  } else if (email.value === "") {
    error.innerText = "Email can't be empty";
  } else if(password.value === "") {
    //console.log(event)
    error.innerText = "Password can't be empty";
  }
  else {
alert(`You are ${name.value}, Your email address is: ${email.value} and password is ${password.value} `)
nameField.value = "";
email.value = "";
password.value = "";
document.body.append(error);
}
}    
signUp.addEventListener("click", signUpForm);