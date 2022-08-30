//---------------MY DROPDOWN MENU--------------------------------

const bestSources = document.getElementById("contain");
const dropDown = document.querySelector("#source");

const displaySources = () => {
	dropDown.style.display = "block";
};

const leave = () => {
	dropDown.style.display = "none";
};

const enterSources = () => {
	if (true) {
		dropDown.style.display = "block";
	}
};
const leaveSources = () => {
	if (true) {
		dropDown.style.display = "none";
	}
};

dropDown.addEventListener("mouseleave", leaveSources);

dropDown.addEventListener("mouseenter", enterSources);

bestSources.addEventListener("mouseenter", displaySources);

bestSources.addEventListener("mouseleave", leave);
