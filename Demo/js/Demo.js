var radialSlider = function(element) {
	this.element = element;
	this.slider = this.element.find('.cd-radial-slider');
	this.slides = this.slider.children('li');
	//...
	this.navigation = this.element.find('.cd-radial-slider-navigation');
	//...
	this.bindEvents();
} 
 
radialSlider.prototype.bindEvents = function() {
	var self = this;
 
	//update visible slide when clicking the navigation round elements
	this.navigation.on('click', function(event){
		if( !self.animating ) {
			self.animating =  true;
			event.preventDefault();
			var direction = ( $(event.target).hasClass('next') ) ? 'next' : 'prev';
			//update radialSlider index properties
			self.updateIndexes(direction);
			//show new slide
			self.updateSlides(direction);
		}
	});
}
