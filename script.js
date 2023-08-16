const introMessage = "Here is a joke for you: ";

const messages = ["What do a tick and the Eiffel Tower have in common? They're both Paris sites.", "What do you call a fish wearing a bowtie? 'Sofishticated.'", "How does dry skin affect you at work?, You don’t have any elbow grease to put into it."]

let numberGenerator = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}
const number = numberGenerator(1,4)
console.log(number)

const messageSelector = () =>{
    if(number === 1){
        return introMessage + messages[0]
    } if (number === 2) {
        return introMessage + messages [1]
    } if (number === 3) {
        return introMessage + messages[2]
    } else {
        return "invalid entry"
    }
};

//console.log(messageSelector())

//other examples 

const welcomeNote = {
    greeting: ["hello","Hi", "greetings","What's Up", "Bonjour","Who's there!!!!"],
    introForm: ["I'm", "My name is", "Je suis", "Everybody call me"],
    name: ["Mike", "Victor", "Brad", "Michel"],
    lastName: ["Beauregard", "Cooper", "Paulnareff", "Budweiser"]
}

const creatMsg = obj => {
    let salut = welcomeNote.greeting[Math.floor(Math.random() * welcomeNote.greeting.length)]
    let form = welcomeNote.introForm[Math.floor(Math.random() * welcomeNote.introForm.length)]
    let name = welcomeNote.name[Math.floor(Math.random() * welcomeNote.name.length)]
    let surname = welcomeNote.lastName[Math.floor(Math.random() * welcomeNote.lastName.length)]

    return `${salut} ${form} ${name} ${surname}.`
};

console.log(creatMsg(welcomeNote));
console.log(messageSelector())

