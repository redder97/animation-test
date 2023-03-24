const imgDisplay = document.getElementById('image');
let lastPosition = 0;

function onslide(e) {
    console.log('trigger')
    const slider = document.getElementById('range')
    const val = e;

    slider.setAttribute('value', lastPosition)
    imgDisplay.setAttribute('src', `images/${val}.jpg`);

    lastPosition = val;

}
