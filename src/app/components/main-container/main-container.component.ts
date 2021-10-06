import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Event, NavigationStart, Router} from '@angular/router'

class NavigationEvent {
}

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  viewActive: boolean = false;
  detailsActive: boolean = false;
  url: string = 'null';
  constructor(private route: Router) {
    route.events.subscribe((event: NavigationEvent) => {
      if(event instanceof NavigationStart) {
        this.viewActive = event.url.split('/').includes('view');
        this.detailsActive = event.url.split('/').includes('details');
        console.log(this.detailsActive)
      }
    })
    //route.snapshot.subscribe(value => console.log('value', value))
  }
  ngOnInit(): void {


  }

}

