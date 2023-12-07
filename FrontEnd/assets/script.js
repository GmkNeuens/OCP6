async function worksImport() {
    const response = await fetch("http://localhost:5678/api/works/", {
        method: 'GET'
    });
    let worksData = await response.json();
    worksData.forEach((projet) => {
        projectsDisplay(projet)
    })
}

async function categoriesImport() {
    const response = await  fetch("http://localhost:5678/api/categories/", {
        method: 'GET'
    });
    let categoriesData = await response.json();
    categoriesData.forEach((category) => {
        filtersDisplay(category)
    })
}

const projectsDisplay = (projet) => {
    let gallery = document.querySelector(".gallery");
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    gallery.appendChild(figure);
    figure.appendChild(img);
    img.src = projet.imageUrl;
    img.alt = projet.title;
    figure.appendChild(figcaption);
    figcaption.textContent = projet.title;
};

let filtersContainer = document.querySelector(".filter",".category");
let defaultButton = document.createElement('button');
defaultButton.textContent = 'Tous';
filtersContainer.appendChild(defaultButton);
const filtersDisplay = (category) => {
    let filterButton = document.createElement('button');
    filterButton.textContent = category.name;
    filtersContainer.appendChild(filterButton)
};


worksImport();
categoriesImport();