function addNumbers(a: number, b: number){
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
    return `a + b = ${a + b}`;
};

function multiply(firstNumber:number , secondNumber?:number, base:number = 2 ){
    return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);


//console.log(result);
//console.log(result2);
//console.log(multiplyResult);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;

}

const jhon: Character = {
    name: 'Jhon',
    hp: 50,
    showHp(){
        console.log(`HP: ${this.hp}`);
    }
}

healCharacter(jhon, 20);
healCharacter(jhon, 10);

jhon.showHp();