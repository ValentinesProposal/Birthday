document.getElementById('playMusic').addEventListener('click', function() {
    new Audio('vivianBday.mp3').play();
});
const poemLines = [
"In a realm of code and binary's embrace,\n"+
"There dwells a soul with a curious face.\n"+
"Vivian, a name known in the science hall,\n"+
"Where algorithms dance and data doth call.\n",

"Today marks the journey of another year,\n"+
"A celebration of joy, of cheer, so dear.\n"+
"For Vivian, whose heart with Kirby beats in tune,\n"+
"A bond of pink and dreams beneath the moon.\n",

"In lines of code, a world she weaves so bright,\n"+
"With Kirby by her side, in the soft twilight.\n"+
"Together, they embark on quests untold,\n"+
"In digital realms, where stories unfold.",

"Her keyboard clicks, a melody so sweet,\n"+
"A symphony of logic, where challenges meet.\n"+
"Vivian, a wizard in the computer's eye,\n"+
"With Kirby, in starlight, they soar and fly.",

"On this day of days, her spirit shines so clear,\n"+
"A beacon of innovation, without any fear.\n"+
"Happy birthday, Vivian, may your dreams take flight,\n"+
"With Kirby as your companion, in the starlit night.",

"So raise a toast to the journeys yet to be,\n"+
"In the vast, uncharted realms of possibility.\n"+
"For Vivian, a future bright and wide,\n"+
"With Kirby, forever, by her side."

];
let currentLine = 0;

document.getElementById('nextLineBtn').addEventListener('click', function() {
    if(currentLine < poemLines.length) {
        document.getElementById('poemContainer').innerText = poemLines[currentLine];
        currentLine++;
    } else {
        this.innerText = "No More Lines";
        this.disabled = true;
    }
});
