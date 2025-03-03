document.onload = ()=>{

    [...document
        .getElementsByTagName("button")]
            .forEach(btn=>
                btn.addEventListener(
                    "click",
                    (evt) => alert('hello')));

}