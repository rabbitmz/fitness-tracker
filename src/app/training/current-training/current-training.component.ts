import { StopTrainingComponent } from './StopTrainingComponent';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() stopTraining  =  new EventEmitter<void>();

  progress = 0;
  timer;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer =  setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  emitStopTraining() {
    clearInterval(this.timer);
   const dialogRef = this.dialog.open(StopTrainingComponent, { data: {
      progress: this.progress
    }});

    dialogRef.afterClosed().subscribe( result => {
      console.log(result);
      if (result) {
        this.stopTraining.emit();
      } else {
        this.startOrResumeTimer();
      }

    });



  }
}
