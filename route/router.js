import {routes} from "./routes.js"
import CreateElement from "../helper/CreateElement.js"
import Navbar from "../component/Navbar/Navbar.js"
import Sidebar from "../component/Sidebar/Sidebar.js"

function router(main){
	const elem = new CreateElement();
	Navbar(main);
	const container = elem.div(main,"",[]);
	const cont = elem.div(container,"",["w-full","grid","md:grid-cols-[250px_1fr]" ,"min-h-[90vh]"]);
	
	const navigate = () => {
		const path = window.location.hash.replace("#","")|| "/";
		cont.innerHTML = "";
		Sidebar(cont);
		if(routes[path]){
			routes[path](cont);
		}else{
			main.innerHTML = "<h1 class='text-3xl p-2 text-red-700'>Error Code 404 - Page not Found</h1>"
		}
	}

	["hashchange","load"].forEach((item) => window.addEventListener(item, navigate))

}

export default router