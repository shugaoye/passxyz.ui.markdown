import * as SimpleMDE from "easymde";

const initialOptions = {
	autofocus: true,
	element: document.getElementById("demo1"),
	hideIcons: ["guide", "heading", "side-by-side", "link", "image", "quote"],
	spellChecker: false,
	lineWrapping: true,
};

this.simpleMde = new SimpleMDE(initialOptions);
this.simpleMde.toggleFullScreen();
this.simpleMde.togglePreview();

