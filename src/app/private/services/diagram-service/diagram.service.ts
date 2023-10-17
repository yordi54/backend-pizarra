import { Injectable } from '@angular/core';
import { ConnectorModel, NodeModel, PaletteModel, SymbolPreviewModel } from '@syncfusion/ej2-angular-diagrams';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RoomDiagramI } from 'src/app/models/diagram.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiagramService {
  constructor(private http: HttpClient) {}

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
      { id: 'Object', shape: { type: 'Basic', shape: 'Rectangle' }, 
        style:{
          //transparente fill
          fill: '#95D3F0',
          fontSize: 14,
        }
      },
      { id: 'Barra', maxWidth:14, shape: { type: 'Basic', shape: 'Rectangle' }, 
        ports: [
          { id: 'port1', offset: { x: 0, y: 0.00 } },
          { id: 'port2', offset: { x: 0, y: 0.02 } },
          { id: 'port3', offset: { x: 0, y: 0.04 } },
          { id: 'port4', offset: { x: 0, y: 0.06 } },
          { id: 'port5', offset: { x: 0, y: 0.08 } },
          { id: 'port6', offset: { x: 0, y: 0.10 } },
          { id: 'port7', offset: { x: 0, y: 0.12 } },
          { id: 'port8', offset: { x: 0, y: 0.14 } },
          { id: 'port9', offset: { x: 0, y: 0.16 } },
          { id: 'port10', offset: { x: 0, y: 0.18 } },
          { id: 'port11', offset: { x: 0, y: 0.20 } },
          { id: 'port12', offset: { x: 0, y: 0.22 } },
          { id: 'port13', offset: { x: 0, y: 0.24 } },
          { id: 'port14', offset: { x: 0, y: 0.26 } },
          { id: 'port15', offset: { x: 0, y: 0.28 } },
          { id: 'port16', offset: { x: 0, y: 0.30 } },
          { id: 'port17', offset: { x: 0, y: 0.32 } },
          { id: 'port18', offset: { x: 0, y: 0.34 } },
          { id: 'port19', offset: { x: 0, y: 0.36 } },
          { id: 'port20', offset: { x: 0, y: 0.38 } },
          { id: 'port21', offset: { x: 0, y: 0.40 } },
          { id: 'port22', offset: { x: 0, y: 0.42 } },
          { id: 'port23', offset: { x: 0, y: 0.44 } },
          { id: 'port24', offset: { x: 0, y: 0.46 } },
          { id: 'port25', offset: { x: 0, y: 0.48 } },
          { id: 'port26', offset: { x: 0, y: 0.50 } },
          { id: 'port27', offset: { x: 0, y: 0.52 } },
          { id: 'port28', offset: { x: 0, y: 0.54 } },
          { id: 'port29', offset: { x: 0, y: 0.56 } },
          { id: 'port30', offset: { x: 0, y: 0.58 } },
          { id: 'port31', offset: { x: 0, y: 0.60 } },
          { id: 'port32', offset: { x: 0, y: 0.62 } },
          { id: 'port33', offset: { x: 0, y: 0.64 } },
          { id: 'port34', offset: { x: 0, y: 0.66 } },
          { id: 'port35', offset: { x: 0, y: 0.68 } },
          { id: 'port36', offset: { x: 0, y: 0.70 } },
          { id: 'port37', offset: { x: 0, y: 0.72 } },
          { id: 'port38', offset: { x: 0, y: 0.74 } },
          { id: 'port39', offset: { x: 0, y: 0.76 } },
          { id: 'port40', offset: { x: 0, y: 0.78 } },
          { id: 'port41', offset: { x: 0, y: 0.80 } },
          { id: 'port42', offset: { x: 0, y: 0.82 } },
          { id: 'port43', offset: { x: 0, y: 0.84 } },
          { id: 'port44', offset: { x: 0, y: 0.86 } },
          { id: 'port45', offset: { x: 0, y: 0.88 } },
          { id: 'port46', offset: { x: 0, y: 0.90 } },
          { id: 'port47', offset: { x: 0, y: 0.92 } },
          { id: 'port48', offset: { x: 0, y: 0.94 } },
          { id: 'port49', offset: { x: 0, y: 0.96 } },
          { id: 'port50', offset: { x: 0, y: 0.98 } },
          { id: 'port51', offset: { x: 0, y: 1.0 } },



          { id: 'port52', offset: { x: 1, y: 0.00 } },
          { id: 'port53', offset: { x: 1, y: 0.02 } },
          { id: 'port54', offset: { x: 1, y: 0.04 } },
          { id: 'port55', offset: { x: 1, y: 0.06 } },
          { id: 'port56', offset: { x: 1, y: 0.08 } },
          { id: 'port57', offset: { x: 1, y: 0.10 } },
          { id: 'port58', offset: { x: 1, y: 0.12 } },
          { id: 'port59', offset: { x: 1, y: 0.14 } },
          { id: 'port60', offset: { x: 1, y: 0.16 } },
          { id: 'port61', offset: { x: 1, y: 0.18 } },
          { id: 'port62', offset: { x: 1, y: 0.20 } },
          { id: 'port63', offset: { x: 1, y: 0.22 } },
          { id: 'port64', offset: { x: 1, y: 0.24 } },
          { id: 'port65', offset: { x: 1, y: 0.26 } },
          { id: 'port66', offset: { x: 1, y: 0.28 } },
          { id: 'port67', offset: { x: 1, y: 0.30 } },
          { id: 'port68', offset: { x: 1, y: 0.32 } },
          { id: 'port69', offset: { x: 1, y: 0.34 } },
          { id: 'port70', offset: { x: 1, y: 0.36 } },
          { id: 'port71', offset: { x: 1, y: 0.38 } },
          { id: 'port72', offset: { x: 1, y: 0.40 } },
          { id: 'port73', offset: { x: 1, y: 0.42 } },
          { id: 'port74', offset: { x: 1, y: 0.44 } },
          { id: 'port75', offset: { x: 1, y: 0.46 } },
          { id: 'port76', offset: { x: 1, y: 0.48 } },
          { id: 'port77', offset: { x: 1, y: 0.50 } },
          { id: 'port78', offset: { x: 1, y: 0.52 } },
          { id: 'port79', offset: { x: 1, y: 0.54 } },
          { id: 'port80', offset: { x: 1, y: 0.56 } },
          { id: 'port81', offset: { x: 1, y: 0.58 } },
          { id: 'port82', offset: { x: 1, y: 0.60 } },
          { id: 'port83', offset: { x: 1, y: 0.62 } },
          { id: 'port84', offset: { x: 1, y: 0.64 } },
          { id: 'port85', offset: { x: 1, y: 0.66 } },
          { id: 'port86', offset: { x: 1, y: 0.68 } },
          { id: 'port87', offset: { x: 1, y: 0.70 } },
          { id: 'port88', offset: { x: 1, y: 0.72 } },
          { id: 'port89', offset: { x: 1, y: 0.74 } },
          { id: 'port90', offset: { x: 1, y: 0.76 } },
          { id: 'port91', offset: { x: 1, y: 0.78 } },
          { id: 'port92', offset: { x: 1, y: 0.80 } },
          { id: 'port93', offset: { x: 1, y: 0.82 } },
          { id: 'port94', offset: { x: 1, y: 0.84 } },
          { id: 'port95', offset: { x: 1, y: 0.86 } },
          { id: 'port96', offset: { x: 1, y: 0.88 } },
          { id: 'port97', offset: { x: 1, y: 0.90 } },
          { id: 'port98', offset: { x: 1, y: 0.92 } },
          { id: 'port99', offset: { x: 1, y: 0.94 } },
          { id: 'port100', offset: { x: 1, y: 0.96 } },
          { id: 'port101', offset: { x: 1, y: 0.98 } },
          { id: 'port102', offset: { x: 1, y: 1.0 } },
        ],
        style: {
          fill: '#FAA62D',
        }
      },
      { id: 'Option', shape: { type: 'Basic', shape: 'Rectangle' }, 
        style:{
          //transparente fill
          fill: 'transparent',
        } 
      },
      //{ id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
      //{ id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
      //{ id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
      //{ id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
      //{ id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
      //{ id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
      //{ id: 'Process', shape: { type: 'Flow', shape: 'Process',  } },
      //{ id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
      /*{
        id: 'PreDefinedProcess',
        shape: { type: 'Flow', shape: 'PreDefinedProcess' },
      },*/
      //{ id: 'PaperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
      //{ id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
      /*{
        id: 'Person',
        shape: {
          type: 'Path',
          data: 'M491.1,425.8c0,26.5-8.5,47.8-24.7,63.1s-37.5,23-64,23H110.5c-27.3,0-48.6-7.7-64.9-23 c-16.2-15.4-24.7-36.7-24.7-63.1c0-11.9,0-23,0.9-34.1c0.9-11.1,2.6-23,4.3-36.7s5.1-24.7,8.5-35.8c3.4-11.1,8.5-22.2,14.5-32.4 c6-10.2,12.8-19.6,20.5-27.3c7.7-7.7,17.1-13.7,28.2-17.9s23.9-6.8,37.5-6.8c1.7,0,6.8,2.6,13.7,6.8s15.4,10.2,24.7,16.2 c9.4,6,21.3,11.1,35.8,16.2c14.5,5.1,29.9,6.8,44.4,6.8c14.5,0,29.9-2.6,44.4-6.8c14.5-5.1,26.5-10.2,35.8-16.2 c9.4-6,17.9-11.1,24.7-16.2c6.8-5.1,11.9-6.8,13.7-6.8c13.7,0,25.6,2.6,37.5,6.8s20.5,10.2,28.2,17.9c7.7,7.7,14.5,16.2,20.5,27.3 c6,11.1,11.1,21.3,14.5,32.4c3.4,11.1,6.8,23,8.5,35.8c1.7,12.8,4.3,24.7,4.3,36.7S491.1,413.9,491.1,425.8z M384.4,128 c0,35-12.8,65.7-37.5,90.5c-24.7,24.7-55.5,37.5-90.5,37.5s-65.7-12.8-90.5-37.5S128.4,163,128.4,128s12.8-65.7,37.5-90.5 S221.4,0,256.4,0s65.7,12.8,90.5,37.5C371.6,62.3,384.4,93,384.4,128z',
        },
      },*/
      {
        id: 'LineLife',
        offsetY: 0,
        /*ports: [
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
        ],*/
        shape: {
          type: 'Path',
          data: 'M0,0 L0, 50',

        },   
      },
      
      {
        id: 'Actor', 
        shape: {
          type: 'Path',
          data: 'M5740 5959 c-322 -274 -588 -499 -592 -499 -4 0 -295 209 -648 465 -352 256 -643 465 -647 465 -7 0 -32 -32 -33 -42 0 -3 293 -219 650 -478 l650 -471 0 -990 0 -989 -645 0 -645 0 0 -35 0 -35 645 0 645 0 0 -368 0 -368 -89 -12 c-357 -48 -650 -280 -776 -617 -73 -194 -76 -446 -7 -645 85 -243 270 -446 508 -556 139 -65 208 -78 399 -78 156 0 177 3 258 27 169 52 302 133 423 258 290 300 353 739 159 1106 -146 277 -413 464 -722 504 l-93 13 0 366 0 367 278 6 c152 4 429 7 615 7 l337 0 0 30 0 30 -615 0 -615 0 2 992 3 992 592 504 592 504 -17 24 c-9 13 -19 23 -22 23 -3 0 -268 -225 -590 -500z m-413 -3438 c106 -22 221 -69 308 -126 89 -58 222 -197 277 -290 262 -443 93 -1012 -368 -1244 -139 -69 -215 -86 -394 -86 -175 1 -228 11 -368 76 -254 117 -441 351 -499 623 -23 112 -19 281 10 397 118 460 572 745 1034 650z',
        },
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
      /*{
        id: 'Link2',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },*/
      {
        id: 'Link2',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link3',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'OpenArrow' },
        
      },
      {
        id: 'Link4',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'OpenArrow' },
      },
      /*{
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
      },*/
      /*{
        id: 'Link6',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        sourceDecorator: { shape: 'Arrow' },
        targetDecorator: { shape: 'Arrow' },
      },*/
      {
        id: 'Link5',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'Arrow' },
      },
      /*{
        id: 'Link8',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'None' },
      },*/
      {
        id: 'Link6',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link7',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'OpenArrow' },
      },
      /*{
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
      },*/
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

  async saveDiagramBD(diagramRoom: RoomDiagramI):Promise<any> {
    console.log(diagramRoom);
    const len = diagramRoom.diagram.length;
    console.log(len);
    const data = {
      roomEntityId: diagramRoom.roomEntityId,
      diagram1: '',
      diagram2: '',
      diagram3: '',
    }
    const threshold = len / 3; // Adjust threshold as needed

    if (len > threshold) {
      const chunkSize = Math.floor(len / 3);

      data.diagram1 = diagramRoom.diagram.substring(0, chunkSize);
      data.diagram2 = diagramRoom.diagram.substring(chunkSize, chunkSize * 2);
      data.diagram3 = diagramRoom.diagram.substring(chunkSize * 2);
    }
    return await this.http.post('https://backend-pirzarra.onrender.com/api/room/save-diagram', data).subscribe();
  }
  loadDiagramaDB(id: number){
    console.log('loadDiagramaDB');
    return this.http.get<RoomDiagramI>(`https://backend-pirzarra.onrender.com/api/room/find-by-room-id/${id}`);
  }
}
