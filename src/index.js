/**************** Slider/Hero ****************/
document.addEventListener("DOMContentLoaded", () => {
	const slides = document.querySelectorAll(".carousel-open");
	const bullets = document.querySelectorAll(".carousel-bullet");
	let currentSlide = 0;

	function goToSlide(index) {
		slides[currentSlide].checked = false;
		bullets.forEach((bullet) => bullet.setAttribute("aria-current", "false"));
		currentSlide = index;
		slides[currentSlide].checked = true;
		bullets[currentSlide].setAttribute("aria-current", "true");
	}

	bullets.forEach((bullet, index) => {
		bullet.addEventListener("click", () => goToSlide(index));
	});

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
		goToSlide(currentSlide);
	}

	setInterval(nextSlide, 8000);
});
