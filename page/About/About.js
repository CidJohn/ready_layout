import CreateElement from "../../helper/CreateElement.js"

function About(container){
	const createElem = new CreateElement()

	const div = createElem.div(container, "", []);
const secDiv = createElem.div(div, "", ["h-full", "px-3","flex","gap-5","flex-col"]);


const bodyDiv = createElem.div(secDiv, "", [
  "w-full"
])

const contentDiv = createElem.div(bodyDiv, "", [
  "border",
  "w-full",
   "flex",
  "justify-center",
  "items-center",
   "min-h-[80vh]",
]);
contentDiv.textContent = "About Page";
const footerDiv = createElem.div(secDiv,"",[
	"p-3",
	"flex",
  "h-auto",
  "justify-content",
  "text-center",
  'border'
])
footerDiv.textContent = "About Footer"
}


export default About