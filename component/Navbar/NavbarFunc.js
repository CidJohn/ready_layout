
export function NavbarFunc (){
	const toggle = document.getElementById("btnToggleNav");
	const navList = document.getElementById("navbarItems");
	const links = document.querySelectorAll("#navbarItems li a");
	if (toggle && navList) {
		toggle.addEventListener("click", function () {
			navList.classList.toggle("hidden");
		});
	} else {
		console.error("Navbar elements not found.");
	}

	setInterval(() => {
		const path = window.location.hash

		links.forEach((items) => {
			if(items.getAttribute("href") === path){
			["bg-blue-700","text-white"].forEach((item) => items.classList.add(item));
			}else{
			["bg-blue-700","text-white"].forEach((item) => items.classList.remove(item));
			}
		})
	},100)
}