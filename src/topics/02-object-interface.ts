const skills: string[] = ['Bash', 'Counter', 'Heal'];

interface Character {
    name: string;
    hpPoints: number;
    skills: string[];
    hometown?: string;
}

const John: Character = {
    name: 'John',
    hpPoints: 100,
    skills: ['Bash', 'Counter'],
}

John.hometown = 'New York';

console.table(John);