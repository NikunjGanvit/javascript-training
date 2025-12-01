const a = {
  user: {
    name: "Nikunj",
    profile: {
      age: 20,
      address: {
        city: "Ahemdabad",
        locality : "Satalite"
      }
    }
  },
  settings: {
    theme: "light",
    notifications: true
  }
};

const b = {
  user: {
    profile: {
      address: {
        city: "Nadiad",
        country: "India"
      },
      hobbies: ["Chess", "gaming"]
    }
  },
  settings: {
    theme: "dark"
  },
  isActive: true
};

// Supporting Functions : 

// Copy object B into Object A
function copyObj(objA, objB) {
    for (let key in objB) {
        objA[key] = objB[key];
    }
}

// Check if Object has key 
function isKeyExist(obj) {
    for (let key in obj ) {
        return true;
    }
    return false;
}

// Find common keys from Object A and B
function findCommonKeys(objA, objB ) {
    const keyOfA = Object.keys(objA);

    commonKeys = keyOfA.filter(key => key in objB);
    
    return commonKeys;
}


function mergDeep(a, b) {
    let scenario;

    if(isKeyExist(b) && !isKeyExist(a)) { // Key exist only in b
        copyObj(a,b);
        return;
    }
    else if (isKeyExist(a) && isKeyExist(b)) { // key exist in both

        let commonKeys = findCommonKeys(a,b);

        for(let key in commonKeys ) {
            let sameKey = commonKeys[key];
            // if both a and b have same key and they are object
            if(((typeof(a[sameKey]) === "object" && a[sameKey] !== "null")) && ( typeof(b[sameKey]) === "object" && b[sameKey] !== "null") ) {
                mergDeep(a[sameKey],b[sameKey]);

            } 
            else { // over write in a with b 
                a[sameKey] = b[sameKey];
            }
        }
    }
}

console.log("before merge :  ");
const stringBeforeA = JSON.stringify(a,null,2);
console.log("Object a : " + stringBeforeA);
const stringBeforeB = JSON.stringify(b,null,2);
console.log("Object b : " + stringBeforeB);


console.log("After merge : ");
mergDeep(a,b);

const stringA = JSON.stringify(a,null,2);

console.log("a : " + stringA);
