import { resources } from "./data.js";

const renderedMovieEl = document.getElementById('rendered-movies')
const searchBtnEl = document.getElementById('search-btn')
const inputSearchEl = document.getElementById('search-classes')


searchBtnEl.addEventListener('click', function () {
    const userSearchQuery = inputSearchEl.value.trim().toLowerCase();
    const eachClass = classInformation();
    let newHtml = "";

    for (let classAttr of eachClass) {
        if (
            classAttr.title.toLowerCase().includes(userSearchQuery) ||
            classAttr.category.toLowerCase().includes(userSearchQuery) ||
            classAttr.description.toLowerCase().includes(userSearchQuery) ||
            classAttr.difficulty.toLowerCase().includes(userSearchQuery) ||
            classAttr.time.toLowerCase().includes(userSearchQuery) ||
            classAttr.price.toLowerCase().includes(userSearchQuery)
        ) {
            newHtml += `
                <div class="classContainer" id="${classAttr.id}">
                    <h2>${classAttr.title}</h2>
                    <p>${classAttr.category}</p>
                    <div>
                        <h6>Difficulty ${classAttr.difficulty}</h6>
                        <h6>Time ${classAttr.time}</h6>
                        <h6>Price ${classAttr.price}</h6>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <h5>${classAttr.description}</h5>
                    </div>
                </div>`;
        }
    }

    if (newHtml === "") {
        newHtml = "<p>No results found</p>";
    }

    renderedMovieEl.innerHTML = newHtml;
});

function classInformation() {
    return resources
}


function renderClasses() {
    const eachClass = classInformation()
    let html = ""

    for (let className of eachClass) {
        html +=
            `<div class="classContainer" id="${className.id}">
        <h2>${className.title}</h2>
        <p>${className.category}</p>
        <div>
            <h6>Difficulty ${className.difficulty}</h6>
            <h6>Time ${className.time}</h6>
            <h6>Price ${className.price}</h6>
        </div>
        <div>
        <h4>Description</h4>
        <h5>${className.description}</h5>
        </div>
    </div>`

    }
    console.log(html)
    renderedMovieEl.innerHTML = html
}
renderClasses()