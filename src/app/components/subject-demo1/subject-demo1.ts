import { Component } from '@angular/core';
import { BehaviorSubject, first, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit(){
    // this.subject_demo();
    this.behavourialdemo();
  }
  subject_demo(){
    let mySubject =new Subject();
    mySubject.next("Plan-A");
    mySubject.subscribe(val=> console.log('Subscriber -1: ', val));
     mySubject.next("Plan-B");
     mySubject.subscribe(val=> console.log('Subscriber -2: ', val));
     mySubject.next("Plan-C");
    mySubject.subscribe(val=> console.log('Subscriber -3: ', val));
  }
  behavourialdemo(){
     let mySubject =new BehaviorSubject('Default value');
    mySubject.next("Plan-A");
    mySubject.subscribe(val=> console.log('Subscriber -1: ', val));
     mySubject.next("Plan-B");
     mySubject.subscribe(val=> console.log('Subscriber -2: ', val));
     mySubject.next("Plan-C");
    mySubject.subscribe(val=> console.log('Subscriber -3: ', val));
  }
}
