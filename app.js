var words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression", "what I learned at CodingDojo!"],
el = document.getElementById('magic'),
word_counter = 0,
character_counter = 0;

function updateText() {
    temp = words[word_counter][character_counter++];
    if (temp == " ") {
        temp = "&nbsp"
    }
    el.innerHTML = el.innerHTML + temp;
    if(character_counter == words[word_counter].length + 1) {
        word_counter++; 	//choose a different word
        character_counter = 0;	//start over with the first character of the word
        el.innerHTML = '';  //set the html to be blank
        //if we're displaying the last word, go back to the first word
        if(word_counter == words.length) {
            word_counter = 0;
        }
    }
}
setInterval(updateText,300);