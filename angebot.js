document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Header für das Angebot
        let formOutput = "Auto-Kaufangebot\n";
        formOutput += "=================\n\n";

        // Sammeln der Formulardaten
        const formData = new FormData(form);
        formOutput += "Kontaktinformationen:\n";
        formData.forEach((value, key) => {
            formOutput += `${key}: ${value}\n`;
        });

        // Fügen Sie die Upgrades aus dem Local Storage hinzu
        const upgrades = JSON.parse(localStorage.getItem('upgrades')) || [];
        formOutput += "\nAusgewählte Upgrades:\n";
        formOutput += upgrades.length ? upgrades.join(', ') : 'Keine';
        
        // Gesamtpreis und Rabatt hinzufügen
        const totalPrice = localStorage.getItem('totalPrice') || 0;
        const discount = localStorage.getItem('discount') || 0;
        formOutput += `\n\nGesamtpreis: ${totalPrice}€`;
        formOutput += `\nRabatt: ${discount}€`;
        
        // Footer für das Angebot
        formOutput += "\n\nVielen Dank für Ihr Interesse an unserem Auto-Konfigurator. ";
        formOutput += "Wir werden uns bald mit Ihnen in Verbindung setzen, um die Details zu besprechen.";

        // Speichern Sie die Daten in einer Textdatei
        const blob = new Blob([formOutput], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Auto_Kaufangebot.txt';

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
    });
});
