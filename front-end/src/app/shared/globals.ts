import { Difficulty } from './models';
import { Injectable } from "@angular/core";


@Injectable()
export class Globals {

    readonly easy: Difficulty = {
        name: 'easy',
        startingNLetter: 3,
        endingNLetter: 9,
        baseAmout: 15,
        escalation: 5,
        startingTime: 15,
        addedTime: 4,
    };

    readonly medium: Difficulty = {
        name: 'medium',
        startingNLetter: 4,
        endingNLetter: 11,
        baseAmout: 4,
        escalation: 8,
        startingTime: 10,
        addedTime: 2,
    };

    readonly hard: Difficulty = {
        name: 'hard',
        startingNLetter: 4,
        endingNLetter: 9,
        baseAmout: 4,
        escalation: 10,
        startingTime: 8,
        addedTime: 1,
    };

}