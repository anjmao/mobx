import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Injectable,
  OnInit
} from '@angular/core';
import { observable, action, configure } from 'mobx';
import { slow } from './slow';

@Injectable({ providedIn: 'root' })
class MyStore {
  value = 0;

  updateValue() {
    this.value = Math.floor(Math.random() * 100);
  }
}

@Component({
  selector: 'app-demo',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      {{ logRender() }}
      {{ store.value }}
      <button (click)="store.updateValue()">
        Update
      </button>
    </div>
  `
})
export class AppDemoComponent implements OnInit {
  constructor(public store: MyStore, private cd: ChangeDetectorRef) {
    // cd.detach();
  }

  ngOnInit() {
    // this.cd.detectChanges();
    // setInterval(() => {}, 1000);
  }

  logRender() {
    console.log('render');
  }
}

@Component({
  selector: 'app-root',
  template: `<app-demo></app-demo>`
})
export class AppComponent {}

// 1) Double rerender.
// 2) Rerender on setInterval. Use OnPush.
// 3) Rerender on update btn click. OnPush doesn't help.
// 4) Use slow.
// 5) Detach cd, remove zone.js, use mobx.
