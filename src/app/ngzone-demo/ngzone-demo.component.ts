import { Component, NgZone, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
@Component({
  selector: 'app-ngzone-demo',
  templateUrl: './ngzone-demo.component.html',
  styleUrls: ['./ngzone-demo.component.css']
})
export class NgzoneDemoComponent implements OnInit {
  title = "toolsets";
  cdCount: number = 0;

  constructor(private ngZone: NgZone, private service: DemoService) {}

  //eg 1
  ngOnInit(): void {
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     this.ngZone.run(() => {
    //       this.title = "food";
    //     })
    //   }, 2000);
    // })
  }

  //eg2
  doSomething() {
    console.log("Do Something triggered");
  //  this.ngZone.runOutsideAngular(() => {
      this.service.getPostAPI().subscribe(data => {
        console.log("Data Arrived");
    })
  //  })
  }

  ngDoCheck() { //a lifecycle hook in Angular that gets called during every change detection cycle.
    console.log(`Do Check ${this.cdCount++}`)
  }
  
}
