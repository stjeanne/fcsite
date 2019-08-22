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
			$("#gallery").append("<p>" + SI[pg][i].content + "</p>");
		}
	}
}