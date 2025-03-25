export function formatString(originalString) {
    let formattedString = "";
    let consonants = "";
    let isVowel = (letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());

    if (isVowel(originalString.charAt(0))) {
        return originalString + "ay";
    }

    for (let i = 0; i < originalString.length; i++) {
        let letter = originalString.charAt(i).toLowerCase();

        if (isVowel(letter)) {
            formattedString = originalString.substring(i) + consonants + "ay";
            break;
        } else {
            consonants += originalString.charAt(i);
        }
    }

    if (originalString.charAt(0).toUpperCase() === originalString.charAt(0)) {
        formattedString = formattedString.charAt(0).toLowerCase() + formattedString.slice(1);
    }

    return formattedString;
}
