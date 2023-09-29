import { calculateDiscount } from '../functions/discountCalculator';

// Gruppe von Tests für die Funktion calculateDiscount
describe('calculateDiscount', () => {
  
  // Einzelner Testfall
  it('sollte 5% Rabatt bei einem Gesamtpreis von 3500€ anwenden', () => {
    const result = calculateDiscount(3500);
    expect(result).toBe(175);  // 3500 * 0.05 = 175
  });

  it('sollte 10% Rabatt bei einem Gesamtpreis von 4000€ anwenden', () => {
    const result = calculateDiscount(4000);
    expect(result).toBe(400);  // 4000 * 0.1 = 400
  });

  it('sollte 12.5% Rabatt bei einem Gesamtpreis von 5000€ anwenden', () => {
    const result = calculateDiscount(5000);
    expect(result).toBe(625);  // 5000 * 0.125 = 625
  });

  it('sollte keinen Rabatt bei einem Gesamtpreis von weniger als 3500€ anwenden', () => {
    const result = calculateDiscount(1000);
    expect(result).toBe(0);  // Kein Rabatt
  });

});
