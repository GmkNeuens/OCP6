let works = []
let categories = []

const wmodificationIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M14.0229 2.18576L14.3939 2.55679C14.6821 2.84503 14.6821 3.31113 14.3939 3.5963L13.5016 4.49169L12.0879 3.07808L12.9803 2.18576C13.2685 1.89751 13.7346 1.89751 14.0198 2.18576H14.0229ZM6.93332 8.23578L11.0484 4.11759L12.4621 5.53121L8.34387 9.64633C8.25494 9.73525 8.14455 9.79964 8.02496 9.83337L6.23111 10.3455L6.7432 8.55162C6.77693 8.43203 6.84133 8.32164 6.93025 8.23271L6.93332 8.23578ZM11.9408 1.14625L5.89074 7.1932C5.62397 7.45998 5.43078 7.78808 5.32959 8.14685L4.4526 11.2133C4.379 11.4708 4.44953 11.7468 4.63965 11.9369C4.82977 12.127 5.10574 12.1976 5.36332 12.124L8.42973 11.247C8.79156 11.1427 9.11967 10.9495 9.38338 10.6858L15.4334 4.63888C16.2951 3.77722 16.2951 2.37894 15.4334 1.51728L15.0624 1.14625C14.2007 0.284585 12.8024 0.284585 11.9408 1.14625ZM3.19844 2.34214C1.70816 2.34214 0.5 3.55031 0.5 5.04058V13.3812C0.5 14.8715 1.70816 16.0796 3.19844 16.0796H11.5391C13.0293 16.0796 14.2375 14.8715 14.2375 13.3812V9.94683C14.2375 9.539 13.9094 9.21089 13.5016 9.21089C13.0937 9.21089 12.7656 9.539 12.7656 9.94683V13.3812C12.7656 14.0589 12.2167 14.6078 11.5391 14.6078H3.19844C2.52076 14.6078 1.97188 14.0589 1.97188 13.3812V5.04058C1.97188 4.36291 2.52076 3.81402 3.19844 3.81402H6.63281C7.04065 3.81402 7.36875 3.48591 7.36875 3.07808C7.36875 2.67025 7.04065 2.34214 6.63281 2.34214H3.19844Z" fill="white"/></svg>'
const bmodificationIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M14.0229 2.18576L14.3939 2.55679C14.6821 2.84503 14.6821 3.31113 14.3939 3.5963L13.5016 4.49169L12.0879 3.07808L12.9803 2.18576C13.2685 1.89751 13.7346 1.89751 14.0198 2.18576H14.0229ZM6.93332 8.23578L11.0484 4.11759L12.4621 5.53121L8.34387 9.64633C8.25494 9.73525 8.14455 9.79964 8.02496 9.83337L6.23111 10.3455L6.7432 8.55162C6.77693 8.43203 6.84133 8.32164 6.93025 8.23271L6.93332 8.23578ZM11.9408 1.14625L5.89074 7.1932C5.62397 7.45998 5.43078 7.78808 5.32959 8.14685L4.4526 11.2133C4.379 11.4708 4.44953 11.7468 4.63965 11.9369C4.82977 12.127 5.10574 12.1976 5.36332 12.124L8.42973 11.247C8.79156 11.1427 9.11967 10.9495 9.38338 10.6858L15.4334 4.63888C16.2951 3.77722 16.2951 2.37894 15.4334 1.51728L15.0624 1.14625C14.2007 0.284585 12.8024 0.284585 11.9408 1.14625ZM3.19844 2.34214C1.70816 2.34214 0.5 3.55031 0.5 5.04058V13.3812C0.5 14.8715 1.70816 16.0796 3.19844 16.0796H11.5391C13.0293 16.0796 14.2375 14.8715 14.2375 13.3812V9.94683C14.2375 9.539 13.9094 9.21089 13.5016 9.21089C13.0937 9.21089 12.7656 9.539 12.7656 9.94683V13.3812C12.7656 14.0589 12.2167 14.6078 11.5391 14.6078H3.19844C2.52076 14.6078 1.97188 14.0589 1.97188 13.3812V5.04058C1.97188 4.36291 2.52076 3.81402 3.19844 3.81402H6.63281C7.04065 3.81402 7.36875 3.48591 7.36875 3.07808C7.36875 2.67025 7.04065 2.34214 6.63281 2.34214H3.19844Z" fill="black"/></svg>'
const header = document.querySelector('header')
const navBarElement = document.querySelector('.navbar')
const loginButton = document.querySelector('.loginbutton')
const instagramIcon = document.querySelector('.instagramicon')
const projectSectionTitle = document.querySelector('#portfolio h2')
const modalDisplay = document.querySelector('.modalcontainer')
const modal2Display = document.querySelector('.modal2container')
const closeModalIcon = document.querySelector('.closemodalicon')
const closeModal2Icon = document.querySelector('.closemodal2icon')
const goBackIcon = document.querySelector('.gobackicon')
const modalGallery = document.querySelector('.modalgallery')
const filtersContainer = document.querySelector('.filter', '.category')
const gallery = document.querySelector('.gallery')
const modalButton = document.querySelector('.modalbutton')
const addFileButton = document.querySelector('.addfilebutton')
const modalTitle = document.querySelector('.modaltitle')
const modalForm = document.querySelector('.modalform')
const uploadImageContainer = document.querySelector('.uploadimagecontainer')

