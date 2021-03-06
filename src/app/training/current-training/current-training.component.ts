import { TrainingService } from './../training.service';
import { Exercise } from './../exercise.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../../auth/auth.service';
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
  authSubscription: Subscription;
  ex: Exercise;


  constructor(public dialog: MatDialog, private trainingService: TrainingService) {
    this.authSubscription = this.trainingService.exerciseChanged.subscribe(e => {
      this.ex = e;
    });
  }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer =  setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, step);
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
