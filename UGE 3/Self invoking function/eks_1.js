(() => {
    document.addEventListener('DOMContentLoaded', () => {

        test1();
        function test1() {
            console.log("test 1")
        }


        // test2 = function () {
        //     console.log("test 2")
        // }
        // test2();

        // (function () {
        //     console.log("test 2 ekstra")
        // })();

        (() => {
            console.log("test 3 ekstra")
        })();

        test3 = () => {
            console.log("test 3")
        }
        test3();


    });
})();