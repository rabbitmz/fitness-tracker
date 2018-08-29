import { NgForm } from '@angular/forms';
import { TrainingService } from './../training.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})

@Injectable()
export class NewTrainingComponent implements OnInit {
   trainings: Exercise[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainings = this.trainingService.getAvailableExercises();
  }

  onStartTraining(f: NgForm) {
    this.trainingService.startExercise(f.value.exercise);
  }

}
