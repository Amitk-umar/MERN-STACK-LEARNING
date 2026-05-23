const container = document.querySelector(".container")
const card = document.querySelector(".card")
const h1 = document.querySelector("h1")
// card.append("hello how's going ")

// container.appendChild(h1)

// h1.cloneNode(true)  //creating a clone of h1 element
// container.appendChild(h1.cloneNode(true)) //adding clone elem in container
// container.appendChild(card.cloneNode(true))

// const newCard2 = card.cloneNode()
// newCard2.innerText = 2
// container.appendChild(newCard2)
// //using for loop adding cards 
// for(let i = 3;i<=100;i++){
//    const newCard = card.cloneNode()
//    newCard.innerText=i
//    container.appendChild(newCard)   //appendchild pe hme ek return value milegi uss element ki jise hmne append kiya hai but append pe hme koi retrun value nhi milegi its undefined              
// }

container.append('welcome brother ')
const newTextNode = document.createTextNode('hello world')
container.appendChild(newTextNode)