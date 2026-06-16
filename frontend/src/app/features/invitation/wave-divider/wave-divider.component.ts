import { Component, input } from '@angular/core';

@Component({
  selector: 'app-wave-divider',
  standalone: true,
  templateUrl: './wave-divider.component.html',
  styleUrl: './wave-divider.component.scss',
})
export class WaveDividerComponent {
  readonly topColor = input<string>('var(--color-ivory)');
  readonly bottomColor = input<string>('var(--color-sand)');
  readonly middleColor = input<string>('var(--color-gold)');
  readonly flip = input<boolean>(false);
}
