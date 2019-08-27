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


	$("#gallery").html("");


	if (pg == 'Writing') {

		for (i in SI[pg]) {

			$("#gallery").append("<h1>" + i + "</h1>")

			for (j in SI[pg][i]) {

				let x = SI[pg][i][j];

				if (x.title != undefined) { $("#gallery").append(makeHeaderLink(x)); }
				$("#gallery").append("<p>" + parseLinks(x.content) + "</p>");
			}
		}
	}

	else {

		$("#gallery").append("<h1>" + pg + "</h1>"); 

		for (i in SI[pg]) {

			if (SI[pg][i].title != undefined) { $("#gallery").append(makeHeaderLink(SI[pg][i])); }
			
			$("#gallery").append("<p>" + parseLinks(SI[pg][i].content) + "</p>");
		}
	}		
}

let parseLinks = function(txt) {


	txt = txt.toString();

	// grab substrings of everything between brackets and push into an array or something
	// go through the array and process those substrings
	// replace each substring in the original string and return

	let working = txt.match(/\[.*?\]/g);

	if(working != null) {				// ie if we have some links
		working.forEach(function(s) {

			let c = s;

			c = c.replace(/\[/g, "");
			c = c.replace(/\]/g, "");

			let p = c.split("|");

			let _content = p[0];
			let _link = p[1];

			let _final = "<a href=\"" + _link + "\">" + _content + "</a>";

			txt = txt.replace(s, _final);
		});
	}

	return txt;
}

let makeHeaderLink = function(o) {			// takes a JSON object

	let linkhtml = "";
	let r = "";

	if (o.link != undefined) {
		linkhtml = "<a href=\"" + o.link + "\">";
	}

	if (o.title != undefined) {
		r = "<h2>" + linkhtml + o.title + "</a></h2>";
	}

	return r;
}