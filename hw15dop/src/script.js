var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");


function start(){
	main.style.display = "none";
	var name = prompt("Здравствуйте! Представьтесь, пожалуйста:", "");
	var age = confirm(name + ", Вам есть 18 лет?");
	if (age == true) {
		var sub = confirm("Подписаны ли Вы на нашу рассылку?");
		if (sub == true) {
			main.style.display = "block";
			console.log("Пользователь допущен");
			alert("Добро пожаловать!");
		}
		else {
			alert("В доступе отказано. Подписывайтесь на нашу рассылку =)");
			main.style.display = "none";
		}
	}
	else {
		alert("В доступе отказано. Возвращайтесь, когда подрастёте =)");
		main.style.display = "none";
	}
}

function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}
function delItem(){
	myList.removeChild(story[0])

	if(story.length == 0){
		popup.style.display = "block";
	}
}

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);
start();