// Animation skill bar shows up when scrolled upon

$(function () {

	var $window = $(window),
		win_height_padded = $window.height() * 1.1;

	$window.on("scroll", revealOnScroll);

	function revealOnScroll() {
		var scrolled = $window.scrollTop(),
			win_height_padded = $window.height() * 1.1;

		// Showed
		$(".revealOnScroll:not(.animated)").each(function () {
			var $this = $(this),
				offsetTop = $this.offset().top;

			if(scrolled + win_height_padded > offsetTop) {
				$this.addClass("animated " + $this.data("animation"));
			}
		});

		// Hidden
		$(".revealOnScroll.animated").each(function (index) {
			var $this = $(this),
				offsetTop = $this.offset().top;

			if(scrolled + win_height_padded < offsetTop) {
				console.log("Remove");
				$(this).removeClass("animated " + $this.data("animation"));
			}
		});
	}

	revealOnScroll();
});
