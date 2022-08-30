//---------------MY DROPDOWN MENU--------------------------------

const bestSources = document.getElementById("contain");
const dropDown = document.querySelector("#source");
const leftContacts = document.querySelector("#groups")
const footer = document.querySelector("#center")
const FooterEnd = document.querySelector("#end")

//This is to make the facebookcontact disappear once it hits footer
// footer.addEventListener(("click",() => {
// 	e.leftContacts.style.display = "none"
// 	console.log('hello')
// }))

const footerEnd = ()=>{
	leftContacts.style.display = "none"
	console.log('gone')
}
const footerBegin = ()=>{
	leftContacts.style.display = "block"
	console.log('block')
}



// footer.addEventListener(("mouseleave",() => {
// 	leftContacts.style.display = "block"
// }))
//END OF IT

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

//DELETES FOOTER ONCE YOU GET TO THE BOTTOM
footer.addEventListener("mouseenter",footerEnd);
footer.addEventListener("mouseleave", footerBegin);
FooterEnd.addEventListener("mouseenter", footerEnd);
FooterEnd.addEventListener("mouseleave", footerBegin);

