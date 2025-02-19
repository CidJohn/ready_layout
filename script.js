import CreateElement from "./helper/CreateElement.js"
import router from "./route/router.js"
import changeFavicon from "./utils/changeFavicon.js"


(document).addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	document.title = "Sample New Title"
	changeFavicon("https://cdn-icons-png.flaticon.com/512/9908/9908191.png")
	router(root)
});
