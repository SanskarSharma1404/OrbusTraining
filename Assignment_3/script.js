function validation(){

    let UserName = document.getElementById("Username");
    let Password = document.getElementById("Password");

    let usernameRegex = /^[a-zA-Z0-9_]{4,12}$/;  
    // 4-12 chars, letters, numbers, underscore
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    // 1 uppercase, 1 lowercase, 1 number, 1 special char, minimum 6 length

    let isError = false;

    if (UserName.value == "") {
        document.getElementById("Username_error").innerText = "Username required!";
        isError = true;
    }
    else if(!usernameRegex.test(UserName.value)){
        document.getElementById("Username_error").innerText = "Username validation failed";
        isError = true;
    }
    else{
        document.getElementById("Username_error").innerText = "";
    }



    if (Password.value == ""){
        document.getElementById("Password_error").innerText = "Password required!";
        isError = true
    }
    else if(!passwordRegex.test(Password.value)){
        document.getElementById("Password_error").innerText = "Password validation failed";
        isError = true;
    }
    else{
        document.getElementById("Password_error").innerText = "";
    }

    if (!isError) {
        alert("Login Successful!");
    }
}

