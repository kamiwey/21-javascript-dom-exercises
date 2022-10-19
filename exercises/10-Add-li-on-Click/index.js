let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let fourth = document.createElement("li");
	fourth.innerHTML = "Fourth element";
	let myListElement = document.querySelector("#myList")
	myListElement.appendChild(fourth);
});

