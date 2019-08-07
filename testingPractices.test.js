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
    
    //Normalization of string
    test("Normalize 'SoMeThIng!@#$%&*[]{}:;=-~()' to become 'something'", ()=>{
        expect(caesarFunctions.normalizeString("SoMeThIng!@#$%&*()",1)).toEqual("something");
    });
    //Encrypt string
    test("Encrypt 'something' with step 1 must become 'tpnfuijoh'", ()=>{
        expect(caesarFunctions.encrypt("something",1)).toEqual("tpnfuijoh");
    });
    //Decrypt string
    test("Decrypt 'tpnfuijoh' with step 1 must become 'something'", ()=>{
        expect(caesarFunctions.decrypt("tpnfuijoh",1)).toEqual("something");
    });

});

//Array Analyzing
describe('Analyze Array', ()=>{
    let array = [1,2,3,4,5];
    let analyze = imp.analyze;

    test("[1,2,3,4,5] average value should be 3",()=>{
        expect(analyze(array).average).toBe(3);
    });

    test("[1,2,3,4,5] min value should be 1",()=>{
        expect(analyze(array).min).toBe(1);
    });

    test("[1,2,3,4,5] max value should be 5",()=>{
        expect(analyze(array).max).toBe(5);
    });

    test("[1,2,3,4,5] length value should be 5",()=>{
        expect(analyze(array).length).toBe(5);
    });
});
