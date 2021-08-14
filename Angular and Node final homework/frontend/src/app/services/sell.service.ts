import { DialogComponent } from './dialog/dialog.component';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Sell } from '../models/sell.model';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  baseUrl = 'http://localhost:3001/sells';

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

  create(sell: Sell): Observable<Sell> {
    console.log(sell)
    return this.http.post<Sell>(this.baseUrl, sell).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Sell[]> {
    return this.http.get<Sell[]>(`${this.baseUrl}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(_id: string): Observable<Sell[]> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<Sell[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(sell: Sell): Observable<Sell> {
    const url = `${this.baseUrl}/${sell._id}`;
    console.log(url)
    return this.http.put<Sell>(url, sell).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // delete(_id: string): Observable<Broker> {
  //   const url = `${this.baseUrl}/${_id}`;
  //   return this.http.delete<Broker>(url).pipe(
  //     map((obj) => obj),
  //     catchError((e) => this.errorHandler(e))
  //   );
  // }

  errorHandler(e: any): Observable<any> {
    let message = 'Ocorreu um erro!'
    if (e.error.message) message = e.error.message;
    console.log(message)
    this.showMessage(message, true)
    return EMPTY
  }
}
