/* VARIABLES GLOBALES */
const header = document.querySelector('header')
const navBarElement = document.querySelector('.navbar')
const loginButton = document.querySelector('ul.navbar li a')
const instagramIcon = document.querySelector('.instagramicon')
const filtersContainer = document.querySelector('.filter', '.category')
const gallery = document.querySelector('.gallery')

/* FONCTIONS */
function logStatus () {
  const token = localStorage.getItem('token')
  return !!token
}

function handleLogout () {
  localStorage.removeItem('token')
  window.location.reload()
}

function editBannerCreation () {
  let editBanner = document.createElement('div')
  let editBannerIcon = document.createElement('div')
  let editBannerTitle = document.createElement('p')
  document.body.insertBefore(editBanner, header)
  editBanner.classList.add('editbanner')
  editBanner.appendChild(editBannerIcon)
  editBannerIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M14.0229 2.18576L14.3939 2.55679C14.6821 2.84503 14.6821 3.31113 14.3939 3.5963L13.5016 4.49169L12.0879 3.07808L12.9803 2.18576C13.2685 1.89751 13.7346 1.89751 14.0198 2.18576H14.0229ZM6.93332 8.23578L11.0484 4.11759L12.4621 5.53121L8.34387 9.64633C8.25494 9.73525 8.14455 9.79964 8.02496 9.83337L6.23111 10.3455L6.7432 8.55162C6.77693 8.43203 6.84133 8.32164 6.93025 8.23271L6.93332 8.23578ZM11.9408 1.14625L5.89074 7.1932C5.62397 7.45998 5.43078 7.78808 5.32959 8.14685L4.4526 11.2133C4.379 11.4708 4.44953 11.7468 4.63965 11.9369C4.82977 12.127 5.10574 12.1976 5.36332 12.124L8.42973 11.247C8.79156 11.1427 9.11967 10.9495 9.38338 10.6858L15.4334 4.63888C16.2951 3.77722 16.2951 2.37894 15.4334 1.51728L15.0624 1.14625C14.2007 0.284585 12.8024 0.284585 11.9408 1.14625ZM3.19844 2.34214C1.70816 2.34214 0.5 3.55031 0.5 5.04058V13.3812C0.5 14.8715 1.70816 16.0796 3.19844 16.0796H11.5391C13.0293 16.0796 14.2375 14.8715 14.2375 13.3812V9.94683C14.2375 9.539 13.9094 9.21089 13.5016 9.21089C13.0937 9.21089 12.7656 9.539 12.7656 9.94683V13.3812C12.7656 14.0589 12.2167 14.6078 11.5391 14.6078H3.19844C2.52076 14.6078 1.97188 14.0589 1.97188 13.3812V5.04058C1.97188 4.36291 2.52076 3.81402 3.19844 3.81402H6.63281C7.04065 3.81402 7.36875 3.48591 7.36875 3.07808C7.36875 2.67025 7.04065 2.34214 6.63281 2.34214H3.19844Z" fill="white"/></svg>'
  editBanner.appendChild(editBannerTitle)
  editBannerTitle.classList.add('editbannertitle')
  editBannerTitle.innerHTML = 'Mode édition'
}

function logoutButtonCreation () {
  let logButtonElement = document.createElement('li')
  let logButtonContent = document.createTextNode('logout')
  loginButton.style.display = 'none'
  navBarElement.appendChild(logButtonElement)
  logButtonElement.appendChild(logButtonContent)
  logButtonElement = navBarElement.insertBefore(logButtonElement, instagramIcon)
  logButtonElement.addEventListener('click', handleLogout)
}

async function worksImport () {
  const response = await fetch('http://localhost:5678/api/works/', {
    method: 'GET'
  })
  let worksData = await response.json()
  worksData.forEach(projet => {
    projectsDisplay(projet)
  })
}

async function categoriesImport () {
  const response = await fetch('http://localhost:5678/api/categories/', {
    method: 'GET'
  })
  let categoriesData = await response.json()
  categoriesData.forEach(category => {
    filtersDisplay(category)
  })
}

const projectsDisplay = projet => {
  let figure = document.createElement('figure')
  let img = document.createElement('img')
  let figcaption = document.createElement('figcaption')
  gallery.appendChild(figure)
  figure.setAttribute('projectcategoryid', projet.category.id)
  figure.appendChild(img)
  img.src = projet.imageUrl
  img.alt = projet.title
  figure.appendChild(figcaption)
  figcaption.textContent = projet.title
}

const filtersDisplay = category => {
  let filterButton = document.createElement('button')
  filterButton.textContent = category.name
  filterButton.addEventListener('click', () => {
    galleryFilter(category.id)
  })
  filtersContainer.appendChild(filterButton)
}

const galleryFilter = categoryId => {
  const figures = document.querySelectorAll('div.gallery > figure')
  figures.forEach(figure => {
    const workCategoryId = figure.getAttribute('projectcategoryid')
    figure.style.display =
      workCategoryId == categoryId || categoryId == 'all' ? 'block' : 'none'
  })
}

/* SEQUENCE DE CODE */
let defaultButton = document.createElement('button')
defaultButton.textContent = 'Tous'
defaultButton.addEventListener('click', () => {
  galleryFilter('all')
})
filtersContainer.appendChild(defaultButton)

worksImport()
categoriesImport()

if (logStatus()) {
  logoutButtonCreation()
  editBannerCreation()
}