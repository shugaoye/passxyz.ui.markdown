import * as SimpleMDE from "easymde";

const initialOptions = {
	autofocus: true,
	element: document.getElementById("demo1"),
	hideIcons: ["guide", "side-by-side", "link", "image", "quote", "fullscreen", "preview"],
	spellChecker: false,
	lineWrapping: true,
	status: false
};

this.simpleMde = new SimpleMDE(initialOptions);
this.simpleMde.toggleFullScreen();
this.simpleMde.togglePreview();

(<any>window).MyMDE = this.simpleMde;