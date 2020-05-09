import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  CdkOverlayOrigin,
  OverlayRef,
  Overlay,
  OverlayConfig,
  ConnectionPositionPair,
} from "@angular/cdk/overlay";
import { CdkPortal } from "@angular/cdk/portal";
@Component({
  selector: "app-drop-down",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.css"]
})
export class DropDownComponent implements OnInit {
  private _overlayRef: OverlayRef;
  @ViewChild(CdkOverlayOrigin) _orgin: CdkOverlayOrigin;
  @ViewChild(CdkPortal) portal: CdkPortal;
  @ViewChild('temp') myDivElementRef: ElementRef;
  constructor(private readonly _overlay: Overlay) { }
  ngOnInit() { }

  ngAfterViewInit() {
    this.toggle();
  }

  get overlayRef(): OverlayRef {
    return this._overlayRef;
  }

  toggle = (param?: any): void => {
    if (true) {
      this.attchOverlay();
    }
  };

  private attchOverlay = (param?: any): void => {
    if (!this._overlayRef) {
      this.createOverlay();
    }
    if (!this._overlayRef.hasAttached()) {
      this._overlayRef.attach(this.portal);
    }
  };

  private createOverlay = (param?: any): void => {
    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._orgin.elementRef)
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
}
