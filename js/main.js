function show(anything) {
    document.querySelector('#text_box').value = anything;
    
};

let dropDown = document.querySelector('.dropdown');
dropDown.onclick = function () {
    dropDown.classList.toggle('active');
}