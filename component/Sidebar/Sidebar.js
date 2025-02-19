import {sidebarContent} from "../../content/sidebarContent.js"
import CreateElement from "../../helper/CreateElement.js"

function Sidebar(container){

	const path = window.location.hash.slice(2) ;
	const createElem = new CreateElement();
	const bodyCont = createElem.div(container,"",["px-3","min-h-full"])
	sidebarContent.map((item) => {
		const divCont = createElem.div(bodyCont,"",item.classGroup);
		item.node.map((line) => {
			if(line.path === path)
			{
				const divParent = createElem.div(divCont,"",line.classGroup);
				const spanParent = createElem.dynoDiv(divParent,"span","",[]);
				spanParent.textContent = line.parent;
				const ulChild = createElem.dynoDiv(divCont,"ul","",["flex","md:flex-col","indent-8",]);
				line.children.map((child) => {
					const liChild = createElem.dynoDiv(ulChild,"li","",[])
					const link = createElem.dynoDiv(liChild,"a","",[]);
					link.href = child.to;
					link.textContent = child.name;
				})
			}
		})
	})
}

export default Sidebar