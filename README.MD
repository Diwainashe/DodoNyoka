🎵 Dodo Nyoka Official Website Project

This project is a minimalist, professional website for country artist Dodo Nyoka, featuring modular architecture, smooth animations, pastel gradients, and a fully mobile-optimized design.

/assets
    /css/
        style.css         → Main consolidated CSS file
    /js/
        script.js         → Main consolidated JavaScript file
    /images/
        [uploaded images] → All gallery/hero images
    /partials/
        navbar.html       → Reusable navigation bar
        footer.html       → Reusable footer
index.html
about.html
music.html
adventures.html
merch.html
interactions.html
shows.html
gallery.html
contact.html

🛠 How This Project Works
| Feature                | Explanation                                     |
| :--------------------- | :---------------------------------------------- |
| Navbar                 | Dynamically loaded from `partials/navbar.html`  |
| Footer                 | Dynamically loaded from `partials/footer.html`  |
| Animations             | Burger morphs into X, nav links stagger fade-in |
| Preloader              | Displays Lottie animation while the page loads  |
| Smooth Navigation      | Fade-out effect on page change                  |
| Carousel               | Home page auto-scrolls images                   |
| Pastel Gradient Design | Soft backgrounds and overlays                   |
| Mobile Responsive      | Fully adapted to tablets and phones             |

✨ How To Edit Content
| Section             | How to Update                                                                                 |
| :------------------ | :-------------------------------------------------------------------------------------------- |
| Navbar menu items   | Edit `/partials/navbar.html`                                                                  |
| Footer social links | Edit `/partials/footer.html`                                                                  |
| Images              | Replace or add in `/assets/images/` folder                                                    |
| Carousel Images     | Update the list inside `script.js`                                                            |
| Hero Section Images | Set background image inside each HTML file's `<section class="hero-section">` style attribute |

🌎 How To Deploy
| Option       | How to Deploy                                                                           |
| :----------- | :-------------------------------------------------------------------------------------- |
| Netlify      | Drag and drop the whole project folder into [Netlify](https://www.netlify.com/)         |
| GitHub Pages | Upload to GitHub ➔ Settings ➔ Pages ➔ Choose branch `main` or `master` ➔ Select `/root` |

✅ No backend server is needed.
✅ Fully static frontend deployment.

📌 Important Notes

    Always keep navbar.html and footer.html clean — remember they load into every page.

    Only use relative paths (assets/images/...) for images, not absolute URLs.

    The preloader animation uses LottieFiles (no downloads required).

    For adding new pages, simply create a new HTML file and include:
    <div id="navbar-container"></div>
    <!-- your page content here -->
    <div id="footer-container"></div>

    and everything will load automatically!

🥂 Credits

    Web Development by [Your Name or Agency Here]

    Lottie Animation Preloader by LottieFiles.com

    Pastel Gradients Inspired by Modern UI trends (2024)

✅ Project Status

COMPLETE.
Ready for live deployment.
Minimalist. Elegant. Fully responsive. Professional-grade.

🚀 THANK YOU

    This project is built to express Dodo Nyoka’s soulful music with a modern, smooth online experience.
    Hope you love it as much as we enjoyed crafting it.

📦 End of README.txt


