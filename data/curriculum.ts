
import { Topic, LearningContent } from '../types';

export const STATIC_TOPICS: Record<string, Record<string, Topic[]>> = {
  "10": {
    "Mathematik": [
      { id: "m10_1", title: "Potenzfunktionen & Wurzeln", description: "Potenzgesetze, n-te Wurzeln, Wurzelfunktionen und ihre Eigenschaften." },
      { id: "m10_2", title: "Trigonometrie", description: "Sinus, Kosinus, Tangens am rechtwinkligen Dreieck und Einheitskreis. Sinus- und Kosinussatz." },
      { id: "m10_3", title: "Körperberechnung", description: "Volumen und Oberfläche von Pyramide, Kegel und Kugel." },
      { id: "m10_4", title: "Exponentielles Wachstum", description: "Wachstums- und Zerfallsprozesse, Logarithmus." },
      { id: "m10_5", title: "Stochastik I", description: "Bedingte Wahrscheinlichkeit, Unabhängigkeit, Vierfeldertafel." },
      { id: "m10_6", title: "Ganzrationale Funktionen", description: "Verhalten im Unendlichen, Nullstellen, Symmetrie (Einführung)." }
    ],
    "Deutsch": [
      { id: "d10_1", title: "Erörterung", description: "Dialektische Erörterung, Argumentationsstruktur, Sanduhr-Prinzip." },
      { id: "d10_2", title: "Drama der Klassik", description: "Analyse von Dramenszenen, z.B. Schiller oder Goethe." },
      { id: "d10_3", title: "Kommunikation", description: "Kommunikationsmodelle (Schulz von Thun, Watzlawick)." },
      { id: "d10_4", title: "Lyrik", description: "Gedichtanalyse mit Fokus auf Motive und rhetorische Mittel." }
    ],
    "Geschichte": [
      { id: "g10_1", title: "Weimarer Republik", description: "Entstehung, Verfassung, Krisenjahre und Scheitern der Demokratie." },
      { id: "g10_2", title: "Nationalsozialismus", description: "Ideologie, Machtergreifung, Gleichschaltung, Holocaust." },
      { id: "g10_3", title: "Zweiter Weltkrieg", description: "Verlauf, Vernichtungskrieg, Flucht und Vertreibung." },
      { id: "g10_4", title: "Blockbildung", description: "Nachkriegsordnung, Teilung Deutschlands, Kalter Krieg." }
    ],
    "Geographie": [
      { id: "geo10_1", title: "Atmosphäre & Klima", description: "Strahlungshaushalt, planetarische Zirkulation, Wetterkarten." },
      { id: "geo10_2", title: "Ressourcen", description: "Wasser, Boden und Rohstoffe als Lebensgrundlagen." },
      { id: "geo10_3", title: "Weltwirtschaftsregionen", description: "USA, Russland oder China im Strukturwandel." }
    ],
    "Sozialkunde": [
      { id: "sk10_1", title: "Politisches System BRD", description: "Verfassungsorgane, Gewaltenteilung, Gesetzgebung." },
      { id: "sk10_2", title: "Recht und Rechtsprechung", description: "Funktionen von Recht, Zivilrecht vs. Öffentliches Recht." },
      { id: "sk10_3", title: "Sozialstruktur", description: "Demografischer Wandel, Modelle sozialer Ungleichheit." }
    ],
    "Ethik": [
      { id: "eth10_1", title: "Freiheit & Determinismus", description: "Willensfreiheit, Handlungsfreiheit, Verantwortung." },
      { id: "eth10_2", title: "Religionen der Welt", description: "Buddhismus, Hinduismus, Judentum, Christentum, Islam im Vergleich." },
      { id: "eth10_3", title: "Angewandte Ethik", description: "Medizinethik, Technikethik, Umweltethik." }
    ],
    "Astronomie": [
      { id: "astro10_1", title: "Orientierung am Himmel", description: "Himmelskugel, Koordinatensysteme, scheinbare Planetenbewegungen." },
      { id: "astro10_2", title: "Das Sonnensystem", description: "Aufbau, Keplersche Gesetze, Eigenschaften der Planeten." },
      { id: "astro10_3", title: "Sterne", description: "Zustandsgrößen, HRD (Hertzsprung-Russell-Diagramm), Sternentwicklung." }
    ],
    "Englisch": [
      { id: "e10_1", title: "Global Challenges", description: "Environment, Globalization, Human Rights." },
      { id: "e10_2", title: "Literature & Media", description: "Analysis of short stories and dystopian novels." },
      { id: "e10_3", title: "Political Systems", description: "UK vs. US political systems, Monarchy vs. Democracy." },
      { id: "e10_4", title: "Job Application", description: "CV, Covering Letter, Interview skills." }
    ],
    "Französisch": [
      { id: "fr10_1", title: "Les jeunes et l'avenir", description: "Berufswünsche, Studium, Arbeitswelt in Frankreich." },
      { id: "fr10_2", title: "La France et l'Allemagne", description: "Deutsch-französische Beziehungen, Geschichte, Klischees." },
      { id: "fr10_3", title: "Littérature et Film", description: "Analyse kurzer literarischer Texte oder Filmszenen." }
    ],
    "Russisch": [
      { id: "ru10_1", title: "Jugend in Russland", description: "Schule, Freizeit, Musik, soziale Medien." },
      { id: "ru10_2", title: "Moskau & St. Petersburg", description: "Kultur, Geschichte und Sehenswürdigkeiten." },
      { id: "ru10_3", title: "Reisen", description: "Verkehrsmittel, Unterkünfte, Dialoge am Bahnhof." }
    ],
    "Latein": [
      { id: "lat10_1", title: "Rhetorik", description: "Cicero, Stilmittel, Aufbau einer Rede." },
      { id: "lat10_2", title: "Philosophie", description: "Seneca, Stoa, Epikur, Glückseligkeit." },
      { id: "lat10_3", title: "Dichtung", description: "Ovid, Metamorphosen, Hexameter." }
    ],
    "Musik": [
      { id: "mus10_1", title: "Musikgeschichte", description: "Von der Klassik zur Romantik, wichtige Komponisten." },
      { id: "mus10_2", title: "Filmmusik", description: "Funktion von Musik im Film, Techniken, Analyse." },
      { id: "mus10_3", title: "Jazz & Pop", description: "Stilrichtungen, Entwicklung, Improvisation." }
    ],
    "Kunst": [
      { id: "ku10_1", title: "Architektur", description: "Baustile, Funktion und Form, Stadtplanung." },
      { id: "ku10_2", title: "Design", description: "Produktdesign, Grafikdesign, Werbung." },
      { id: "ku10_3", title: "Fotografie", description: "Bildkomposition, Licht, technische Grundlagen." }
    ],
    "Sport": [
      { id: "sp10_1", title: "Trainingslehre", description: "Kraft, Ausdauer, Schnelligkeit, Trainingsprinzipien." },
      { id: "sp10_2", title: "Bewegungsanalyse", description: "Biomechanische Grundlagen, Phasenstruktur von Bewegungen." },
      { id: "sp10_3", title: "Sport und Gesellschaft", description: "Doping, Kommerzialisierung, Gesundheit." }
    ],
    "Informatik": [
      { id: "inf10_1", title: "Datenbanken I", description: "E-R-Modellierung, Relationale Datenbanken, SQL-Grundlagen." },
      { id: "inf10_2", title: "Netzwerke", description: "Grundlagen der Rechnerkommunikation, IP-Adressen, Protokolle." },
      { id: "inf10_3", title: "Datenschutz", description: "Rechtliche Grundlagen, Sicherheit im Netz, Verschlüsselung." }
    ],
    "Biologie": [
      { id: "bio10_1", title: "Zellbiologie", description: "Aufbau von Tier- und Pflanzenzellen, Zellorganellen." },
      { id: "bio10_2", title: "Stoffwechsel", description: "Enzyme, Fotosynthese (Grundlagen), Zellatmung." },
      { id: "bio10_3", title: "Genetik I", description: "Mitose, Meiose, DNA-Aufbau, Proteinbiosynthese." }
    ],
    "Physik": [
      { id: "ph10_1", title: "Mechanik der Kreisbewegungen", description: "Zentripetalkraft, Gravitation, Keplersche Gesetze." },
      { id: "ph10_2", title: "Schwingungen", description: "Harmonische Schwingung, Fadenpendel, Federpendel." },
      { id: "ph10_3", title: "Wellen", description: "Eigenschaften von Wellen, Interferenz, Stehende Wellen." }
    ],
    "Chemie": [
      { id: "ch10_1", title: "Kohlenwasserstoffe", description: "Alkane, Alkene, Alkine, Nomenklatur und Eigenschaften." },
      { id: "ch10_2", title: "Alkohole", description: "Struktur, Eigenschaften und Reaktionen von Alkanolen." },
      { id: "ch10_3", title: "Organische Säuren", description: "Carbonsäuren, Esterbildung, Verseifung." }
    ]
  },
  "11": {
    "Mathematik": [
      { id: "m11_1", title: "Differentialrechnung", description: "Ableitungsbegriff, Regeln, Kurvendiskussion ganzrationaler Funktionen." },
      { id: "m11_2", title: "Analytische Geometrie I", description: "Vektoren, Geraden im Raum, Lagebeziehungen, Skalarprodukt." },
      { id: "m11_3", title: "Extremwertprobleme", description: "Optimierungsaufgaben mit Nebenbedingungen." },
      { id: "m11_4", title: "Funktionsscharen", description: "Untersuchung von Funktionen mit Parametern." }
    ],
    "Deutsch": [
      { id: "d11_1", title: "Literatur der Aufklärung", description: "Lessing, Nathan der Weise, Toleranzgedanke." },
      { id: "d11_2", title: "Faust I", description: "Goethe, Gelehrtentragödie, Gretchentragödie." },
      { id: "d11_3", title: "Sprachwandel", description: "Entwicklung der deutschen Sprache, Anglizismen, Kiezdeutsch." },
      { id: "d11_4", title: "Sachtextanalyse", description: "Analyse komplexer pragmatischer Texte, Rhetorik." }
    ],
    "Geschichte": [
      { id: "g11_1", title: "Modernisierung", description: "Industrialisierung, Soziale Frage, Wandel der Gesellschaft." },
      { id: "g11_2", title: "Nationalstaatsbildung", description: "Reichsgründung 1871, Bismarcks Außenpolitik." },
      { id: "g11_3", title: "Imperialismus", description: "Kolonialpolitik, Ursachen des Ersten Weltkriegs." },
      { id: "g11_4", title: "Erster Weltkrieg", description: "Kriegsverlauf, Epochenbruch, Folgen für Europa." }
    ],
    "Geographie": [
      { id: "geo11_1", title: "Landschaftsökologie", description: "Geoökozonen, Wechselwirkungen im Ökosystem." },
      { id: "geo11_2", title: "Siedlungsgeographie", description: "Stadtentwicklung, Suburbanisierung, globale Verstädterung." },
      { id: "geo11_3", title: "Bevölkerungsgeographie", description: "Migration, Altersstrukturen, Daseinsvorsorge." }
    ],
    "Sozialkunde": [
      { id: "sk11_1", title: "Wirtschaftspolitik", description: "Soziale Marktwirtschaft, Magisches Viereck, Konjunkturzyklen." },
      { id: "sk11_2", title: "Europäische Union", description: "Institutionen, Gesetzgebung, Integrationsmodelle." },
      { id: "sk11_3", title: "Internationale Politik", description: "UNO, NATO, Sicherheitspolitik, Menschenrechte." }
    ],
    "Englisch": [
      { id: "e11_1", title: "The American Dream", description: "History, Immigration, Civil Rights Movement, Current state." },
      { id: "e11_2", title: "Shakespeare", description: "Elizabethan Age, Sonnets, Macbeth or Hamlet relevant scenes." },
      { id: "e11_3", title: "Media and Reality", description: "Influence of social media, Fake News, Advertising." }
    ],
    "Informatik": [
      { id: "inf11_1", title: "Objektorientierung", description: "Klassen, Objekte, Vererbung, Polymorphie (z.B. in Java)." },
      { id: "inf11_2", title: "Datenstrukturen", description: "Listen, Stapel, Schlangen und deren Implementierung." },
      { id: "inf11_3", title: "Softwareentwicklung", description: "Phasen der Softwareentwicklung, Modellierung." }
    ],
    "Biologie": [
      { id: "bio11_1", title: "Genetik II", description: "Genregulation, Gentechnik, Stammbaumanalyse." },
      { id: "bio11_2", title: "Ökologie", description: "Ökosysteme, abiotische und biotische Faktoren, Populationsdynamik." },
      { id: "bio11_3", title: "Stoffkreisläufe", description: "Kohlenstoff- und Stickstoffkreislauf im Ökosystem." }
    ],
    "Physik": [
      { id: "ph11_1", title: "Elektrische Felder", description: "Coulomb-Gesetz, Feldlinien, Kondensator." },
      { id: "ph11_2", title: "Magnetische Felder", description: "Lorentzkraft, Spulen, Massenspektrometer." },
      { id: "ph11_3", title: "Induktion", description: "Induktionsgesetz, Lenzsche Regel, Generator, Transformator." }
    ],
    "Chemie": [
      { id: "ch11_1", title: "Chemisches Gleichgewicht", description: "Massenwirkungsgesetz, Prinzip von Le Chatelier." },
      { id: "ch11_2", title: "Säure-Base-Reaktionen", description: "pH-Wert-Berechnung, Titration, Pufferlösungen." },
      { id: "ch11_3", title: "Kunststoffe", description: "Polymerisation, Polykondensation, Polyaddition." }
    ],
    "Ethik": [
      { id: "eth11_1", title: "Grundpositionen der Ethik", description: "Utilitarismus, Deontologie (Kant), Tugendethik." },
      { id: "eth11_2", title: "Recht und Gerechtigkeit", description: "Straftheorien, Verteilungsgerechtigkeit, Naturrecht." },
      { id: "eth11_3", title: "Wissenschaftsethik", description: "Verantwortung der Wissenschaft, Grenzen der Forschung." }
    ],
    "Musik": [
      { id: "mus11_1", title: "Analyse und Interpretation", description: "Formenlehre, Harmonik, Satztechnik." },
      { id: "mus11_2", title: "Musik im 20. Jahrhundert", description: "Atonalität, Zwölftonmusik, Neoklassizismus." },
      { id: "mus11_3", title: "Musiktheater", description: "Oper, Musical, Ballett - Geschichte und Analyse." }
    ],
    "Kunst": [
      { id: "ku11_1", title: "Malerei der Moderne", description: "Impressionismus, Expressionismus, Kubismus, Surrealismus." },
      { id: "ku11_2", title: "Bildanalyse", description: "Ikonografie, Komposition, Farbeinsatz." },
      { id: "ku11_3", title: "Plastik und Skulptur", description: "Körper, Raum, Material, klassische vs. moderne Plastik." }
    ],
    "Sport": [
      { id: "sp11_1", title: "Sportbiologie", description: "Energiebereitstellung, Muskelaufbau, Herz-Kreislauf-System." },
      { id: "sp11_2", title: "Sportpsychologie", description: "Motivation, Stressbewältigung, Teamentwicklung." },
      { id: "sp11_3", title: "Sportsoziologie", description: "Fair Play, Gewalt im Sport, Medien." }
    ],
    "Französisch": [
      { id: "fr11_1", title: "Existentialismus", description: "Sartre, Camus, literarische Strömungen." },
      { id: "fr11_2", title: "La Francophonie", description: "Kolonialgeschichte, Verbreitung der Sprache, Afrika, Kanada." },
      { id: "fr11_3", title: "Aktuelle Gesellschaft", description: "Migration, Integration, soziale Probleme in den Banlieues." }
    ],
    "Russisch": [
      { id: "ru11_1", title: "Russland heute", description: "Politik, Wirtschaft, soziale Fragen." },
      { id: "ru11_2", title: "Literatur", description: "Puschkin, Tschechow, Gedichte und Kurzgeschichten." },
      { id: "ru11_3", title: "Umwelt und Natur", description: "Baikalsee, Taiga, ökologische Herausforderungen." }
    ],
    "Latein": [
      { id: "lat11_1", title: "Staatstheorie", description: "Cicero De re publica, Idealstaat, Verfassungsformen." },
      { id: "lat11_2", title: "Geschichtsschreibung", description: "Livius, Tacitus, Darstellung römischer Geschichte." },
      { id: "lat11_3", title: "Liebesdichtung", description: "Catull, Ovid Amores, Tibull." }
    ],
    "Astronomie": [
      { id: "astro11_1", title: "Astrophysik", description: "Strahlungsgesetze, Spektralanalyse, Doppler-Effekt." },
      { id: "astro11_2", title: "Sternentwicklung", description: "Entstehung, Hauptreihe, Rote Riesen, Endstadien (Schwarze Löcher)." },
      { id: "astro11_3", title: "Kosmologie", description: "Urknalltheorie, Expansion des Universums, Dunkle Materie." }
    ]
  },
  "12": {
    "Mathematik": [
      { id: "m12_1", title: "Integralrechnung", description: "Stammfunktionen, Hauptsatz, Flächen zwischen Graphen, Rotationsvolumen." },
      { id: "m12_2", title: "Analytische Geometrie II", description: "Ebenengleichungen, Abstandsaufgaben, Schnittwinkel, Kugeln." },
      { id: "m12_3", title: "Stochastik II", description: "Binomialverteilung, Testen von Hypothesen, Normalverteilung." },
      { id: "m12_4", title: "Abiturvorbereitung", description: "Komplexe Übungsaufgaben quer durch alle Gebiete." }
    ],
    "Deutsch": [
      { id: "d12_1", title: "Literatur der Moderne", description: "Epochenumbruch um 1900, Expressionismus, Exilliteratur." },
      { id: "d12_2", title: "Literatur nach 1945", description: "Trümmerliteratur, BRD/DDR-Literatur, Postmoderne." },
      { id: "d12_3", title: "Sprache und Denken", description: "Spracherwerb, Sapir-Whorf-Hypothese, Verhältnis Sprache-Wirklichkeit." }
    ],
    "Geschichte": [
      { id: "g12_1", title: "BRD und DDR", description: "Vergleich der politischen Systeme, Gesellschaft, Wiedervereinigung." },
      { id: "g12_2", title: "Europa", description: "Ideengeschichte, Europäische Integration, Institutionen der EU." },
      { id: "g12_3", title: "Friedenssicherung", description: "UNO, NATO, aktuelle Konflikte und Lösungsstrategien." }
    ],
    "Geographie": [
      { id: "geo12_1", title: "Globale Disparitäten", description: "Entwicklungs- und Schwellenländer, Indikatoren (HDI), Strategien." },
      { id: "geo12_2", title: "Tourismus", description: "Formen des Tourismus, ökonomische und ökologische Folgen, Nachhaltigkeit." },
      { id: "geo12_3", title: "Abiturvorbereitung", description: "Raumanalyse, Vernetzung der Themenbereiche." }
    ],
    "Sozialkunde": [
      { id: "sk12_1", title: "Globalisierung", description: "Dimensionen, Chancen und Risiken, Global Governance." },
      { id: "sk12_2", title: "Friedens- und Sicherheitspolitik", description: "Neue Kriege, Terrorismus, Rolle der Bundeswehr." },
      { id: "sk12_3", title: "Zukunft der Demokratie", description: "Partizipation, Medien, Extremismus." }
    ],
    "Englisch": [
      { id: "e12_1", title: "UK in the 21st Century", description: "Multiculturalism, Brexit, Monarchy vs. Modernity." },
      { id: "e12_2", title: "Science and Technology", description: "Genetic engineering, AI, Ethics in science." },
      { id: "e12_3", title: "Globalisation", description: "Economic, ecological and cultural aspects." }
    ],
    "Informatik": [
      { id: "inf12_1", title: "Datenbanken II", description: "Normalisierung, komplexe SQL-Abfragen, Datenschutz." },
      { id: "inf12_2", title: "Theoretische Informatik", description: "Automaten, Formale Sprachen, Grammatiken." },
      { id: "inf12_3", title: "Algorithmen", description: "Sortierverfahren, Laufzeitanalyse (O-Notation)." }
    ],
    "Biologie": [
      { id: "bio12_1", title: "Evolution", description: "Evolutionstheorien, Evolutionsfaktoren, Homologie/Analogie." },
      { id: "bio12_2", title: "Neurobiologie", description: "Aufbau von Neuronen, Ruhe-/Aktionspotential, Synapsen." },
      { id: "bio12_3", title: "Verhaltensbiologie", description: "Angeborenes vs. erlerntes Verhalten, Konditionierung." }
    ],
    "Physik": [
      { id: "ph12_1", title: "Quantenphysik", description: "Photoeffekt, Welle-Teilchen-Dualismus, Heisenberg." },
      { id: "ph12_2", title: "Atomphysik", description: "Bohrsches Atommodell, Linienspektren, Laser." },
      { id: "ph12_3", title: "Kernphysik", description: "Radioaktivität, Kernspaltung, Kernfusion." }
    ],
    "Chemie": [
      { id: "ch12_1", title: "Elektrochemie", description: "Galvanische Zelle, Spannungsreihe, Elektrolyse, Batterien." },
      { id: "ch12_2", title: "Farbstoffe", description: "Farbigkeit, Absorptionsspektren, Synthese von Farbstoffen." },
      { id: "ch12_3", title: "Angewandte Chemie", description: "Tenside, Waschmittel, Medikamente." }
    ],
    "Ethik": [
      { id: "eth12_1", title: "Glück und Sinn", description: "Eudaimonie, Hedonismus, Sinnsuche in der Moderne." },
      { id: "eth12_2", title: "Bioethik", description: "Sterbehilfe, Gentechnik, PID, Tierethik." },
      { id: "eth12_3", title: "Politische Ethik", description: "Krieg und Frieden, Menschenrechte, Toleranz." }
    ],
    "Musik": [
      { id: "mus12_1", title: "Musik und Gesellschaft", description: "Politische Musik, Nationalhymnen, Protestsongs." },
      { id: "mus12_2", title: "Weltmusik", description: "Musikerkulturen außereuropäischer Länder." },
      { id: "mus12_3", title: "Elektronische Musik", description: "Geschichte, Techniken, Einfluss auf die Popkultur." }
    ],
    "Kunst": [
      { id: "ku12_1", title: "Kunst nach 1945", description: "Abstrakter Expressionismus, Pop Art, Concept Art." },
      { id: "ku12_2", title: "Neue Medien", description: "Video, Performance, digitale Kunst." },
      { id: "ku12_3", title: "Abiturvorbereitung", description: "Vergleichende Werkanalyse, praktische Klausurvorbereitung." }
    ],
    "Sport": [
      { id: "sp12_1", title: "Bewegungslernen", description: "Motorisches Lernen, Feedback, Lernphasen." },
      { id: "sp12_2", title: "Leistungsphysiologie", description: "Anpassungserscheinungen, Höhentraining, Regeneration." },
      { id: "sp12_3", title: "Sportgeschichte", description: "Olympische Spiele, Entwicklung des Sports, Inklusion." }
    ],
    "Französisch": [
      { id: "fr12_1", title: "Abiturvorbereitung", description: "Wiederholung Grammatik, Textproduktion, Mediation." },
      { id: "fr12_2", title: "Filmanalyse", description: "Detaillierte Analyse eines französischen Films." },
      { id: "fr12_3", title: "Aktuelle Themen", description: "Politik, Wahlen, kulturelle Ereignisse." }
    ],
    "Russisch": [
      { id: "ru12_1", title: "Wiederholung", description: "Grammatikschwerpunkte, Wortschatzarbeit für das Abitur." },
      { id: "ru12_2", title: "Russische Geschichte", description: "Zarenreich, Sowjetunion, Perestroika (Texte)." },
      { id: "ru12_3", title: "Medien", description: "Zeitungstexte, Nachrichten, Internet." }
    ],
    "Latein": [
      { id: "lat12_1", title: "Philosophie II", description: "Vertiefung römische Stoa, Briefe an Lucilius." },
      { id: "lat12_2", title: "Rezeption", description: "Fortleben antiker Motive in Kunst und Literatur." },
      { id: "lat12_3", title: "Abiturvorbereitung", description: "Übersetzungstechnik, Interpretation, Metrik." }
    ],
    "Astronomie": [
      { id: "astro12_1", title: "Extragalaktik", description: "Milchstraße, Galaxientypen, Lokale Gruppe." },
      { id: "astro12_2", title: "Großräumige Strukturen", description: "Galaxienhaufen, Superhaufen, Voids." },
      { id: "astro12_3", title: "Exoplaneten", description: "Nachweismethoden, Lebenszone, Suche nach Leben." }
    ]
  }
};

