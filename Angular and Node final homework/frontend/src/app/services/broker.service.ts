import { DialogComponent } from './dialog/dialog.component';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Broker } from '../models/broker.model';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  baseUrl = 'http://localhost:3001/brokers';

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private dialog: MatDialog) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  openDialog(text: string, type: string) {
    this.dialog.open(DialogComponent, {data: {text: text, type: type}})
  }

  create(broker: Broker): Observable<Broker> {
    return this.http.post<Broker>(this.baseUrl, broker).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Broker[]> {
    return this.http.get<Broker[]>(`${this.baseUrl}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(_id: string): Observable<Broker> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<Broker>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(broker: Broker): Observable<Broker> {
    const url = `${this.baseUrl}/${broker._id}`;
    return this.http.put<Broker>(url, broker).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(_id: string): Observable<Broker> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.delete<Broker>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    let message = 'Ocorreu um erro!'
    if (e.error.message) message = e.error.message
    this.showMessage(message, true)
    return EMPTY
  }
}
