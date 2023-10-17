import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConnectorConstraints,
  DiagramComponent,
  DiagramTools,
  IExportOptions,
  IHistoryChangeArgs,
  ISelectionChangeEventArgs,
  NodeConstraints,
  PaletteModel,
  PrintAndExportService,
  SymbolPreviewModel,
  ZoomOptions,
} from '@syncfusion/ej2-angular-diagrams';
import { UserI } from 'src/app/models/user.interface';
import { ConnectionService } from '../../services/connection-service/connection.service';
import { DiagramService } from '../../services/diagram-service/diagram.service';
import { ClickEventArgs, ItemModel, MenuEventArgs, ToolbarComponent } from '@syncfusion/ej2-angular-navigations';
import { RoomDiagramI } from 'src/app/models/diagram.interface';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [PrintAndExportService],
})
//implements ngoninit
export class RoomComponent implements OnInit  {
  participants: UserI[] = [];
  nameRoom: string = '';
  dataRoom: object = {};
  room: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private diagramService: DiagramService,
    private connectionService: ConnectionService
  ) {
    this.room = this.activatedRoute.snapshot.params['id'];
    this.connectionService.joinRoom(this.room);
    this.connectionService.outEvent.subscribe((res) => {
      this.diagram.loadDiagram(res);
    });
    this.dataRoom = this.router.getCurrentNavigation().extras.state;
    this.participants = this.dataRoom['users'];
    this.nameRoom = this.dataRoom['name'];
  }
  ngOnInit(): void {
    /*this.diagramService.loadDiagramaDB(parseInt(this.room)).subscribe((res: RoomDiagramI) => {
      console.log(res);
      this.diagram?.loadDiagram(res.diagram);
    },
    (err) => {
      console.log(err);
    });*/
  }

  @ViewChild('diagram', { static: false })
  public diagram?: DiagramComponent;
  @ViewChild('toolbar')
  public toolbar: ToolbarComponent;
  public symbolPreviewSettings: SymbolPreviewModel =
    this.diagramService.symbolPreviewSettings();

  public symbolPalette: PaletteModel[] = this.diagramService.symbolPalette();

  public sendToServer(e: any) {
    if (
      e.state === 'Completed' ||
      e.state == 'Changed' ||
      e.element instanceof DiagramComponent
    ) {
      this.connectionService.emitEvent(this.diagram.saveDiagram());
      this.diagram?.loadDiagram(this.diagram?.saveDiagram());
    }
  }

  public exportDiagram(_: any): void {
    let exportOptions: IExportOptions = {};
    exportOptions.mode = 'Download';
    exportOptions.format = 'PNG';
    exportOptions.fileName = this.nameRoom;
    this.diagram.exportDiagram(exportOptions);
  }

  /*public saveDiagram(): void {
    this.connectionService.saveDiagram(this.diagram.saveDiagram());
  }*/

  public selectionChange(args: ISelectionChangeEventArgs): void {
    if(args.state === 'Changed'){
      var selectedItems = this.diagram.selectedItems.nodes;
      console.log(selectedItems);
          selectedItems = selectedItems.concat(this.diagram.selectedItems.connectors as any);
      if(selectedItems.length===0){
          this.toolbar.items[6].disabled = true;
          this.toolbar.items[7].disabled = true;
          this.toolbar.items[19].disabled = true;
          this.toolbar.items[20].disabled = true;
          this.toolbar.items[25].disabled = true;
          this.toolbar.items[29].disabled = true;
          this.toolbar.items[31].disabled = true;
          this.disableMultiselectedItems();
      }
      if(selectedItems.length === 1){
         
          this.enableItems();
          this.disableMultiselectedItems();
          
          if(selectedItems[0].children !== undefined && selectedItems[0].children.length>0){
              this.toolbar.items[27].disabled = false;
          }
          else{
              this.toolbar.items[27].disabled = true;
          }
          
      }
      
      if(selectedItems.length > 1){
         this.enableItems();
          this.toolbar.items[22].disabled = false;
          this.toolbar.items[23].disabled = false;
          this.toolbar.items[27].disabled = false;
          if(selectedItems.length>2){
          this.toolbar.items[23].disabled = false;
          }
          else{
          this.toolbar.items[23].disabled = true;
          }
      }

  }
}
public historyChange(args: IHistoryChangeArgs): void {
  if(this.diagram.historyManager.undoStack.length>0){
    this.toolbar.items[10].disabled = false;
}
else{
    this.toolbar.items[10].disabled = true;
}
if(this.diagram.historyManager.redoStack.length>0){
    this.toolbar.items[11].disabled = false;
}
else{
    this.toolbar.items[11].disabled = true;
}
}
public enableItems()
{
    this.toolbar.items[6].disabled = false;
    this.toolbar.items[7].disabled = false;
    this.toolbar.items[19].disabled = false;
    this.toolbar.items[20].disabled = false;
    this.toolbar.items[25].disabled = false;
    this.toolbar.items[29].disabled = false;
    this.toolbar.items[31].disabled = false;
}
public disableMultiselectedItems()
{
    this.toolbar.items[22].disabled = true;
    this.toolbar.items[23].disabled = true;
    this.toolbar.items[27].disabled = true;
}

