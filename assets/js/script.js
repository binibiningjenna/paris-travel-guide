// Generate star rating
function generateStar(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            starsHTML += `<i class="bi bi-star-fill me-1" style="color:#FFC300"></i>`;
        } else if (rating >= i - 0.5) {
            starsHTML += `<i class="bi bi-star-half me-1" style="color:#FFC300"></i>`;
        } else {
            starsHTML += '<i class="bi bi-star me-1" style="color:#FFC300"></i>';
        }
    }
    return starsHTML;
}

// Card loader for all pages
function loadCards(containerId, dataArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    dataArray.forEach((item) => {
        let content = "";

        if (item.images) {
            const carouselId = `carousel-${containerId}-${item.id}`;
            let indicators = "";
            let slides = "";

            item.images.forEach((img, i) => {
                indicators += `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" ${i === 0 ? 'aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>`;
                slides += `
                    <div class="carousel-item ${i === 0 ? 'active' : ''}">
                        <img src="${img}" class="d-block w-100" alt="${item.title}">
                    </div>
                `;
            });

            content = `
                <div id="${carouselId}" class="carousel slide">
                    <div class="carousel-indicators">${indicators}</div>
                    <div class="carousel-inner">${slides}</div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            `;
        }

        const card = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mt-2 d-flex">
                <div class="card feature p-3 d-flex flex-column" style="min-height: 100%;">
                    ${content}
                    <div class="card-body p-0 pt-3 d-flex flex-column">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text text-justify flex-grow-1">${item.description}</p>
                    ${item.rating ? `<div class="rating mt-auto">${generateStar(item.rating)}</div>` : ""}
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += card;
    });
}

// Dynamic page loader
function loadPage(pageName) {
    const container = document.getElementById("maincontent");
    const features = document.getElementById("features");
    document.getElementById("home").style.display = "none";

    fetch(`pages/${pageName}.html`)
        .then((res) => res.text())
        .then((data) => {
            container.innerHTML = data;
            features.style.display = "none";
            window.scrollTo({ top: container.offsetTop, behavior: "smooth" });

            //  Load content for specific page
            switch (pageName) {
                case "cuisine":
                    loadCards("cuisine-cards", cuisines);
                    break;
                case "landmark":
                    loadCards("landmark-cards", landmarks);
                    break;
                case "park":
                    loadCards("park-cards", parks);
                    break;
                case "travel":
                    break;
                default:
                    break;
            }
        })
        .catch((err) => {
            container.innerHTML = "<p class='text-danger'>Error loading content.</p>";
            console.error(err);
        });
}

// Reset to homepage
function showFeatures() {
    document.getElementById("maincontent").innerHTML = "";
    document.getElementById("features").style.display = "block";
    document.getElementById("home").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Weekly forecast widget
!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');

// Collapse the navbar when clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        const bsCollapse = bootstrap.Collapse.getInstance(navbar);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});