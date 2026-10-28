// 日本語 — ページ全体をひと目で。
import type { UI } from './en';

export default {
	meta: {
		title: 'Concat — 無料でオープンソースのCapCut代替。',
		description:
			'Concatは、CapCutでやっていることをすべてこなします。ウォーターマークもペイウォールもサブスクリプションもなし。macOS・Windows・Linuxで動くネイティブ・オフライン・オープンソース。',
	},

	nav: {
		features: '機能',
		how: '仕組み',
		download: 'ダウンロード',
		downloadCta: 'ダウンロード',
	},

	hero: {
		badge: 'ベータ版が全プラットフォームで公開中',
		heading: '無料でオープンソースのCapCut代替。',
		sub: 'マルチトラック編集、端末上での字幕生成、4K書き出し。ウォーターマークもアカウントもクラウドもありません。',
		download: 'Concatをダウンロード',
		source: 'ソースを見る',
		screenshotAlt: 'Concatエディター：メディアビン、プレビュー、フィルターパネル、マルチトラックタイムライン',
	},

	stats: {
		stars: 'GitHubスター',
		forks: 'フォーク',
		languages: '対応言語',
		license: 'ライセンス',
	},

	features: {
		label: '機能',
		heading: '期待通りのエディター。鎖はなし。',
		timeline: {
			title: 'マルチトラックタイムライン',
			body: '映像・音声・字幕・タイトルがそれぞれ専用トラックに。1本では足りないときは、プロジェクトごとに複数のタイムラインも。',
			timeline: 'タイムライン 1',
			captions: '字幕',
			voice: 'ボイス',
			video: '映像',
		},
		captions: {
			title: '自動字幕、端末上で',
			body: '音声認識はあなたのハードウェアで動きます。音声がマシンの外に出ることはありません。',
			transcribing: 'ローカルで文字起こし中',
			line: '注意してください。',
		},
		cutting: {
			title: 'カッティングツールキット',
			body: '分割・トリミング・結合・トランジション・速度制御。位置・スケール・回転・不透明度にはキーフレーム。',
			tools: [
				{ label: '分割' },
				{ label: 'トリム' },
				{ label: '結合' },
				{ label: '速度' },
			],
		},
		voice: {
			title: 'スピーチとボイスフィルター',
			body: '無料のローカル音声合成に、声・トーン・空間のフィルター。音を整えるにも、遊ぶにも。',
			voices: ['スイート', 'ロウ', 'チップマンク', 'ロボット'],
			amount: '量 30%',
			pitch: 'ピッチ 自動',
		},
		titles: {
			title: 'タイトルとテンプレート',
			body: '最初からスタイリッシュなテキスト。一度編集を作ったらテンプレートとして保存し、次の動画で再利用。',
		},
		native: {
			title: 'どこでもネイティブ',
			body: 'RustエンジンとSlintインターフェース、macOS・Windows・Linuxを1つのコードベースで。4K H.264書き出しに上限なし。',
			badge: 'Rustエンジン · ネイティブUI · 追加ランタイム不要',
		},
	},

	how: {
		label: '仕組み',
		heading: '3ステップ。その間に登録はありません。',
		steps: [
			{
				title: '読み込む',
				body: '映像・音声・画像をドロップ。アカウントもアップロードも不要。',
			},
			{
				title: '切る',
				body: '必要なだけトラックを増やして、分割・トリミング・字幕・フィルター。',
			},
			{
				title: '書き出す',
				body: 'プロジェクトのアスペクト比のままH.264 MP4、最大4K、ウォーターマークなし。',
			},
		],
		promises: [
			{
				title: 'オフラインで動く',
				body: '字幕・音声・切り抜き・書き出しはすべて自分のマシンで。',
			},
			{
				title: 'アカウント不要',
				body: 'インストールしたらすぐ編集開始。ログインする場所がありません。',
			},
			{
				title: 'ウォーターマークなし',
				body: '1つのビルドに全機能。ペイウォールの後ろには何もありません。',
			},
			{
				title: 'オープンソース',
				body: 'AGPL-3.0。読んで、フォークして、公開してください。',
			},
		],
	},

	download: {
		label: 'ダウンロード',
		selfContained: '自己完結型ビルド。他に何もインストールせずに動きます。',
		released: '公開日',
		releaseNotes: 'リリースノート',
		tested: 'テスト済み',
		untested: 'ビルド可、未テスト',
		verify: '検証とナイトリー',
		checksums: '各リリースにチェックサムが付属',
		nightly: 'ナイトリー',
		mac: {
			title: 'macOSビルドは未署名です',
			body: 'アプリを「アプリケーション」にコピーしたら、検疫フラグを一度だけ外してください：',
		},
		bugs: {
			title: '何か壊れました？',
			body: 'ベータ版なので、今いちばん役立つ貢献はバグ報告です。',
			or: 'または',
			openIssue: 'issueを開く',
			askDiscord: 'Discordで聞く',
		},
	},

	footer: {
		releases: 'リリース',
		contributing: 'コントリビュート',
		roadmap: 'ロードマップ',
		issues: 'issue',
		projectBy: '制作',
	},

	picker: {
		open: '言語を変更',
		title: 'このページをあなたの言語で',
		subtitle: 'このサイトは{count}言語で読めます。',
		current: '現在',
		english: 'English',
		stay: '{language}のままにする',
		switchToEnglish: '英語に切り替える',
		all: 'すべての言語',
		close: '閉じる',
	},
} satisfies UI;
