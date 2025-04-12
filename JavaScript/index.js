const password = prompt("Enter a password");
if (password.length > 6) {
    console.log("Password is too short");
    //following if statement checks whether if the index of "space" in the password is -1 or anything else// 
    if (password.indexOf(' ') === -1) {
        console.log("password does not contain space");
    }
    else {
        console.log("The password contains space");
    }
}

else {
    console.log("password long enough");
}