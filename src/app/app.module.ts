import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
//import {MatButtonModule} from '@angular/material/button';
//import {MatTableModule} from '@angular/material/table';
//import {MatCheckboxModule} from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
//import { MatListModule } from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs'
import {MatCardModule} from '@angular/material/card'
//import {BrowserAnimateModule} from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//BrowserAnimateModule
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { TabsComponent } from './tabs/tabs.component';
import { CardComponent } from './card/card.component';
import {MatSelectModule} from '@angular/material/select'

@NgModule({

  declarations: [
    AppComponent,
    NavigationComponent,
    TabsComponent,
    CardComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatSliderModule,
    BrowserModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
  

  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
