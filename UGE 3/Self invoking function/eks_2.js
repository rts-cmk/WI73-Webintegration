(() => {
    document.addEventListener('DOMContentLoaded', () => {
        init();
    });
})();

function init() {

    // initialiser alle variable

    // JS-filer som skal indlæses
    (hentalleJsFiler = () => {
        [
            "demo.js",
            "test.js",
            "navigation.js",
            "helpers.js",
            "json.js"
        ]
            .forEach((js) => {
                let script = document.createElement('script');
                script.src = js;
                document.head.appendChild(script);
            })
    })();

}









//-------------------------------------------------------------------//
// Eksempel 1
// let script = document.createElement('script');
// script.src = 'helpers.js';
// document.head.appendChild(script);


//-------------------------------------------------------------------//
/* Eksempel 2
function init() {
    includeScript('navigation.js');
    includeScript('search.js');
}


function includeScript(js) {
    let script = document.createElement('script');
    script.src = js;
    document.head.appendChild(script);
}
*/
//-------------------------------------------------------------------//
