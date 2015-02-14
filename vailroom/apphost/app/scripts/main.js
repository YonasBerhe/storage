// the following will allow will make my first dropdown list hide the menu
$(document.body).on('click', '.dropdown-menu', function(event){
	var $target = $(event.currentTarget);

	$target.closet('.btn-group')
	.find( '[data-bind="label"]' ).text( $target.text() )
         .end()
      .children( '.dropdown-toggle' ).dropdown( 'toggle' );
 
   return false;  
});