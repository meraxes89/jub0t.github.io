// Español — todo el texto de la página, al alcance de un vistazo.
import type { UI } from './en';

export default {
	meta: {
		title: 'Concat — La alternativa libre y de código abierto a CapCut.',
		description:
			'Concat es todo lo que usas en CapCut, sin marcas de agua, muros de pago ni suscripciones. Nativo, sin conexión, de código abierto, para macOS, Windows y Linux.',
	},

	nav: {
		features: 'Características',
		how: 'Cómo funciona',
		download: 'Descargar',
		downloadCta: 'Descargar',
	},

	hero: {
		badge: 'La beta ya está en todas las plataformas',
		heading: 'La alternativa libre y de código abierto a CapCut.',
		sub: 'Edición multipista, subtítulos en el dispositivo y exportación en 4K, sin marcas de agua, sin cuenta y sin nube.',
		download: 'Descargar Concat',
		source: 'Ver el código',
		screenshotAlt: 'El editor de Concat: bandeja de medios, vista previa, panel de filtros y línea de tiempo multipista',
	},

	stats: {
		stars: 'Estrellas en GitHub',
		forks: 'Bifurcaciones',
		languages: 'Idiomas',
		license: 'Licencia',
	},

	features: {
		label: 'Características',
		heading: 'El editor que esperas. Sin las trampas.',
		timeline: {
			title: 'Líneas de tiempo multipista',
			body: 'Vídeo, audio, subtítulos y títulos en sus propias pistas, y varias líneas de tiempo por proyecto cuando una no basta.',
			timeline: 'Línea de tiempo 1',
			captions: 'Subtítulos',
			voice: 'Voz',
			video: 'Vídeo',
		},
		captions: {
			title: 'Subtítulos automáticos, en tu equipo',
			body: 'El reconocimiento de voz corre en tu propio hardware. Tu audio nunca sale de la máquina.',
			transcribing: 'transcribiendo en local',
			line: 'Presta atención.',
		},
		cutting: {
			title: 'La caja de herramientas de corte',
			body: 'Dividir, recortar, unir, transiciones y control de velocidad, con fotogramas clave en posición, escala, rotación y opacidad.',
			tools: [
				{ label: 'Dividir' },
				{ label: 'Recortar' },
				{ label: 'Unir' },
				{ label: 'Velocidad' },
			],
		},
		voice: {
			title: 'Voz y filtros de voz',
			body: 'Texto a voz gratuito y local, más filtros de voz, tono y espacio para limpiar o jugar con tu sonido.',
			voices: ['Dulce', 'Grave', 'Ardilla', 'Robot'],
			amount: 'cantidad 30 %',
			pitch: 'tono auto',
		},
		titles: {
			title: 'Títulos y plantillas',
			body: 'Texto con estilo desde el primer minuto. Monta una edición una vez, guárdala como plantilla y reutilízala para el próximo vídeo.',
		},
		native: {
			title: 'Nativo en todas partes',
			body: 'Motor en Rust e interfaz en Slint, una sola base de código para macOS, Windows y Linux. Exportación H.264 en 4K sin límite.',
			badge: 'Motor en Rust · UI nativa · Sin runtime que instalar',
		},
	},

	how: {
		label: 'Cómo funciona',
		heading: 'Tres pasos. Sin registros por medio.',
		steps: [
			{
				title: 'Importa',
				body: 'Suelta vídeo, audio e imágenes. Sin cuenta, sin subidas.',
			},
			{
				title: 'Corta',
				body: 'Divide, recorta, subtitula y filtra en tantas pistas como necesites.',
			},
			{
				title: 'Exporta',
				body: 'MP4 H.264 con la proporción del proyecto, hasta 4K, sin marca de agua.',
			},
		],
		promises: [
			{
				title: 'Funciona sin conexión',
				body: 'Subtítulos, voz, recorte y exportación corren en tu máquina.',
			},
			{
				title: 'Sin cuenta',
				body: 'Instálalo y empieza a cortar. No hay nada donde iniciar sesión.',
			},
			{
				title: 'Sin marca de agua',
				body: 'Una sola compilación, todas las funciones, nada tras un muro de pago.',
			},
			{
				title: 'Código abierto',
				body: 'AGPL-3.0. Léelo, bifurca, publica.',
			},
		],
	},

	download: {
		label: 'Descargar',
		selfContained: 'Compilaciones autónomas. Cada una funciona sin instalar nada más.',
		released: 'Publicada',
		releaseNotes: 'notas de la versión',
		tested: 'Probado',
		untested: 'Compila, sin probar',
		verify: 'Verificar y nightlies',
		checksums: 'Cada versión incluye sumas de verificación',
		nightly: 'Nightly',
		mac: {
			title: 'Las compilaciones de macOS van sin firma',
			body: 'Quita la marca de cuarentena una vez, tras copiar la app a Aplicaciones:',
		},
		bugs: {
			title: '¿Algo se rompió?',
			body: 'Es una beta, y un informe de error es la contribución más útil ahora mismo.',
			or: 'o',
			openIssue: 'Abre una incidencia',
			askDiscord: 'pregunta en Discord',
		},
	},

	footer: {
		releases: 'Versiones',
		contributing: 'Contribuir',
		roadmap: 'Hoja de ruta',
		issues: 'Incidencias',
		projectBy: 'Un proyecto de',
	},

	picker: {
		open: 'Cambiar de idioma',
		title: 'Lee esta página en tu idioma',
		subtitle: 'Este sitio está disponible en {count} idiomas.',
		current: 'Actual',
		english: 'English',
		stay: 'Quedarme en {language}',
		switchToEnglish: 'Cambiar a inglés',
		all: 'Todos los idiomas',
		close: 'Cerrar',
	},
} satisfies UI;
