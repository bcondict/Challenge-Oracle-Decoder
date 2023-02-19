document.getElementById("encript").addEventListener("click", function() {
    var text_to_encrypt = document.getElementById("text_msg").value;
    var new_text = "";
    let letter;
    if (text_to_encrypt != "")
        document.getElementById("empty_text").style.display = "none";
        // document.getElementById("copy_bttn").style.display = "flex";
    for (letter of text_to_encrypt)
        if (letter == "e") {
            new_text += "enter";
        } else if (letter == "i") {
            new_text += "imes";
        } else if (letter == "a") {
            new_text += "ai";
        } else if (letter == "o") {
            new_text += "ober";
        } else if (letter == "u") {
            new_text += 'ufat';
        } else {
            new_text += letter;
        } 
    document.getElementById("text_space").innerHTML = new_text;
});

document.getElementById("copy_bttn").addEventListener("click", function() {
    var textToCopy = document.getElementById("text_space");
    var range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().addRange(range);

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    window.getSelection().removeAllRanges();
});

document.getElementById("decrypt").addEventListener("click", function() {
    var text_to_decrypt = document.getElementById("text_msg").value;
    var new_text = "";

    if (text_to_decrypt != "")
        document.getElementById("empty_text").style.display = "none";

    // for (i in text_to_decrypt) {
    for (var i = 0; i < text_to_decrypt.length; i++ ) {
        if (text_to_decrypt[i] == 'e') {
            new_text += text_to_decrypt[i];
            i += 4;
        } else if (text_to_decrypt[i] == 'i') {
            new_text += text_to_decrypt[i];
            i += 3;
        } else if (text_to_decrypt[i] == 'a') {
            new_text += text_to_decrypt[i];
            i += 1;
        } else if (text_to_decrypt[i] == 'o') {
            new_text += text_to_decrypt[i];
            console.log(text_to_decrypt[i]);
            i += 3;
            console.log(text_to_decrypt[i]);
        } else if (text_to_decrypt[i] == 'u') {
            new_text += text_to_decrypt[i];
            i += 3;
        } else {
            new_text += text_to_decrypt[i];
        }
    }
    document.getElementById("text_space").innerHTML = new_text;
});