public clicked(args : ClickEventArgs){
  var item = (args as any).item.tooltipText;
  switch(item)
  {
      case 'Undo':
          this.diagram.undo();
          break;
      case 'Redo':
          this.diagram.redo();
          break;
      case 'Lock':
         this.lockObject();
          break;
      case 'Cut':
      this.diagram.cut();
          this.toolbar.items[8].disabled = false;
          break;
      case 'Copy':
      this.diagram.copy();
      this.toolbar.items[8].disabled = false;
          break;
      case 'Paste':
      this.diagram.paste();
          break;
      case'Delete':
      this.diagram.remove();
          break;
      case 'Select Tool':
      this.diagram.clearSelection();
      this.diagram.tool = DiagramTools.Default;
          break;
      case 'Text Tool':
      this.diagram.clearSelection();
      this.diagram.selectedItems.userHandles = [];
      this.diagram.drawingObject = { shape: { type: 'Text' }, };
      this.diagram.tool = DiagramTools.ContinuousDraw;
          break;
      case 'Pan Tool':
      this.diagram.clearSelection();
      this.diagram.tool = DiagramTools.ZoomPan;
          break;
      case 'New Diagram':
      this.diagram.clear();
          this.historyChange(args as any);
          break;
      case 'Print Diagram':
          this.printDiagram(args);
          break;
      case 'Save Diagram':
          /*this.diagramService.saveDiagramBD({
            roomEntityId: parseInt(this.room),
            diagram: this.diagram.saveDiagram(
            ),
          });*/
          this.download(this.diagram.saveDiagram());
          break;
      case 'Open Diagram':
        //
        console.log('open diagram');
        break;
  }
  this.diagram.dataBind();
}


public zoomMenuItems = [
  { text: 'Zoom In' },
  { text: 'Zoom Out' },{ text: 'Zoom to Fit' },
  { text: 'Zoom to 50%' },
  { text: 'Zoom to 100%' },
  { text: 'Zoom to 200%' },
]

// To perform zoom operation
public zoomChange(args){
      var currentZoom = this.diagram.scrollSettings.currentZoom;
      var zoom : ZoomOptions = {};
      switch (args.item.text) {
          case 'Zoom In':
              this.diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
              break;
          case 'Zoom Out':
          this.diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
              break;
          case 'Zoom to Fit':
            zoom.zoomFactor = 1 / currentZoom - 1;
            this.diagram.zoomTo(zoom);
              break;
              case 'Zoom to 50%':
              if(currentZoom === 0.5){
                currentZoom = 0;
                zoom.zoomFactor = (0.5 / currentZoom) - 1;
                this.diagram.zoomTo(zoom);

              }
              else{
                zoom.zoomFactor = (0.5 / currentZoom) - 1;
                this.diagram.zoomTo(zoom);
              }
              break;

          case 'Zoom to 100%':
              if(currentZoom === 1){
                currentZoom = 0;
                zoom.zoomFactor = (1 / currentZoom) - 1;
                this.diagram.zoomTo(zoom);
              }
              else{
                zoom.zoomFactor = (1 / currentZoom) - 1;
                this.diagram.zoomTo(zoom);
              }
              break;
          case 'Zoom to 200%':
              if(currentZoom === 2){
                currentZoom = 0;
                zoom.zoomFactor = (2 / currentZoom) - 1;
                this.diagram.zoomTo(zoom);
              }
              else{
                zoom.zoomFactor = (2 / currentZoom) - 1;
                this.diagram.zoomTo(zoom);
              }
              break;
      }  
}

