// --- DICTIONARIES ---
const wyanjana = {
    b: 'ꦧ', bh: 'ꦨ', c: 'ꦕ', ch: 'ꦖ', d: 'ꦢ', dh: 'ꦝ', ḍ: 'ꦝ', ḍh: 'ꦞ',
    dz: 'ꦢ꦳', f: 'ꦥ꦳', g: 'ꦒ', gh: 'ꦒ꦳', g̣: 'ꦓ', h: 'ꦲ', j: 'ꦗ', jh: 'ꦙ',
    k: 'ꦏ', ḳ: 'ꦑ', kh: 'ꦏ꦳', l: 'ꦭ', m: 'ꦩ', n: 'ꦤ', ng: 'ꦔ', ŋ: 'ꦔ',
    ny: 'ꦚ', ñ: 'ꦚ', ṇ: 'ꦟ', p: 'ꦥ', ph: 'ꦦ', q: 'ꦐ', r: 'ꦫ', ṛ: 'ꦬ',
    s: 'ꦱ', ś: 'ꦯ', ṣ: 'ꦰ', t: 'ꦠ', th: 'ꦛ', ṭ: 'ꦡ', ṭh: 'ꦜ', v: 'ꦮ꦳',
    w: 'ꦮ', x: 'ꦏ꧀ꦱ', y: 'ꦪ', z: 'ꦗ꦳'
};

const swara = {
    a: 'ꦄ', ā: 'ꦄꦴ', aa: 'ꦄꦴ', ô: 'ꦄ', ôô: 'ꦄꦴ', ai: 'ꦍ', ôi: 'ꦍ',
    au: 'ꦎꦴ', ôu: 'ꦎꦴ', i: 'ꦆ', ï: 'ꦅ', ii: 'ꦇ', ī: 'ꦇ', u: 'ꦈ',
    ū: 'ꦈꦴ', uu: 'ꦈꦴ', e: 'ꦌ', é: 'ꦌ', ê: 'ꦄꦼ', o: 'ꦎ'
};

const murdaConsonants = {
    'n': 'ꦟ', 'k': 'ꦑ', 'kh': 'ꦑ꦳', 't': 'ꦡ', 's': 'ꦯ', 'p': 'ꦦ',
    'f': 'ꦦ꦳', 'ny': 'ꦘ', 'ñ': 'ꦘ', 'g': 'ꦓ', 'gh': 'ꦓ꦳', 'b': 'ꦨ'
};

const sandhanganWyanjana = { r: 'ꦿ', ṛ: 'ꦽ', y: 'ꦾ' };
const sandhanganPanyigeg = { r: 'ꦂ', h: 'ꦃ', ng: 'ꦁ' };

const sandhanganSwara = { 
    a: '', ô: '', aa: 'ꦴ', ai: 'ꦻ', au: 'ꦻꦴ', ôô: '', ā: 'ꦴ',
    i: 'ꦶ', ii: 'ꦷ', ī: 'ꦷ', u: 'ꦸ', uu: 'ꦹ', ū: 'ꦹ',
    e: 'ꦺ', è: 'ꦺ', é: 'ꦺ', ê: 'ꦼ', ě: 'ꦼ', êu: 'ꦼꦴ', ěu: 'ꦼꦴ', o: 'ꦺꦴ'
};

const angka = {
    '0': '꧐', '1': '꧑', '2': '꧒', '3': '꧓', '4': '꧔', '5': '꧕', '6': '꧖', '7': '꧗', '8': '꧘', '9': '꧙'
};

const pada = { ' ': '', '.': '꧉', ',': '꧈', '|': '꧋' };

