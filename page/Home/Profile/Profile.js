import CreateElement from "../../../helper/CreateElement.js";
import { infoContent } from "../../../content/infoContent.js";
import { realtimeDate } from "../../../utils/realtimeDate.js";
import Skills from "./Skills/Skills.js";

function Profile(container) {
  const create = new CreateElement();

  infoContent.map((item) => {
    const header = create.div(container, "", [
      "flex",
      "flex-col-reverse",
      "md:flex-row",
      "text-2xl",
      "w-full",
      "min-h-100",
      "gap-4",
      "md:justify-between",
      "items-center",
      "p-4",
      "border",
    ]);
    const ldiv = create.div(header, "", [
      "w-full",
      "flex",
      "flex-col",
      "justify-center",
      "items-center",
      "text-center",
      "md:text-left",
    ]);
    const contheader = create.div(ldiv, "", ["md:w-[40vw]", "w-[80vw]"]);
    const title = create.dynoDiv(contheader, "h1", "", [
      "text-3xl",
      "md:text-4xl",
      "font-bold",
      "py-2",
      "text-gray-600",
    ]);
    const position = create.dynoDiv(contheader, "span", "", [
      "text-md",
      "font-bold",
      "text-gray-500",
    ]);

    title.textContent = item.name;
    position.textContent = item.position;

    const rdiv = create.div(header, "", [
      "w-100",
      "flex",
      "justify-center",
      "md:justify-start",
    ]);
    const img = create.dynoDiv(rdiv, "img", "", [
      "cover",
      "w-[200px]",
      "h-[200px]",
      "md:rounded-full",
      "border",
      "shadow-md",
      "md:w-[302px]",
      "md:h-[300px]",
    ]);
    img.src = item.imgURL;

    const body = create.div(container, "", [
      "flex",
      "w-full",
      "h-auto",
      "mt-6",
    ]);
    const bdiv = create.div(body, "", [
      "border",
      "w-full",
      "h-32",
      "rounded-lg",
      "min-h-[80vh]",
      "px-10",
      "py-5",
    ]);
    const contDiv = create.div(bdiv, "", ["w-full"]);
    item.objectives.map((obj) => {
      const hdCont = create.div(contDiv, "", ["text-2xl", "font-bold"]);
      hdCont.textContent = obj.title + ":";
      const pgraph = create.dynoDiv(contDiv, "p", "", [
        "text-md",
        "font-italic",
        "indent-8",
        "w-[60vw]",
      ]);
      pgraph.textContent = obj.paragraph;
    });
    const skillsDiv = create.div(bdiv, "", [
      "flex",
      "flex-col",
      "gap-2",
      "justify-center",
      "mt-3",
    ]);
    const stitle = create.dynoDiv(skillsDiv, "h1", "", [
      "text-2xl",
      "font-bold",
    ]);
    stitle.textContent = "Skills: ";
    Skills(skillsDiv, item.skills);
  });
}

export default Profile;
