// This is our main function
function fizzbuzz(numbersToCount : number): void {
    for (let currentNumber : number = 1; currentNumber <= numbersToCount; currentNumber++){

        let result: string[] = []

        division_3_rule(currentNumber, result);

        division_5_rule(currentNumber, result);

        division_7_rule(currentNumber, result);

        division_11_rule(currentNumber, result);

        division_13_rule(currentNumber, result);

        division_17_rule(currentNumber, result);

        if (result.length) {
            console.log(result.join(""));
        }
    }
}

function division_3_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 3 === 0) {
        result.push("Fizz");
    }
}

function division_5_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 5 === 0) {
        result.push("Buzz");
    }
}

function division_7_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 7 === 0) {
        result.push("Bang");
    }

}

function division_11_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 11 === 0) {
        result.length = 0
        result.push("Bong");
    }
}

function division_13_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 13 === 0) {
        let index :number = result.length;
        for (let resultElement: number = 0; resultElement < result.length; resultElement++) {
            if (result[resultElement][0] == "B"){
                index = resultElement;
                break;
            }
        }

        if (index == result.length){
            result.push("Fezz");
        }
        else {
            result.splice(index, 0, "Fezz");
        }
    }
}

function division_17_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 17 === 0) {
        result.reverse();
    }
}


// Now, we run the main function:

fizzbuzz(15);