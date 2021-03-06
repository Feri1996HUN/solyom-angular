import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  list: Bill[] = [
    new Bill({
      szlaszam: 'LUK-2020-21458', db: 1, afakulcs: '27', fizHat: new Date(2020, 6, 25),
  kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man.Kft. Bp. XXII. Lukoil út 22.', 
me: 'db', nOsszeg: 20000, teljdatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtas Vevő'}),
    new Bill({
      szlaszam: 'LUK-2020-21459', db: 1, afakulcs: '27', fizHat: new Date(2020, 6, 25),
  kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man.Kft. Bp. XXII. Lukoil út 22.', 
me: 'db', nOsszeg: 20000, teljdatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtas Vevő'}),
    new Bill({
      szlaszam: 'LUK-2020-21460', db: 1, afakulcs: '27', fizHat: new Date(2020, 6, 25),
  kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man.Kft. Bp. XXII. Lukoil út 22.', 
me: 'db', nOsszeg: 20000, teljdatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtas Vevő'}),
  ]

  constructor() { }
}
