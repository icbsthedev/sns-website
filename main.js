document.onload = ()=>{

    [... document
        .getElementsByTagName("button")]
            .forEach(btn =>
                btn.addEventListener(
                    "click",
                    () => console.log('hello')));

}