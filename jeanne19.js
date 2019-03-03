// jeanne19.js -- helpful functions and such for jeanne's dumb site

let SI = new Object;

let loadSiteData = function() {
	$.getJSON("stuffido.json", function(res) {
		SI = res;
	});
};

let setPage = function(pg) {
	console.log("setPage sets page to " + pg);
	loadPageChunk(pg);
}

let initSite = function() {
	loadSiteData();
	setPage('bio'); // default page setting
}

let loadPageChunk = function(pg) {
	console.log("entered loadPageChunk");
	for (i in SI.pg) {
		console.log(i);
	}
}