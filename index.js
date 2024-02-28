function expandBox(box) {
    box.classList.toggle('expanded');
}

function changeColor(option, color) {
    option.closest('.box').style.backgroundColor = color;
}