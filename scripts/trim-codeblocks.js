function trimBySelector(selector) {
	document.querySelectorAll(selector).forEach(
		element => 
		element.innerHTML = element.innerHTML.trim()
	)
}

trimBySelector("pre > code");
trimBySelector("pre");