var html=document.getElementById("html")
var css=document.getElementById("css")
var js=document.getElementById("js")
var rjs=document.getElementById("rjs")
var core=document.getElementById("core")
var programming=document.getElementById("programming")
var j2ee=document.getElementById("j2ee")
var spring=document.getElementById("spring")
var mongo=document.getElementById("mongo")
var postgre=document.getElementById("postgre")
var mysql=document.getElementById("mysql")










// e.mobile==uname

var uname=JSON.parse(localStorage.getItem("Current"))
// for(var i=0;i<localStorage.getItem("Form Local").length;i++){
//     if(JSON.parse(localStorage.getItem("Form Local"))[i].mobile==mobilee){
//         console.log(JSON.parse(localStorage.getItem("Form Local"))[i].coursess)
//     }
// }

console.log(uname)

var val=localStorage.getItem('currentinfo')
var object=JSON.parse(val)
console.log(object.coursess,object.mobile)

if( object.coursess==="WebTech"){
    console.log(object.mobile,object.coursess)
    html.style.display="block"
        css.style.display="block"
        js.style.display="block"
        rjs.style.display="block"
    
        core.style.display="none"
        programming.style.display="none"
        j2ee.style.display="none"

        spring.style.display="none"

        mongo.style.display="none"
    postgre.style.display="none"
        mysql.style.display="none"



    
}
else if( object.coursess==="Java")
{
    core.style.display="block"
    programming.style.display="block"
    j2ee.style.display="block"

    spring.style.display="block"

    mongo.style.display="none"
    postgre.style.display="none"
        mysql.style.display="none"

        html.style.display="none"
        css.style.display="none"
        js.style.display="none"
        rjs.style.display="none"

}
else if( object.coursess==="Database")
{
    mongo.style.display="block"
    postgre.style.display="block"
        mysql.style.display="block"


    html.style.display="none"
    css.style.display="none"
    js.style.display="none"
    rjs.style.display="none"


    core.style.display="none"
    programming.style.display="none"
    j2ee.style.display="none"

    spring.style.display="none"



}
else{
    mongo.style.display="block"
    postgre.style.display="block"
        mysql.style.display="block"

        html.style.display="block"
        css.style.display="block"
        js.style.display="block"
        rjs.style.display="block"

        core.style.display="block"
        programming.style.display="block"
        j2ee.style.display="block"
    
        spring.style.display="block"
    
    


}

