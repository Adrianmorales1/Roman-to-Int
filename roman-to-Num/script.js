var romanToInt = function(s) {
    let total = 0;
    for(var x = 0; x <s.length; x++) {
        let letter = s.charAt(x);
        let nextLetter = s.charAt(x+1);
        if(letter == 'I') { //Letter I
            if(nextLetter == 'V') {
                total+=4;
                x++
                continue;
            }
            if(nextLetter == 'X') {
                total+=9;
                x++
                continue;
            }
            total++;
        }
        if(letter == 'V') { //Letter V
            total+=5;
        }
        if(letter == 'X') { //Letter X
            if(nextLetter == 'L') {
                total+=40;
                x++
                continue;
            }
            if(nextLetter == 'C') {
                total+=90;
                x++
                continue;
            }
            total+=10;
        }
        if(letter == 'L') { //Letter L
            total+=50;
        }
        if(letter == 'C') { //Letter C
            if(nextLetter == 'D') {
                total+=400;
                x++
                continue;
            }
            if(nextLetter == 'M') {
                total+=900;
                x++
                continue;
            }
            total+=100;
        }
        if(letter == 'D') { //Letter L
            total+=500;
        }
        if(letter == 'M') { //Letter L
            total+=1000;
        }
    }
    return total;
};
console.log(romanToInt('MCDXLIV'))