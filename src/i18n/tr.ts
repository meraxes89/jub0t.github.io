// Türkçe — sayfanın tamamı bir bakışta.
import type { UI } from './en';

export default {
	meta: {
		title: 'Concat — Ücretsiz, açık kaynak CapCut alternatifi.',
		description:
			'Concat, CapCut için kullandığınız her şey; filigran, ücret duvarı veya abonelik olmadan. macOS, Windows ve Linux için yerel, çevrimdışı, açık kaynak.',
	},

	nav: {
		features: 'Özellikler',
		how: 'Nasıl çalışır',
		download: 'İndir',
		downloadCta: 'İndir',
	},

	hero: {
		badge: 'Beta her platformda çıktı',
		heading: 'Ücretsiz, açık kaynak CapCut alternatifi.',
		sub: 'Çok parçalı kurgu, cihazda altyazı ve 4K dışa aktarma; filigran yok, hesap yok, bulut yok.',
		download: 'Concat’i indir',
		source: 'Kaynak koda bak',
		screenshotAlt: 'Concat editörü: ortam kutusu, önizleme, filtre paneli ve çok parçalı zaman çizelgesi',
	},

	stats: {
		stars: 'GitHub yıldızı',
		forks: 'Fork',
		languages: 'Diller',
		license: 'Lisans',
	},

	features: {
		label: 'Özellikler',
		heading: 'Beklediğiniz editör. Zincirsiz.',
		timeline: {
			title: 'Çok parçalı zaman çizelgeleri',
			body: 'Video, ses, altyazı ve başlıklar kendi parçalarında; biri yetmezse proje başına birden çok zaman çizelgesi.',
			timeline: 'Zaman çizelgesi 1',
			captions: 'Altyazı',
			voice: 'Ses',
			video: 'Video',
		},
		captions: {
			title: 'Otomatik altyazı, cihazda',
			body: 'Konuşma tanıma kendi donanımınızda çalışır. Sesiniz hiçbir zaman makineden çıkmaz.',
			transcribing: 'yerel olarak yazılıyor',
			line: 'Dikkat edin.',
		},
		cutting: {
			title: 'Kurgu araç kutusu',
			body: 'Bölme, kırpma, birleştirme, geçişler ve hız denetimi; konum, ölçek, döndürme ve saydamlık için anahtar karelerle.',
			tools: [
				{ label: 'Böl' },
				{ label: 'Kırp' },
				{ label: 'Birleştir' },
				{ label: 'Hız' },
			],
		},
		voice: {
			title: 'Konuşma ve ses filtreleri',
			body: 'Ücretsiz, yerel metinden sese; ayrıca sesinizi temizlemek ya da oynamak için ses, ton ve alan filtreleri.',
			voices: ['Tatlı', 'Kalın', 'Sincap', 'Robot'],
			amount: 'miktar %30',
			pitch: 'ton otomatik',
		},
		titles: {
			title: 'Başlıklar ve şablonlar',
			body: 'Kutudan çıktığı gibi biçimli yazı. Bir kurguyu bir kez yapın, şablon olarak kaydedin, sonraki videoda yeniden kullanın.',
		},
		native: {
			title: 'Her yerde yerel',
			body: 'Rust motoru ve Slint arayüzü; macOS, Windows ve Linux için tek kod tabanı. Sınır olmayan 4K H.264 dışa aktarma.',
			badge: 'Rust motoru · Yerel arayüz · Kurulum gerektiren çalışma zamanı yok',
		},
	},

	how: {
		label: 'Nasıl çalışır',
		heading: 'Üç adım. Aralarında kayıt yok.',
		steps: [
			{
				title: 'İçe aktar',
				body: 'Video, ses ve görselleri bırakın. Hesap yok, yükleme yok.',
			},
			{
				title: 'Kes',
				body: 'İhtiyacınız kadar parçada bölün, kırpın, altyazılayın ve filtreleyin.',
			},
			{
				title: 'Dışa aktar',
				body: 'Projenin kendi oranında H.264 MP4, 4K’ya kadar, filigransız.',
			},
		],
		promises: [
			{
				title: 'Çevrimdışı çalışır',
				body: 'Altyazı, konuşma, arka plan kesme ve dışa aktarma makinenizde çalışır.',
			},
			{
				title: 'Hesap yok',
				body: 'Kurun ve kesmeye başlayın. Giriş yapılacak bir yer yok.',
			},
			{
				title: 'Filigran yok',
				body: 'Tek derleme, tüm özellikler, ücret duvarının arkasında hiçbir şey yok.',
			},
			{
				title: 'Açık kaynak',
				body: 'AGPL-3.0. Okuyun, fork’layın, yayınlayın.',
			},
		],
	},

	download: {
		label: 'İndir',
		selfContained: 'Kendi başına çalışan derlemeler. Her biri başka hiçbir şey kurulmadan çalışır.',
		released: 'Yayınlandı',
		releaseNotes: 'sürüm notları',
		tested: 'Test edildi',
		untested: 'Derleniyor, test edilmedi',
		verify: 'Doğrula ve gece derlemeleri',
		checksums: 'Her sürüm sağlama toplamlarıyla gelir',
		nightly: 'Nightly',
		mac: {
			title: 'macOS derlemeleri imzasız',
			body: 'Uygulamayı Uygulamalar klasörüne kopyaladıktan sonra karantina bayrağını bir kez kaldırın:',
		},
		bugs: {
			title: 'Bir şey mi bozuldu?',
			body: 'Bu bir beta ve şu an en katkı bir hata raporu.',
			or: 'veya',
			openIssue: 'Sorun açın',
			askDiscord: 'Discord’da sorun',
		},
	},

	footer: {
		releases: 'Sürümler',
		contributing: 'Katkıda bulunma',
		roadmap: 'Yol haritası',
		issues: 'Sorunlar',
		projectBy: 'Geliştiren',
	},

	picker: {
		open: 'Dili değiştir',
		title: 'Bu sayfayı kendi dilinizde okuyun',
		subtitle: 'Bu site {count} dilde mevcut.',
		current: 'Şu anki',
		english: 'English',
		stay: '{language} dilinde kal',
		switchToEnglish: 'İngilizceye geç',
		all: 'Tüm diller',
		close: 'Kapat',
	},
} satisfies UI;
