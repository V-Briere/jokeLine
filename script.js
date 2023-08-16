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

//other examples 

const randomNum = (num)=>{
    return Math.floor(Math.random()*num)
}

const statementOne = ()=>{
    let x = randomNum(4)
    switch (x){
        case 0:
            return "You are a "
            break;
        case 1:
            return "You look like a "
            break;
        case 2:
            return "You smell like a "
            break;
        case 3:
            return "You remind me of a "
            break;
        default:
            "error message"
            break;        
    }
}
 
const statementTwo = ()=>{
    let x = randomNum(6)
    switch (x){
        case 0:
            return "banana"
            break;
        case 1:
            return "loser"
            break;
        case 2:
            return "armpit"
            break;
        case 3:
            return "princess"
            break;
        case 4:
            return "lemon"
            break;
        case 5:
            return "poo"
            break;    
        default:
            "error message"
            break;        
    }
}

const statementThree = ()=>{
    let x = randomNum(3)
    switch (x){
        case 0:
            return " on holiday."
            break;
        case 1:
            return " falling asleep."
            break;
        case 2:
            return " up a tree."
            break;
        default:
            return "error message"
            break;        
    }
}
console.log(statementOne()+statementTwo()+statementThree())
