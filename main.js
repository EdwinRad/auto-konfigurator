// Importieren der Funktionen aus dem ./functions Ordner
import { calculateDiscount } from './functions/discountCalculator.js';
import { updateTotalPrice } from './functions/priceUpdater.js';
import { toggleButtonStatus } from './functions/buttonManager.js';
import { saveToLocalStorage, getFromLocalStorage } from './functions/storageManager.js';

document.addEventListener('DOMContentLoaded', () => {
  let totalPrice = 0; // Initialer Gesamtpreis

  // Elemente aus dem DOM
  const priceElement = document.getElementById('price');
  const discountElement = document.getElementById('discount');
  const finalPriceElement = document.getElementById('finalPrice');
  const upgradeButtons = document.querySelectorAll('.upgrade-button');
  const removeButtons = document.querySelectorAll('.remove-button');

  removeButtons.forEach(button => {
      if (button.getAttribute('data-cost') === '3500') {
          toggleButtonStatus(button, false); // Aktiviere den Button
      } else {
          toggleButtonStatus(button, true);  // Deaktiviere alle anderen Buttons
      }
  });
  const updatePrices = () => {
    const discount = calculateDiscount(totalPrice);
    const finalPrice = totalPrice - discount;

    priceElement.textContent = `${totalPrice}€`;
    discountElement.innerHTML = `<span style="font-size: 0.8rem; color: #aaa;">Rabatt: ${discount}€ (${((discount / totalPrice) * 100).toFixed(2)}%)</span>`;
    finalPriceElement.textContent = `${finalPrice}€`;

    saveToLocalStorage('totalPrice', totalPrice);
    saveToLocalStorage('discount', discount);
    
    const selectedUpgrades = [];
    upgradeButtons.forEach((button, index) => {
      if (button.disabled) {
        selectedUpgrades.push(button.textContent.trim());
      }
    });
    saveToLocalStorage('upgrades', selectedUpgrades);
  };

  upgradeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const cost = parseInt(button.getAttribute('data-cost'));
      totalPrice = updateTotalPrice(totalPrice, cost);
      updatePrices();
      toggleButtonStatus(button, true);
      toggleButtonStatus(removeButtons[index], false);
    });
  });

  removeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const cost = parseInt(button.getAttribute('data-cost'));
      totalPrice = updateTotalPrice(totalPrice, -cost);  // Negative Kosten zum Entfernen
      updatePrices();
      toggleButtonStatus(button, true);
      toggleButtonStatus(upgradeButtons[index], false);
    });
  });

  // Initialer Aufruf, um Preise und Local Storage zu aktualisieren
  updatePrices();
});
