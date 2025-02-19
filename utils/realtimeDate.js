import CreateElement from "../helper/CreateElement.js"

export const realtimeDate = (container) => {
	const createElem = new CreateElement();

  	if (!container) {
        console.error("Container not found!");
        return;
    }
	const txtDate = createElem.div(container, "", ["font-bold"]);
	const updateDate = () => {
		 const now = new Date();
        const formattedDate = now.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
        txtDate.textContent = formattedDate;
	}

	updateDate();
	setInterval(updateDate,1000)
}