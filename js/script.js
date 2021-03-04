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

let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {
       parseResponse(this.responseText);
    }
}

xhr.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/Green-Eggs-And-Ham.txt",true)
xhr.send()

const arr = []
arr.push(xhr)
console.log(arr);

function parseResponse(string) {
    document.getElementById("demo").innerHTML = string;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            string[i].split(arr, ' ')
        }
    }
}

console.log(parseResponse(arr));


// functtion splitData(spaces) {
//     for (let i = 0; i < spaces.length; i++) {
//         spaces[i] = spli
//     }
// }

// let stringToArray = splitString(manipulate, ' ');

// let splitString = function(stringToSplit, seperator) {
//     const arrayOfStrings = stringToSplit.split(' ');
//     return arrayOfStrings;
// }
