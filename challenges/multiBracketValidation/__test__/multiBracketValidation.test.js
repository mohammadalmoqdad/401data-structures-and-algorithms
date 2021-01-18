const multiBracketValidation = require('../multi-bracket-validation');

describe("multiBracketValidation model", () => {
it("matched brackets will return true", ()=>{
    let result = multiBracketValidation.multiBracketValidation("()");
    expect(result).toBeTruthy();
})


it("Unmatched brackets will return false",()=>{
    let result = multiBracketValidation.multiBracketValidation("(}hiiiii");
    expect(result).toBeFalsy();
})  



})