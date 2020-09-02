
function runMc() {
    console.log(creatMcWord(word))
}

function getMcIndex(wordInternal) {
    const vokaler = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö", "A", "E", "I", "O", "U", "Y", "Å", "Ä", "Ö"]

    var wordVokaler = []

    //console.log("Lengh is: " + wordInternal.length)

    /*for (i = 0; i < vokaler.length; i++) {
        var position = word.search(vokaler[i])

        //if(!(position == word.length)) {
            console.log(vokaler[i] + " is at position " + position)
        //}
        
    }*/

    for (i = 0; i < wordInternal.length; i++) {
        var letter = wordInternal.charAt(i)

        wordVokaler[i] = vokaler.includes(letter)

    }

    

    var vokalerIndex = []

    for(i = 0; i < wordVokaler.length; i++) {
        if(wordVokaler[i] == true) {
            vokalerIndex.push(i)
        }
    }

    //console.log(vokalerIndex.length)

    if(vokalerIndex.length >= 2) {
        return vokalerIndex[1]
    }
}

function getMcString(index, word) {
    var preProsses = word.substring(0, index)

    var finalString = "Mc" + preProsses + preProsses

    return finalString
}

function creatMcWord(word) {


    
    var final = getMcString(getMcIndex(word), word)

    return final
}