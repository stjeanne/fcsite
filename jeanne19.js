// jeanne19.js -- helpful functions and such for jeanne's dumb site

let SI = new Object;

let loadSiteData = function() {
	$.getJSON("stuffido.json", function(res) {
		SI = res;
		setPage('About');
	});
};

let setPage = function(pg) {
	console.log("setPage sets page to " + pg);
	loadPageChunk(pg);
}


let loadPageChunk = function(pg) {
	console.log("entered loadPageChunk, page is " + pg);

	$("#gallery").html("<h1>" + pg + "</h1>");

	for (i in SI[pg]) {

		if (pg == 'Prose') {
			$("#gallery").append("<h2>this one is complex</h2>");
			console.log("iterate through prose stuff");
		}

		else {

			let linkhtml = "";
			let endlink = "";

			if (SI[pg][i].link != undefined) { 
				linkhtml = "<a href=\"" + SI[pg][i].link + "\">";
				endlink = "</a>";
			}


			if (SI[pg][i].title != undefined) { $("#gallery").append("<h2>" + linkhtml + SI[pg][i].title + endlink + "</h2>"); }
			
			$("#gallery").append("<p>" + parseLinks(SI[pg][i].content).toString + "</p>");
		}
	}
}

let parseLinks = function(txt) {


	// grab substrings of everything between brackets and push into an array or something
	// go through the array and process those substrings
	// replace each substring in the original string and return

	let working = txt.match(/\[.*?\]/g);

	working.forEach(function(s) {

		let c = s;

		c.replace(/\[/g, "");
		c.replace(/\]/g, "");

		let p = c.split("|");

		console.log(p);
		let _content = p[0];
		let _link = p[1];

		let _final = "<a href=\"" + _link + "\">" + _content + "</a>";

		console.log(_final);

		txt.replace(s, _final);
	});

	return txt.toString();
}