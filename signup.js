var form=document.querySelector("form")
var first=document.getElementById("first")
var last=document.getElementById("last")
var mail=document.getElementById("mail")
var mno=document.getElementById("mno")
var pass=document.getElementById("pass")
var cpass=document.getElementById("cpass")


var efirst=document.getElementById("efirst")
var elast=document.getElementById("elast")
var email=document.getElementById("email")
var emno=document.getElementById("emno")
var epass=document.getElementById("epass")                              
var ecpass=document.getElementById("ecpass")

var course=document.querySelector("select")




 



var storage=[]
var local=JSON.parse(localStorage.getItem("Form Local"))




if(local)
{
    storage=local
}

form.addEventListener("submit",(e)=>{
 
  var a=course.options[course.selectedIndex].innerHTML
 
//   console.log(a);





    var flag=true

    var regx=/^[a-zA-Z]{2,15}$/
    var regx1=/^[a-zA-Z@.0-9]{2,70}$/

    var regx2=/^[6-9][0-9]{9}$/
    var regx3=/^[a-zA-Z0-9!@.]{8,15}$/
    
    
    if(first.value=="")
    {
        efirst.innerHTML="First name required <br>"
        flag=false

    }
    else if(regx.test(first.value))
    {
        efirst.innerHTML=""
    }
    else{
        efirst.innerHTML="Invalid First Name"
        flag=false
    }

    if(last.value=="")
    {
        elast.innerHTML="Last name required <br>"
        flag=false

    }
    else if(regx.test(last.value))
    {
        elast.innerHTML=""
    }
    else{
        elast.innerHTML="Invalid Last Name"
        flag=false
    }


    if(mail.value=="")
    {
        email.innerHTML="Email is required <br>"
        flag=false

    }
    else if(regx1.test(mail.value))
    {
       email.innerHTML=""
    }
    else{
        email.innerHTML="Invalid Email id"
        flag=false
    }



    if(mno.value=="")
    {
        emno.innerHTML="Mobile Number is required <br>"
        flag=false

    }
    else if(regx2.test(mno.value))
    {
        emno.innerHTML=""
       
    }
    else{
        emno.innerHTML="Invalid Mobile number Name"
        flag=false
    }



    if(pass.value=="")
    {
        epass.innerHTML="password required <br>"
        flag=false

    }
    else if(regx3.test(pass.value))
    {
       epass.innerHTML=""
    }
    else{
        epass.innerHTML="Invalid Password "
        flag=false
    }


    if(cpass.va=="")
    {
        ecpass.innerHTML="Confirm Password is required"
        flag=false
    }
    else if(pass.value==cpass.value)
    {
        ecpass.innerHTML=""
    }
    else{
        ecpass.innerHTML="Invalid Confirm Password"
    }


    if(flag)
    {
           var obj={
            fname:first.value,
            lname:last.value,
            email:mail.value,
            mobile:mno.value,
            password:pass.value,
             coursess:a
           }

           storage.push(obj)
           localStorage.setItem("Form Local",JSON.stringify(storage))
    }
   else{
    e.preventDefault()
   }
})


