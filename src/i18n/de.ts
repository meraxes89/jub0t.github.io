// Deutsch — die ganze Seite auf einen Blick.
import type { UI } from './en';

export default {
	meta: {
		title: 'Concat — Die freie, quelloffene CapCut-Alternative.',
		description:
			'Concat ist alles, wofür du CapCut nutzt — ohne Wasserzeichen, Paywalls oder Abos. Native, offline, quelloffen, für macOS, Windows und Linux.',
	},

	nav: {
		features: 'Funktionen',
		how: 'So funktioniert es',
		download: 'Herunterladen',
		downloadCta: 'Herunterladen',
	},

	hero: {
		badge: 'Die Beta ist für jede Plattform da',
		heading: 'Die freie, quelloffene CapCut-Alternative.',
		sub: 'Mehrspuriger Schnitt, Untertitel auf dem Gerät und 4K-Export — ohne Wasserzeichen, ohne Konto, ohne Cloud.',
		download: 'Concat herunterladen',
		source: 'Quellcode ansehen',
		screenshotAlt: 'Der Concat-Editor: Medienbereich, Vorschau, Filterpanel und Mehrspur-Timeline',
	},

	stats: {
		stars: 'GitHub-Sterne',
		forks: 'Forks',
		languages: 'Sprachen',
		license: 'Lizenz',
	},

	features: {
		label: 'Funktionen',
		heading: 'Der Editor, den du erwartest. Ohne die Fesseln.',
		timeline: {
			title: 'Mehrspur-Timelines',
			body: 'Video, Audio, Untertitel und Titel auf eigenen Spuren — und mehrere Timelines pro Projekt, wenn eine nicht reicht.',
			timeline: 'Timeline 1',
			captions: 'Untertitel',
			voice: 'Stimme',
			video: 'Video',
		},
		captions: {
			title: 'Auto-Untertitel, auf dem Gerät',
			body: 'Spracherkennung läuft auf deiner eigenen Hardware. Dein Audio verlässt die Maschine nie.',
			transcribing: 'lokal transkribiert',
			line: 'Pass auf.',
		},
		cutting: {
			title: 'Das Schnitt-Werkzeugkasten',
			body: 'Teilen, trimmen, zusammenfügen, Übergänge und Geschwindigkeit, mit Keyframes für Position, Skalierung, Rotation und Deckkraft.',
			tools: [
				{ label: 'Teilen' },
				{ label: 'Trimmen' },
				{ label: 'Zusammenfügen' },
				{ label: 'Tempo' },
			],
		},
		voice: {
			title: 'Sprache und Stimmfilter',
			body: 'Kostenlose, lokale Text-zu-Sprache, dazu Stimm-, Ton- und Raumfilter, um deinen Klang zu säubern oder zu verspielen.',
			voices: ['Süß', 'Tief', 'Chipmunk', 'Roboter'],
			amount: 'Anteil 30 %',
			pitch: 'Tonhöhe auto',
		},
		titles: {
			title: 'Titel und Vorlagen',
			body: 'Gestalteter Text ab Werk. Baue einen Schnitt einmal, speichere ihn als Vorlage, nutze ihn für das nächste Video wieder.',
		},
		native: {
			title: 'Überall nativ',
			body: 'Eine Rust-Engine und eine Slint-Oberfläche, eine Codebasis für macOS, Windows und Linux. 4K-H.264-Export ohne Deckel.',
			badge: 'Rust-Engine · Native UI · Keine Runtime nötig',
		},
	},

	how: {
		label: 'So funktioniert es',
		heading: 'Drei Schritte. Keine Anmeldung dazwischen.',
		steps: [
			{
				title: 'Importieren',
				body: 'Video, Audio und Bilder ablegen. Kein Konto, kein Upload.',
			},
			{
				title: 'Schneiden',
				body: 'Teile, trimme, untertitle und filtere auf so vielen Spuren, wie du brauchst.',
			},
			{
				title: 'Exportieren',
				body: 'H.264-MP4 im Seitenverhältnis des Projekts, bis 4K, ohne Wasserzeichen.',
			},
		],
		promises: [
			{
				title: 'Funktioniert offline',
				body: 'Untertitel, Sprache, Freistellen und Export laufen auf deiner Maschine.',
			},
			{
				title: 'Ohne Konto',
				body: 'Installieren und losschneiden. Nirgends einloggen.',
			},
			{
				title: 'Ohne Wasserzeichen',
				body: 'Ein Build, alle Funktionen, nichts hinter einer Paywall.',
			},
			{
				title: 'Quelloffen',
				body: 'AGPL-3.0. Lies es, forke es, verschiffe es.',
			},
		],
	},

	download: {
		label: 'Herunterladen',
		selfContained: 'Eigenständige Builds. Jeder läuft, ohne dass etwas anderes installiert sein muss.',
		released: 'Veröffentlicht',
		releaseNotes: 'Release-Notizen',
		tested: 'Getestet',
		untested: 'Baut, ungetestet',
		verify: 'Prüfen und Nightlies',
		checksums: 'Jedes Release liefert Prüfsummen mit',
		nightly: 'Nightly',
		mac: {
			title: 'macOS-Builds sind unsigniert',
			body: 'Entferne das Quarantäne-Flag einmal, nachdem du die App nach Programme kopiert hast:',
		},
		bugs: {
			title: 'Etwas kaputtgegangen?',
			body: 'Es ist eine Beta, und ein Fehlerbericht ist gerade der nützlichste Beitrag.',
			or: 'oder',
			openIssue: 'Issue öffnen',
			askDiscord: 'frag im Discord',
		},
	},

	footer: {
		releases: 'Releases',
		contributing: 'Mitwirken',
		roadmap: 'Roadmap',
		issues: 'Issues',
		projectBy: 'Ein Projekt von',
	},

	picker: {
		open: 'Sprache wechseln',
		title: 'Lies diese Seite in deiner Sprache',
		subtitle: 'Diese Seite gibt es in {count} Sprachen.',
		current: 'Aktuell',
		english: 'English',
		stay: 'Bei {language} bleiben',
		switchToEnglish: 'Zu Englisch wechseln',
		all: 'Alle Sprachen',
		close: 'Schließen',
	},
} satisfies UI;
