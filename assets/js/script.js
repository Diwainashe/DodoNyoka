// Smooth fade-in on page load
document.body.style.opacity = 0;

window.addEventListener("load", () => {
	setTimeout(() => {
		const preloader = document.getElementById("preloader-overlay");
		preloader.style.opacity = "0";
		preloader.style.pointerEvents = "none";

		setTimeout(() => {
			document.body.style.transition = "opacity 0.5s ease";
			document.body.style.opacity = 1;
		}, 300);
	}, 800);
});

// Load Navbar and Footer Dynamically
Promise.all([
	fetch("partials/navbar.html").then((res) => res.text()),
	fetch("partials/footer.html").then((res) => res.text()),
]).then(([navbarData, footerData]) => {
	document.getElementById("navbar-container").innerHTML = navbarData;
	document.getElementById("footer-container").innerHTML = footerData;

	// After loading Navbar, attach burger menu events
	const burger = document.getElementById("burger");
	const nav = document.getElementById("nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		burger.classList.toggle("toggle");

		// Animate Links Staggered
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});
	});

	// Smooth page fade when navigating links
	const links = document.querySelectorAll("a[href]");
	links.forEach((link) => {
		link.addEventListener("click", function (e) {
			const target = this.getAttribute("href");
			if (target && !target.startsWith("http")) {
				e.preventDefault();
				document.body.classList.add("fade-out");
				setTimeout(() => {
					window.location.href = target;
				}, 500);
			}
		});
	});
});

// Carousel Auto-Slide
if (document.getElementById("carousel")) {
	const carouselContainer = document.getElementById("carousel");
	const carouselImages = ["31.jpg", "33.jpg", "34.jpg", "36.jpg", "38.jpg"];

	let slides = [];

	carouselImages.forEach((imgName) => {
		const img = document.createElement("img");
		img.src = `assets/images/${imgName}`;
		img.alt = "Dodo Nyoka Image";
		carouselContainer.appendChild(img);
		slides.push(img);
	});

	let current = 0;

	function updateCarousel() {
		slides.forEach((img, idx) => {
			img.className = "";
			if (idx === current) {
				img.classList.add("active");
			} else if (idx === (current - 1 + slides.length) % slides.length) {
				img.classList.add("prev");
			} else if (idx === (current + 1) % slides.length) {
				img.classList.add("next");
			}
		});
	}

	updateCarousel();

	// Auto-slide every 4 seconds
	let carouselInterval = setInterval(() => {
		current = (current + 1) % slides.length;
		updateCarousel();
	}, 4000);

	// Manual Controls
	const prevBtn = document.getElementById("prev-btn");
	const nextBtn = document.getElementById("next-btn");

	prevBtn.addEventListener("click", () => {
		current = (current - 1 + slides.length) % slides.length;
		updateCarousel();
		resetInterval();
	});

	nextBtn.addEventListener("click", () => {
		current = (current + 1) % slides.length;
		updateCarousel();
		resetInterval();
	});

	function resetInterval() {
		clearInterval(carouselInterval);
		carouselInterval = setInterval(() => {
			current = (current + 1) % slides.length;
			updateCarousel();
		}, 4000);
	}
}
