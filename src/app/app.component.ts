import { Isurvey } from './serveys';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { Component, OnInit,Inject, TemplateRef } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TestService} from './test.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

constructor(public TestService:TestService,public dialog:MatDialog){

}

servey:any
Surveys:any
select:any
template:any
ngOnInit(): void {
  this.TestService.getServey().subscribe( data =>this.Surveys=data);

  }

done(selectedSurveys:any){
  this.TestService.currentSelectedSurvey = selectedSurveys?.TEMPLATE_ID
  this.select=selectedSurveys;

}
openDialog(): void {
  const dialogRef= this.dialog.open(DialogExampleComponent, {
    width: '250px',
    data: {SurveyNameEn:this.select.SurveyNameEn}});

   dialogRef.afterClosed().subscribe((result) => {
    this.select.SurveyNameEn = result;

    console.log('Data from Dialog:'+result)
  });

}

showCard:boolean=true
buttonCard(){
  this.showCard=true
  this.showtable=false
}
showtable:boolean=false
buttonTable(){
  this.showtable=true
  this.showCard=false
  console.log(this.showCard)
}


}




