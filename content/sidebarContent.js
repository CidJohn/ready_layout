export const sidebarContent = [
	{
		classGroup:["flex","md:flex-col", "border", "h-full", "md:px-3"],
		node:[
			{
				parent:"Home",
				path:"",
				classGroup:["hidden","font-bold","pl-2","md:block"],
				children:[
					{
						to:"/",
						name:"First Child"
					},
					{
						to:"/",
						name:"Second Child"
					},
					{
						to:"/",
						name:"Third Child"
					},
					{
						to:"/",
						name:"Fourth Child"
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