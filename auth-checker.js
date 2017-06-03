/*
 * authCheck(isPublic: boolean, jumpToPage: String)
 * if the page is public && is authed, jump to a protected home page
 * if the page is public && is not authed, stay on the same page
 * if the page is not public && is authed, stay on the same page
 * if the page is not public && is not authed, go to the public login page
 */
function authCheck(isPublic, jumpToPage) {
	 // check if already authenticated
 if(  getCookie(config.cookieName) != undefined ) { // auth'd, we're on public page
 	if(isPublic) { // go to a protected main page since we're already auth'd
 		window.location.href = jumpToPage;
 	}
} else { // no cookies present, not auth'd
 	// go to login page since this page is protected
 	if(!isPublic) {
 		window.location.href = jumpToPage;
 	}
 }
}

function jumpTo(page) {
	window.location.href = page;
}
