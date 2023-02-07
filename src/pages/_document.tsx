import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="fr">
			<Head>
				<script defer type="text/javascript" src="/static/js/noFlash.js" />
			</Head>
			<body>
			  <Main/>
			  <NextScript/>
			</body>
		</Html>
	)
}
