import CreateElement from "../../helper/CreateElement.js"

function Contact(container){
const sampleText = new CreateElement();

const div = sampleText.div(container, "", []);
const secDiv = sampleText.div(div, "", ["h-full", "px-3","flex","gap-5","flex-col"]);


const bodyDiv = sampleText.div(secDiv, "", [
  "w-full"
])

const contentDiv = sampleText.div(bodyDiv, "", [
  "border",
  "w-full",
   "flex",
  "justify-center",
  "items-center",
  "min-h-[80vh]",
]);
contentDiv.textContent = "Contact Page";
const footerDiv = sampleText.div(secDiv,"",[
	"p-3",
	"flex",
  "h-auto",
  "justify-content",
  'border'
])
footerDiv.textContent = "Contact Footer"
}

export default Contact;