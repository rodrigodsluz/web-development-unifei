import { Broker } from "./broker.model";
import { Immobile } from "./immobile.model";

export interface Sell {
    _id: string,
    value: number,
    date: string,
    buyerName: string,
    brokerId: string,
    broker: Broker,
    immobile: Immobile
}