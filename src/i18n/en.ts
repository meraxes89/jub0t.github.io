// The English copy, whole: the source of truth every other dictionary in
// this folder is checked against at build time (`satisfies UI`). A string
// moved here is a string the whole site speaks with one voice — meta tags,
// navigation, hero, cards, download shelf, footer and the language picker.
const en = {
	meta: {
		title: 'Concat — The free, open-source CapCut replacement.',
		description:
			'Concat is everything you use CapCut for, without the watermarks, paywalls or subscriptions. Native, offline, open source, for macOS, Windows and Linux.',
	},

	nav: {
		features: 'Features',
		how: 'How it works',
		download: 'Download',
		downloadCta: 'Download',
	},

	hero: {
		badge: 'Beta is out for every platform',
		heading: 'The free, open-source CapCut replacement.',
		sub: 'Multi-track editing, on-device captions and 4K export, with no watermarks, no account and no cloud.',
		download: 'Download Concat',
		source: 'View source',
		screenshotAlt: 'The Concat editor: media bin, preview, filters panel and a multi-track timeline',
	},

	stats: {
		stars: 'GitHub stars',
		forks: 'Forks',
		languages: 'Languages',
		license: 'License',
	},

	features: {
		label: 'Features',
		heading: 'The editor you expect. None of the strings.',
		timeline: {
			title: 'Multi-track timelines',
			body: 'Video, audio, captions and titles on their own tracks, and several timelines per project when one isn’t enough.',
			timeline: 'Timeline 1',
			captions: 'Captions',
			voice: 'Voice',
			video: 'Video',
		},
		captions: {
			title: 'Auto-captions, on device',
			body: 'Speech recognition runs on your own hardware. Your audio never leaves the machine.',
			transcribing: 'transcribing locally',
			line: 'Pay attention.',
		},
		cutting: {
			title: 'The cutting toolkit',
			body: 'Split, trim, merge, transitions and speed control, with keyframes on position, scale, rotation and opacity.',
			tools: [
				{ label: 'Split' },
				{ label: 'Trim' },
				{ label: 'Merge' },
				{ label: 'Speed' },
			],
		},
		voice: {
			title: 'Speech and voice filters',
			body: 'Free, local text-to-speech, plus voice, tone and space filters for cleaning up or playing with your sound.',
			voices: ['Sweet', 'Deep', 'Chipmunk', 'Robot'],
			amount: 'amount 30%',
			pitch: 'pitch auto',
		},
		titles: {
			title: 'Titles and templates',
			body: 'Styled text out of the box. Build an edit once, save it as a template, reuse it for the next video.',
		},
		native: {
			title: 'Native everywhere',
			body: 'A Rust engine and a Slint interface, one codebase for macOS, Windows and Linux. 4K H.264 export with no cap.',
			badge: 'Rust engine · Native UI · No runtime to install',
		},
	},

	how: {
		label: 'How it works',
		heading: 'Three steps. No sign-up in between.',
		steps: [
			{
				title: 'Import',
				body: 'Drop in video, audio and images. No account, no upload.',
			},
			{
				title: 'Cut',
				body: 'Split, trim, caption and filter across as many tracks as you need.',
			},
			{
				title: 'Export',
				body: 'H.264 MP4 at the project’s own aspect, up to 4K, no watermark.',
			},
		],
		promises: [
			{
				title: 'Works offline',
				body: 'Captions, speech, cutout and export all run on your machine.',
			},
			{
				title: 'No account',
				body: 'Install it and start cutting. Nothing to sign in to.',
			},
			{
				title: 'No watermark',
				body: 'One build, every feature, nothing behind a paywall.',
			},
			{
				title: 'Open source',
				body: 'AGPL-3.0. Read it, fork it, ship it.',
			},
		],
	},

	download: {
		label: 'Download',
		selfContained: 'Self-contained builds. Each one runs with nothing else installed.',
		released: 'Released',
		releaseNotes: 'release notes',
		tested: 'Tested',
		untested: 'Builds, untested',
		verify: 'Verify and nightlies',
		checksums: 'Every release ships checksums',
		nightly: 'Nightly',
		mac: {
			title: 'macOS builds are unsigned',
			body: 'Clear the quarantine flag once after copying the app to Applications:',
		},
		bugs: {
			title: 'Something broke?',
			body: 'It’s a beta, and a bug report is the most useful contribution right now.',
			or: 'or',
			openIssue: 'Open an issue',
			askDiscord: 'ask on Discord',
		},
	},

	footer: {
		releases: 'Releases',
		contributing: 'Contributing',
		roadmap: 'Roadmap',
		issues: 'Issues',
		projectBy: 'A project by',
	},

	picker: {
		open: 'Change language',
		title: 'Read this page in your language',
		subtitle: 'This site is available in {count} languages.',
		current: 'Current',
		english: 'English',
		stay: 'Stay in {language}',
		switchToEnglish: 'Switch to English',
		all: 'All languages',
		close: 'Close',
	},
};

export default en;

/** The shape of a dictionary: this file's own, as a type. */
export type UI = typeof en;
