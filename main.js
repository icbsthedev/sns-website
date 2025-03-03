document.addEventListener("DOMContentLoaded",
    () => {
    [... document
        .getElementsByTagName("button")]
        .forEach(btn=>btn
            .addEventListener("click", 
                ()=>console.log("test")));
});
