import CreateElement from "../../../helper/CreateElement.js"


function Profile(container){
	const create = new CreateElement();

	const header = create.div(container,"",["flex","flex-col-reverse","md:flex-row","text-2xl","w-full",'min-h-75',"gap-2"]);
		const ldiv = create.div(header,"", [ "bg-red-500","md:w-full"]);
		const rdiv = create.div(header,"", [ "bg-blue-500","md:w-100"]);

	const body = create.div(container,"",["flex","text-2xl","w-full","h-[100vh]"]);
		const bdiv = create.div(body,"", ["bg-green-500","w-full","h-100"]);

	
}

export default Profile;