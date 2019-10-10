// Show/Hide the mobile navigation
( function() {
	var navTrigger = document.getElementById( 'nav-trigger' );
	var navWrapper = document.getElementById( 'nav-wrapper' );

	navTrigger.addEventListener( 'click', function() {
		if ( navWrapper.className == 'hide' ) {
			navWrapper.className = navWrapper.className.replace( /\bhide\b/g, 'show' );
		} else {
			navWrapper.className = navWrapper.className.replace( /\bshow\b/g, 'hide' );
		}
	} );
}() );

var elements = document.getElementsByTagName( 'script' )

Array.prototype.forEach.call( elements, function( element ) {
	if ( element.type.indexOf( 'math/tex' ) != -1 ) {
		// Extract math markdown
		var textToRender = element.innerText || element.textContent;

		// Create span for KaTeX
		var katexElement = document.createElement( 'span' );

		// Support inline and display math
		if ( element.type.indexOf( 'mode=display' ) != -1 ){
			katexElement.className += "math-display";
			textToRender = '\\displaystyle {' + textToRender + '}';
		} else {
			katexElement.className += "math-inline";
		}

		katex.render( textToRender, katexElement );
		element.parentNode.insertBefore( katexElement, element );
	}
} );