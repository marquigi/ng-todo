import { Component, Input } from '@angular/core';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auto-item',
  imports: [CommonModule],
  templateUrl: './auto-item.html',
  styleUrl: './auto-item.css'
})
export class AutoItem {
  @Input()
  auto?: Auto;
}
