export type Rule = (currentNumber : number, result: string[]) => void;

export function division_3_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 3 === 0) {
        result.push("Fizz");
    }
}

export function division_5_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 5 === 0) {
        result.push("Buzz");
    }
}

export function division_7_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 7 === 0) {
        result.push("Bang");
    }

}

export function division_11_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 11 === 0) {
        result.length = 0
        result.push("Bong");
    }
}

export function division_13_rule(currentNumber : number, result : string[]): void{
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

export function division_17_rule(currentNumber : number, result : string[]): void{
    if (currentNumber % 17 === 0) {
        result.reverse();
    }
}