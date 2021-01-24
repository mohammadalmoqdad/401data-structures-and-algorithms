const { TestWatcher } = require('jest');
let codeFile = require('../fizz-buzz-tree');
const fizzBuzz = codeFile.fizzBuzz
const Node = codeFile.Node;
const k_Node_Tree = codeFile.k_Node_Tree;
describe("fizzBuzz Model", ()=>{

    it("Expected failure",()=>{
        let  tree = new k_Node_Tree(null);
        expect(fizzBuzz(tree)).toEqual(' enter a tree first !');

    })



    it("Expected success", ()=>{
        let twenty = new Node(20);
        let sixty = new Node(60);
        let thirty = new Node(30);
        let fifteen = new Node(15);
        let seven = new Node(7);
        let three = new Node(3);
        let five = new Node(5);


        twenty.children.push(sixty)
        twenty.children.push(five)
        sixty.children.push(fifteen)
        five.children.push(seven)
        five.children.push(three)
        five.children.push(thirty)



        let tree = new k_Node_Tree(twenty);
        let result =  fizzBuzz(tree);
        expect(result.root.children[0].value).toEqual("FizzBuzz");

    })

})