/* FONCTIONS */

/* IMPORT DES PROJETS */
async function worksImport () {
  const response = await fetch('http://localhost:5678/api/works/', {
    method: 'GET'
  })
  let worksData = await response.json()
  worksData.forEach(projet => {
    projectsDisplay(projet)
  })

  // Renseigner la variable globale
  works = worksData
}

/* IMPORT DES CATEGORIES */
async function categoriesImport () {
  const response = await fetch('http://localhost:5678/api/categories/', {
    method: 'GET'
  })
  let categoriesData = await response.json()
  categoriesData.forEach(category => {
    filtersDisplay(category)
  })

  // Renseigner la variable globale
  categories = categoriesData
}

/* GESTION DE LA CONNEXION */
function logStatus () {
  const token = localStorage.getItem('token')
  return !!token
}
function handleLogout () {
  localStorage.removeItem('token')
  window.location.reload()
}

/* AFFICHAGE DE LA BANNIERE D'EDITION */
function editBannerCreation () {
  let editBanner = document.createElement('div')
  let editBannerIcon = document.createElement('div')
  let editBannerTitle = document.createElement('p')
  document.body.insertBefore(editBanner, header)
  editBanner.classList.add('editbanner')
  editBanner.appendChild(editBannerIcon)
  editBannerIcon.innerHTML = wmodificationIcon
  editBanner.appendChild(editBannerTitle)
  editBannerTitle.classList.add('editbannertitle')
  editBannerTitle.innerHTML = 'Mode édition'
}

/* AFFICHAGE DU BOUTON DE DECONNEXION */
function logoutButtonCreation () {
  let logButtonElement = document.createElement('li')
  let logButtonContent = document.createTextNode('logout')
  loginButton.classList.add('hidden')
  navBarElement.appendChild(logButtonElement)
  logButtonElement.appendChild(logButtonContent)
  logButtonElement = navBarElement.insertBefore(logButtonElement, instagramIcon)
  logButtonElement.addEventListener('click', handleLogout)
}

/* AFFICHAGE DU BOUTON D'EDITION DE LA GALERIE */
function editButtonCreation () {
  let editButton = document.createElement('button')
  editButton.classList.add('editbutton')
  editButton.innerHTML = bmodificationIcon + ' modifier'
  projectSectionTitle.appendChild(editButton)
  editButton.addEventListener('click', openModal)
}

/* AFFICHAGE DE LA GALERIE */
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

/* AFFICHAGE DES FILTRES */
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

