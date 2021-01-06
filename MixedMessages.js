//This is a simple project that allowes for the changing and randomization of these random features below:
//Disclamer: This is just a simple test, and could probably be done more effectively

//pick one of those at random
const pickRandomSentence = (num) => {
    return Math.floor(Math.random() * num)
};

//define some ideas
const array = {
array1: ['You should go outside, and bird watch.', 'You should stay inside, and bird watch.'], 
array2: ['You should stay inside, and listen to music.', 'You should go outside, and listen to music.'],
array3: ['You should code with music on.', 'You should code without music on.'], 
array4: ['You should read with music on.', 'You should read with no music on.']
};
//create empty array to fill
let yourArray = [];

//iterate through sentences
    for(let sentence in array) {
        let sentences = pickRandomSentence(array[sentence].length)
        
//push sentence into yourArray[]
    switch(sentence) {
        case 'array1':
        yourArray.push(`Advice: "${array[sentence][sentences]}"`)
        break
        case 'array2':
        yourArray.push(`Advice: "${array[sentence][sentences]}"`)
        break
        case 'array3':
        yourArray.push(`Advice: "${array[sentence][sentences]}"`)
        break
        case 'array4':
        yourArray.push(`Advice: "${array[sentence][sentences]}"`)
        break
        default:
        yourArray.push('Advice: I am unsure.')
    }
}
//join the arrays together
function joinArrays(insert) {
    const joinedArrays = yourArray.join('\n')
    console.log(joinedArrays)
}
joinArrays(yourArray);

