function translate() {
  var inputText = document.getElementById("input").value;
  var outputText = "";

  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    // Harfni kirillchaga o'tkazish
    if (charCode >= 1040 && charCode <= 1071) {
      outputText += String.fromCharCode(charCode + 32); // Kichik harflarga o'tkazish
    } else if (charCode >= 1072 && charCode <= 1103) {
      outputText += String.fromCharCode(charCode - 32); // Katta harflarga o'tkazish
    } else {
      outputText += inputText[i]; // Boshqa belgilar uchun o'zgartirmaslik
    }
  }

  document.getElementById("output").value = outputText;
}
