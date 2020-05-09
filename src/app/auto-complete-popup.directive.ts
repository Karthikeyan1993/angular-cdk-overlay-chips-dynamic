import {
  Directive,
  Input,
  HostListener,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  Renderer2,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";
import { AutoCompleteComponent } from "./auto-complete/auto-complete.component";
@Directive({
  selector: "[appAutoCompletePopup]"
})
export class AutoCompletePopupDirective {
  @Input("appAutoCompletePopup") appAutoCompletePopup = [];
  @Input("flag") flag: boolean;
  @Output() emitter:EventEmitter<string> = new EventEmitter<string>();
  private comRef: ComponentRef<AutoCompleteComponent> = null;
  constructor(
    private _host: ElementRef,
    private _vcr: ViewContainerRef,
    private _fResolver: ComponentFactoryResolver,
    private _r2: Renderer2
  ) { }

  @HostListener("click", ["$event.target"]) onMouseClick = event => {
    if (this.isExist() && !this.flag) {
      const resolver = this._fResolver.resolveComponentFactory(
        AutoCompleteComponent
      );
      this.comRef = this._vcr.createComponent(resolver);
      this.comRef.instance.data = this.appAutoCompletePopup;
      this.comRef.instance.parent = this;
    } else if (this.flag) {
      this.comRef.destroy();
      this.comRef = null;
    }
  };
  itemSelected = val => {
    this.emitter.emit(val);
  }
  isExist = () => this.comRef == null || this.comRef == undefined;
}
