async function worksImport() {
    const response = await fetch("http://localhost:5678/api/works/", {
        method: 'GET'
    });
    let data = await response.json();
    data.forEach((projet) => {
        worksDisplay(projet)
    })
}

const worksDisplay = (projet) => {
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

worksImport();