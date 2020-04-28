import { Word, Difficulty } from './models';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
    providedIn: 'root'
})

export class WordService {
    wordsCollection: AngularFirestoreCollection<Word>;

    constructor(private afs: AngularFirestore) { }

    public getFullWordList(difficulty: Difficulty): Observable<any> {
        return this.afs.collection('words', ref => {
            return ref.where('nLetters', '>', difficulty.startingNLetter)
                .where('nLetters', '<', difficulty.endingNLetter)
                .orderBy('nLetters');
        }).valueChanges();
    }


    public getWordList(fullWordList: Array<Word>, difficulcty: Difficulty): Array<string> {
        let wordList: Array<string> = new Array<string>();
        let round = 0;
        fullWordList.forEach(el => {
            wordList = wordList.concat(this.shuffle(el.words).slice(0, difficulcty.baseAmout + (difficulcty.escalation * round)));
            round++;
        });
        return wordList;
    }

    public shuffle(array: Array<any>) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}
