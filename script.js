const introMessage = "Here is a joke for you: ";

const messages = ["What do a tick and the Eiffel Tower have in common? They're both Paris sites.", "What do you call a fish wearing a bowtie? 'Sofishticated.'", "How does dry skin affect you at work?, You don’t have any elbow grease to put into it."]

let numberGenerator = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}
const number = numberGenerator(1,4)
console.log(number)

const messageSelector = () =>{
    if(number === 1){
        return messages[0]
    } if (number === 2) {
        return messages [1]
    } if (number === 3) {
        return messages[2]
    } else {
        return "invalid entry"
    }
};

console.log(messageSelector())