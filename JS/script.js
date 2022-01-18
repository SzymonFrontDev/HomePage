{
    const welcome = () =>
        console.log("HELLO!");

    const togglebackground = () => {
        const theme = document.querySelector(".js-theme");
        const body = document.querySelector(".js-body");

        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            theme.innerText = "jasny";
        } else {
            theme.innerText = "ciemny";
        }

    }



    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", togglebackground)
        welcome();
    }
    init();

}