import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBeer } from '../interfaces/ibeer';
import { DataService } from '../services/data.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  dataSource: MatTableDataSource<IBeer>;
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dataService: DataService) {}

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'abv',
    'ibu',
    'tag',
  ];

  async ngOnInit() {
    
    const data = await this.dataService.getDataBeers();
    this.dataSource = new MatTableDataSource(data);

    this.dataSource.sort = this.sort;
    this.sort.direction = "asc";
    this.sort.active = this.displayedColumns[0];

    
  }

  async getTableBeers() {
    return await this.dataService.getDataBeers();
  }
}
