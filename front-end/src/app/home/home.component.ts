import { WordService } from './../shared/word.service';
import { Component, OnInit } from '@angular/core';
import { Word } from '../shared/models';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public wordList: Array<Word> = [];
    public currentWord: Word;
    public userWord: string;
    public currentWordIndex: number;
    public timeLeft: number;
    public interval;
    public score: number;
    public currentLetterIndex: number;
    public startingTime = 5;
    public test: string;

    constructor(
        private wordService: WordService
    ) {
        this.currentWord = null;
    }

    ngOnInit() {

        this.currentLetterIndex = 0;
        this.score = 0;
        this.timeLeft = this.startingTime;
        this.currentWordIndex = 0;
        this.wordService.getWordList().subscribe(words => {
            this.wordList = words;
        });
        this.userWord = '';
    }

    onKey(event: any) {
        this.userWord = event.target.value;
        this.test = event.key;
        if (event.key === this.currentWord.text[this.currentLetterIndex]) {
            this.currentLetterIndex += 1;
            if (this.userWord === this.currentWord.text) {
                this.score += this.currentWord.nLetters + 10;
                this.timeLeft += 3;
                this.changeWord();
            }
        } else if (event.key !== 'Backspace') {
            if (this.score >= 3) {
                this.score -= 3;
            } else {
                this.score = 0;
            }
        }
    }

    changeWord() {
        this.currentWord = this.wordList[this.currentWordIndex];
        this.currentLetterIndex = 0;
        this.currentWordIndex += 1;
        this.userWord = '';
    }

    startGame() {
        this.changeWord();
        this.timeLeft = this.startingTime;
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            } else { }
        }, 1000);
    }

    exitGame() {
        clearInterval(this.interval);
    }

}
