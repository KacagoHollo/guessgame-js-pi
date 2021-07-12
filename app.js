let maximum = parseInt(prompt('Válassz ki egy maximum szám éréket!'));
while (!maximum) {
    maximum = parseInt(prompt('Adj meg egy számot!'));
}
console.log(`A megadott maximum számod a(z) ${maximum}`)

const targetNum = Math.floor(Math.random * maximum) + 1;
let guess = prompt('Tippelj, melyik számra gondoltam?!');
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Túl nagy! Próbáld újra!')
    }
    else {
        guess = prompt('Túl alacsony! Próbáld újra!')
    }
};
if (guess === 'q') {
    console.log('Sajnálom, hogy megfutamodtál! :P')
}
else {
    console.log('Gratulálok, eltaláltad!')
    console.log(`Összesen ${attempts} alkalommal próbálkoztál!`)
}