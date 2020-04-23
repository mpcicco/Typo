import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public currentWord: string;
    public userWord: string;

    constructor() { }

    ngOnInit() {
        this.currentWord = 'ciao';
        this.userWord = '';
    }

    onKey(event: any) {
        this.userWord = event.target.value;
        if (this.userWord === this.currentWord) {
            this.changeWord();
        }
    }

    changeWord() {
        this.currentWord = 'andiamo';
        this.userWord = '';
    }

}
