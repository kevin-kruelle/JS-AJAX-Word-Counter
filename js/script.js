console.log('connected...')

/* STEPS TO FOLLOW
*1. Create XHR object
*2. Open request
*3. Send request (won't send yet we still need to write callback function)
*4. Write .onreadystatechange callback function
*5. Add data into an array using .push() method.
*6. store .txt file in an associative array(each word will be stored only ONCE**)
*7. A value should be stored for how many repeat words there are.
*8. Output all words in the associative array in the map with their occurences.
*9. Create an object and store word count of associative array result
*10. Store count of unique words, most/least used words and the longest word in object.
*11. Create a method that accpets a string value and returns the word count of that string value.
*/

//Create new XHR object
let xhr = new XMLHttpRequest()

//Create callback function to display Green Eggs & Ham .txt file on webpage.
xhr.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {
       parseResponse(this.responseText);
    }
}

//Open request.
xhr.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/Green-Eggs-And-Ham.txt",true)

//Send request.
xhr.send()

//Function determines where .txt file of green eggs & ham is displayed on the webpage.
let parseResponse = function(string) {
    document.getElementById("demo").innerHTML = string;

    //Split long string into multiple strings and stored in array splitResponse
    
    
    let splitResponse = string.split('\n');

    let splitResponseBySpace = (string) => {
        for (let i = 0; i < string.length; i++) {
            string[i] = splitResponse(string[i], ' ')
        }
        return string
    }
    let parseResponse = splitResponseBySpace(splitResponse)
    
    
    // splitResponseSplit = string.split(' ')
        console.log(parseResponse)

    //Checked to see how many times a string occurs in the array and logged output.
    let checked = {};
    for (let word of splitResponse) {
        if (checked[word]) {
            checked[word] = checked[word] +1;
        } else {
            checked[word] = 1;
        }
    }
    //console.log(checked)

 // Loop through array SplitResponse. Will determine which string is the longest and store amount of charectors in the variable lgth. Which ever string is determined to be the longest will be stored in the variable longest.
        let lgth = 0;
        let longest;
    for (let i = 0; i < splitResponse.length; i++) {
        if (splitResponse[i].length > lgth) {
            lgth = splitResponse[i].length;
            longest = splitResponse[i];
        } 
    }
    //console.log(longest, lgth)

    let wordCount = splitReponse.length;
    //console.log(wordCount)
}




