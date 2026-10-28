// Bahasa Indonesia — seluruh halaman dalam sekali pandang.
import type { UI } from './en';

export default {
	meta: {
		title: 'Concat — Pengganti CapCut yang gratis dan open source.',
		description:
			'Concat adalah semua yang Anda gunakan di CapCut, tanpa watermark, paywall, atau langganan. Native, offline, open source, untuk macOS, Windows, dan Linux.',
	},

	nav: {
		features: 'Fitur',
		how: 'Cara kerja',
		download: 'Unduh',
		downloadCta: 'Unduh',
	},

	hero: {
		badge: 'Beta sudah tersedia untuk semua platform',
		heading: 'Pengganti CapCut yang gratis dan open source.',
		sub: 'Penyuntingan multi-track, takarir di perangkat, dan ekspor 4K — tanpa watermark, tanpa akun, tanpa cloud.',
		download: 'Unduh Concat',
		source: 'Lihat kode sumber',
		screenshotAlt: 'Editor Concat: bin media, pratinjau, panel filter, dan timeline multi-track',
	},

	stats: {
		stars: 'Bintang GitHub',
		forks: 'Fork',
		languages: 'Bahasa',
		license: 'Lisensi',
	},

	features: {
		label: 'Fitur',
		heading: 'Editor yang Anda harapkan. Tanpa tali pengikat.',
		timeline: {
			title: 'Timeline multi-track',
			body: 'Video, audio, takarir, dan judul di track masing-masing, dan beberapa timeline per proyek bila satu tidak cukup.',
			timeline: 'Timeline 1',
			captions: 'Takarir',
			voice: 'Suara',
			video: 'Video',
		},
		captions: {
			title: 'Takarir otomatis, di perangkat',
			body: 'Pengenalan ucapan berjalan di perangkat keras Anda sendiri. Audio Anda tidak pernah keluar dari mesin.',
			transcribing: 'mentranskripsi lokal',
			line: 'Perhatikan.',
		},
		cutting: {
			title: 'Perkakas pemotongan',
			body: 'Pisah, pangkas, gabungkan, transisi, dan kontrol kecepatan, dengan keyframe pada posisi, skala, rotasi, dan opasitas.',
			tools: [
				{ label: 'Pisah' },
				{ label: 'Pangkas' },
				{ label: 'Gabung' },
				{ label: 'Kecepatan' },
			],
		},
		voice: {
			title: 'Ucapan dan filter suara',
			body: 'Teks-ke-ucapan gratis dan lokal, plus filter suara, nada, dan ruang untuk membersihkan atau mempermainkan suara Anda.',
			voices: ['Manis', 'Berat', 'Tupai', 'Robot'],
			amount: 'jumlah 30%',
			pitch: 'nada otomatis',
		},
		titles: {
			title: 'Judul dan templat',
			body: 'Teks bergaya langsung tersedia. Buat satu suntingan sekali, simpan sebagai templat, pakai lagi untuk video berikutnya.',
		},
		native: {
			title: 'Native di mana-mana',
			body: 'Mesin Rust dan antarmuka Slint, satu basis kode untuk macOS, Windows, dan Linux. Ekspor H.264 4K tanpa batas.',
			badge: 'Mesin Rust · UI native · Tanpa runtime yang harus dipasang',
		},
	},

	how: {
		label: 'Cara kerja',
		heading: 'Tiga langkah. Tanpa pendaftaran di antaranya.',
		steps: [
			{
				title: 'Impor',
				body: 'Jatuhkan video, audio, dan gambar. Tanpa akun, tanpa unggahan.',
			},
			{
				title: 'Potong',
				body: 'Pisahkan, pangkas, beri takarir, dan saring di sebanyak track yang Anda butuhkan.',
			},
			{
				title: 'Ekspor',
				body: 'MP4 H.264 dengan rasio proyeknya sendiri, hingga 4K, tanpa watermark.',
			},
		],
		promises: [
			{
				title: 'Berjalan offline',
				body: 'Takarir, ucapan, pemotongan latar, dan ekspor semuanya berjalan di mesin Anda.',
			},
			{
				title: 'Tanpa akun',
				body: 'Pasang dan mulailah memotong. Tidak ada tempat untuk masuk.',
			},
			{
				title: 'Tanpa watermark',
				body: 'Satu build, semua fitur, tidak ada yang di balik paywall.',
			},
			{
				title: 'Open source',
				body: 'AGPL-3.0. Baca, fork, kirim.',
			},
		],
	},

	download: {
		label: 'Unduh',
		selfContained: 'Build yang berdiri sendiri. Masing-masing berjalan tanpa memasang apa pun lagi.',
		released: 'Dirilis',
		releaseNotes: 'catatan rilis',
		tested: 'Teruji',
		untested: 'Terbangun, belum teruji',
		verify: 'Verifikasi dan nightly',
		checksums: 'Setiap rilis menyertakan checksum',
		nightly: 'Nightly',
		mac: {
			title: 'Build macOS tidak ditandatangani',
			body: 'Hapus tanda karantina sekali, setelah menyalin aplikasi ke Aplikasi:',
		},
		bugs: {
			title: 'Ada yang rusak?',
			body: 'Ini beta, dan laporan bug adalah kontribusi paling berguna saat ini.',
			or: 'atau',
			openIssue: 'Buka issue',
			askDiscord: 'tanya di Discord',
		},
	},

	footer: {
		releases: 'Rilis',
		contributing: 'Berkontribusi',
		roadmap: 'Peta jalan',
		issues: 'Issue',
		projectBy: 'Proyek oleh',
	},

	picker: {
		open: 'Ganti bahasa',
		title: 'Baca halaman ini dalam bahasa Anda',
		subtitle: 'Situs ini tersedia dalam {count} bahasa.',
		current: 'Saat ini',
		english: 'English',
		stay: 'Tetap dalam {language}',
		switchToEnglish: 'Beralih ke bahasa Inggris',
		all: 'Semua bahasa',
		close: 'Tutup',
	},
} satisfies UI;
