class CreateElement{
	constructor(){}

	doc(elem){
		return document.createElement(elem);
	}
	div(container,idName,classGroup){
		const element = this.doc("div")
		element.id = idName;
		if(classGroup.length > 0){
			classGroup.forEach((item) => element.classList.add(item))
		}
		container.appendChild(element);

		return element
	}
	dynoDiv(container, element,idName,classGroup){
		const elem = this.doc(element);
		elem.id = idName;
		if(classGroup.length > 0){
			classGroup.forEach((item) => elem.classList.add(item))
		}
		container.appendChild(elem);

		return elem
	}
}

export default CreateElement;