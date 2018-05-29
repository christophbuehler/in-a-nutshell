export const topics = <Topic[]>[
    {
        title: 'Biologie',
        children: [
            {
                title: 'Eigenschaften von Lebewesen',
                body: `
                - Lebewesen können Informationen (Reize) aus ihrer Umwelt aufnehmen und auf diese reagieren (Reizbarkeit).
                - Lebewesen sind in der Lage, sich fortzupflanzen und sich zu vermehren (Fortpflanzung und Vermehrung).
                - Lebewesen besitzen zum Aufb  au und Aufrechterhaltung ihres Körpers und seiner Funktionen einen (eigenen!) Stoffwechsel.
                - Lebewesen wachsen und entwickeln sich (Wachstum und Entwicklung).
                - Lebewesen können sich selbst bewegen oder zeigen zumindest innerhalb ihres Körpers (bzw. innerhalb ihrer Zellen) Bewegungen (Bewegung, Beweglichkeit bzw. Motilität).
                `,
            },
            {
                title: 'Zellen',
                body: `
                `,
                children: [
                    {
                        title: 'Protocyte',
                        body: `
                        - Zelle ohne Zellkern aber mit einer Kernregion.
                        - Lebewesen mit Protocyten werden Prokaryoten genannt (z.B. Bakterien).
                        - Besitzt kein ER, keinen Golgi-Apparat, keine Mitochondrien und keine Chloroplasten.
                        ![bakterienzelle.png](assets/bakterienzelle.png)
                        `,
                    },
                    {
                        title: 'Pflanzenzelle',
                        body: `
                        - Zelle mit Zellkern (Eucyte).
                        - Hat eine stützende und schützende Zellwand.
                        - Besitzt Chloroplasten und Mitochondrien.
                        - Pflanzen sind autotroph (=selbsternährend).
                        - Pflanzen können sich nicht fortbewegen.
                        ![pflanzenzelle.png](assets/pflanzenzelle.png)
                        `,
                    },
                    {
                        title: 'Tierische Zelle',
                        body: `
                        - Zelle mit Zellkern (Eucyte).
                        - Besitzt keine Zellwand. Körper wird daher vom Skelett und Muskeln gehalten.
                        - Besitzt Mitochondrien, dafür keine Chloroplasten
                        - Tiere sind heterotroph (=sich von anderen ernährend).
                        - Tiere müssen sich bewegen um Nahrung zu finden
                        ![tierische-zelle.png](assets/tierische-zelle.png)
                        `,
                    },
                    {
                        title: 'Bausteine der Zellen',
                        body: `
                        #### Zellwand
                        - Nur bei Pflanzenzellen.
                        - Schützt und stützt.

                        #### Cytoplasma
                        - Gesamter Bereich, der den Zellkern umgibt.
                        - Besteht mehrheitlich aus Wasser und vielen Proteinen.
                        - Somit ist das Cytoplasma dickflüssig bis gelartig.

                        #### Zellmembran
                        - Regelt den Stoffaustausch zwischen den Zellen und ihrer Umgebung.
                        - Grenzt Cytoplasma ab.
                        - Ermöglicht Kommunikation zwischen den Zellen und ihrer Umgebung.
                        - Besteht aus einer Lipid-Doppelschicht.
                        ![zellmembran.png](assets/zellmembran.png)

                        #### Zellkern
                        - Träger des Erbgutes.
                        - Bewahrt Informationen für den Bau und Betrieb der Zelle.
                        - Steuert mit dieser Information die Entwicklung und Aktivität der Zelle.
                        - Verdoppelt das Erbgut vor der Zellteilung.
                        ![zellkern.png](assets/zellkern.png)

                        #### Endoplasmatisches Reticulum (ER)
                        - Ein System von Kanälen und flachen sackartigen Hohlräumen. 
                        - Wird durch eine Membran vom Plasma abgegrenzt.
                        - Man unterscheidet zwischen rauem und glattem ER. Das Raue ER ist eine Proteinfabrik. Das glatte ER trägt viele Enzyme.
                        - Herstellung von Membranlipiden.
                        - Stoffumwandlungen.
                        ![er.png](assets/er.png)

                        #### Golgi-Apparat (verbundene Dictyosomen)
                        - Dictyosomen sind Produktionsstätten, Zwischenlager sowie Sortier- und Versandzentralen von Stoffen, meist Proteinen.
                        ![golgi-apparat.png](assets/golgi-apparat.png)
                        
                        #### Vesikel (Tierzelle und Pflanzenzelle ) und Vakuolen (Pflanzenzelle)
                        - Zur Speicherung und zum Transport von Stoffen.
                        - Unterschieden wird
                          - Transportvesikel
                          - Lysosomen
                          - Nahrungsvakuole (mit Zellsaft gefüllte Vakuole)

                        #### Ribosomen
                        - Winzige Kügelchen am rauen ER.
                        - Aus Proteinen und RNA.
                        - Dienen als Proteinfabrik der Zelle.

                        #### Cytoskelett
                        - Ist ein Netzwerk feiner Proteinfäden.
                        - Stützt die Zelle und stabilisiert ihre innere Struktur durch die Verankerung der Organellen.
                        - Bestimmt die Form der Zelle wenn keine Zellwand vorhanden ist.

                        #### Chloroplasten
                        - Nur in grünen Pflanzenteilen (Pflanzenzellen).
                        - Sie bilden und enthalten den grünen Farbstoff.
                        - Aufgabe: Photosynthese.
                        - Die Stapel heissen Grana.
                        - Das Plasma dazwischen Stroma.
                        ![chloroplasten.png](assets/chloroplasten.png)

                        #### Mitochondrien
                        - Zellatmung → Gewinnung von Energie
                        - Herstellung von ATP 
                        - Energieumwandlung
                        - Abbau von Glucose
                        ![mitochondrien.png](assets/mitochondrien.png)
                        `,
                    },
                ]
            },
        ]
    },
    {
        title: 'Chemie',
    },
    {
        title: 'Umwelt',
    }
];

export interface Topic {
    title: string;
    abstract?: string;
    body?: string;
    children?: Topic[];
}