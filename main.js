function multiWord() {
  let words = document.getElementById("input").value;

  let wordArray = words.split(" ");

  document.getElementById("output").innerText = "";

  if (document.getElementById("input").value) {
    wordArray.forEach((element) => {
      document.getElementById("output").innerText += " " + creatMcWord(element);
    });
  }
}