public onConnectorSelect(args : any){
  debugger
  this.diagram.clearSelection();
  this.diagram.drawingObject = {type:args.item.text};
  this.diagram.tool = DiagramTools.ContinuousDraw;
  this.diagram.selectedItems.userHandles = [];
  this.diagram.dataBind();
}
public conTypeItems = [
  {text: 'Straight',iconCss: 'e-icons e-line'},
  {text: 'Orthogonal',iconCss: 'sf-icon-orthogonal'},
  {text: 'Bezier',iconCss: 'sf-icon-bezier'}
 ];

 public shapesItems = [
  {text: 'Rectangle',iconCss: 'e-rectangle e-icons'},
   {text: 'Ellipse',iconCss: ' e-circle e-icons'},
   {text: 'Polygon',iconCss: 'e-line e-icons'}
];

public onShapesSelect(args){
  this.diagram.clearSelection();
  this.diagram.drawingObject = {shape:{shape:args.item.text}};
  this.diagram.tool = DiagramTools.ContinuousDraw;
  this.diagram.selectedItems.userHandles = [];
  this.diagram.dataBind();
}
//Export the diagraming object based on the format.

public groupItems = [
  {text:'Group',iconCss:'e-icons e-group-1'},
  {text:'Ungroup',iconCss:'e-icons e-ungroup-1'}
];
public onSelectGroup(args){
  if(args.item.text === 'Group'){
    this.diagram.group();
  }
  else if(args.item.text === 'Ungroup'){
    this.diagram.unGroup();
  }
}

public alignItems = [
  {
      iconCss: 'sf-icon-align-left-1', text: 'Align Left', 
  },
  {
      iconCss: 'sf-icon-align-center-1', text: 'Align Center',
  },
  {
      iconCss: 'sf-icon-align-right-1', text: 'Align Right',
  },
  {
      iconCss: 'sf-icon-align-top-1', text: 'Align Top',
  },
  {
      iconCss: 'sf-icon-align-middle-1', text: 'Align Middle',
  },
  {
      iconCss: 'sf-icon-align-bottom-1', text: 'Align Bottom',
  },
];

public onSelectAlignObjects(args){
  var item = args.item.text;
  var alignType = item.replace('Align', '');
  var alignType1 = alignType.charAt(0).toUpperCase() + alignType.slice(1);
  this.diagram.align(alignType1.trim());
}
public distributeItems = [
  { iconCss: 'sf-icon-distribute-vertical', text: 'Distribute Objects Vertically',},
  { iconCss: 'sf-icon-distribute-horizontal', text: 'Distribute Objects Horizontally',},
];

public onSelectDistributeObjects(args){
  if(args.item.text === 'Distribute Objects Vertically'){
    this.diagram.distribute('BottomToTop');
  }
  else{
    this.diagram.distribute('RightToLeft');
  }
}

public orderItems = [
  { iconCss: 'e-icons e-bring-forward', text: 'Bring Forward'},
  { iconCss: 'e-icons e-bring-to-front', text: 'Bring To Front'},
  { iconCss: 'e-icons e-send-backward', text: 'Send Backward'},
  { iconCss: 'e-icons e-send-to-back', text: 'Send To Back'}
];
public onSelectOrder(args){
  switch(args.item.text){
      case 'Bring Forward':
          this.diagram.moveForward();
      break;
      case 'Bring To Front':
          this.diagram.bringToFront();
      break;
      case 'Send Backward':
          this.diagram.sendBackward();
      break;
      case 'Send To Back':
         this.diagram.sendToBack();
      break;
  }
}

