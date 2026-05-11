import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {}

  submit(data: { name: string; email: string; phone: string; message: string }) {
    return this.http.post(this.apiUrl, data);
  }
}
