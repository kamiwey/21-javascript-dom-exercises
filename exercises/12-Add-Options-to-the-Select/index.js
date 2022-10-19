let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let mySelect = document.querySelector("#mySelect");

for (let i of countries) {
    let option = document.createElement("option");
    option.innerHTML = i;
    option.value = i;
    mySelect.appendChild(option);
}
 
mySelect.addEventListener("change", a => {
    alert(a.target.value);
})