import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { AppComponent, AppDemoComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, AppDemoComponent],
  imports: [BrowserModule, MobxAngularModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
