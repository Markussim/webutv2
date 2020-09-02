function clickMe() {
    const word = document.getElementById("fname").value

    document.getElementById("theButton").innerHTML = creatMcWord(word)
}