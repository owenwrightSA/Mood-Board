var colorTable = {
    "angry": "red",
    "sad": "blue",
    "happy": "yellow",
    "hungry": "orange",
    "tired": "purple",
    "scared": "brown",
    "frustrated": "grey",
    "excited": "green",
}

function changeMood() {
    const word = textBox.value;
    if (word in colorTable) {
        colorBox.style.backgroundColor = colorTable[word];
    }
    else{
        colorBox.style.backgroundColor = "grey";
    }
}

const textBox = document.getElementById('response');
textBox.addEventListener("input", changeMood);
const colorBox = document.getElementById('board');