export const STATIC_CONTENT_TRIGONOMETRY: LearningContent = {
  level0: "Du musst sicher mit dem Satz des Pythagoras umgehen können ($a^2 + b^2 = c^2$) und wissen, wie man Gleichungen umstellt. Außerdem solltest du Winkelarten (spitz, stumpf, rechtwinklig) unterscheiden können.",
  guide: `### 1. Die Grundlagen am rechtwinkligen Dreieck
In einem [rechtwinkligen Dreieck](internal:Rechtwinkliges Dreieck) (ein Winkel ist $90^\\circ$) haben die Seiten feste Namen, abhängig vom Winkel $\\alpha$, den wir betrachten:
*   **[Hypotenuse](internal:Hypotenuse):** Die längste Seite, liegt dem rechten Winkel gegenüber.
*   **[Gegenkathete](internal:Kathete):** Die Seite, die dem Winkel $\\alpha$ *gegenüber* liegt.
*   **Ankathete:** Die Seite, die *an* dem Winkel $\\alpha$ anliegt (aber nicht die Hypotenuse ist).

**Die drei Grundformeln:**
Eselsbrücke: *GAGA Hühnerhof AG* (Sin, Cos, Tan, Cot)
1.  **[Sinus](internal:Sinus):** $\\sin(\\alpha) = \\frac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$
2.  **[Kosinus](internal:Kosinus):** $\\cos(\\alpha) = \\frac{\\text{Ankathete}}{\\text{Hypotenuse}}$
3.  **[Tangens](internal:Tangens):** $\\tan(\\alpha) = \\frac{\\text{Gegenkathete}}{\\text{Ankathete}} = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$

---

### 2. Werte am Einheitskreis
Der [Einheitskreis](internal:Einheitskreis) ist ein Kreis mit Radius $r=1$ im Koordinatensystem.
*   Der **Sinus** entspricht der $y$-Koordinate eines Punktes auf dem Kreis.
*   Der **Kosinus** entspricht der $x$-Koordinate.
*   Dadurch wird klar: $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$ (Satz des Pythagoras im Einheitskreis).

**Wichtige Werte (Auswendig lernen!):**
*   $0^\\circ$: Sin=0, Cos=1
*   $30^\\circ$: Sin=0.5, Cos=$\\frac{\\sqrt{3}}{2}$
*   $45^\\circ$: Sin=$\\frac{\\sqrt{2}}{2}$, Cos=$\\frac{\\sqrt{2}}{2}$
*   $60^\\circ$: Sin=$\\frac{\\sqrt{3}}{2}$, Cos=0.5
*   $90^\\circ$: Sin=1, Cos=0

---

### 3. Beliebige Dreiecke (Nicht rechtwinklig!)
Hier funktionieren Sin/Cos/Tan nicht direkt. Wir brauchen mächtigere Werkzeuge.

**Der [Sinussatz](internal:Sinussatz):**
Verwende ihn, wenn du **ein Paar** aus Seite und gegenüberliegendem Winkel kennst, plus eine weitere Größe.
$$ \\frac{a}{\\sin(\\alpha)} = \\frac{b}{\\sin(\\beta)} = \\frac{c}{\\sin(\\gamma)} $$

**Der [Kosinussatz](internal:Kosinussatz):**
Verwende ihn, wenn du **drei Seiten** kennst (SSS) oder **zwei Seiten und den eingeschlossenen Winkel** (SWS). Er ist der verallgemeinerte Pythagoras.
$$ c^2 = a^2 + b^2 - 2ab \\cdot \\cos(\\gamma) $$
(Gilt analog für $a^2$ und $b^2$)

---

### 4. Anwendungsstrategie für Prüfungen
1.  Skizze machen! Immer!
2.  Ist ein rechter Winkel da?
    *   JA $\\rightarrow$ Pythagoras, Sin/Cos/Tan Definitionen.
    *   NEIN $\\rightarrow$ Sinussatz oder Kosinussatz.
3.  Sinussatz prüfen: Habe ich ein "volles Paar" (Seite + gegenüberliegender Winkel)?
    *   JA $\\rightarrow$ Sinussatz.
    *   NEIN $\\rightarrow$ Kosinussatz.`,
  
  teacherGap: `### Typische Fehlerquellen
*   **Taschenrechner-Modus:** Stelle sicher, dass dein Rechner auf **DEG** (Degree/Gradmaß) steht und nicht auf RAD (Bogenmaß), sonst sind alle Ergebnisse falsch!
*   **Sinussatz-Falle:** Der Sinus ist im Bereich $0^\\circ$ bis $180^\\circ$ nicht eindeutig. $\\sin(30^\\circ) = 0.5$, aber $\\sin(150^\\circ)$ ist auch $0.5$. Wenn du einen stumpfen Winkel suchst, musst du aufpassen. Der Kosinussatz ist hier sicherer, da er zwischen $0^\\circ$ und $180^\\circ$ eindeutig ist.
*   **Rundungsfehler:** Runde erst ganz am Ende! Rechne mit den Werten im Speicher weiter.

### So merkst du es dir wirklich
Stell dir den **Kosinussatz** als "Pythagoras mit Korrekturterm" vor.
Wenn $\\gamma = 90^\\circ$ ist, dann ist $\\cos(90^\\circ) = 0$.
Der Term $- 2ab \\cos(\\gamma)$ fällt weg.
Es bleibt: $c^2 = a^2 + b^2$.
Der Kosinussatz *ist* also der Pythagoras, nur angepasst für schiefe Winkel.`,

  participationBoost: `*   **Historisch:** Die Trigonometrie wurde ursprünglich für die Astronomie entwickelt (Hipparchos von Nicäa), um Abstände zwischen Sternen und Planeten zu berechnen, lange bevor sie in der Landvermessung genutzt wurde.
*   **Frage für den Lehrer:** "Warum nutzen wir in der Schule meist das Gradmaß, obwohl das Bogenmaß in der Analysis (Ableitung von Sinus) viel natürlicher ist?" (Antwort: Historische Konvention vs. mathematische Notwendigkeit).`,

  exercises: [
    {
      difficulty: "Leicht",
      question: "Ein rechtwinkliges Dreieck hat die Hypotenuse $c = 10$ cm und den Winkel $\\alpha = 30^\\circ$. Berechne die Gegenkathete $a$.",
      solution: "Gegeben: Hypotenuse $c=10$, $\\alpha=30^\\circ$. Gesucht: Gegenkathete $a$.\nFormel: $\\sin(\\alpha) = \\frac{a}{c}$.\nUmstellen nach $a$: $a = c \\cdot \\sin(\\alpha)$.\nEinsetzen: $a = 10 \\cdot \\sin(30^\\circ)$.\nDa $\\sin(30^\\circ) = 0.5$, ist $a = 10 \\cdot 0.5 = 5$ cm."
    },
    {
      difficulty: "Leicht",
      question: "Berechne $\\beta$ in einem rechtwinkligen Dreieck, wenn Ankathete $b=4$ und Gegenkathete $a=4$ ist.",
      solution: "Gegeben: Ankathete und Gegenkathete.\nFormel: $\\tan(\\beta) = \\frac{\\text{Gegenkathete}}{\\text{Ankathete}} = \\frac{4}{4} = 1$.\nGesucht: Winkel $\\beta = \\tan^{-1}(1)$.\nErgebnis: $\\beta = 45^\\circ$."
    },
    {
      difficulty: "Leicht",
      question: "Wann darfst du den Sinussatz verwenden?",
      solution: "Nur in allgemeinen (nicht unbedingt rechtwinkligen) Dreiecken, wenn du ein Verhältnis aus einer Seite und ihrem gegenüberliegenden Winkel kennst, sowie eine weitere Größe."
    },
    {
      difficulty: "Mittel",
      question: "Allgemeines Dreieck: $a = 8$ cm, $b = 6$ cm, $\\gamma = 60^\\circ$. Berechne Seite $c$.",
      solution: "Gegeben: S-W-S (Zwei Seiten, eingeschlossener Winkel).\nLösungsweg: Kosinussatz.\nFormel: $c^2 = a^2 + b^2 - 2ab \\cdot \\cos(\\gamma)$.\nEinsetzen: $c^2 = 8^2 + 6^2 - 2 \\cdot 8 \\cdot 6 \\cdot \\cos(60^\\circ)$.\nRechnung: $c^2 = 64 + 36 - 96 \\cdot 0.5 = 100 - 48 = 52$.\nWurzel ziehen: $c = \\sqrt{52} \\approx 7.21$ cm."
    },
    {
      difficulty: "Mittel",
      question: "Ein Turm wirft einen Schatten von 20m Länge, wenn die Sonne in einem Winkel von $50^\\circ$ steht. Wie hoch ist der Turm?",
      solution: "Skizze: Ein rechtwinkliges Dreieck. Turmhöhe $h$ ist Gegenkathete zum Sonnenwinkel. Schatten $s=20$ ist Ankathete.\nFormel: $\\tan(50^\\circ) = \\frac{h}{20}$.\nUmstellen: $h = 20 \\cdot \\tan(50^\\circ)$.\nRechnung: $h \\approx 20 \\cdot 1.19 = 23.8$ Meter."
    },
    {
      difficulty: "Mittel",
      question: "Bestimme alle Winkel im Dreieck mit $a=3$, $b=4$, $c=5$.",
      solution: "Erkenntnis: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. Das Dreieck ist rechtwinklig (Satz des Pythagoras-Umkehrung)!\n$\\gamma = 90^\\circ$ (gegenüber der längsten Seite).\nFür $\\alpha$: $\\sin(\\alpha) = \\frac{3}{5} = 0.6 \\rightarrow \\alpha \\approx 36.87^\\circ$.\nFür $\\beta$: $180^\\circ - 90^\\circ - 36.87^\\circ = 53.13^\\circ$."
    },
    {
      difficulty: "Mittel",
      question: "Vereinfache den Ausdruck: $\\frac{\\sin(\\alpha)}{\\tan(\\alpha)}$.",
      solution: "Ersetze $\\tan(\\alpha)$ durch $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$.\nTerm: $\\frac{\\sin(\\alpha)}{\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}}$.\nMit Kehrwert multiplizieren: $\\sin(\\alpha) \\cdot \\frac{\\cos(\\alpha)}{\\sin(\\alpha)}$.\nSinus kürzt sich weg. Ergebnis: $\\cos(\\alpha)$."
    },
    {
      difficulty: "Schwer",
      question: "Zwei Schiffe verlassen einen Hafen gleichzeitig. Schiff A fährt mit 20 km/h Kurs Nord. Schiff B fährt mit 30 km/h Kurs Nord-Ost ($45^\\circ$). Wie weit sind sie nach 2 Stunden voneinander entfernt?",
      solution: "1. Strecken berechnen: Schiff A: $s_A = 20 \\cdot 2 = 40$ km. Schiff B: $s_B = 30 \\cdot 2 = 60$ km.\n2. Dreieck modellieren: Seite $a=40$, Seite $b=60$. Winkel zwischen Nord und Nord-Ost ist $45^\\circ$.\n3. Gesucht: Seite $c$ (Abstand) gegenüber dem Winkel.\n4. Kosinussatz: $c^2 = 40^2 + 60^2 - 2 \\cdot 40 \\cdot 60 \\cdot \\cos(45^\\circ)$.\n5. $c^2 = 1600 + 3600 - 4800 \\cdot 0.707$.\n6. $c^2 = 5200 - 3393.6 = 1806.4$.\n7. $c \\approx 42.5$ km."
    },
    {
      difficulty: "Schwer",
      question: "Beweise den Sinussatz für ein spitzwinkliges Dreieck unter Verwendung der Höhe $h_c$.",
      solution: "1. Zeichne die Höhe $h_c$ ein. Sie teilt das Dreieck in zwei rechtwinklige Teildreiecke.\n2. Im linken Dreieck gilt: $\\sin(\\alpha) = \\frac{h_c}{b} \\rightarrow h_c = b \\cdot \\sin(\\alpha)$.\n3. Im rechten Dreieck gilt: $\\sin(\\beta) = \\frac{h_c}{a} \\rightarrow h_c = a \\cdot \\sin(\\beta)$.\n4. Gleichsetzen: $b \\cdot \\sin(\\alpha) = a \\cdot \\sin(\\beta)$.\n5. Dividiere durch $\\sin(\\alpha) \\cdot \\sin(\\beta)$: $\\frac{b}{\\sin(\\beta)} = \\frac{a}{\\sin(\\alpha)}$. q.e.d."
    },
    {
      difficulty: "Schwer",
      question: "Analysiere die Funktion $f(x) = 2 \\sin(3x - \\pi) + 1$. Bestimme Amplitude, Periode und Phasenverschiebung.",
      solution: "*   **Amplitude:** Der Faktor vor dem Sinus ist 2. $|a|=2$.\n*   **Periode:** Der Faktor vor dem $x$ ist $b=3$. Periode $p = \\frac{2\\pi}{b} = \\frac{2\\pi}{3}$.\n*   **Verschiebung:** Schreibe um zu $2 \\sin(3(x - \\frac{\\pi}{3})) + 1$. Die Verschiebung in x-Richtung ist $+\\frac{\\pi}{3}$ (nach rechts).\n*   **y-Verschiebung:** $+1$ (nach oben)."
    }
  ]
};
