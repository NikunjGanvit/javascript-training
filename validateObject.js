// TestCases 

//output1 = true
data1 = {
    name : "Nikunj",
    age : 20,
    active : true,
    address : {
        city : "Ahemdabad",
        pin : "380001"
    }

}

schema1 = {
    name: { type: "string", required: true, minLength: 2 },
    age: { type: "number", min: 0, max: 120 },
    active: { type: "boolean", required: true },
    address: {
        type: "object",
        schema: {
        city: { type: "string", required: true },
        pin: { type: "string" }
        }
    }
}

//output2 = false
data2 = {
    name : "Nikunj",
    age : "20",
    active : true,
    address : {
        city : "Ahemdabad",
        pin : "380001"
    }

}

schema2 = {
    name: { type: "string", required: true, minLength: 2 },
    age: { type: "number", min: 0, max: 120 },
    active: { type: "boolean", required: true },
    address: {
        type: "object",
        schema: {
        city: { type: "string", required: true },
        pin: { type: "string" }
        }
    }
}

function validate(data, schema) {
    
    for (const keys in data) { // itarate both object parallelly 

        let valueOfData = data[keys]; // value of data 
        let valueOfSchema = schema[keys]; // object of constraints for validation 

        for(let key in valueOfSchema) { // for each constrains in object 
            switch (key) { 
                case "type" :
                    // we agin call validate if find type object
                    if (valueOfSchema[key] === "object" ) {
                        return validate(valueOfData,valueOfSchema["schema"]);
                    }
                    else if (typeof(valueOfData) !== valueOfSchema[key]) { // check type
                        // console.log(valueOfSchema,valueOfData);
                        return false;
                    }
                    break;
                case "required" : // check valid value
                    if (valueOfData === "" && valueOfData === undefined && valueOfData === null ) {
                        return false;
                    }
                    break;
                case "minLength" : // check length
                    if(valueOfData.length < valueOfSchema[key]) {
                        return false;
                    }
                    break;
                case "min" :  // check length
                    if (valueOfData < valueOfSchema[key]) {
                        return false;
                    }
                    break;
                case "max" :  // check length
                    if (valueOfData > valueOfSchema[key]) {
                        return false;
                    }
                    break;
            }
        } 
    }
    return true;
}

console.log("Test Case 1: ");
console.log("Checking data is valid with schema or not : ");
console.log("Data : " + JSON.stringify(data1,null,2) + "\n");
console.log("Schema : " + JSON.stringify(schema1,null,2) + "\n");

console.log("Is it valid : " + validate(data1,schema1));

console.log("\n");


console.log("Test Case 2: ");
console.log("Checking data is valid with schema or not : ");
console.log("Data : " + JSON.stringify(data2,null,2) + "\n");
console.log("Schema : " + JSON.stringify(schema2,null,2) + "\n");

console.log("Is it valid : " + validate(data2,schema2));

