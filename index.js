


var items = document.getElementsByClassName('item');
console.log(items)
function fun(e) {
    console.log('in func')
    document.getElementsByClassName('setBackground')[0].className = 'item'
    e.classList.add('setBackground');
}

for(let i = 0; i < items.length ; i++) {
    items[i].addEventListener('click', () => {
        document.getElementsByClassName('setBackground')[0].className = 'item'
        items[i].classList.add('setBackground');
    })
}


// items.forEach(element => {
//     console.log('in loop');
//     element.addEventListner('onclick',fun);
// });