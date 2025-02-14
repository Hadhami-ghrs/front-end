import { Component, OnInit } from '@angular/core';
import { PorteurService } from '../porteur.service';


@Component({
  selector: 'app-porteur-list',
  templateUrl: './porteur-list.component.html',
  styleUrls: ['./porteur-list.component.css']
})
export class PorteurListComponent  {
  porteur: any[] = [];
  data: any;
  number: any;

  constructor( private porteurService: PorteurService) {}
ngOnInit(): void {
  this.porteurService.getAllPorteur().subscribe(data=>{
    this.porteur=data
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]
  }) 
}}