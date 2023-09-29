export function calculateDiscount(totalPrice) {
  if (totalPrice >= 7500) {
    return totalPrice * 0; 
  } else if (totalPrice >= 5000) {
    return totalPrice * 0.125; 
  } else if (totalPrice >= 4000) {
    return totalPrice * 0.1;
  } else if (totalPrice >= 3500) {
    return totalPrice * 0.05;
  }
  return 0; // Kein Rabatt
}
