let observer = new IntersectionObserver(
    function (entries) {
        if (entries[0].isIntersecting === true) {
            console.log("50% in beeld!");

            let nieuwMain = document.createElement("main");
            nieuwMain.classList.add("fill", "a-popup");

            document.body.insertBefore(nieuwMain, document.getElementsByClassName("trigger")[0]);

        } else {
            console.log("minder dan 50%");
        }
    },
    {
        threshold: 0.5,
    }
);

observer.observe(document.getElementsByClassName("trigger")[0]);