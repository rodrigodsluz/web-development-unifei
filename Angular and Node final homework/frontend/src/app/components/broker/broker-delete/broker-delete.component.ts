import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Broker } from 'src/app/models/broker.model';
import { BrokerService } from 'src/app/services/broker.service';

@Component({
  selector: 'app-broker-delete',
  templateUrl: './broker-delete.component.html',
  styleUrls: ['./broker-delete.component.css']
})
export class BrokerDeleteComponent implements OnInit {
  broker: Broker = {} as Broker;
  types = ['contratado', 'comissionado'];

  constructor(
    private brokerService: BrokerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.brokerService.readById(id).subscribe((broker) => {
      this.broker = broker;
    });
  }

  deleteBroker(): void {
    this.brokerService.delete(this.broker._id).subscribe(() => {
      this.brokerService.showMessage("Corretor excluído com sucesso!");
      this.router.navigate(["/brokers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/brokers"]);
  }
}
