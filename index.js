let btnLeft = document.getElementsById('btn-left');
let btnright = document.getElementsByClassName('btn-right');
let slider = document.getElementById('slider');
btnLeft.onclick = () => {
    // slider.scrollLeft -= 220;
    alert('hi');
}
btnright.onclick = () => {
    slider.scrollLeft += 220;
}