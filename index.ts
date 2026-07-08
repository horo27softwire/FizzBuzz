// This is our main function
function fizzbuzz(numbersToCount : number): void {
    for (let currentNumber : number = 1; currentNumber <= numbersToCount; currentNumber++){

        let result: string[] = []

        if (currentNumber % 3 === 0) {
            result.push("Fizz");
        }
        if (currentNumber % 5 === 0) {
            result.push("Buzz");
        }

        if (currentNumber % 7 === 0) {
            result.push("Bang");
        }

        if (currentNumber % 11 === 0) {
            result.length = 0
            result.push("Bong");
        }

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

        if (currentNumber % 17 === 0) {
            result.reverse();
        }

        if (result.length) {
            console.log(result.join(""));
        }
    }
}

// Now, we run the main function:
fizzbuzz(100);