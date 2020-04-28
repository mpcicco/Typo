import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lost-modal',
    templateUrl: './lost-modal.component.html',
    styleUrls: ['./lost-modal.component.scss']
})
export class LostModalComponent implements OnInit {

    score: number;
    pageName: string;

    constructor(private router: Router,
        public dialogRef: MatDialogRef<LostModalComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        this.score = data.score;
    }

    ngOnInit() {
    }
    playAgain() {
        this.dialogRef.close({ event: 'close', data: true });
    }
    goHome() {
        this.pageName = 'home';
        this.dialogRef.close({ event: 'close', data: false });
        this.router.navigate([`${this.pageName}`]);
    }

}
