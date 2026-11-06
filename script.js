
const searchButton = document.getElementById("search-button");
const searchPanel = document.getElementById("search-panel");

searchButton.addEventListener("click", function () {
    searchPanel.classList.toggle("open");
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-area")) {
        searchPanel.classList.remove("open");
    }
});


const pages = [
    {
        title: "Home",
        url: "index.html",
        words: "Iran cities Tehran Isfahan Shiraz Persepolis introduction"
    },
    {
        title: "History",
        url: "history.html",
        words: "history ancient Persia empire Cyrus archaeology monuments"
    },
    {
        title: "Information",
        url: "information.html",
        words: "culture Nowruz food language Farsi art traditions crafts"
    },
    {
        title: "Geography",
        url: "geography.html",
        words: "mountains deserts forests coastline Caspian Sea Persian Gulf map"
    },
    {
        title: "Photography - Food",
        url: "photography.html#food",
        words: "food rice kebab stew sweets Iranian cuisine"
    },
    {
        title: "Photography - Places",
        url: "photography.html#places",
        words: "places cities architecture nature Tehran Isfahan Shiraz"
    }
];

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";

    if (query === "") {
        searchResults.textContent = "Please type a search word.";
        return;
    }

    const matches = pages.filter(function (page) {
        return (page.title + " " + page.words)
            .toLowerCase()
            .includes(query);
    });

    if (matches.length === 0) {
        searchResults.textContent = "No matching pages found.";
        return;
    }

    matches.forEach(function (page) {
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.title;
        searchResults.appendChild(link);
    });
});


const foods = [
    ["food1.JPG", "Zereshk Polo ba Morgh (Persian Barberry Rice with Chicken)"],
    ["food2.JPG", "Ghormeh Sabzi (Persian Herb Stew)"],
    ["food3.JPG", "Loobia Polo (Persian Green Bean Rice)"],
    ["food4.JPG", "Fesenjan (Persian Pomegranate and Walnut Stew)"],
    ["food5.JPG", "Dolmeh (Stuffed Vegetables or Grape Leaves)"],
    ["food6.JPG", "Havij Polo (Persian Carrot Rice)"],
    ["food7.JPG", "Gheimeh (Persian Split Pea Stew)"],
    ["food8.JPG", "Persian Joojeh Kebab (Grilled Chicken)"],
    ["food9.JPG", "Persian-style Macaroni"],
    ["food10.JPG", "Sabzi Polo ba Mahi (Herbed Rice with Fish)"],
    ["food11.JPG", "Shami Kebab (Persian Meat Patties)"],
    ["food12.JPG", "Ash (Traditional Persian Soup)"],
    ["food16.JPG", "Kofteh (Persian Meatball)"],
    ["food14.JPG", "Faloodeh (Persian Frozen Dessert with Thin Noodles)"],
    ["food15.JPG", "Lavashak (Persian Fruit Leather)"],
    ["food13.JPG", "Bastani Sonnati (Traditional Persian Ice Cream)"],
    ["food17.JPG", "Qottab (Traditional Persian Pastry)"],
    ["food18.JPG", "Kolompeh (Traditional Persian Date-Filled Pastry)"],
    ["food19.JPG", "Saffron"],
    ["food20.JPG", "Pistachio"]
];

const places = [
    ["place1.JPG", "Persepolis", "history"],
    ["place2.JPG", "Historic Bazaar", "architecture"],
    ["place3.JPG", "Mosque", "architecture"],
    ["place4.JPG", "Golestan Palace", "architecture"],
    ["place5.JPG", "Tomb of Hafez (Hafezieh)", "history"],
    ["place6.JPG", "Traditional Architecture", "architecture"],
    ["place7.JPG", "Historic Interior", "architecture"],
    ["place8.JPG", "Milad Tower, Tehran", "cities"],
    ["place9.JPG", "Azadi Tower, Tehran", "cities"],
    ["place10.JPG", "Masuleh, Gilan", "cities"],
    ["place11.JPG", "Ancient Rock-Cut Monuments", "history"],
    ["place12.JPG", "Chehel Sotoun Palace, Isfahan", "architecture"],
    ["place13.JPG", "Ancient Stone Monument", "history"],
    ["place14.JPG", "Hormuz Island Beach", "nature"],
    ["place15.JPG", "El Goli Pavilion", "architecture"],
    ["place16.JPG", "Mount Damavand", "nature"],
    ["place17.JPG", "Iranian Coastline", "nature"],
    ["place18.JPG", "Stars Valley, Qeshm Island", "nature"],
    ["place19.JPG", "Tabiat Bridge, Tehran", "cities"],
    ["place20.JPG", "Ancient Persian Relief", "history"],
    ["place21.JPG", "Si-o-se-pol Bridge, Isfahan", "architecture"]
];

function createPhotoCard(photo, category) {
    const filename = photo[0];
    const title = photo[1];
    const type = photo[2] || category;

    const card = document.createElement("article");
    card.className = "gallery-card";
    card.dataset.category = type;

    const image = document.createElement("img");
    image.src = "images/" + filename;
    image.alt = title;
    image.loading = "lazy";

    image.onerror = function () {
        image.alt = "Image could not be loaded";
    };

    const caption = document.createElement("div");
    caption.className = "gallery-caption";

    const titleElement = document.createElement("h3");
    titleElement.className = "photo-title";
    titleElement.textContent = title;

    caption.appendChild(titleElement);
    card.appendChild(image);
    card.appendChild(caption);

    return card;
}

const foodGallery = document.getElementById("food-gallery");
const placesGallery = document.getElementById("places-gallery");

if (foodGallery) {
    foods.forEach(function (food) {
        foodGallery.appendChild(createPhotoCard(food, "food"));
    });
}

if (placesGallery) {
    places.forEach(function (place) {
        placesGallery.appendChild(createPhotoCard(place, "places"));
    });
}


const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;
        const cards = document.querySelectorAll("#places-gallery .gallery-card");

        cards.forEach(function (card) {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});