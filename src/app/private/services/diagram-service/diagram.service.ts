import { Injectable } from '@angular/core';
import { ConnectorModel, NodeModel, PaletteModel, SymbolPreviewModel } from '@syncfusion/ej2-angular-diagrams';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DiagramService {
  constructor() {}

  public symbolPreviewSettings(): SymbolPreviewModel {
    return {
      height: 75,
      width: 75,
      offset: {
        x: 0.5,
        y: 0.5,
      },
    };
  }

  public symbolPalette(): PaletteModel[] {
    return [
      { id: 'shapes', symbols: this.getFlowShapes(), title: 'Formas de Flujo' },
      { id: 'connectors', symbols: this.getConnectors(), title: 'Conectores' },
      { id: 'texts', symbols: this.getTexts(), title: 'Textos' },
    ];
  }

  public getFlowShapes(): NodeModel[] {
    let flowShapes: NodeModel[] = [
      { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
      { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
      { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
      { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
      { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
      { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
      { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
      { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
      { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
      {
        id: 'PreDefinedProcess',
        shape: { type: 'Flow', shape: 'PreDefinedProcess' },
      },
      { id: 'PaperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
      { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
      {
        id: 'Person',
        shape: {
          type: 'Path',
          data: 'M491.1,425.8c0,26.5-8.5,47.8-24.7,63.1s-37.5,23-64,23H110.5c-27.3,0-48.6-7.7-64.9-23 c-16.2-15.4-24.7-36.7-24.7-63.1c0-11.9,0-23,0.9-34.1c0.9-11.1,2.6-23,4.3-36.7s5.1-24.7,8.5-35.8c3.4-11.1,8.5-22.2,14.5-32.4 c6-10.2,12.8-19.6,20.5-27.3c7.7-7.7,17.1-13.7,28.2-17.9s23.9-6.8,37.5-6.8c1.7,0,6.8,2.6,13.7,6.8s15.4,10.2,24.7,16.2 c9.4,6,21.3,11.1,35.8,16.2c14.5,5.1,29.9,6.8,44.4,6.8c14.5,0,29.9-2.6,44.4-6.8c14.5-5.1,26.5-10.2,35.8-16.2 c9.4-6,17.9-11.1,24.7-16.2c6.8-5.1,11.9-6.8,13.7-6.8c13.7,0,25.6,2.6,37.5,6.8s20.5,10.2,28.2,17.9c7.7,7.7,14.5,16.2,20.5,27.3 c6,11.1,11.1,21.3,14.5,32.4c3.4,11.1,6.8,23,8.5,35.8c1.7,12.8,4.3,24.7,4.3,36.7S491.1,413.9,491.1,425.8z M384.4,128 c0,35-12.8,65.7-37.5,90.5c-24.7,24.7-55.5,37.5-90.5,37.5s-65.7-12.8-90.5-37.5S128.4,163,128.4,128s12.8-65.7,37.5-90.5 S221.4,0,256.4,0s65.7,12.8,90.5,37.5C371.6,62.3,384.4,93,384.4,128z',
        },
      },
      {
        id: 'VerticalLine',
        ports: [
          { id: 'port1', offset: { x: 0, y: 0.0 } }, 
          { id: 'port2', offset: { x: 0, y: 0.1 } },
          { id: 'port3', offset: { x: 0, y: 0.2 } },
          { id: 'port4', offset: { x: 0, y: 0.3 } },
          { id: 'port5', offset: { x: 0, y: 0.4 } },
          { id: 'port6', offset: { x: 0, y: 0.5 } },
          { id: 'port7', offset: { x: 0, y: 0.6 } },
          { id: 'port8', offset: { x: 0, y: 0.7 } },
          { id: 'port9', offset: { x: 0, y: 0.8 } },
          { id: 'port10', offset: { x: 0, y: 0.9 } },
          { id: 'port11', offset: { x: 0, y: 1.0 } },
        ],
        shape: {
          type: 'Path',
          data: 'M0,0 L0,10',
          align: 'XMidYMid',
        },   
      },
      {
        id: 'Actor', 
        shape: {
          type: 'Path',
          data: 'M4965 6460 c-224 -31 -415 -129 -568 -289 -172 -180 -254 -375 -264 -626 -11 -266 77 -505 256 -697 153 -164 378 -276 589 -295 l72 -6 0 -368 0 -369 -615 0 -615 0 0 -35 0 -35 615 0 615 0 -2 -992 -3 -992 -590 -503 c-324 -276 -588 -506 -586 -510 2 -4 12 -18 21 -31 l18 -22 576 490 c317 269 585 495 595 502 16 10 100 -48 656 -451 350 -254 642 -464 649 -467 7 -3 21 7 31 22 18 27 18 28 -8 48 -15 12 -310 226 -656 476 l-630 455 0 988 -1 987 650 0 650 0 0 35 0 35 -650 0 -650 0 0 370 0 370 45 0 c168 0 412 103 564 237 128 112 246 307 291 478 30 113 37 285 16 401 -79 452 -449 779 -904 798 -59 3 -134 1 -167 -4z m261 -85 c183 -32 327 -103 456 -224 180 -169 273 -367 285 -606 19 -404 -252 -779 -642 -886 -508 -139 -1021 193 -1106 716 -16 100 -6 268 21 365 122 431 555 710 986 635z',
        },
        rotateAngle: 180,
      }
    ];
    return flowShapes;
  }

  
  public getConnectors(): ConnectorModel[] {
    let connectors: ConnectorModel[] = [
      {
        id: 'Link1',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
        
      },
      {
        id: 'Link2',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link3',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link4',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link5',
        type: 'Bezier',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link6',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        sourceDecorator: { shape: 'Arrow' },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link7',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link8',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link9',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link10',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link11',
        type: 'Bezier',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link12',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 8' },
        sourceDecorator: { shape: 'Arrow' },
        targetDecorator: { shape: 'Arrow' },
      },
    ];
    return connectors;
  }

  public getTexts(): NodeModel[] {
    let texts: NodeModel[] = [
      {
        id: 'Text1',
        shape: {
          type: 'Text',
          content: 'Texto',
        },
        style: {
          strokeColor: 'transparent',
          fill: 'none',
          color: 'black',
          textAlign: 'Center',
        },
      },
      {
        id: 'Text2',
        shape: {
          type: 'Text',
          content: 'Texto',
        },
        style: {
          strokeColor: 'none',
          fill: 'none',
          color: 'black',
          textAlign: 'Left',
        },
      },
      {
        id: 'Text3',
        shape: {
          type: 'Text',
          content: 'Texto',
        },
        style: {
          strokeColor: 'none',
          fill: 'none',
          color: 'black',
          textAlign: 'Right',
        },
      },
    ];
    return texts;
  }
}
