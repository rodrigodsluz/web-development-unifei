import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Broker } from 'src/app/models/broker.model';
import { Sell } from 'src/app/models/sell.model';
import { BrokerService } from 'src/app/services/broker.service';
import { SellService } from 'src/app/services/sell.service';

@Component({
    selector: 'app-broker-update',
    templateUrl: './broker-update.component.html',
    styleUrls: ['./broker-update.component.css']
})
export class BrokerUpdateComponent implements OnInit {
    broker: Broker = {} as Broker;
    sells: Sell[] = [];
    types = ['contratado', 'comissionado'];

    @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

    constructor(
        private brokerService: BrokerService,
        private sellService: SellService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.brokerService.readById(id).subscribe((broker) => {
            this.broker = broker;
            if(this.broker.admissionDate){
                this.broker.admissionDate = broker.admissionDate.toString().split('T')[0];
            }
        });
    }

    updateBroker(): void {
        if(this.broker.admissionDate){
            this.broker.admissionDate = this.broker.admissionDate + 'T01:00:00';
        }
        this.brokerService.update(this.broker).subscribe(() => {
            let broker = this.broker;
            this.sellService.readById(broker._id).subscribe(sells => {
                this.updateSells(sells, broker);
            });

            this.brokerService.showMessage("Corretor atualizado com sucesso!");
            this.router.navigate(["/brokers"]);
        });
    }

    updateSells(sells: Sell[], broker: Broker){
        for (var i in sells) {
            sells[i].broker = broker;
            this.sellService.update(sells[i]).subscribe(() => {
                // console.log(sells[i])
            });
        }
    }

    cancel(): void {
        this.router.navigate(["/brokers"]);
    }
}
