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
import { LibTestComponent } from './lib-test/lib-test.component';
import {NgkTableFilterModule} from 'ngk-table-filter';

@NgModule({
  imports: [BrowserModule, FormsModule, OverlayModule,PortalModule,NgkTableFilterModule],
  declarations: [AppComponent, AutoCompleteComponent, AutoDirectiveDirective, DemoComponent, AutoCompletePopupDirective, MicroChipComponent, LibTestComponent],
  bootstrap: [AppComponent],
  entryComponents:[AutoCompleteComponent]
})
export class AppModule { }
