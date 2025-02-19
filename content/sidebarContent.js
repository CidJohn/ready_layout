export const sidebarContent = [
	{
		classGroup:["flex","md:flex-col", "border", "h-full", "md:px-3"],
		node:[
			{
				parent:"Home",
				path:"",
				classGroup:["font-bold","pl-2"],
				children:[
					{
						to:"/",
						name:"First Child"
					},
					{
						to:"/",
						name:"Second Child"
					}
				]
			},
			{
				parent:"About",
				path:"about",
				classGroup:["font-bold","pl-2"],
				children:[
					{
						to:"/",
						name:"First Child"
					},
					{
						to:"/",
						name:"Second Child"
					}
				]
			},
			{
				parent:"Contact",
				path:"contact",
				classGroup:["font-bold","pl-2"],
				children:[
					{
						to:"/",
						name:"First Child"
					},
					{
						to:"/",
						name:"Second Child"
					}
				]
			}
		]
	}
]