document.addEventListener('DOMContentLoaded', function (event) {

    // Øvelse 1
    // console.log(document);
    // console.log(document.documentElement.lastElementChild.firstElementChild.nextElementSibling)
    // console.log(document.body.firstElementChild);
    // console.log(document.body.firstElementChild.nextElementSibling);
    // console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling);
    // console.log(document.firstElementChild.firstChild.firstChild);
    // console.log(document.body.children);

    // let divs = document.body.getElementsByTagName('div'); // HTMLCollection 
    let divs = document.getElementsByTagName('div'); // HTMLCollection
    // let divs = document.querySelectorAll('div'); // nodeList
    // console.log(divs);

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
    let count = divs.length;
    for (let i = 0; i < count; i++) {
        divs[0].remove();
    }

    // // for NODEList
    // let count = divs.length;
    // for (let i = 0; i < count; i++) {
    //     divs[i].remove();
    // }

    // console.log(divs[0]);

    ex1();
    // ex2();
    // ex3();
    // ex4();

});

// Opretter et div element
// - herefter en textNode
// - og appender textNode til div
// - og opretter en class og en id attribute
// - for til sidst at appende div til body
// Samme med et h2 element
let ex1 = () => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    let textNode = document.createTextNode('Tekst i mit div');
    div.className = 'myDiv';
    // div.id = 'mainDiv';
    div.setAttribute('id', 'mainDiv');
    div.removeAttribute('id')
    div.appendChild(textNode);

    // let h2 = document.createElement('h2');
    // let h2Title = document.createTextNode("Javascript");
    // h2.appendChild(h2Title);
    // document.body.appendChild(h2);

    // document.body.appendChild(div);
}

let ex2 = () => {
    let ol = document.createElement('ol');
    let li = document.createElement('li');
    let txt = document.createTextNode('listelement 1');
    li.appendChild(txt);
    ol.appendChild(li);
    document.body.appendChild(ol);

    // let li_1 = document.createElement('li');
    // let txt_1 = document.createTextNode('listelement 0');
    // li_1.appendChild(txt_1);
    // ol.insertBefore(li_1, li);
    // ol.replaceChild(li_1, li);
    // ol.before('before');
    // ol.after('after');
    // ol.prepend('prepend');
    // ol.append('append');


}

// Udskriver elementer fra et array i en forEach
let ex3 = () => {
    var a = ['demo 1', 'demo 2', 'demo 3'];
    // a.forEach(function (value) {
    //     console.log(value);
    // })

    if (a.length > 0) {
        let ul = document.createElement('ul');
        a.forEach(function (value, index) {
            console.log(index);
            let li = document.createElement('li');
            let txt = document.createTextNode(value);
            li.appendChild(txt);
            ul.appendChild(li);
        })
        document.body.appendChild(ul);
    }
}

// Kloner et element med eller uden tekst
let ex4 = () => {
    let div = document.createElement('div');
    div.setAttribute('class', 'myClass');
    let txt = document.createTextNode('Indhold i div');
    div.appendChild(txt);
    let div2 = div.cloneNode(true);
    // div2.appendChild(document.createTextNode("Div 2"));
    document.body.appendChild(div);
    document.body.appendChild(div2);

}
