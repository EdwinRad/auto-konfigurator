# Auto-Konfigurator

## Überblick

Dieses Projekt ist ein einfacher Auto-Konfigurator, der es dem Benutzer ermöglicht, verschiedene Upgrades für ein Auto auszuwählen. Der Gesamtpreis sowie eventuelle Rabatte werden in Echtzeit aktualisiert. Der Benutzer kann dann seine Auswahl in einem Formular bestätigen, um ein Angebot anzufordern.

## Dateistruktur

- `index.html`: Hauptseite des Auto-Konfigurators. Hier wählt der Benutzer verschiedene Upgrades aus.
- `angebot.html`: Seite mit dem Formular zur Angebotsanforderung.
- `backend.js`: JavaScript-Datei, die die Logik für den Auto-Konfigurator enthält.
- `angebot.js`: JavaScript-Datei, die die Logik für das Angebotsformular enthält.
- `styles.css`: Enthält die benutzerdefinierten CSS-Stile für das Projekt.

## Funktionen

### Hauptseite (index.html)

- Zeigt ein Bild des Autos und verschiedene Upgrades.
- Aktualisiert den Gesamtpreis, den Rabatt und den Endpreis in Echtzeit, wenn Upgrades ausgewählt werden.
- Speichert die ausgewählten Upgrades im Local Storage des Browsers.

### Angebotsseite (angebot.html)

- Enthält ein Formular, in dem der Benutzer seine Kontaktdaten eingeben kann.
- Bietet eine Möglichkeit, die eingegebenen Daten sowie die ausgewählten Upgrades in einer Textdatei zu speichern.

### Backend (backend.js)

- Verwaltet die Logik für die Preisberechnung, Rabatte und die Aktualisierung der Benutzeroberfläche.
- Speichert die ausgewählten Upgrades im Local Storage, damit sie später abgerufen werden können.

### Angebot (angebot.js)

- Verwaltet die Logik für das Speichern des Formulars und der ausgewählten Upgrades in einer Textdatei.
- Holt die ausgewählten Upgrades aus dem Local Storage und fügt sie der Textdatei hinzu.

## Nutzung

1. Öffnen Sie `index.html` in Ihrem Webbrowser.
2. Wählen Sie die gewünschten Upgrades aus.
3. Klicken Sie auf "Jetzt Angebot anfordern!", um zur Angebotsseite zu gelangen.
4. Füllen Sie das Formular aus und klicken Sie auf "Angebot anfordern", um Ihre Daten und die ausgewählten Upgrades in einer Textdatei zu speichern.
