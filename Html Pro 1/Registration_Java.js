function check()
{
    var fname = document.getElementById("Fn").value;
    var lname = document.getElementById("Ln").value;
    var paddress = document.getElementById("Pa").value;
    var email = document.getElementById("Em").value;
    var number = document.getElementById("Mo").value;
    var male = document.getElementById("M").checked;
    var female = document.getElementById("F").checked;
    var other = document.getElementById("O").checked;
    var aero = document.getElementById("Ae").checked;
    var self = document.getElementById("Se").checked;
    var swim = document.getElementById("Sw").checked;
    var weig = document.getElementById("We").checked;

    if(fname == "" || lname == "" || paddress == "" || email == "" )
    {
        alert("Please Fill All The Info!");
        return false;
    }
    else if(male == "" && female == "" && other == "")
    {
        alert("Please choose a gender!");
        return false;
    }
    else if(aero == "" && swim == "" && self == "" && weig == "")
    {
        alert("Please choose an Item!");
        return false;
    }
    else if(number.length != 10)
    {
        alert("Please Enter A Valid Phone Number!");
        return false;
    }
    else
    {
        alert("Sucessfully Submitted!");
        return true;
    }
}

function emailCheck()
{
    var emailBox = document.getElementById("Em");
    var email = emailBox.value;
    var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailRegEx.test(email))
    {
        emailBox.style.backgroundColor = "green";
    }
    else
    {
        emailBox.style.backgroundColor = "red";
    }
}
