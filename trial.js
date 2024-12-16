//Main form validation function
const form=document.getElementById("form");
form.addEventListener("submit", function (event){
    // Accessing details inputted from the form
    var username=document.getElementById("name");

    var age=document.getElementById("age");
    var password=document.getElementById("password");
    var confirm=document.getElementById("confirm");
    var phone=document.getElementById("phone");
    var email=document.getElementById("email");
    var city=document.getElementById("city");

    //Validate each field using the respective functions
    let x=validateUsername(username);
    if (x){
        window.alert(x);
        username.style.border = "solid 2px red";

        event.preventDefault(); // Prevent form submission
        return false;
    }

    x=validateAge(age);
    if(x){
        window.alert(x);
        event.preventDefault();
        return false;
    }

    x=validatephone(phone);
    if(x){
        window.alert(x);
        event.preventDefault();
        return false;
    }

    x=validateemail(email);
    if(x){
        window.alert(x);
        event.preventDefault();
        return false;
    }

    x=validatecity(city);
    if(x){
        window.alert(x);
        event.preventDefault();
        return false;
    }

    x=validatePassword(password);
    if(x){
        window.alert(x);
        event.preventDefault();
        return false;
    }

    x=validateConfirmPassword(password, confirm);
    if(x){
        window.alert(x);
        event.preventDefault();
        return false;
    }

    //Function to validate username
    function validateUsername(username){
        if(username.value.trim()===""){
            return "Please enter your valid name.";
        }
        if(username.value.trim().length < 4){
            return "please enter your full name.";
        }
        return "";
    }

    //Function to validate age
    function validateAge(age){
        let agevalue=parseInt(age.value.trim(), 10);
        if(agevalue==="") {
            return "Please enter your age";
        }

        if(isNaN(agevalue)){
            return "Please enter the valid age.";
        }
        if(agevalue < 15){
            return "You should be at least 15 years old to use this.";
        }
        return "";
    }

    //Function to validate password
    function validatePassword(password){
        if(password.value.trim() === ""){
            return "Please enter a password.";
        } else if(password.value.trim().length < 8){
            return "Password should be stronger.";
        } else if(password.value.trim().length > 25){
            return "Password is too long (maximum 15 characters).";
        } else if(password.value.trim() === username.value.trim()) {
            return "password and username should not be same.";
        } else if(password.value.trim() === "password") {
            return "Password cannot be 'password'.";
        }

        return "";
    }

    //Function to validate confirm password
    function validateConfirmPassword(password, confirm) {
        if(confirm.value.trim()===""){
            return "Please re-enter the password.";
        } else if(confirm.value.trim()!== password.value.trim()) {
            return "Passwords do not match.";
        }
        return "";
    }

    //Function to validate phone number
    function validatephone(phone){
        if (phone.value.trim()===""){
            return "please enter your phone number.";
        } else if(phone.value.trim().length < 10){
            return "Enter a valid phone number.";
        } else if(phone.value.trim().length > 10){
            return "Enter a valid phone number.";
        }
        if(phone.value.trim() === "1234567890"){
            return "Enter a valid phone number.";
        }
        return "";
    }

    //Function to validate email id
    function validateemail(email) {
        if(email.value.trim() === ""){
            return "Please enter your valid email id";
        }
        if(!email.value.includes("@")){
            return "Please enter your correct email id.";
        }

        return "";
    }

    //Function to validate city
    function validatecity(city) {
        if(city.value.trim()===""){
            return "please enter a valid city";
        }
        return "";
    }

    //If all validations pass, allow form submission
    window.alert("!SUBMISSION SUCCESSFUL");
    return true;
});
