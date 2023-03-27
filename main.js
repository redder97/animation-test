const imgDisplay = document.getElementById('image');

currentIndex = 1;
let lastPosition = 0;



imgDisplay.addEventListener('mouseup', function () {
    console.log('click')
})

function onslide(e) {
    const slider = document.getElementById('range');
    // const val = e;

    // slider.setAttribute('value', lastPosition)
    // imgDisplay.setAttribute('src', `images/${val}.jpg`);

    // lastPosition = val;

    if (e < lastPosition) {
        currentIndex -= 1;
    } else if (e > lastPosition) {
        currentIndex += 1;
    }

    lastPosition = e;

    if (currentIndex < 1) currentIndex = 1;
    if (currentIndex > 179) currentIndex = 179;


    imgDisplay.setAttribute('src', `images/${currentIndex}.jpg`)


}

