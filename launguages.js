//-----------------------Best Launguages 2022--------------------------------------------------------

const launguages = document.querySelector(".launguage");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const ten = document.querySelector("#ten");
const eleven = document.querySelector("#eleven");

const hoverOver = () => {
	console.log("hello");
	if (true) {
		one.style.display = "block";
		two.style.display = "block";
		three.style.display = "block";
		four.style.display = "block";
		five.style.display = "block";
		six.style.display = "block";
		seven.style.display = "block";
		eight.style.display = "block";
		nine.style.display = "block";
		ten.style.display = "block";
		eleven.style.display = "block";
	}
};

const myTimeout = setTimeout(hoverOver, 5000);
