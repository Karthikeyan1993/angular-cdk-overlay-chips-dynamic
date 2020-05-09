import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { PortalModule } from '@angular/cdk/portal';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { AutoDirectiveDirective } from './auto-directive.directive';
import { TableFilterPipe } from './table-filter.pipe';
import { DemoComponent } from './demo/demo.component';
import { AutoCompletePopupDirective } from './auto-complete-popup.directive';
import { MicroChipComponent } from './micro-chip/micro-chip.component';

@NgModule({
  imports: [BrowserModule, FormsModule, OverlayModule,PortalModule],
  declarations: [AppComponent, HelloComponent, DropDownComponent, AutoCompleteComponent, AutoDirectiveDirective, TableFilterPipe, DemoComponent, AutoCompletePopupDirective, MicroChipComponent],
  bootstrap: [AppComponent],
  entryComponents:[AutoCompleteComponent]
})
export class AppModule { }
