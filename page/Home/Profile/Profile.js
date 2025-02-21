import CreateElement from "../../../helper/CreateElement.js"
import {infoContent} from "../../../content/infoContent.js"

function Profile(container){
	const create = new CreateElement();

	infoContent.map((item) => {
		const header = create.div(container,"",["flex","flex-col-reverse","md:flex-row","text-2xl","w-full",'min-h-75',"gap-2" ]);
			const ldiv = create.div(header,"", ["md:w-full","flex","flex-col","justify-center","items-center"]);
				const contheader = create.div(ldiv,"",["w-[40vw]"])
				const title = create.dynoDiv(contheader,"h1","",["text-6xl","font-bold","py-2"]);
				const position = create.dynoDiv(contheader,"span","",["text-md","font-bold"]);

				title.textContent = item.name;
				position.textContent = item.position;

			const rdiv = create.div(header,"", ["md:w-100"]);
				const img = create.dynoDiv(rdiv,"img","",["cover","w-[302px]","h-[300px]","md:rounded-full"]);
				img.src = item.imgURL

		const body = create.div(container,"",["flex","text-2xl","w-full","h-[100vh]"]);
			const bdiv = create.div(body,"", ["bg-green-500","w-full","h-100"]);

	})
	
}

export default Profile;