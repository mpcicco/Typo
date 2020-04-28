import { LostModalComponent } from './../lost-modal/lost-modal.component';
import { Difficulty } from './../shared/models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordService } from '../shared/word.service';
import { Globals } from '../shared/globals';
import { MatDialog } from '@angular/material/dialog';
import { timer, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-wordi-bomb',
    templateUrl: './wordi-bomb.component.html',
    styleUrls: ['./wordi-bomb.component.scss']
})
export class WordiBombComponent implements OnInit, OnDestroy {

    public isdifficultyChosen = false;
    public isGameStarted = false;
    public wordList: Array<string> = [];
    public currentWord: string;
    public userWord: string;
    public currentWordIndex: number;
    public timeLeft: number;
    public score: number;
    public currentLetterIndex: number;
    public startingNLetters: number;
    public endingNLetters: number;
    public difficulty: Difficulty;
    public timerSubscription: Subscription;

    constructor(private wordService: WordService, public constants: Globals, public dialog: MatDialog, private router: Router) {
        this.currentWord = 'start';
    }

    ngOnInit() {
        this.userWord = '';
        this.currentLetterIndex = 0;
        this.currentWordIndex = 0;
        this.score = 0;
    }

    ngOnDestroy(): void {
        this.timerSubscription.unsubscribe();
    }

    onKey(event: any) {
        this.userWord = event.target.value;
        if (this.isGameStarted === false) {
            if (this.userWord === 'start') {
                this.isGameStarted = true;
                this.startGame();
            }
        } else {
            if (this.userWord === this.currentWord) {
                this.changeWord();
            } else if (event.key === this.currentWord[this.currentLetterIndex]) {
                this.currentLetterIndex++;
            } else if (event.key !== 'Backspace' && this.score > 0) {
                this.decreaseScore();

            }
        }
    }

    chooseDifficult(choosenDifficult: Difficulty) {
        this.difficulty = choosenDifficult;
        this.isdifficultyChosen = true;
        this.timeLeft = this.difficulty.startingTime;
    }

    startGame() {
        this.resetStat();
        this.wordService.getFullWordList(this.difficulty).subscribe(words => {
            this.wordList = this.wordService.getWordList(words, this.difficulty);
            this.currentWord = this.wordList[this.currentWordIndex];
            this.startTimer();
        });
    }
    resetStat() {
        this.currentWord = 'start';
        this.score = 0;
        this.userWord = '';
        this.timeLeft = this.difficulty.startingTime;
        this.currentLetterIndex = 0;
        this.currentWordIndex = 0;
    }

    changeWord() {
        this.score += 10;
        this.timeLeft += this.difficulty.addedTime;
        this.currentLetterIndex = 0;
        this.currentWordIndex += 1;
        this.userWord = '';
        this.currentWord = this.wordList[this.currentWordIndex];
    }

    decreaseScore() {
        if (this.score >= 3) {
            this.score -= 3;
        } else {
            this.score = 0;
        }
    }

    startTimer() {
        const source = timer(500, 1000);
        this.timerSubscription = source.subscribe(val => {
            if (this.timeLeft === 0) {
                this.timerSubscription.unsubscribe();
                this.openLostModal();
            } else {
                this.timeLeft = this.timeLeft - 1;
            }
        });
    }

    openLostModal() {
        const dialogRef = this.dialog.open(LostModalComponent, {
            width: '600px',
            height: '410px',
            autoFocus: false,
            data: { score: this.score }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result.data === true) {
                this.isGameStarted = false;
                this.resetStat();
            } else if (result.data === false) {
                this.ngOnDestroy();
            }
        });
    }
    goHome() {
        this.ngOnDestroy();
        this.router.navigate([`${'home'}`]);
    }
}
