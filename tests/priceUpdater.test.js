import { updateTotalPrice } from '../functions/priceUpdater';

describe('updateTotalPrice', () => {

  it('sollte den Gesamtpreis um den Wert des Upgrades erhöhen', () => {
    const initialPrice = 5000;
    const addedPrice = 1000;
    const result = updateTotalPrice(initialPrice, addedPrice);
    expect(result).toBe(6000);
  });

  it('sollte den Gesamtpreis korrekt berechnen, wenn mehrere Upgrades hinzugefügt werden', () => {
    let price = 0;
    price = updateTotalPrice(price, 2000);
    price = updateTotalPrice(price, 1500);
    price = updateTotalPrice(price, 1000);
    expect(price).toBe(4500);
  });

  it('sollte den Gesamtpreis unverändert lassen, wenn der Wert des Upgrades 0 ist', () => {
    const initialPrice = 4000;
    const addedPrice = 0;
    const result = updateTotalPrice(initialPrice, addedPrice);
    expect(result).toBe(4000);
  });

  it('sollte den Gesamtpreis korrekt berechnen, wenn negative Werte als Upgrades hinzugefügt werden', () => {
    const initialPrice = 5000;
    const addedPrice = -1000;
    const result = updateTotalPrice(initialPrice, addedPrice);
    expect(result).toBe(4000);
  });
});
