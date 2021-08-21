import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-heroe-dialog',
  templateUrl: './heroe-dialog.component.html',
  styleUrls: ['./heroe-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
