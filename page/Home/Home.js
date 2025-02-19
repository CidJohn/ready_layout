import CreateElement from "../../helper/CreateElement.js"
import {realtimeDate} from "../../utils/realtimeDate.js"

function Home(container) {
const sampleText = new CreateElement();

const div = sampleText.div(container, "", ["h-full"]);
const secDiv = sampleText.div(div, "", ["h-full", "px-3","flex","gap-5","flex-col"]);


const bodyDiv = sampleText.div(secDiv, "", [
  "w-full"
])

const contentDiv = sampleText.div(bodyDiv, "", [
  "border",
  "w-full",
   "max-h-[80vh]",
   "h-[80vh]",
   "overflow-y-scroll"
]);

const home = sampleText.div(contentDiv,"",["h-[100vh]","flex","justify-center","items-center"]);
home.textContent = "Home Content";

const footerDiv = sampleText.div(secDiv,"",[
	"p-3",
	"flex",
  "h-auto",
  "justify-between",
  'border'
])
footerDiv.textContent = "Home Footer"
realtimeDate(footerDiv)
}

export default Home