// 简体中文 — 整页一览。
import type { UI } from './en';

export default {
	meta: {
		title: 'Concat — 免费开源的 CapCut 替代品。',
		description:
			'Concat 能做你在 CapCut 里做的一切，却没有水印、付费墙或订阅。原生、离线、开源，支持 macOS、Windows 和 Linux。',
	},

	nav: {
		features: '功能',
		how: '工作原理',
		download: '下载',
		downloadCta: '下载',
	},

	hero: {
		badge: 'Beta 已登陆所有平台',
		heading: '免费开源的 CapCut 替代品。',
		sub: '多轨剪辑、设备端字幕与 4K 导出 —— 没有水印，没有账号，没有云端。',
		download: '下载 Concat',
		source: '查看源码',
		screenshotAlt: 'Concat 编辑器：媒体库、预览、滤镜面板与多轨时间线',
	},

	stats: {
		stars: 'GitHub 星标',
		forks: '复刻',
		languages: '语言',
		license: '许可证',
	},

	features: {
		label: '功能',
		heading: '你期待的编辑器。不带枷锁。',
		timeline: {
			title: '多轨时间线',
			body: '视频、音频、字幕和标题各占其轨；一条时间线不够时，一个项目可以用多条。',
			timeline: '时间线 1',
			captions: '字幕',
			voice: '语音',
			video: '视频',
		},
		captions: {
			title: '自动字幕，在设备上',
			body: '语音识别在你自己的硬件上运行。你的音频永不离开这台机器。',
			transcribing: '正在本地转写',
			line: '请注意。',
		},
		cutting: {
			title: '剪辑工具箱',
			body: '分割、修剪、合并、转场与变速控制，位置、缩放、旋转和不透明度都能打关键帧。',
			tools: [
				{ label: '分割' },
				{ label: '修剪' },
				{ label: '合并' },
				{ label: '变速' },
			],
		},
		voice: {
			title: '语音与声音滤镜',
			body: '免费的本机文字转语音，加上语音、音色与空间滤镜，清洁或玩转你的声音。',
			voices: ['甜', '低', '花栗鼠', '机器人'],
			amount: '强度 30%',
			pitch: '音高 自动',
		},
		titles: {
			title: '标题与模板',
			body: '开箱即用的样式文字。做一次剪辑，存为模板，下个视频接着用。',
		},
		native: {
			title: '处处原生',
			body: 'Rust 引擎配 Slint 界面，一套代码跑 macOS、Windows 和 Linux。4K H.264 导出，不设上限。',
			badge: 'Rust 引擎 · 原生界面 · 无需安装运行时',
		},
	},

	how: {
		label: '工作原理',
		heading: '三步走。中间没有注册。',
		steps: [
			{
				title: '导入',
				body: '拖入视频、音频和图片。没有账号，没有上传。',
			},
			{
				title: '剪辑',
				body: '需要几轨就几轨地分割、修剪、加字幕、上滤镜。',
			},
			{
				title: '导出',
				body: '按项目自己的画幅导出 H.264 MP4，最高 4K，不带水印。',
			},
		],
		promises: [
			{
				title: '离线可用',
				body: '字幕、语音、抠像和导出全部在本机运行。',
			},
			{
				title: '没有账号',
				body: '装上就开剪。没有需要登录的地方。',
			},
			{
				title: '没有水印',
				body: '一个构建，全部功能，没有东西藏在付费墙后。',
			},
			{
				title: '开源',
				body: 'AGPL-3.0。随便读、随便复刻、随便发布。',
			},
		],
	},

	download: {
		label: '下载',
		selfContained: '自包含构建。每一个都无需安装其他任何东西即可运行。',
		released: '发布于',
		releaseNotes: '版本说明',
		tested: '已测试',
		untested: '可构建，未测试',
		verify: '校验与每夜版',
		checksums: '每个版本都附带校验和',
		nightly: '每夜版',
		mac: {
			title: 'macOS 构建未签名',
			body: '把应用拷到“应用程序”后，清除一次隔离属性即可：',
		},
		bugs: {
			title: '出了问题？',
			body: '这是 Beta，眼下最有用的贡献就是一份错误报告。',
			or: '或',
			openIssue: '提一个 issue',
			askDiscord: '去 Discord 问',
		},
	},

	footer: {
		releases: '版本发布',
		contributing: '参与贡献',
		roadmap: '路线图',
		issues: 'Issue',
		projectBy: '项目作者',
	},

	picker: {
		open: '切换语言',
		title: '用你的语言阅读本页',
		subtitle: '本网站提供 {count} 种语言。',
		current: '当前',
		english: 'English',
		stay: '留在{language}',
		switchToEnglish: '切换到英语',
		all: '全部语言',
		close: '关闭',
	},
} satisfies UI;
