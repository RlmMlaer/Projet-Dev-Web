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
window.addEventListener('scroll', () => {
    var scrollTopButton = document.getElementById("scroll-top");
    if (this.window.pageYOffset > 200)
        scrollTopButton.style.display = 'block';
    else
        scrollTopButton.style.display = 'none';
});

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