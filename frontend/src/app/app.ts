import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HealthService } from './shared-data-access/health.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
  private readonly healthService = inject(HealthService);

  constructor() {
    this.healthService.checkHealth().subscribe({
      next: (status) => {
        console.log('Backend connectivity verified:', status);
      },
      error: (err) => {
        console.error('Backend connectivity check failed:', err);
      }
    });
  }
}
