// console.log(4>5 && 10<8)
// console.log(4>5 || 10<8)

const username = 'Amit kumar'   
const userAge = 21


// if (!username) {
    //   username = 'Amit kumar'
    // }
    
    
// debugger
if(username) {
    console.log(`Name: ${username}`)
}

if(userAge) {
    console.log(`Age: ${userAge}`)
}

// console.log(`Name: ${username}`)
// console.log(`Age: ${userAge}`)


if (userAge > 0) {

    if (userAge <= 4) {
        console.log(`${username} is a kid.`);
        console.log("He/She likes toys and cartoons.");
    } 
    
    else if (userAge <= 17) {
        console.log(`${username} is a school student.`);
        console.log("He/She studies subjects like Science and Maths.");
    } 
    
    else if (userAge <= 24) {

        console.log(`${username} is a college student.`);

        if (userAge >= 21) {
            console.log("He/She might be preparing for a job.");
        } else {
            console.log("He/She is focusing on studies and skills.");
        }

    } 
    
    else if (userAge <= 45) {

        console.log(`${username} is a working professional.`);

        if (userAge < 30) {
            console.log("He/She is building a career.");
        } else {
            console.log("He/She is experienced in the field.");
        }

    } 
    
    else if (userAge < 121) {

        console.log(`${username} is retired.`);

        if (userAge > 60) {
            console.log("He/She enjoys reading newspapers and spending time with family.");
        } else {
            console.log("He/She is planning retirement.");
        }

    } 
    
    else {
        console.log(`${username} is immortal 😄`);
    }

} else {
    console.log("Please Enter a Valid Age");
}

// console.log("Program Ended!!");

