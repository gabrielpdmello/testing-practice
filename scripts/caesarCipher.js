function caesarCipher(string, factor) {
    let cipher = '';
    for (let i = 0; i < string.length; i++) {
        let code = string.codePointAt(i);
        // lower case
        if (code >= 65 && code <= 90)
            cipher += String.fromCharCode(((code - 65 + factor) % 26) + 65);
        // upper case
        else if (code >= 97 && code <= 122)
            cipher += String.fromCharCode(((code - 97 + factor) % 26) + 97);
        else cipher += string[i]
    }

    return cipher
}

export default caesarCipher