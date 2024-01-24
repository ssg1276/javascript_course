//selecting elements by their id 
const dev=document.getElementById("title")
//how to edit the CSS through JS
dev.style.backgroundColor="green"




//selecting elements by their classname
const dev1=document.getElementsByClassName("heading")




//other and most common way for selecting elements
let dev2=document.querySelector("#title") //(".heading")-->for class use (. operator)
dev2.setAttribute('class','test') //it will always overwrite the exisiting class name or attribute 
console.log(dev2)



//selecting elements with same id or class or tag
const dev3=document.querySelectorAll("h2")

dev.innerHTML // it will return all the text as well as the tags and elements also if there are any present
dev.innerText // it will return only the text which is displayed and not hidden 
dev.textContent //return all the text which is present even if some part of its is hidden using display:none property


//selecting throungh list

const myul=document.querySelector("ul")

const insidemyul=myul.querySelector("li")

const insideli=insidemyul.querySelector("list-item")