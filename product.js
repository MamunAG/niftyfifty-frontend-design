window.addEventListener('load', () => {
    //variable
    const searchInput = document.getElementById('txtSearchProduct');
    const searchContainer = document.getElementById('searchContainer');
    const searchCards = document.querySelectorAll('.search-card');
    //end variable

    searchCards.forEach(e => {
        e.addEventListener('click', () => window.location.href = '/pages/otherPage.html')
    });

    document.addEventListener('click', (e) => {
        if (e.target != searchInput) {
            searchContainer.style.display = "none";
        }
    });

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length > 2) {
            searchContainer.style.display = "block";
        }
        if (value.length == 0) {
            searchContainer.style.display = "none";
        }
    })

    const slider = tns({
        container: '#productSlider',
        items: 1,
        slideBy: "page",
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        nav: true,
        autoplay: true,
        loop: true,
        lazyload: true,
        navContainer: false,
        responsive: {
            640: {
                items: 2,
            },

            768: {
                items: 4,
            }
        }
    });

    const walletSlider = tns({
        container: '#walletSlider',
        items: 1,
        slideBy: "page",
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        nav: true,
        autoplay: true,
        loop: true,
        lazyload: true,
        navContainer: false,
        responsive: {
            640: {
                items: 2,
            },

            768: {
                items: 4,
            }
        }
    });
});