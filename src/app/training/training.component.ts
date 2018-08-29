import { TrainingService } from './training.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {


  exerciseSubscription: Subscription;
  onGoingTraining = false;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(ex => {
      if (ex) {
        this.onGoingTraining = true;
      } else { this.onGoingTraining = false; }
    });
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
  }
}
