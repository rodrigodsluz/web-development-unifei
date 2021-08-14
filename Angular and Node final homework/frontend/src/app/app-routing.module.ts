import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ImmobilesCrudComponent } from './views/immobiles-crud/immobiles-crud.component';
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
import { ReportsCrudComponent } from './views/reports-crud/reports-crud.component';
import { ReportReadComponent } from './components/report/report-read/report-read.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: "immobiles",
    component: ImmobilesCrudComponent
  },
  {
    path: "immobiles/read",
    component: ImmobileReadComponent
  },
  {
    path: "immobiles/create",
    component: ImmobileCreateComponent
  },
  {
    path: "immobiles/update/:id",
    component: ImmobileUpdateComponent
  },
  {
    path: "immobiles/delete/:id",
    component: ImmobileDeleteComponent
  },
  {
    path: "brokers",
    component: BrokersCrudComponent
  },
  {
    path: "brokers/read",
    component: BrokerReadComponent
  },
  {
    path: "brokers/create",
    component: BrokerCreateComponent
  },
  {
    path: "brokers/update/:id",
    component: BrokerUpdateComponent
  },
  {
    path: "brokers/delete/:id",
    component: BrokerDeleteComponent
  },
  {
    path: "sells",
    component: SellsCrudComponent
  },
  {
    path: "sells/read",
    component: SellReadComponent
  },
  {
    path: "sells/create",
    component: SellCreateComponent
  },
  {
    path: "payments",
    component: PaymentsCrudComponent
  },
  {
    path: "payments/read",
    component: PaymentReadComponent
  },
  {
    path: "reports",
    component: ReportsCrudComponent
  },
  {
    path: "reports/read",
    component: ReportReadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
