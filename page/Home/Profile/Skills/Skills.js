import CreateElement from "../../../../helper/CreateElement.js";

function Skills(container, data) {
  const create = new CreateElement();

  data.map((item) => {
    const bcont = create.div(container, "", [
      "flex",
      "gap-2",
      "w-[50vw]",
      "flex-col",
    ]);
    const parentDiv = create.div(bcont, "", [
      "flex",
      "gap-2",
      "items-center",
      "w-[50vw]",
    ]);
    const titleCont = create.div(parentDiv, "", [
      "text-md",
      "font-bold",
      "w-100",
    ]);
    titleCont.textContent = item.title;
    const barCont = create.div(parentDiv, "", [
      "w-full",
      "bg-gray-400",
      "rounded-full",
    ]);
    const bar = create.div(barCont, "", [
      "bg-blue-600",
      "text-xs",
      "font-medium",
      "text-blue-100",
      "text-center",
      "p-0.5",
      "leading-none",
      "rounded-full",
    ]);

    bar.textContent = `${item.percent}%`;
    bar.style.width = `${item.percent}%`;

    if (item.groupSkills && item.groupSkills.length > 0) {
      const groupContainer = create.div(bcont, "", ["mt-2", "pl-5"]);

      item.groupSkills.forEach((subItem) => {
        const subSkillRow = create.div(groupContainer, "", [
          "flex",
          "items-center",
          "gap-2",
        ]);
        const subTitleCont = create.div(subSkillRow, "", [
          "text-sm",
          "font-semibold",
          "w-100",
        ]);
        subTitleCont.textContent = subItem.title;

        const subBarCont = create.div(subSkillRow, "", [
          "w-full",
          "bg-gray-300",
          "rounded-full",
        ]);
        const subBar = create.div(subBarCont, "", [
          "bg-green-500",
          "text-xs",
          "font-medium",
          "text-green-100",
          "text-center",
          "p-0.5",
          "leading-none",
          "rounded-full",
        ]);
        subBar.textContent = `${subItem.percent}%`;
        subBar.style.width = `${subItem.percent}%`;
      });
    }
  });
}

export default Skills;
