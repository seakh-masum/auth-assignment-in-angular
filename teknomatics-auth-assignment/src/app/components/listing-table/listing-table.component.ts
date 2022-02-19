import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models';

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss'],
})
export class ListingTableComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Customer[] = [];

  constructor() {}

  ngOnInit(): void {}

  onView() {}
  onEdit() {}
  onDelete() {}
}
