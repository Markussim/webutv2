const vokaler = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö"]

function runMc() {
    const word = document.getElementById("fname").value

    console.log("Lengh is: " + word.length)

    for (i = 0; i < vokaler.length; i++) {
        var position = getPosition(word, vokaler[i], 2)

        //if(!(position == word.length)) {
            console.log(vokaler[i] + " is at position " + position)
        //}
        
    }
}

function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}
