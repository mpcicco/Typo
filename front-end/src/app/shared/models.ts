export class Word {
    nLetters: number;
    words: Array<string>;
}

export class Difficulty {
    name: string;
    startingNLetter: number;
    endingNLetter: number;
    baseAmout: number;
    escalation: number;
    startingTime: number;
    addedTime: number;
}