// --- LOGIC FUNCTIONS ---
function isWyanjana(key) { return Object.values(wyanjana).includes(key); }
function isWyanjanaPasanganInRight(wyanjanaChar) { 
    return wyanjanaChar === 'ꦥ' || wyanjanaChar === 'ꦥ꦳' || wyanjanaChar === 'ꦲ' || wyanjanaChar === 'ꦏ꧀ꦱ' || wyanjanaChar === 'ꦰ' || wyanjanaChar === 'ꦱ' || wyanjanaChar === 'ꦦ'; 
}
function isWyanjanaPasanganInBelow(wyanjanaChar) { 
    return isWyanjana(wyanjanaChar) && !isWyanjanaPasanganInRight(wyanjanaChar); 
}
function isSandhanganWyanjana(key) { return Object.values(sandhanganWyanjana).includes(key); }
function isSandhanganPanyigeg(key) { return Object.values(sandhanganPanyigeg).includes(key); }
function isSwara(key) { return Object.values(swara).includes(key); }
function isConsonants(s) { return Object.prototype.hasOwnProperty.call(wyanjana, s.toLowerCase()); }
function isConsonantsMurda(s) { return Object.prototype.hasOwnProperty.call(murdaConsonants, s.toLowerCase()); }
function isConsonantsSandhanganPanyigeg(s) { return Object.prototype.hasOwnProperty.call(sandhanganPanyigeg, s.toLowerCase()); }
function isConsonantsSandhanganWyanjana(s) { return Object.prototype.hasOwnProperty.call(sandhanganWyanjana, s.toLowerCase()); }
function isConsonantL(s) { return s.toLowerCase() === 'l'; }
function isConsonantR(s) { return s.toLowerCase() === 'r'; }
function isVowels(s) { return Object.prototype.hasOwnProperty.call(sandhanganSwara, s.toLowerCase()); }
function isVowelsSwara(s) { return Object.prototype.hasOwnProperty.call(swara, s.toLowerCase()); }
function isCharactersAngka(s) { return Object.prototype.hasOwnProperty.call(angka, s.toLowerCase()); }
function isCharactersPada(s) { return Object.prototype.hasOwnProperty.call(pada, s.toLowerCase()); }
function isVowelsA(s) { const c = s.toLowerCase(); return c === 'a' || c === 'ô'; }
function isVowelsPepet(s) { const c = s.toLowerCase(); return c === 'e' || c === 'ê' || c === 'ě' || c === 'x'; }
function isVowelsWulu(s) { return s.toLowerCase() === 'i'; }
function isVowelsSuku(s) { return s.toLowerCase() === 'u'; }
function isVowelsTaling(s) { const c = s.toLowerCase(); return c === 'e' || c === 'é' || c === 'è'; }
function isVowelsTalingTarung(s) { return s.toLowerCase() === 'o'; }
function isPangkon(s) { return s === '꧀'; }
function isCakra(s) { return s === 'ꦿ'; }
function isWhiteSpace(s) { return s === ' ' || s === '​' || s === " ︀"; }

