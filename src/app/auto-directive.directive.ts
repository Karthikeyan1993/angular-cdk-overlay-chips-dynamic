import {
  Directive,
  Input,
  TemplateRef,
  ElementRef,
  ViewContainerRef,
  HostListener,
  Renderer2,
  ViewChild,
  EventEmitter,
  Output
} from "@angular/core";
import { TemplatePortal } from "@angular/cdk/portal";
import {
  CdkOverlayOrigin,
  OverlayRef,
  Overlay,
  OverlayConfig,
  ConnectionPositionPair
} from "@angular/cdk/overlay";
import {
  map,
  distinctUntilChanged,
  debounceTime,
  mergeMap,
  filter,
  toArray
} from "rxjs/operators";
import { Subject, from, pipe } from "rxjs";
import { NgControl } from "@angular/forms";
@Directive({
  selector: "[appAutoDirective]"
})
export class AutoDirectiveDirective {
  @Input("template") content: TemplateRef<any>;
  private _portal: TemplatePortal<any>;
  private _overlayRef: OverlayRef;
  @Output() emitNewItem: EventEmitter<string> = new EventEmitter<string>();
  listenFunc: Function;
  constructor(
    private _orgin: ElementRef,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private _r2: Renderer2
  ) {
    this.listenFunc = _r2.listen("document", "click", (event: MouseEvent) => {
      if (this._orgin.nativeElement.contains(event.target)) {
        return;
      }
      this.OutsideClick();
    });
  }

  @HostListener("click")
  @HostListener("focus")
  focus = () => {
    this.toggle();
  };

  @HostListener("keyup", ["$event"])
  onchange = e => {
    const txtVal = this._orgin.nativeElement.value;

    // ESC KEY
    if (e.keyCode === 27) {
      this.OutsideClick();
    }

    // ENTER KEY
    if (e.keyCode === 13) {
      if (txtVal != "") {
        this.emitNewItem.next(txtVal);
        console.log("ENTER KEY");
      }
    }

    if (e.keyCode == 8) {
      if (txtVal.length <= 1) {

      }
    }
  };

  get overlayRef(): OverlayRef {
    return this._overlayRef;
  }

  toggle = (param?: any): void => {
    if (this._overlayRef == null || !this._overlayRef.hasAttached()) {
      this.attchOverlay();
    }
  };

  private attchOverlay = (param?: any): void => {
    if (!this._overlayRef) {
      this.createOverlay();
    }
    if (this._overlayRef.hasAttached() != undefined) {
      this._overlayRef.attach(this._portal);
    }
  };

  private createOverlay = (param?: any): void => {
    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._orgin)
      .withPositions(this.getPositions())
      .withFlexibleDimensions(false)
      .withPush(false);

    const overlayRefConfig = new OverlayConfig({
      width: "100%",
      hasBackdrop: false,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      positionStrategy: positionStrategy
    });
    this._overlayRef = this._overlay.create(overlayRefConfig);
    this._portal = new TemplatePortal(this.content, this._viewContainerRef);
  };

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      }
    ];
  }

  private hide = (param?: any): void => {
    if (this._overlayRef) {
      this.overlayRef.detach();
    }
  };

  private OutsideClick = () => {
    if (this._overlayRef) {
      this.hide();
    }
  };
}