/* AFFICHAGE DE LA PREMIERE MODALE */
function openModal () {
  closeModalIcon.addEventListener('click', closeModal)
  modalButton.addEventListener('click', openModal2)
  modal2Display.classList.remove('display')
  modalDisplay.classList.add('display')
  modalGallery.innerHTML = ''

  // Recréer la galerie
  works.forEach((element, index) => {
    const galleryPreview = document.createElement('figure')
    galleryPreview.className = 'galleryPreview'
    modalGallery.appendChild(galleryPreview)
    const galleryPreviewImg = document.createElement('img')
    galleryPreviewImg.src = element.imageUrl
    galleryPreview.appendChild(galleryPreviewImg)

    // Ajouter l'icone de suppression de projet
    const deleteIcon = document.createElement('div')
    deleteIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none"><path d="M2.71607 0.35558C2.82455 0.136607 3.04754 0 3.29063 0H5.70938C5.95246 0 6.17545 0.136607 6.28393 0.35558L6.42857 0.642857H8.35714C8.71272 0.642857 9 0.930134 9 1.28571C9 1.64129 8.71272 1.92857 8.35714 1.92857H0.642857C0.287277 1.92857 0 1.64129 0 1.28571C0 0.930134 0.287277 0.642857 0.642857 0.642857H2.57143L2.71607 0.35558ZM0.642857 2.57143H8.35714V9C8.35714 9.70915 7.78058 10.2857 7.07143 10.2857H1.92857C1.21942 10.2857 0.642857 9.70915 0.642857 9V2.57143ZM2.57143 3.85714C2.39464 3.85714 2.25 4.00179 2.25 4.17857V8.67857C2.25 8.85536 2.39464 9 2.57143 9C2.74821 9 2.89286 8.85536 2.89286 8.67857V4.17857C2.89286 4.00179 2.74821 3.85714 2.57143 3.85714ZM4.5 3.85714C4.32321 3.85714 4.17857 4.00179 4.17857 4.17857V8.67857C4.17857 8.85536 4.32321 9 4.5 9C4.67679 9 4.82143 8.85536 4.82143 8.67857V4.17857C4.82143 4.00179 4.67679 3.85714 4.5 3.85714ZM6.42857 3.85714C6.25179 3.85714 6.10714 4.00179 6.10714 4.17857V8.67857C6.10714 8.85536 6.25179 9 6.42857 9C6.60536 9 6.75 8.85536 6.75 8.67857V4.17857C6.75 4.00179 6.60536 3.85714 6.42857 3.85714Z" fill="white"/></svg>'
    deleteIcon.classList.add('deleteicon')
    galleryPreview.appendChild(deleteIcon)
    deleteIcon.addEventListener('click', function () {
      fetch(`http://localhost:5678/api/works/${element.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          if (response.ok) {
            galleryPreview.remove()
          }
        })
        .catch(error => {
          console.log(
            "Une erreur s'est produite lors de la suppression du projet:",
            error
          )
        })
    })
  })
}

/* AFFICHAGE DE LA SECONDE MODALE */
function openModal2 () {
  closeModal2Icon.addEventListener('click', closeModal)
  goBackIcon.addEventListener('click', openModal)
  modalDisplay.classList.remove('display')
  modal2Display.classList.add('display')
  addFileButton.disabled = true

  // Remplir le select des catégories
  const select = document.getElementById('projectcategory')
  categories.forEach(category => {
    const option = document.createElement('option')
    option.value = category.id
    option.innerHTML = category.name
    select.appendChild(option)
  })

  // Pointer sur le formulaire
  const fileInput = document.getElementById('image-file')
  const titleInput = document.getElementById('projecttitle')
  const categoryInput = document.getElementById('projectcategory')

  // Valider les input
  const fileUpload = () => {
    const file = fileInput.files[0]
    const fileErrorComment = document.querySelector('.fileerrorcomment')
    if (file.size > 4194304) {
      fileErrorComment.style.display = 'block'
      return false
    } else if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png') {
      fileErrorComment.style.display = 'block'
      return false
    } else {
      uploadImageContainer.innerHTML = ""
      const imagePreview = document.createElement('img')
      imagePreview.classList.add('imagepreview')
      uploadImageContainer.appendChild(imagePreview)
      imagePreview.src = URL.createObjectURL(file)
      imagePreview.alt = "Prévisualisation de l'image"
      return true
    }
  };
  const textInput = () => {
    const TitleErrorComment = document.querySelector('.titleerrorcomment')
    if (titleInput.value.trim().length > 3) {
      TitleErrorComment.style.display = 'none'
      return true
    } else {
      TitleErrorComment.style.display = 'block'
      return false
    }
  }
  const categorySelection = () => {
    const CategoryErrorComment = document.querySelector('.categoryerrorcomment')
    if (categoryInput.value !== 'Default') {
      CategoryErrorComment.style.display = 'none'
      return true
    } else {
      CategoryErrorComment.style.display = 'block'
      return false
    }
  }
  const formcompleted = () => {
    if (fileUpload() && textInput() && categorySelection()) {
      addFileButton.disabled = false
    } else {
      addFileButton.disabled = true
    }
  }
  fileInput.addEventListener('change', () => {
    fileUpload()
    formcompleted()
  })
  titleInput.addEventListener('change', () => {
    textInput()
    formcompleted()
  })
  categoryInput.addEventListener('change', () => {
    categorySelection()
    formcompleted()
  })

  // Soumettre le formulaire
  modalForm.addEventListener("submit", function(event) {
    event.preventDefault()
    if (fileUpload() && textInput() && categorySelection()) {
      const file = fileInput.files[0]
      const formData = new FormData()
      formData.append("title", titleInput.value)
      formData.append("image", file)
      formData.append("category", categoryInput.value)
      fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formData,
      }).then((response) =>{
        if (response.status ==201) {
          return response.json()
        }
        else {
          console.error("Erreur lors de l'ajout du projet:", response.status);
        }
      })
    }
  })
}

/* FERMETURE DES MODALES */
function closeModal () {
  modalDisplay.classList.remove('display')
  modal2Display.classList.remove('display')
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
  editButtonCreation()
  projectSectionTitle.style.marginBottom = '50px'
  filtersContainer.style.display = 'none'
}
