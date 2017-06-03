function authCheck(isPublic, jumpToPage) {
	 // check if already authenticated
 if(  getCookie(config.cookieName) != undefined ) { 
 	if(isPublic) {
 		window.location.href = jumpToPage;
 	}
 } else {
 	// go to login page
 	if(!isPublic) {
 		window.location.href = jumpToPage;
 	} 
 }
}

function jumpTo(page) {
	window.location.href = page;
}