// --- MAIN ENGINE CONVERT ---
function convert(str, isIgnoreSpace = false, isDiphthong = false, isAksaraSwara = true, isMurda = false) {
    var length = str.length;
    var output = [];
    var isMurdaAlreadyIncluded = false;
    var isAlreadyStacked = false;

    str = str.replace(/x/g, 'ê');
    length = str.length;

    for (var i = 0; i < length; i++) {
        var c = str[i];

        // 1. PENANGANAN DETEKSI DERETAN ANGKA (DENGAN PENGAPIT ꧇)
        if (isCharactersAngka(c)) {
            isAlreadyStacked = false;
            output.push('꧇');
            while (i < length && isCharactersAngka(str[i])) {
                output.push(angka[str[i]]);
                i++;
            }
            output.push('꧇');
            i--;
            continue;
        }

        if(i + 1 < length) {
            var cc = c + str[i + 1];
            
            if(isConsonants(cc) || isConsonants(cc.toLowerCase())) {
                i++;
                if(cc === cc.toUpperCase()) { cc = cc.toLowerCase(); }

                if(isConsonantsSandhanganPanyigeg(cc)) {
                    isAlreadyStacked = false;
                    if(i - 2 >= 0 && i + 1 < length) {
                        var cBefore = str[i - 2];
                        var cAfter = str[i + 1];
                        if(isVowels(cBefore) && !isVowels(cAfter)) {
                            output.push(sandhanganPanyigeg[cc.toLowerCase()]);
                            continue;
                        }
                    }
                    if(i - 2 >= 0 && i === length - 1) {
                        var cBefore = str[i - 2];
                        if(isVowels(cBefore)) {
                            output.push(sandhanganPanyigeg[cc.toLowerCase()]);
                            continue;
                        }
                    }
                }

                if(output.length - 2 >= 0) {
                    var lastOutput = output[output.length - 1];
                    var lastOutput2 = output[output.length - 2];
                    if(isPangkon(lastOutput) && isWyanjanaPasanganInBelow(lastOutput2)) { 
                        if(isAlreadyStacked) {
                            output.pop(); output.pop();
                            output.push('​'); // zero width space
                            output.push(lastOutput2); output.push(lastOutput);
                            isAlreadyStacked = false;
                        } else {
                            isAlreadyStacked = true;
                        }
                    }
                }

                if(isMurda && !isMurdaAlreadyIncluded && isConsonantsMurda(cc)) {
                    output.push(murdaConsonants[cc.toLowerCase()]);
                    isMurdaAlreadyIncluded = true;
                } else {              
                        output.push(wyanjana[cc.toLowerCase()]);
                }
                output.push('꧀');
                continue;
            }
        }

        if(isConsonantsSandhanganPanyigeg(c)) {
            isAlreadyStacked = false;
            let isSandhanganPanyigegCheck = false;

            if(i - 1 >= 0 && i + 1 < length) {
                var cBefore = str[i - 1];
                var cAfter = str[i + 1];
                if(isVowels(cBefore) && !isVowels(cAfter)) { isSandhanganPanyigegCheck = true; }
            }
            if(i - 1 >= 0 && i === length - 1) {
                var cBefore = str[i - 1];
                if(isVowels(cBefore)) { isSandhanganPanyigegCheck = true; }
            }

            if(isSandhanganPanyigegCheck) {
                if(output.length - 1 >= 0) {
                    var lastOutput = output[output.length - 1];   
                    if(isPangkon(lastOutput)) { output.pop(); }
                }
                output.push(sandhanganPanyigeg[c.toLowerCase()]);
                continue;
            }
        }
        
        if(isConsonantsSandhanganWyanjana(c)) {
            isAlreadyStacked = false;
            let isSandhanganWyanjanaCheck = false;

            if(i - 2 >= 0) {
                var cBeforeCombined = str[i - 2] + str[i - 1];
                if(isConsonants(cBeforeCombined) && !isSandhanganPanyigeg(output[output.length - 1])) {
                    isSandhanganWyanjanaCheck = true;
                }
            }
            if(i - 1 >= 0) {
                var cBeforeSingle = str[i - 1];
                if(isConsonants(cBeforeSingle) && !isSandhanganPanyigeg(output[output.length - 1])) {
                    isSandhanganWyanjanaCheck = true;
                }
            }

            if(isSandhanganWyanjanaCheck) {
                if(output.length - 1 >= 0) {
                    var lastOutput = output[output.length - 1];   
                    if(isPangkon(lastOutput)) { output.pop(); }
                }
                output.push(sandhanganWyanjana[c.toLowerCase()]);
                continue;
            }
        }
        
        if(isConsonants(c) || isConsonants(c.toLowerCase())) {
            if(c === c.toUpperCase()) { c = c.toLowerCase(); }

            if(output.length - 2 >= 0) {
                var lastOutput = output[output.length - 1];
                var lastOutput2 = output[output.length - 2];
                if(isPangkon(lastOutput) && isWyanjanaPasanganInBelow(lastOutput2)) { 
                    if(isAlreadyStacked) {
                        output.pop(); output.pop();
                        output.push('​'); // zero width space
                        output.push(lastOutput2); output.push(lastOutput);
                        isAlreadyStacked = false;
                    } else {
                        isAlreadyStacked = true;
                    }
                }
            }

            if(isMurda && !isMurdaAlreadyIncluded && isConsonantsMurda(c)) {
                output.push(murdaConsonants[c.toLowerCase()]);
                isMurdaAlreadyIncluded = true;
            } else {
                output.push(wyanjana[c.toLowerCase()]);
            }
            output.push('꧀');
            continue;
        }

        if(isVowels(c) && i + 1 < length) {
            var c2 = str[i + 1];
            if(isVowelsWulu(c) && isVowels(c2) && !isVowelsWulu(c2)) {
                str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                length = str.length;
            }
            if(isVowelsSuku(c) && isVowels(c2) && !isVowelsSuku(c2)) {
                str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                length = str.length;
            }
            if(isVowelsTaling(c) && isVowelsA(c2)) {
                str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                length = str.length;
            }
            if(isVowelsTaling(c) && isVowelsTalingTarung(c2)) {
                str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                length = str.length;
            }
            if(isVowelsTalingTarung(c) && isVowelsA(c2)) {
                str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                length = str.length;
            }
            if(isVowelsTalingTarung(c) && isVowelsTaling(c2)) {
                str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                length = str.length;
            }
        }

        if(isAksaraSwara && isVowelsSwara(c)) {
            var cBefore = "";
            if (i - 1 >= 0) cBefore = str[i - 1];

            var isLastOutputEmpty = output.length === 0;
            var isLastOutputValid = false;
            var isLastOutputSwara = false;
            if (output.length - 1 >= 0) {
                var lastOutputChar = output[output.length - 1];
                isLastOutputSwara = isSwara(lastOutputChar);

                if (output.length - 2 >= 0) {
                    var lastOutputChar2 = output[output.length - 2];
                    isLastOutputValid = !(isWyanjana(lastOutputChar2) && isPangkon(lastOutputChar)) && !(isWyanjana(lastOutputChar2) && isSandhanganWyanjana(lastOutputChar)) ;
                }
            }
            
            if (isLastOutputEmpty || isLastOutputSwara || isLastOutputValid) {
                isAlreadyStacked = false;
                if(i + 1 < length && isVowels(str[i + 1])) {
                    var cc = c + str[i + 1];
                    if(isVowelsSwara(cc)) {
                        output.push(swara[cc.toLowerCase()]);
                        i++;
                        continue;
                    }
                }
                output.push(swara[c.toLowerCase()]);
                continue;
            }
        }
        
        if(isVowels(c)) {
            isAlreadyStacked = false;

            if(isVowelsPepet(c)) {
                if(output.length - 1 >= 0) {
                    var lastOutputChar = output[output.length - 1];
                    if(isCakra(lastOutputChar)) {
                        output.pop();
                        output.push('ꦽ');
                        continue;
                    }
                }

                if(i - 1 >= 0) {
                    var cBefore = str[i - 1];
                    if(isConsonantL(cBefore)) {
                        output.pop(); output.pop();
                        output.push('ꦊ');
                        continue;
                    }
                    if(isConsonantR(cBefore)) {
                        output.pop(); output.pop();
                        output.push('ꦉ');
                        continue;
                    }
                }
            }

            if(isDiphthong && isVowelsSuku(c)) {
                if(i - 2 >= 0) {
                    var c2Before = str[i - 2];
                    var cBefore = str[i - 1];
                    if(isConsonantL(c2Before) && isVowelsPepet(cBefore)) {
                        output.pop(); output.push('ꦋ');
                        continue;
                    }
                    if(isConsonantR(c2Before) && isVowelsPepet(cBefore)) {
                        output.pop(); output.push('ꦉꦴ');
                        continue;
                    }
                }
            }
            
            if(i - 1 >= 0 && isConsonants(str[i - 1])) {
                if(output.length - 1 >= 0) {
                    var lastOutputChar = output[output.length - 1];
                    if(isPangkon(lastOutputChar)) { output.pop(); }
                }
                output.push(sandhanganSwara[c.toLowerCase()]);
            } else {
                output.push(wyanjana['h']);
                output.push(sandhanganSwara[c.toLowerCase()]);
            }

            if(isDiphthong && i + 1 < length && isVowels(str[i + 1])) {
                var c2 = str[i + 1];
                if(isVowelsA(c) && isVowelsA(c2)) {
                    output.push(sandhanganSwara['aa']); i++; continue;
                }
                if(isVowelsA(c) && isVowelsWulu(c2)) {
                    output.push(sandhanganSwara['ai']); i++; continue;
                }
                if(isVowelsA(c) && isVowelsSuku(c2)) {
                    output.push(sandhanganSwara['au']); i++; continue;
                }
                if(isVowelsWulu(c) && isVowelsWulu(c2)) {
                    output.pop(); output.push(sandhanganSwara['ii']); i++; continue;
                }
                if (isVowelsSuku(c) && isVowelsSuku(c2)) {
                    output.pop(); output.push(sandhanganSwara['uu']); i++; continue;
                }
                if (isVowelsPepet(c) && isVowelsSuku(c2)) {
                    output.pop(); output.push(sandhanganSwara['êu']); i++; continue;
                }
            }
            continue;
        }
        
        if(isCharactersPada(c)) {
            isAlreadyStacked = false;
            if(isWhiteSpace(c)) {
                if (isIgnoreSpace) output.push(pada[c]);
                else output.push(c);
                continue;
            }
            output.push(pada[c]);
            continue;
        }
        
        isAlreadyStacked = false;
        output.push(c);
    }

    // Post Process
    let res = output.join('');
    res = res.replace(/ꦤ꧀ꦗ/g, 'ꦚ꧀ꦗ'); // n + ja -> nya + ja
    res = res.replace(/ꦤ꧀ꦕ/g, 'ꦚ꧀ꦕ'); // n + ca -> nya + ca

    return res;
}

