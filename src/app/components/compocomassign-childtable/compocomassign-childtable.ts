import { Component } from '@angular/core';
import empdata from '../compocomassign-parent/empdata';

@Component({
  selector: 'app-compocomassign-childtable',
  imports: [],
  templateUrl: './compocomassign-childtable.html',
  styleUrl: './compocomassign-childtable.css',
  inputs:[]
})
export class CompocomassignChildtable {
  data = empdata;
}
