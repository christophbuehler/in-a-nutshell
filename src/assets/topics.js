const topics = [
  /****************************************
   * Biologie
  ****************************************/
  {
    path: '',
    title: 'Life Science',
  },
  {
    path: 'life-science',
    title: 'Biologie',
    body: 'Biologie ist die Wissenschaft von den Lebewesen.',
  },
  {
    path: 'life-science/biologie',
    title: 'Eigenschaften von Lebewesen',
    body: `
      - Lebewesen können Informationen (**Reize**) aus ihrer Umwelt aufnehmen und auf diese reagieren (**Reizbarkeit**).
      - Lebewesen sind in der Lage, sich fortzupflanzen und sich zu vermehren.
      - Lebewesen besitzen zum Aufbau und zur Erhaltung ihres Körpers einen eigenen **Stoffwechsel**.
      - Lebewesen wachsen und entwickeln sich (Wachstum und Entwicklung).
      - Lebewesen können sich selbst bewegen oder zeigen zumindest innerhalb ihres Körpers (bzw. innerhalb ihrer Zellen) Bewegungen (Bewegung, Beweglichkeit bzw. **Motilität**).
      `,
  },
  {
    path: 'life-science/biologie',
    title: 'Zellen',
    body: '',
  },
  {
    path: 'life-science/biologie/zellen',
    title: 'Protocyte',
    body: `
      - Zelle ohne **Zellkern** aber mit einer **Kernregion**.
      - Lebewesen mit Protocyten werden **Prokaryoten** genannt (z.B. **Bakterien**).
      - Besitzt kein **ER**, keinen **Golgi-Apparat**, keine **Mitochondrien** und keine **Chloroplasten**.
      ![bakterienzelle.png](assets/bakterienzelle.png)
      `,
  },
  {
    path: 'life-science/biologie/zellen',
    title: 'Pflanzenzelle',
    body: `
      - Zelle mit **Zellkern** (**Eucyte**).
      - Hat eine stützende und schützende **Zellwand**.
      - Besitzt **Chloroplasten** und **Mitochondrien**.
      - Pflanzen sind **autotroph** (=selbsternährend).
      - Pflanzen können sich nicht fortbewegen.
      ![pflanzenzelle.png](assets/pflanzenzelle.png)
      `,
  },
  {
    path: 'life-science/biologie/zellen',
    title: 'Tierische Zelle',
    body: `
- Zelle mit **Zellkern** (**Eucyte**).
- Besitzt keine **Zellwand**. Körper wird daher vom **Skelett** und **Muskeln** gehalten.
- Besitzt **Mitochondrien**, aber keine **Chloroplasten**.
- Tiere sind **heterotroph** (=sich von anderen ernährend).
- Tiere müssen sich bewegen, um Nahrung zu finden.
![tierische-zelle.png](assets/tierische-zelle.png)
      `,
  },
  {
    path: 'life-science/biologie/zellen',
    title: 'Bausteine einer Zelle',
    body: `
#### **Zellwand**
- Nur bei Pflanzenzellen.
- Schützt und stützt.

#### **Cytoplasma**
- Gesamter Bereich, der den **Zellkern** umgibt.
- Besteht mehrheitlich aus **Wasser** und vielen **Proteinen**.
- Somit ist das Cytoplasma dickflüssig bis gelartig.

#### **Zellmembran**
- Regelt den **Stoffaustausch** zwischen den Zellen und ihrer Umgebung.
- Grenzt **Cytoplasma** ab.
- Ermöglicht Kommunikation zwischen den Zellen und ihrer Umgebung.
- Besteht aus einer **Lipid-Doppelschicht**.
![zellmembran.png](assets/zellmembran.png)

#### **Zellkern**
- Träger des **Erbgutes**.
- Bewahrt Informationen für den Bau und Betrieb der Zelle.
- Steuert mit dieser Information die Entwicklung und Aktivität der Zelle.
- Verdoppelt das **Erbgut** vor der **Zellteilung**.
![zellkern.png](assets/zellkern.png)

#### Endoplasmatisches Reticulum (ER)
- Ein System von Kanälen und flachen, sackartigen Hohlräumen.
- Wird durch eine **Membran** vom **Plasma** abgegrenzt.
- Man unterscheidet zwischen **rauem** und **glattem** ER. Das Raue ER ist eine Proteinfabrik. Das glatte ER trägt viele **Enzyme**.
- Herstellung von **Membranlipiden**.
- Stoffumwandlungen.
![er.png](assets/er.png)

#### Golgi-Apparat (verbundene **Dictyosomen**)
- Dictyosomen sind Produktionsstätten, Zwischenlager sowie Sortier- und Versandzentralen von Stoffen, meist **Proteinen**.
![golgi-apparat.png](assets/golgi-apparat.png)

#### **Vesikel** (Tierzelle und Pflanzenzelle ) und **Vakuolen** (Pflanzenzelle)
- Zur Speicherung und zum Transport von Stoffen.
- Unterschieden wird
  - Transportvesikel
  - Lysosomen
  - Nahrungsvakuole (mit **Zellsaft** gefüllte Vakuole)

#### **Ribosomen**
- Winzige Kügelchen am rauen ER.
- Aus **Proteinen** und **RNA**.
- Dienen als Proteinfabrik der Zelle.

#### **Cytoskelett**
- Ist ein Netzwerk feiner **Proteinfäden**.
- Stützt die Zelle und stabilisiert ihre innere Struktur durch die Verankerung der **Organellen**.
- Bestimmt die Form der Zelle wenn keine **Zellwand** vorhanden ist.

#### **Chloroplasten**
- Nur in grünen Pflanzenteilen (Pflanzenzellen).
- Sie bilden und enthalten den grünen Farbstoff.
- Aufgabe: **Photosynthese**.
- Die Stapel heissen **Grana**.
- Das **Plasma** dazwischen **Stroma**.
![chloroplasten.png](assets/chloroplasten.png)

#### **Mitochondrien**
- **Zellatmung** → Gewinnung von **Energie**
- Herstellung von **ATP**
- Energieumwandlung
- Abbau von **Glucose**
![mitochondrien.png](assets/mitochondrien.png)
      `,
  },
  {
    path: 'life-science/biologie/zellen',
    title: 'Stofftransport',
    body: `
#### Zwei Wege
- Direkt durch die **Membran** ins **Plasma** und umgekehrt.
- Mithilfe von **Cytoplasma** in einer **Vakuole**.

#### Energieaufwand beim Stofftransport
- **Passiver** Transport → braucht keine Energie → folgt dem Konzentrationsgefälle.
- **Aktiver** Transport → Energieaufwand nötig → gegen Konzentrationsgefälle.

#### **Endocytose** und **Exocytose**
![endocytose.png](assets/endocytose.png)
    `,
  },

  /****************************************
   * Chemie
  ****************************************/
  {
    path: '',
    title: 'Chemie',
  },

  /****************************************
   * Umwelt
  ****************************************/
  {
    path: '',
    title: 'Umwelt',
  },

  /****************************************
   * Deutsch
  ****************************************/
  {
    path: '',
    title: 'Deutsch',
  },
  {
    path: 'deutsch',
    title: 'MMP Teil 1 - Textanalyse',
    body: `
    #### Wie wird geprüft?
    Zu einem Basistext werden praktische Aufgaben und theoretische Fragen gestellt.

    #### Obligatorischer Prüfungsstoff
    - Arbeitstechnik des wissenschaftlichen Arbeitens
    - Verständlichkeit
    - Textarten und Textsorten
    - Textanalyse
    - Interpretation und Textkritik
    - Grundlagen der Kommunikationslehre
    - Texterschliessung auf inhaltlicher und stilistischer Ebene
    - Konstruktivismus

    #### Fakultativer Prüfungsstoff (Spezialgebiete)
    ...
    `
  },
  {
    path: 'deutsch',
    title: 'MMP Teil 2 - Literatur',
    body: ``,
  },
  {
    path: 'deutsch',
    title: 'Schriftliche Textsorten',
    body: `
    #### Informative Textart
    - Bericht
    - Synthesebericht
    - Zusammenfassung
    - Beschreibung von Grafiken
    - Begriffsdefinition als Lexikoneintrag

    #### Argumentative / Analytische Textart
    - Stellungnahme
    - Entgegnung
    - Problemarbeit / Positionspapier
    - Texterörterung / Textkritik

    #### Literarische / Analytische Textart
    - Inhaltsangabe
    - Entgegnung
    - Problemarbeit / Positionspapier
    - Texterörterung / Textkritik
    `
  },
  {
    path: 'deutsch/schriftliche-textsorten',
    title: 'Leitfaden: Bericht',
    body: `
    | Abschnitt | Inhalt |
    | --- | --- |
    | HEADER | Textsorte Daten: Anlass, Auftraggeber, Verfasser, Datum… |
    | THEMA | Titel (Medienberichte verwenden Schlagzeilen und Titel) |
    | ABSRACT | Zusammenfassung, Vorspann, Nachrichtenkopf, Lead |
    | WAS WARUM / WOZU | Was ist passiert? Was war der Anlass / Ursache, was ist das Ziel / Absicht? |
    | WO WANN WER |     |
    | Wie | Wie hat sich das Geschehen zugetragen? |
    | WARUM | Warum ist es passiert? |
    | WAS | Was sind die Folgen dieses Ereignisses? |

    #### Grösstmögliche Objektivität und Sachlichkeit ist anzustreben.
    - Die Faken sind richtig.
    - Meinungen sind als solche gekennzeichnet.
    `,
  },
  {
    path: 'deutsch/schriftliche-textsorten',
    title: 'Leitfaden: Synthesebericht',
    body: `
    `,
  },
  {
    path: 'deutsch/schriftliche-textsorten',
    title: 'Leitfaden: Texterörterung',
    body: `
    `,
  },
  {
    path: 'deutsch',
    title: 'Begriffsdefinitionen',
  },
  {
    path: 'deutsch/begriffsdefinitionen',
    title: 'Eristik',
    body: `
    #### Oberbegriff
    - Rhetorisches Mittel

    #### Unterscheidende Merkmale
    - Mittel der Manipulation
	  - ersetzen Argumente

    #### Details / Beispiele
    - Polemik: Angriff auf die Person um sie – und damit auch ihre Argumente – zu disqualifizieren.
    - Übertreibung, Pauschalierung:  Bsp: Alle Deutschen sind Raser.
    - Aus einem meist harmlosen Einzelfall wird ein globales Problem gemacht.

    #### Bedeutung
	  - Eigenen Standpunkt durchsetzen, wenn man keine oder die schwächeren Argumente hat.
	  - Strategie: Arbeit auf der Gefühlsebene und mit Assoziationen.

    #### Schluss
	  - Unfair, unsachlich
    `
  },
  {
    path: 'deutsch/begriffsdefinitionen',
    title: 'Werkzeuge der Argumentation',
    body: `
    - Analogiebeweis
    - Faktenargument
    - Logischer, deduktiver Schluss
    - Argumentationsmodelle
    - Autoritätsargument
    - Aussagerichtigkeit
    - Ausklammerung
    - Einengung
    - Einseitige Argumentation
    - Expertenargument
    - Falsifizierung
    - 5-Satz Modelle
    - Induktiver Schluss
    - Manipulierende Argumentation
    - Mehrseitige Argumentation
    - Prämisse
    - Selbstbegründende Behauptung
    - Wertbezogene Argumente
    - Verifizieren
    - Zweiseitige Argumentation
    - Modell Kette
    `
  },
  {
    path: 'deutsch/begriffsdefinitionen',
    title: 'Werkzeuge der Rhetorik',
    body: `
    - Ansprache
    - Appell
    - Dialektik
    - Empfängerbezug
    - Gestik
    - Jargon
    - Mimik
    - Non Verbale Zeichen
    - Paraverbale Zeichen
    - Propaganda
    - Rede
    - Rhetorik
    - Rhetorische Frage
    - Suggestivfrage
    - Tabuisierung
    - Verbale Zeichen
    - Verbalstil
    `
  },
  {
    path: 'deutsch/begriffsdefinitionen',
    title: 'Werkzeuge der Stilistik',
    body: `
    - Aktiv
    - Anapher (Wiederholung)
    - Angemessenheit
    - Anglizismus
    - Ellipse
    - Euphemismus
    - Hyperbel
    - Metapher
    - Explizite Aussage
    - Implizite Aussage
    - Klimax (Steigerung mit Höhepunkt)
    - Manipulation
    - Neologismus
    - Pleonasmus
    - Reframing
    - Ironie
    - Vergleich
    - Sarkasmus
    - Polemik
    - Umbenennung
    - Verdinglichung
    - Visualisieren
    - Zeitstil
    `
  },
  {
    path: 'deutsch/begriffsdefinitionen',
    title: 'Frames',
    body: `
    #### Oberbegriff
    - Kommunikationswissenschaften / Medienkunde

    #### Unterscheidende Merkmale
    - Analysetool  von Sachtexten, v.a. informierenden Texten wie Berichte

    #### Details / Beispiele
    - Problembeschreibung und Nennung der Akteure (bzw. Tabuisierung).
    - Ursachen (meist basierend auf einfacher Kausalität).
    - Handlungsverantwortung – wer hat die Kompetenz ein Problem zu lösen.
    - Bewertung

    #### Bedeutung
	  - Textfunktion Analysieren / Verständnis.
	  - Frame ist ein multidisziplinäres Konzept, mit welchem man die Bedeutung von schriftlichen und mündlichen Texten bzw. Aussagen erfassen kann.
    `
  },

  /****************************************
   * Physik
  ****************************************/
  {
    path: '',
    title: 'Physik',
  },
  {
    path: 'physik',
    title: 'Statik',
    body: `
    #### Erstes Newtonsche Gesetz
    Verharrt ein Körper in Ruhe, so entspricht die Summe aller auf ihn wirkenden Kraftvektoren dem Nullvektor.

    #### Drehmoment
    BILD
    `
  },
  {
    path: 'physik',
    title: 'Kinematik',
    body: `
    #### Gleichmässige Bewegung

    #### Gleichmässig beschleunigte Bewegung

    #### Freier Fall

    `
  },
  {
    path: 'physik',
    title: 'Dynamik',
    body: `
    #### Zweites Newtonsches Gesetz

    #### Gleit- und Haftreibung

    #### Gravitation

    #### Arbeit

    #### Leistung

    #### Potentielle Energie

    #### Kinetische Energie

    #### Energieerhaltung

    #### Spannungsenergie einer Hookschen Feder

    #### Gravitationspotential
    `
  },
  {
    path: 'physik',
    title: 'Elektrostatik',
    body: `
    #### Coulombsches Gesetz & Superpositionsprinzip

    #### Elektrisches Feld & Superpositionsprinzip

    #### Kraftwirkung des elektrischen Feldes auf ruhende und bewegte Ladungen

    #### Spannung im homogenen elektrischen Feld

    #### Arbeit des elektrischen Feldes

    #### Potential im elektrischen Feld einer Punktladung

    `
  },
  {
    path: 'physik',
    title: 'Elektrodynamik',
    body: `
    #### Elektrischer Strom
    U = R * I

    #### Parallel- und Serieschaltung Ohmscher Widerstände

    #### Netzwerke: Kirchhoffsche Gesetze
    `
  },
  {
    path: 'physik',
    title: 'Magnetismus',
    body: `
    #### Gesetz von Bio-Savart

    #### Elektrisches Feld eines geradlinigen Leiters

    #### Amperesches Durchflutungsgesetz

    #### Kraftwirkung des Magnetfeldes auf geladene Teilchen

    #### Kraftwirkung des Magnetfeldes auf stromdurchflossene Leiter
    `
  },
  {
    path: 'physik',
    title: 'Optik',
    body: `
    #### Optische Abbildungen, Lupe, Mikroskop, Teleskop
    `
  },
  {
    path: 'physik',
    title: 'Mechanik 2',
    body: `
    Anwendungen der Differential- und Integralrechnung der Kinematik
    `
  },
  {
    path: 'physik',
    title: 'Einheiten',
    body: `
    - Tesla
    - Hertz
    - Joule
    - ...
    `
  },

  /****************************************
   * Mathe
  ****************************************/
  {
    path: '',
    title: 'Mathe',
  },
];
