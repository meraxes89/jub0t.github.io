// Français — toute la page d’un coup d’œil.
import type { UI } from './en';

export default {
	meta: {
		title: 'Concat — L’alternative libre et open source à CapCut.',
		description:
			'Concat est tout ce que vous faites avec CapCut, sans filigrane, sans paywall ni abonnement. Natif, hors ligne, open source, pour macOS, Windows et Linux.',
	},

	nav: {
		features: 'Fonctionnalités',
		how: 'Comment ça marche',
		download: 'Télécharger',
		downloadCta: 'Télécharger',
	},

	hero: {
		badge: 'La bêta est disponible sur toutes les plateformes',
		heading: 'L’alternative libre et open source à CapCut.',
		sub: 'Montage multipiste, sous-titres sur l’appareil et export 4K, sans filigrane, sans compte et sans cloud.',
		download: 'Télécharger Concat',
		source: 'Voir le code source',
		screenshotAlt: 'L’éditeur Concat : bacs médias, aperçu, panneau de filtres et timeline multipiste',
	},

	stats: {
		stars: 'Étoiles GitHub',
		forks: 'Forks',
		languages: 'Langues',
		license: 'Licence',
	},

	features: {
		label: 'Fonctionnalités',
		heading: 'L’éditeur que vous attendiez. Sans les chaînes.',
		timeline: {
			title: 'Timelines multipistes',
			body: 'Vidéo, audio, sous-titres et titres sur leurs propres pistes, et plusieurs timelines par projet quand une ne suffit pas.',
			timeline: 'Timeline 1',
			captions: 'Sous-titres',
			voice: 'Voix',
			video: 'Vidéo',
		},
		captions: {
			title: 'Sous-titres automatiques, sur l’appareil',
			body: 'La reconnaissance vocale tourne sur votre propre machine. Votre audio ne quitte jamais l’ordinateur.',
			transcribing: 'transcription en local',
			line: 'Faites attention.',
		},
		cutting: {
			title: 'La boîte à outils du montage',
			body: 'Couper, rogner, fusionner, transitions et contrôle de vitesse, avec des images clés sur position, échelle, rotation et opacité.',
			tools: [
				{ label: 'Couper' },
				{ label: 'Rogner' },
				{ label: 'Fusionner' },
				{ label: 'Vitesse' },
			],
		},
		voice: {
			title: 'Parole et filtres de voix',
			body: 'Synthèse vocale gratuite et locale, plus des filtres de voix, de ton et d’espace pour nettoyer ou jouer avec votre son.',
			voices: ['Douce', 'Grave', 'Chipmunk', 'Robot'],
			amount: 'quantité 30 %',
			pitch: 'ton auto',
		},
		titles: {
			title: 'Titres et modèles',
			body: 'Du texte stylisé dès l’installation. Montez une séquence une fois, enregistrez-la comme modèle, réutilisez-la pour la prochaine vidéo.',
		},
		native: {
			title: 'Natif partout',
			body: 'Un moteur en Rust et une interface Slint, une seule base de code pour macOS, Windows et Linux. Export H.264 en 4K sans limite.',
			badge: 'Moteur Rust · UI native · Aucun runtime à installer',
		},
	},

	how: {
		label: 'Comment ça marche',
		heading: 'Trois étapes. Aucune inscription entre elles.',
		steps: [
			{
				title: 'Importer',
				body: 'Déposez vidéos, audios et images. Pas de compte, aucun envoi.',
			},
			{
				title: 'Couper',
				body: 'Divisez, rognez, sous-titrez et filtrez sur autant de pistes qu’il faut.',
			},
			{
				title: 'Exporter',
				body: 'MP4 H.264 au format du projet, jusqu’en 4K, sans filigrane.',
			},
		],
		promises: [
			{
				title: 'Fonctionne hors ligne',
				body: 'Sous-titres, voix, détourage et export tournent sur votre machine.',
			},
			{
				title: 'Sans compte',
				body: 'Installez et montez. Aucun service auquel se connecter.',
			},
			{
				title: 'Sans filigrane',
				body: 'Un seul build, toutes les fonctionnalités, rien derrière un paywall.',
			},
			{
				title: 'Open source',
				body: 'AGPL-3.0. Lisez-le, forkez, publiez.',
			},
		],
	},

	download: {
		label: 'Télécharger',
		selfContained: 'Des builds autonomes. Chacun fonctionne sans rien installer d’autre.',
		released: 'Publiée le',
		releaseNotes: 'notes de version',
		tested: 'Testé',
		untested: 'Compile, non testé',
		verify: 'Vérifier et nightlies',
		checksums: 'Chaque version embarque ses sommes de contrôle',
		nightly: 'Nightly',
		mac: {
			title: 'Les builds macOS ne sont pas signés',
			body: 'Retirez le marqueur de quarantaine une fois, après avoir copié l’app dans Applications :',
		},
		bugs: {
			title: 'Quelque chose a cassé ?',
			body: 'C’est une bêta, et un rapport de bug est la contribution la plus utile en ce moment.',
			or: 'ou',
			openIssue: 'Ouvrez un ticket',
			askDiscord: 'demandez sur Discord',
		},
	},

	footer: {
		releases: 'Versions',
		contributing: 'Contribuer',
		roadmap: 'Feuille de route',
		issues: 'Tickets',
		projectBy: 'Un projet de',
	},

	picker: {
		open: 'Changer de langue',
		title: 'Lisez cette page dans votre langue',
		subtitle: 'Ce site est disponible en {count} langues.',
		current: 'Actuelle',
		english: 'English',
		stay: 'Rester en {language}',
		switchToEnglish: 'Passer à l’anglais',
		all: 'Toutes les langues',
		close: 'Fermer',
	},
} satisfies UI;
