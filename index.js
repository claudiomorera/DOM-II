//import './less/index.less'
// Your code goes here!

//load event
window.onload = function (event) {
    console.log(`event $(event.type)`)
    const heading = document.querySelector('h1');
    heading.textContent = "READY!";
};
//copy event 
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            console.log(text)
        })
})
//click event
document.body.addEventListener('click', event => {event.target.classList.toogle('mirror')})

//doubleclick event
document.body.addEventListener('dblclick', event => {event.target.innerHTML = ""})
//mouseover Event
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', navFunction);

function navFunction() {
    nav.children[0].style.color = "green";
    nav.children[1].style.color = "green";
    nav.children[2].style.color = "green";
    nav.children[3].style.color = "green";
}
//onmouseout event
nav.addEventListener("mouseout", () => {
    nav.children[0].style.color = "black";
    nav.children[1].style.color = "black";
    nav.children[2].style.color = "black";
    nav.children[3].style.color = "black";
});
//mouseup event
window.addEventListener('mouseup', (event) => {
    document.getElementsByTagName('p')[3].style.color="yellow";
})
//mousedown event
window.addEventListener('mousedown', (event) => {
    document.getElementsByTagName('p')[3].style.color="green";
})
//wheel event
window.addEventListener("wheel", (event) => {
    document.getElementsByTagName('p')[4].style.fontSize="35px";
})
//select event
window.addEventListener('select', (event) => {
    alert('you selected some text..');
})



console.log("connecting....test")