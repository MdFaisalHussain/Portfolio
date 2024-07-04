/*--------------------*\
    # Global
\*--------------------*/
const header = document.querySelector(".header"),
    nav = document.querySelector(".nav"),
    navOverlay = document.querySelector(".nav .overlay"),
    navOpen = document.querySelector(".nav-open"),
    navClose = document.querySelector(".nav-close"),
    navLinks = document.querySelectorAll(".nav-link"),
    contactForm = document.querySelector(".contact-form");

/*--------------------*\
    # Functions
\*--------------------*/
// Header Toggle Initial Call Function
const toggleHeader = () => {
    if(window.scrollY >= 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Navbar Toggle Initial Call Function
const toggleNav = (() => {
    navOpen.addEventListener("click", () => {
        nav.classList.add("active");
    });

    navClose.addEventListener("click", () => {
        nav.classList.remove("active");
    });
    
    navOverlay.addEventListener("click", (e) => {
        if(!e.target.classList.contains("overlay")) return
        nav.classList.remove("active");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            nav.classList.remove("active");
            
            navLinks.forEach(newLink => {
                newLink.classList.remove("active");
            });
            
            e.target.classList.add("active");
        });
    });
})();


const randTheme = () => {
    const themes = ["green", "blue", "purple", "orange", "pink", "light-orange", "navy", "red", "dark-blue"];
    const index = Math.floor(Math.random() * themes.length);
    
    const theme = themes[index];
    
    document.querySelector(":root").setAttribute("data-theme-color", theme)
    
    console.log(index, theme);
};

// Handle form submit
const submitForm = (e) => {
    e.preventDefault();
    
    const rand = Math.random();
    
    const messageSuccess = document.querySelector(".contact-section .message.success"),
         messageError = document.querySelector(".contact-section .message.success");
    
    rand < 0.5 ? messageSuccess.style.display = "inline" : messageError.style.display = "inline"
};

/*--------------------*\
    # Events
\*--------------------*/

window.addEventListener("scroll", () => {
    toggleHeader();
});

window.addEventListener("load", () => {
    randTheme();
});

contactForm.addEventListener("submit", () => {
    submitForm(e);
});

console.log(document.documentElement)