// --- BINDING EVENTS TO DOM ---
const inputArea = document.getElementById('inputLatin');
const outputDiv = document.getElementById('outputJawa');
const optIgnoreSpace = document.getElementById('optIgnoreSpace');
const optDiphthong = document.getElementById('optDiphthong');
const optAksaraSwara = document.getElementById('optAksaraSwara');
const optMurda = document.getElementById('optMurda');

function handleConvert() {
    const text = inputArea.value;
    const result = convert(
        text,
        optIgnoreSpace.checked,
        optDiphthong.checked,
        optAksaraSwara.checked,
        optMurda.checked
    );
    outputDiv.textContent = result;
}

// --- COPY TO CLIPBOARD ---
btnCopy.addEventListener('click', () => {
    const textToCopy = outputDiv.textContent;
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
        btnCopy.classList.add('copied');
        btnCopyText.textContent = "Tersalin!";
        
        setTimeout(() => {
            btnCopy.classList.remove('copied');
            btnCopyText.textContent = "Salin";
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
});

inputArea.addEventListener('input', handleConvert);
optIgnoreSpace.addEventListener('change', handleConvert);
optDiphthong.addEventListener('change', handleConvert);
optAksaraSwara.addEventListener('change', handleConvert);
optMurda.addEventListener('change', handleConvert);
