const Stack = require('../Data-Structures/stacks_and_queues/stack.js');

function multiBracketValidation(input) {
    let stack = new Stack();

    if (input.indexOf('(') == -1 && input.indexOf('{') == -1 && input.indexOf('[') == -1) return false;


    for (let i = 0; i < input.length; i++) {

        if (input[i] == "(" || input[i] == "{" || input[i] == "[") {
            stack.push(input[i]);
        }
        else {

            if(stack.isEmpty() && input[i] == ")" || input[i] == "}" || input[i] == "]") return false // like '()]'
           
            switch (input[i]) {

                case "}":
                    if (!stack.isEmpty() && stack.peek() == "{") stack.pop();

                    break;
                case ")":
                    if (!stack.isEmpty() && stack.peek() == "(") stack.pop();

                    break;
                case "]":
                    if (!stack.isEmpty() && stack.peek() == "[") stack.pop();
                    break;
                default:
                    continue;

            }
        }

    }

    if (stack.isEmpty()) return true;
    else return false

}

// console.log(multiBracketValidation("{himinnn}}"))

module.exports = {multiBracketValidation:multiBracketValidation};




