import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { PortalModule } from '@angular/cdk/portal';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { AutoDirectiveDirective } from './auto-directive.directive';
import { DemoComponent } from './demo/demo.component';
import { AutoCompletePopupDirective } from './auto-complete-popup.directive';
import { MicroChipComponent } from './micro-chip/micro-chip.component';

@NgModule({
  imports: [BrowserModule, FormsModule, OverlayModule,PortalModule],
  declarations: [AppComponent, AutoCompleteComponent, AutoDirectiveDirective, DemoComponent, AutoCompletePopupDirective, MicroChipComponent],
  bootstrap: [AppComponent],
  entryComponents:[AutoCompleteComponent]
})
export class AppModule { }
