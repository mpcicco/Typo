import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WordiBombComponent } from './wordi-bomb/wordi-bomb.component';
import { Globals } from './shared/globals';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LostModalComponent } from './lost-modal/lost-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WordiBombComponent,
    LostModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    CountdownModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
  entryComponents: [LostModalComponent]
})
export class AppModule { }
