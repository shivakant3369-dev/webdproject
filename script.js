function validateLogin(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(email.trim() === "" || pass.trim() === ""){
        alert("All fields are required!");
        return false;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Enter a valid email address!");
        return false;
    }

    if(pass.length < 6){
        alert("Password must be at least 6 characters long!");
        return false;
    }

    alert("Login successful!");
    return true;
}