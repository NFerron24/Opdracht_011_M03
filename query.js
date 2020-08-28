//Deel 1:
var newPara = document.querySelector("#first-section");
console.log(newPara.children);
HTMLCollection[p];
newPara.querySelector("p").innerHTML = "Ik ben een nieuwe paragraaf";

//Deel 2:
document.getElementById("#first-section");
let newSection = document.querySelector("#first-section");
console.log(newSection);
<div> id = "first-section"</div>;

//Deel 3:
document.getElementsByClassName('paragraph');
HTMLCollection(2) [div#first-section.paragraph, div#second-section.paragraph, first-section: div#first-section.paragraph, second-section: div#second-section.paragraph]
let newParas = document.querySelectorAll('.paragraph');
console.log(newParas);
NodeList(2) [div#first-section.paragraph, div#second-section.paragraph]