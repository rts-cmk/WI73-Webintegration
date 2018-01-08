document.addEventListener('DOMContentLoaded', function (event) {

    // Øvelse 1
    // console.log(document);
    // console.log(document.documentElement.childNodes)
    // console.log(document.body.firstElementChild);
    // console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.previousElementSibling);
    // console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling);
    // console.log(document.body.firstElementChild.firstChild);
    // console.log(document.body.children);

    let divs = document.body.getElementsByTagName('div'); // HTMLCollection 
    // let divs = document.getElementsByTagName('div'); // HTMLCollection
    // let divs = document.querySelectorAll('div'); // nodeList
    console.log(divs);

    // console.log(typeof divs)


    // for (var index = 0; index < divs.length; index++) {
    //     console.log(divs[index].firstChild.nodeValue);
    // }

    // for (let div of divs) {
    //     console.log('tekst:', div.firstChild.nodeValue)
    //     console.log('tekst:', div.firstChild.data)
    //     console.log('tekst:', div.innerHTML)

    //     div.setAttribute('class', 'myDiv')
    //     console.log('tekst:', div.textContent)
    // }

    //------------------------- DOM Manipulation -----------------------------//

    // -- for HTMLCollection
    // let count = divs.length;
    // for (let i = 0; i < count; i++) {
    //     divs[0].remove();
}

    // // for NODEList
    // let count = divs.length;
    // for (let i = 0; i < count; i++) {
    //     divs[i].remove();
    // }

    // console.log(divs);
