/**
 * Input :
 *
 * This is user object with key value of 
 *  1. undefined
 *  2. null
 *  3. empty string
 * 
 */

let user =  {
    name : "Nikunj",
    age : null,
    city : "Ahemdabad",
    locality : "",
    height : undefined,
    college : "DDU",
    techStack : "MERN",
    yearOfExp : 0,
    company : "Hexylon",
    role : ""
}

// Object sanitizer function 
function sanitize(obj) {
    let removedKeys = 0;


    // Itrate Through all key and value 
    for (let key in obj) {
        let value = obj[key]; // store value of key
        
        switch (value) { // check if value is null, undifine or empty string 
            case "" :
            case null:
            case undefined: 
                delete obj[key]; // remove that key
                removedKeys++; // increase the removedKeys count
                break;
        }
    }

    return removedKeys;
}

console.log("Input Object : ");
console.log(user); // Before santization

let noOfRemovedKeys = sanitize(user); // give count of removed keys and sanatize the object 
console.log(`${noOfRemovedKeys} keys are removed from object.`);


console.log("Output Object : ");
console.log(user); // After sanitization 

/**
 * 4 keys are removed from object.
 * Output : 
    {
    name: 'Nikunj',
    city: 'Ahemdabad',
    college: 'DDU',
    techStack: 'MERN',
    yearOfExp: 0,
    company: 'Hexylon'
    }

 */


