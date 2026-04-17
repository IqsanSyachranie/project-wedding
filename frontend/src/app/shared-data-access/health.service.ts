import { Injectable, inject } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Observable } from 'rxjs';

export interface HealthStatus {
  status: string;
  database: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  private readonly api = inject(ApiClientService);

  checkHealth(): Observable<HealthStatus> {
    return this.api.get<HealthStatus>('/health');
  }
}
