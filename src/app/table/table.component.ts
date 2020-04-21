import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {IBeer} from "../interfaces/ibeer"
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  dataSource: MatTableDataSource<IBeer>;

  constructor(private dataService: DataService) { }

  displayedColumns: string[] = ["id", "name", "tag"];

  async ngOnInit(){
    const data = await this.dataService.getDataBeers()
    this.dataSource = new MatTableDataSource(data);
  }

  async getTableBeers(){
    return await this.dataService.getDataBeers();

  }

}
