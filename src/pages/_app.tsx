import type { AppProps } from 'next/app'
import { useCallback, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@App/components/layout'
import '@App/assets/global.css'

export default function App({ Component, pageProps }: AppProps) {
  const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])

  useEffect(() => {
    window.onbeforeunload = () => resetWindowScrollPosition()
  }, [resetWindowScrollPosition])

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/static/ico/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/ico/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/ico/favicon-16x16.png"/>
        <link rel="icon" href="/static/ico/favicon.ico"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
