// Português (Brasil) — a página inteira num relance.
import type { UI } from './en';

export default {
	meta: {
		title: 'Concat — A alternativa gratuita e de código aberto ao CapCut.',
		description:
			'Concat é tudo o que você usa no CapCut, sem marcas d’água, paywalls ou assinaturas. Nativo, offline, código aberto, para macOS, Windows e Linux.',
	},

	nav: {
		features: 'Recursos',
		how: 'Como funciona',
		download: 'Baixar',
		downloadCta: 'Baixar',
	},

	hero: {
		badge: 'A beta já saiu para todas as plataformas',
		heading: 'A alternativa gratuita e de código aberto ao CapCut.',
		sub: 'Edição multipista, legendas no aparelho e exportação em 4K, sem marca d’água, sem conta e sem nuvem.',
		download: 'Baixar o Concat',
		source: 'Ver o código-fonte',
		screenshotAlt: 'O editor do Concat: biblioteca de mídia, prévia, painel de filtros e linha do tempo multipista',
	},

	stats: {
		stars: 'Estrelas no GitHub',
		forks: 'Forks',
		languages: 'Idiomas',
		license: 'Licença',
	},

	features: {
		label: 'Recursos',
		heading: 'O editor que você espera. Sem as amarras.',
		timeline: {
			title: 'Linhas do tempo multipista',
			body: 'Vídeo, áudio, legendas e títulos em pistas próprias, e várias linhas do tempo por projeto quando uma não basta.',
			timeline: 'Linha do tempo 1',
			captions: 'Legendas',
			voice: 'Voz',
			video: 'Vídeo',
		},
		captions: {
			title: 'Legendas automáticas, no aparelho',
			body: 'O reconhecimento de fala roda no seu próprio hardware. Seu áudio nunca sai da máquina.',
			transcribing: 'transcrevendo localmente',
			line: 'Preste atenção.',
		},
		cutting: {
			title: 'A caixa de ferramentas de corte',
			body: 'Dividir, aparar, unir, transições e controle de velocidade, com quadros-chave em posição, escala, rotação e opacidade.',
			tools: [
				{ label: 'Dividir' },
				{ label: 'Aparar' },
				{ label: 'Unir' },
				{ label: 'Velocidade' },
			],
		},
		voice: {
			title: 'Fala e filtros de voz',
			body: 'Texto para fala grátis e local, mais filtros de voz, tom e espaço para limpar ou brincar com o seu som.',
			voices: ['Doce', 'Grave', 'Esquilo', 'Robô'],
			amount: 'quantidade 30 %',
			pitch: 'tom auto',
		},
		titles: {
			title: 'Títulos e modelos',
			body: 'Texto estilizado de fábrica. Monte uma edição uma vez, salve como modelo e reutilize no próximo vídeo.',
		},
		native: {
			title: 'Nativo em todo lugar',
			body: 'Motor em Rust e interface em Slint, uma base de código só para macOS, Windows e Linux. Exportação H.264 em 4K sem teto.',
			badge: 'Motor Rust · UI nativa · Sem runtime para instalar',
		},
	},

	how: {
		label: 'Como funciona',
		heading: 'Três passos. Nenhum cadastro no caminho.',
		steps: [
			{
				title: 'Importe',
				body: 'Solte vídeo, áudio e imagens. Sem conta, sem upload.',
			},
			{
				title: 'Corte',
				body: 'Divida, apare, legendue e filtre em quantas pistas precisar.',
			},
			{
				title: 'Exporte',
				body: 'MP4 H.264 na proporção do projeto, até 4K, sem marca d’água.',
			},
		],
		promises: [
			{
				title: 'Funciona offline',
				body: 'Legendas, fala, recorte e exportação rodam na sua máquina.',
			},
			{
				title: 'Sem conta',
				body: 'Instale e comece a cortar. Nada para fazer login.',
			},
			{
				title: 'Sem marca d’água',
				body: 'Um build só, todos os recursos, nada atrás de paywall.',
			},
			{
				title: 'Código aberto',
				body: 'AGPL-3.0. Leia, faça fork, publique.',
			},
		],
	},

	download: {
		label: 'Baixar',
		selfContained: 'Builds autossuficientes. Cada um roda sem instalar mais nada.',
		released: 'Lançada em',
		releaseNotes: 'notas da versão',
		tested: 'Testado',
		untested: 'Compila, sem testes',
		verify: 'Verificar e nightlies',
		checksums: 'Cada versão vem com somas de verificação',
		nightly: 'Nightly',
		mac: {
			title: 'Os builds de macOS não são assinados',
			body: 'Remova a flag de quarentena uma vez, depois de copiar o app para a Aplicações:',
		},
		bugs: {
			title: 'Algo quebrou?',
			body: 'É uma beta, e um relatório de bug é a contribuição mais útil agora.',
			or: 'ou',
			openIssue: 'Abra uma issue',
			askDiscord: 'pergunte no Discord',
		},
	},

	footer: {
		releases: 'Versões',
		contributing: 'Contribuir',
		roadmap: 'Roadmap',
		issues: 'Issues',
		projectBy: 'Um projeto de',
	},

	picker: {
		open: 'Mudar de idioma',
		title: 'Leia esta página no seu idioma',
		subtitle: 'Este site está disponível em {count} idiomas.',
		current: 'Atual',
		english: 'English',
		stay: 'Ficar em {language}',
		switchToEnglish: 'Mudar para inglês',
		all: 'Todos os idiomas',
		close: 'Fechar',
	},
} satisfies UI;
