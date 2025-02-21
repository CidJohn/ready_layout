import CreateElement from "../../helper/CreateElement.js"
import {realtimeDate} from "../../utils/realtimeDate.js"
import Profile from "./Profile/Profile.js"

function Home(container) {
const sampleText = new CreateElement();

const div = sampleText.div(container, "", ["h-full"]);
const secDiv = sampleText.div(div, "", ["h-full", "px-3","flex","gap-5","flex-col"]);


const bodyDiv = sampleText.div(secDiv, "", [
  "w-full"
])

const contentDiv = sampleText.div(bodyDiv, "", [
  "w-full",
   "max-h-[80vh]",
   "h-[80vh]",
   "hover:overflow-y-scroll",
   "overflow-y-hidden"
]);

const home = sampleText.div(contentDiv,"",["h-full","flex","flex-col","gap-2"]);
Profile(home);

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