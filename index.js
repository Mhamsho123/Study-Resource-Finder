import { resources } from "./data.js";

const renderedMovieEl = document.getElementById('rendered-movies')

console.log(renderedMovieEl)

console.log(window.location.href)
console.log(document.body.innerHTML)


function classInformation(){
    return resources
    }


function renderClasses(){
    const eachClass = classInformation()
    let html = ""

    for(let className of eachClass){
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