function connexionStatus() {
    const token = localStorage.getItem("token");
    return !!token
}

function logButtonCreation() {
    let navBarElement = document.querySelector(".navbar");
    let logButtonElement = document.createElement("li");
    let instagramIcon = document.querySelector(".instagramicon");
    let logButtonContent = document.createTextNode("login");
    navBarElement.appendChild(logButtonElement);
    logButtonElement.appendChild(logButtonContent);
    logButtonElement = navBarElement.insertBefore(logButtonElement, instagramIcon);
}

logButtonCreation();

async function worksImport() {
    const response = await fetch("http://localhost:5678/api/works/", {
        method: "GET"
    });
    let worksData = await response.json();
    worksData.forEach((projet) => {
        projectsDisplay(projet)
    })
};

async function categoriesImport() {
    const response = await  fetch("http://localhost:5678/api/categories/", {
        method: "GET"
    });
    let categoriesData = await response.json();
    categoriesData.forEach((category) => {
        filtersDisplay(category)
    })
};

const gallery = document.querySelector(".gallery");
const filtersContainer = document.querySelector(".filter",".category");

const projectsDisplay = (projet) => {
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    gallery.appendChild(figure);
    figure.setAttribute("projectcategoryid", projet.category.id);
    figure.appendChild(img);
    img.src = projet.imageUrl;
    img.alt = projet.title;
    figure.appendChild(figcaption);
    figcaption.textContent = projet.title;
};

let defaultButton = document.createElement("button");
defaultButton.textContent = "Tous";
defaultButton.addEventListener("click", () => {
    galleryFilter("all")
});
filtersContainer.appendChild(defaultButton);

const filtersDisplay = (category) => {
    let filterButton = document.createElement("button");
    filterButton.textContent = category.name;
    filterButton.addEventListener("click", () => {
        galleryFilter(category.id)
    });
    filtersContainer.appendChild(filterButton)
};

worksImport();
categoriesImport();

const galleryFilter = (categoryId) => {
    const figures = document.querySelectorAll("figure");
    figures.forEach((figure) => {
        const workCategoryId = figure.getAttribute("projectcategoryid");
        figure.style.display = workCategoryId == categoryId || categoryId == "all" ? "block" : "none";
    })
}