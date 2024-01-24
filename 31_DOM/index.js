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


//selecting all elements of list at once 
const tempMyList=document.querySelectorAll("li")

console.log(tempMyList); //it will return a nodelist which is similiar to array but can't be treated like an array
tempMyList.style.color="green" //it will through an error as this is not a format to deal with a nodelist

tempMyList[0].style.color="green" //now first element of the list will be green and this is the format to deal with nodelists



//how to use foreach for the nodelist
tempMyList.forEach(function (list){
    list.style.backgroundColor="red"
})


//HTML collection gets converted to an array
const tempClassList=document.getElementsByClassName("list-items")

console.log(tempClassList);//output will be a HTML collection similiar to an array but can't be operated therefore need to get it converted

const arraytempClassList=Array.from(tempClassList)

console.log(arraytempClassList); //output---> an array and any operation can be applied on this now