var form=document.querySelector("form")
var user=document.querySelector("#user")
var password=document.querySelector("#pass")
var btn=document.querySelector("button")
var euser=document.querySelector("#euser")
var epass=document.querySelector("#epass")
var elogin=document.querySelector("#elogin")

var login=false
localStorage.setItem("login",login)


var lstorage=JSON.parse(localStorage.getItem("Form Local"))








// btn.addEventListener("click",()=>{
//    if(user.value=="" && password.value=="")
//    {
//     alert("user name password DALRE")
//     euser.innerHTML="insert username "
//     epass.innerHTML="password"
//    }
//    else if(user.value=="")
//    {
//     alert("username dal")
//     euser.innerHTML="insert username "
//    }
//    else if(password.value=="")
//    {
//     alert("password insert kar re")
//     epass.innerHTML="password"
//    }
   
   
//    else if(user.value=="juned" &&  password.value=="1234")
//     {
//         alert("Boss welcome to the page ")
//     }

//     else {
//         alert("niakl,pehli fursat me niakl")

//     }

// })

form.addEventListener("submit",(e)=>{

    euser.innerHTML=""
    epass.innerHTML=""
    elogin.innerHTML=""
    var flag =true
    var matching=lstorage.find((e)=>{
        if(e.mobile==user.value && e.password==password.value)
        {    
          var abc=JSON.stringify(e)
          
           localStorage.setItem("currentinfo",abc)
          
            
            return e
        }
    })
    if(user.value=="" && password.value=="")
       {
         
        euser.innerHTML="insert username "
        epass.innerHTML="insert password"
        flag=false
        // e.preventDefault()//this will not allow to go next website
        }

        else if(user.value=="")
        {
            euser.innerHTML="insert username"
            flag=false
           
        }
        else if(password.value=="")
        {
            epass.innerHTML="insert password"
            flag=false
           
        }
        else if(matching){
            // alert("boss welcome to the page")
            login=true
            var a=user.value

            
            
            localStorage.setItem("login",login)
            localStorage.setItem("Current",a)
        
        }
        else{
            elogin.innerHTML="Enter valid username or password"
            flag=false
        }
        if(flag){

        }
        else{
            e.preventDefault()
        }
       
console.log(matching);



    
})