public rotateItems = [
    {iconCss:'e-icons e-transform-right',text: 'Rotate Clockwise'},
    {iconCss:'e-icons e-transform-left',text: 'Rotate Counter-Clockwise'}
];


public onSelectRotate(args){
  if(args.item.text === 'Rotate Clockwise'){
    this.diagram.rotate(this.diagram.selectedItems,90);
  }
  else{
    this.diagram.rotate(this.diagram.selectedItems,-90);
  }
}

public flipItems = [
  {iconCss:'e-icons e-flip-horizontal',text: 'Flip Horizontal'},
  {iconCss:'e-icons e-flip-vertical',text: 'Flip Vertical'}
];
public onSelectFlip(args){
  this.flipObjects(args.item.text);
}

// To flip diagram objects
public flipObjects(flipType)
{
  var selectedObjects = this.diagram.selectedItems.nodes.concat(this.diagram.selectedItems.connectors as any);
for( let i : number=0; i< selectedObjects.length;i++)
{
  selectedObjects[i].flip = flipType === 'Flip Horizontal'? 'Horizontal':'Vertical';
}
this.diagram.dataBind();
}
public lockObject () {
  for (let i : number = 0; i < this.diagram.selectedItems.nodes.length; i++) {
      let node = this.diagram.selectedItems.nodes[i];
      if (node.constraints & NodeConstraints.Drag) {
          node.constraints = NodeConstraints.PointerEvents | NodeConstraints.Select;
      } else {
          node.constraints = NodeConstraints.Default;
      }
  }
  for (let j : number = 0; j < this.diagram.selectedItems.connectors.length; j++) {
      let connector = this.diagram.selectedItems.connectors[j];
      if (connector.constraints & ConnectorConstraints.Drag) {
          connector.constraints = ConnectorConstraints.PointerEvents | ConnectorConstraints.Select;
      } else {
          connector.constraints = ConnectorConstraints.Default;
      }
  }
  this.diagram.dataBind();
}
public zoomContent()
{
    return Math.round(this.diagram.scrollSettings.currentZoom*100) + ' %'
};
public printDiagram(args){
  var options : IExportOptions = {};
  options.mode = 'Download';
  options.region = 'Content';
  options.multiplePage = this.diagram.pageSettings.multiplePage;
  options.pageHeight = this.diagram.pageSettings.height;
  options.pageWidth = this.diagram.pageSettings.width;
  this.diagram.print(options);
  }
  public onselectExport(args) {
    var exportOptions : IExportOptions = {};
    exportOptions.format = args.item.text;
    exportOptions.mode = 'Download';
    exportOptions.region = 'PageSettings';
    exportOptions.fileName = 'Export';
    exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
    this.diagram.exportDiagram(exportOptions);
  }
  
  public download(data : string) : void{
    if ((window.navigator as any).msSaveBlob) {
      let blob: Blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
      (window.navigator as any).msSaveOrOpenBlob(blob, 'Diagram.json');
  } else {
      let dataStr: string = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
      let a: HTMLAnchorElement = document.createElement('a');
      a.href = dataStr;
      a.download = 'Diagram.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
  }
}
/*public onUploadSuccess(args: { [key: string]: Object }): void {
  debugger
  let file1: { [key: string]: Object } = args.file as { [key: string]: Object };
  let file: Blob = file1.rawFile as Blob;
  let reader: FileReader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = this.loadDiagram.bind(this);
}*/

onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  
  if (file) {
    // Aquí puedes trabajar con el archivo seleccionado, por ejemplo, cargarlo o procesarlo
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContents: string = event.target.result as string;
      this.diagram?.loadDiagram(fileContents);
      this.connectionService.emitEvent(this.diagram.saveDiagram());
    };

    reader.readAsText(file);
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = '';
  }
}

public loadDiagram(event: ProgressEvent): void {
  this.diagram.loadDiagram((event.target as FileReader).result.toString());
}

public items: ItemModel[] = [
  {text:'JPG'},{text:'PNG'},{text:'SVG'}

];
public addDisabled(args: MenuEventArgs) {
  this.onselectExport(args);
}

  public diagramCreate(args: Object): void {
    //paletteIconClick();
  }
}


