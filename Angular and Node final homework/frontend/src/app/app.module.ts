//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

//Componentes Criados
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { LOCALE_ID } from '@angular/core';
import { DialogComponent } from './services/dialog/dialog.component';
import { ImmobilesCrudComponent } from './views/immobiles-crud/immobiles-crud.component';

//Services globais
import { ImmobileReadComponent } from './components/immobile/immobile-read/immobile-read.component';
import { ImmobileCreateComponent } from './components/immobile/immobile-create/immobile-create.component';
import { ImmobileUpdateComponent } from './components/immobile/immobile-update/immobile-update.component';
import { ImmobileDeleteComponent } from './components/immobile/immobile-delete/immobile-delete.component';
import { BrokersCrudComponent } from './views/brokers-crud/brokers-crud.component';
import { BrokerReadComponent } from './components/broker/broker-read/broker-read.component';
import { BrokerCreateComponent } from './components/broker/broker-create/broker-create.component';
import { BrokerUpdateComponent } from './components/broker/broker-update/broker-update.component';
import { BrokerDeleteComponent } from './components/broker/broker-delete/broker-delete.component';
import { SellsCrudComponent } from './views/sells-crud/sells-crud.component';
import { SellReadComponent } from './components/sell/sell-read/sell-read.component';
import { SellCreateComponent } from './components/sell/sell-create/sell-create.component';
import { PaymentsCrudComponent } from './views/payments-crud/payments-crud.component';
import { PaymentReadComponent } from './components/payment/payment-read/payment-read.component';
import { ReportReadComponent } from './components/report/report-read/report-read.component';
import { ReportsCrudComponent } from './views/reports-crud/reports-crud.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    DialogComponent,
    ImmobilesCrudComponent,
    ImmobileReadComponent,
    ImmobileCreateComponent,
    ImmobileUpdateComponent,
    ImmobileDeleteComponent,
    BrokersCrudComponent,
    BrokerReadComponent,
    BrokerCreateComponent,
    BrokerUpdateComponent,
    BrokerDeleteComponent,
    SellsCrudComponent,
    SellReadComponent,
    SellCreateComponent,
    PaymentsCrudComponent,
    PaymentReadComponent,
    ReportsCrudComponent,
    ReportReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
