var PassXYZ_Notes = require ('simplemde');

var Notes = new PassXYZ_Notes({
    autofocus: true,
    element: document.getElementById("demo1"),
    hideIcons: ["guide", "heading", "side-by-side"],
    spellChecker: false,
    lineWrapping: true,
});

Notes.toggleFullScreen();
Notes.togglePreview();