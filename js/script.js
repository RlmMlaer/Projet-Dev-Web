function loadImage(){
    const preview = document.getElementById("profil_sub_avatar");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        preview.style.backgroundImage = "url(" + reader.result + ")";
    })
    if (file)
        reader.readAsDataURL(file);
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

var blog = document.getElementById("blog");
blog.addEventListener("mouseenter", () => {
    var arrow = document.querySelector(".bxs-down-arrow");
    arrow.classList.remove("bxs-down-arrow");
    arrow.classList.add("bxs-up-arrow");
})
blog.addEventListener("mouseleave", () => {
    var arrow = document.querySelector(".bxs-up-arrow");
    arrow.classList.remove("bxs-up-arrow");
    arrow.classList.add("bxs-down-arrow");
})

const initSlider = () => {
    const carousel = document.querySelector(".carousel-inner");
    const slideButtons = document.querySelectorAll(".slide-button");
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = carousel.clientWidth * direction;
            carousel.scrollBy({ left : scrollAmount, behavior: 'smooth'})
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = carousel.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = carousel.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    carousel.addEventListener('scroll', () => {
        handleSlideButtons();
    });
}

window.addEventListener('scroll', () => {
    var scrollTopButton = document.getElementById("scroll-top");
    if (this.window.pageYOffset > 200)
        scrollTopButton.style.display = 'block';
    else
        scrollTopButton.style.display = 'none';
});

function validationForm(){
    const form = document.getElementsByTagName("form")[0];
    var surname = document.getElementById("surname");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    surname.setCustomValidity("Veuillez saisir votre nom.");
    name.setCustomValidity("Veuillez saisir votre prénom.");
    email.setCustomValidity("Veuillez entrer une adresse email valide.");
    email.setCustomValidity("La longueur minimum de votre message doit être de 25 caractères.");

    surname.addEventListener("keyup", () => {
        if (surname.value.trim() == '')
            surname.setCustomValidity("Veuillez saisir votre nom.");
        else if (surname.value.length < 3)
            surname.setCustomValidity("Votre nom doit contenir au moins 3 caractères.");
        else
            surname.setCustomValidity("");
    })

    name.addEventListener("keyup", () => {
        if (name.value.trim() == '')
            name.setCustomValidity("Veuillez saisir votre prénom.");
        else if (name.value.length < 3)
            name.setCustomValidity("Votre prénom doit contenir au moins 3 caractères.");
        else
            name.setCustomValidity("");
    })

    email.addEventListener("keyup", () => {
        if (!emailRegExp.test(email) || email.value.length === 0)
            email.setCustomValidity("Veuillez entrer une adresse email valide.");
        else
            email.setCustomValidity("");
    })

    message.addEventListener("keyup", () => {
        if (message.value.length < 25)
            email.setCustomValidity("La longueur minimum de votre message doit être de 25 caractères.");
        else if (message.value.length > 1000)
            email.setCustomValidity("La longueur de votre message ne doit pas dépasser 1000 caractères.");
        else
            email.setCustomValidity("");
    })

    form.addEventListener("submit", function(event) {
        let errors = 0;

        if (surname.value.trim() === '' || surname.value.length < 3)
            errors++;
        if (name.value.trim() === '' || surname.value.length < 3)
            errors++;
        if (!emailRegExp.test(email) || email.value.length === 0)
            errors++;
        if (message.value.length < 25 || message.value.length > 1000)
            errors++;

        if (errors > 0)
            event.preventDefault();
    })
}