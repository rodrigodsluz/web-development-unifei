import { DialogComponent } from './dialog/dialog.component';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType  } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Immobile } from '../models/immobile.model';

@Injectable({
  providedIn: 'root'
})
export class ImmobileService {

  baseUrl = 'http://localhost:3001/immobiles'

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private dialog: MatDialog) {}

  upload(formData) {
    return this.http.post<any>(`${this.baseUrl}/upload/`, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }

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

  create(immobile: Immobile): Observable<Immobile> {
    return this.http.post<Immobile>(this.baseUrl, immobile).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Immobile[]> {
    return this.http.get<Immobile[]>(`${this.baseUrl}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(_id: string): Observable<Immobile> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<Immobile>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(immobile: Immobile): Observable<Immobile> {
    const url = `${this.baseUrl}/${immobile._id}`;
    return this.http.put<Immobile>(url, immobile).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(_id: string): Observable<Immobile> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.delete<Immobile>(url).pipe(
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
