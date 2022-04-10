import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
//import {MatButtonModule} from '@angular/material/button';
//import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
//import { MatListModule } from '@angular/material/list'
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
//import {BrowserAnimateModule} from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//BrowserAnimateModule
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { CardComponent } from './card/card.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogExampleComponent } from './tabs/dialog-example/dialog-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './tabs/table/table.component';
import { MatRadioModule } from '@angular/material/radio';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AvatarModule } from 'ngx-avatar';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { ValidComponent } from './valid/valid.component'; // CLI imports AppRoutingModule
import { ReactiveFormsModule } from '@angular/forms';
import { PermissionComponent } from './permission/permission.component';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CardComponent,
    DialogExampleComponent,
    TableComponent,
    NavComponent,
    UserComponent,
    ValidComponent,
    PermissionComponent,
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    Ng2SearchPipeModule,
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    AvatarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
  ],
  exports: [RouterModule],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
