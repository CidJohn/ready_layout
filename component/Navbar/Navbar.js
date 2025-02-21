import CreateElement from "../../helper/CreateElement.js"
import {NavbarContent} from "../../content/navbarContent.js"
import {NavbarFunc} from "./NavbarFunc.js"

function Navbar(container){
	const cElem = new CreateElement()
	const bodyDiv = cElem.div(container,"",["md:flex","px-3","md:justify-between"])
	NavbarContent.map((item) => {
		const div_icons = cElem.div(bodyDiv,"",["flex","justify-between"])
		const div_1 = cElem.div(bodyDiv,item.id,item.classGroup);
		item.navIcon.map((icon) => {
				const iconDiv = cElem.div(div_icons,"",icon.classGroup);
				icon.btn.map((img) => {
					const imgIcon = cElem.dynoDiv(iconDiv,"img","",img.classGroup)
					imgIcon.src = img.imgURL
					const span = cElem.dynoDiv(iconDiv,"span","",img.spanClass);
					span.textContent = img.txtName;
				})
		})
		item.hbIcon.map((hum) => {
				const button = cElem.dynoDiv(div_icons,"button","",hum.classGroup);
				button.id = hum.id;
			    hum.btn.map((btnData) => {
				    const btnWrapper = cElem.dynoDiv(button, "span", "",[...btnData.classGroup]);
				    btnWrapper.innerHTML = btnData.imgURL
			    });
		});
		item.navCont.map((nav) => {
			const div_2 = cElem.div(div_1,nav.id , nav.classGroup);
			const ul = cElem.dynoDiv(div_2,"ul","",nav.ulClass);
			nav.btn.map((btn) => {
				const li = cElem.dynoDiv(ul,"li","",nav.liClass)
				const link = cElem.dynoDiv(li, "a", btn.id, btn.classGroup)
				link.textContent = btn.txtName
				link.href = btn.to;
				link.id = btn.id;
			})

		})
	})
	NavbarFunc();
	
}

export default Navbar