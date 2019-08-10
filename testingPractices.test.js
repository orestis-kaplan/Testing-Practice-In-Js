let imp = require('./testingPractice');

//String Manipulation
describe('String Manipulation', () => {
    //Capitalize
    test("Capitalize 'something' should return 'Something'", ()=>{
        expect(imp.capitalize("something")).toEqual("Something");
    });

    //ReverseString
    test("ReverseString 'something' should return 'gnihtemos'", ()=>{
        expect(imp.reverseString("something")).toEqual("gnihtemos");
    });
});

//Calculator
describe('Calculator', () => {
    let calculator = new imp.Calculator(6,3);

    test("6 + 3 equals 9", ()=>{
        expect(calculator.add()).toBe(9);
    });

    test("6 - 3 equals 3", ()=>{
        expect(calculator.substract()).toBe(3);
    });

    test("6 / 3 equals ", ()=>{
        expect(calculator.divide()).toBe(2);
    });

    test("6 * 3 equals ", ()=>{
        expect(calculator.multiply()).toBe(18);
    });
});

//Caesar Cipher
describe('Caesar Cipher', () => {
    let caesarFunctions = imp.caesarCipher;
    //Encrypt
    //Encrypt string with step 1
    test("Encrypt 'something' with step 1 must become 'tpnfuijoh'", ()=>{
        expect(caesarFunctions.encrypt("something",1)).toEqual("tpnfuijoh");
    });
    //Wrapping from z-a
    test("wrapping from z-a", ()=>{
        expect(caesarFunctions.encrypt("something",8)).toEqual("awumbpqvo");
    });
    //Wrapping from Z-A
    test("wrapping from Z-A", ()=>{
        expect(caesarFunctions.encrypt("SOMETHING",8)).toEqual("AWUMBPQVO");
    });
    //Punctuation
    test("Punctuation of 'something!@#$%&*[]{}:;=-~()' with step 1 to become 'tpnfuijoh",()=>{
        expect(caesarFunctions.encrypt("something!@#$%&*[]{}:;=-~()",1)).toEqual("tpnfuijoh");
    });
    //Punctuation , wrapping from a-z, wrapping from A-Z
    test("Normalize 'SoMeThIng!@#$%&*[]{}:;=-~()' to become 'AwUmBpQvo'", ()=>{
        expect(caesarFunctions.encrypt("SoMeThIng!@#$%&*[]{}:;=-~()",8)).toEqual("AwUmBpQvo");
    });
    //Decrypt
    //Decrypt string with step 1
    test("Decrypt 'tpnfuijoh' with step 1 must become 'something'", ()=>{
        expect(caesarFunctions.decrypt("tpnfuijoh",1)).toEqual("something");
    });
    //Wrapping from z-a
    test("wrapping from z-a", ()=>{
        expect(caesarFunctions.decrypt("awumbpqvo",8)).toEqual("something");
    });
    //Wrapping from Z-A
    test("wrapping from Z-A", ()=>{
        expect(caesarFunctions.decrypt("AWUMBPQVO",8)).toEqual("SOMETHING");
    });
    //Punctuation
    test("Punctuation of 'tpnfuijoh!@#$%&*[]{}:;=-~()' with step 1 to become 'something' ",()=>{
        expect(caesarFunctions.decrypt("tpnfuijoh!@#$%&*[]{}:;=-~()",1)).toEqual("something");
    });
    //Punctuation , wrapping from a-z, wrapping from A-Z
    test("Normalize 'AwUmBpQvo!@#$%&*[]{}:;=-~()' to become 'SoMeThIng'", ()=>{
        expect(caesarFunctions.decrypt("AwUmBpQvo!@#$%&*[]{}:;=-~()",8)).toEqual("SoMeThIng");
    });
 


});

//Array Analyzing
describe('Analyze Array', ()=>{
    let array = [1,2,3,4,5];
    let result = imp.analyze(array);

    test("[1,2,3,4,5] average value should be 3",()=>{
        expect(result.average).toBe(3);
    });

    test("[1,2,3,4,5] min value should be 1",()=>{
        expect(result.min).toBe(1);
    });

    test("[1,2,3,4,5] max value should be 5",()=>{
        expect(result.max).toBe(5);
    });

    test("[1,2,3,4,5] length value should be 5",()=>{
        expect(result.length).toBe(5);
    });
});
