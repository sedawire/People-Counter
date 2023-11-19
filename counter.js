const countEl = document.getElementById("counting-el");
const doubleBtn = document.getElementById("double-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");
let count = 0; 

function increment () {
	count += 1;
	countEl.innerHTML = count;
}

function decrement() {
	count -= 1;
	countEl.innerHTML = count;
}

doubleBtn.addEventListener("click", () => {
	count *= 2;
	countEl.innerHTML = count;
})

function save() {
	let countNum = " " + count + " - ";
	saveEl.textContent += countNum;
	count = 0;
	countEl.innerHTML = 0;
}