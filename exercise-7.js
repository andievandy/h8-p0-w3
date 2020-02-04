function hitungJumlahKata(kalimat) {
    var wordCount = 0;
    var currentWordCharacterCount = 0;
    for(var i = 0; i < kalimat.length; i++) {
        if(kalimat[i] === ' ') {
            if(currentWordCharacterCount > 0) {
                wordCount++;
                currentWordCharacterCount = 0;
            }
        } else {
            currentWordCharacterCount++;
        }
    }
    if (currentWordCharacterCount > 0) {
        wordCount++;
        currentWordCharacterCount = 0;
    }
    return wordCount;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5