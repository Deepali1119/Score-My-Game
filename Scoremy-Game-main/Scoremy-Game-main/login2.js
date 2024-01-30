function validate()
{
    var username=document.getElementById("username").value;
    var username=document.getElementById("password").value;
    if(username=="admin" && password=="user")
    {
        alert("Login Succesfully !");
        return false;
    }
    else 
    {
         alert("Login Failed !");
    }
}