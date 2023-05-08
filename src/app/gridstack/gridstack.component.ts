import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GridStack } from 'gridstack';
//import 'gridstack/dist/h5/gridstack-dd-native';
@Component({
  selector: 'app-gridstack',
  templateUrl: 'gridstack.component.html',
  styleUrls: ['gridstack.component.css']
})
export class GridStackComponent implements OnInit, AfterViewInit {
  grid1: GridStack;
  grid2: GridStack;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const options = {
      column: 6,
      minRow: 1, // don't collapse when empty
      cellHeight: 70,
      disableOneColumnMode: true,
      float: false,
      // dragIn: '.sidebar .grid-stack-item', // add draggable to class
      // dragInOptions: { revert: 'invalid', scroll: false, appendTo: 'body', helper: 'clone' }, // clone
      removable: '.trash', // true or drag-out delete class
      acceptWidgets: function(el) {
        return true;
      } // function example, but can also be: true | false | '.someClass' value
    };

    GridStack.setupDragIn('.sidebar .grid-stack-item', {
      //revert: 'invalid',
      scroll: false,
      appendTo: 'body',
      //helper: this.handleDrop.bind(this)
    });

    const grids = GridStack.initAll(options);
    this.grid1 = grids[0];
    this.grid2 = grids[1];
    const serializedData = [
      { x: 0, y: 0, w: 2, h: 2 },
      { x: 2, y: 3, w: 3, content: 'item 2' },
      { x: 1, y: 3 }
    ];
    this.grid1.load(serializedData);
    this.grid2.load(serializedData);
  }

  handleDrop(event: any): void {
    return event.target.cloneNode(true);
  }
}
