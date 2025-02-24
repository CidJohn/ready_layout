export const NavbarContent = [
  {
    id: "",
    classGroup: ["flex", "justify-center", "flex-wrap", "md:flex-row"],
    navIcon: [
      {
        id: "",
        classGroup: ["flex", "pl-2", "items-center", "w-25"],
        btn: [
          {
            to: "/",
            txtName: "SampleIcon",
            imgURL: "https://cdn-icons-png.flaticon.com/512/9908/9908191.png",
            classGroup: ["h-8"],
            spanClass: ["md:flex", "p-2", "font-bold", "hidden"],
          },
        ],
      },
    ],
    hbIcon: [
      {
        id: "btnToggleNav",
        classGroup: ["flex", "pl-2", "items-center", "hover:border-gray-400"],
        type: "button",
        btn: [
          {
            txtName: "Open Toggle Menu",
            imgURL: ` <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
						        </svg>`,
            classGroup: ["flex", "p-2", "md:hidden", "items-center"],
          },
        ],
      },
    ],
    navCont: [
      {
        id: "navbarItems",
        classGroup: [
          "w-75",
          "md:flex",
          "justify-center",
          "items-center",
          "border-gray-400",
          "hidden",
        ],
        ulClass: ["flex", "flex-col", "md:flex-row", "gap-1", "px-4", "py-3"],
        liClass: ["flex"],
        btn: [
          {
            id: "btnHome",
            to: "#/" || "/",
            txtName: "Home",
            classGroup: [
              "w-100",
              "md:w-auto",
              "text-gray-800",
              "font-medium",
              "rounded-md",
              "py-2",
              "px-3",
            ],
          },
          {
            id: "btnAbout",
            to: "#/about",
            txtName: "About",
            classGroup: [
              "w-100",
              "md:w-auto",
              "text-gray-800",
              "font-medium",
              "rounded-md",
              "py-2",
              "px-3",
            ],
          },
          {
            id: "btnContact",
            to: "#/contact",
            txtName: "Contact",
            classGroup: [
              "w-100",
              "md:w-auto",
              "text-gray-800",
              "font-medium",
              "rounded-md",
              "py-2",
              "px-3",
            ],
          },
        ],
      },
    ],
  },
];
