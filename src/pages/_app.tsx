import type { AppProps } from 'next/app'
import "../common/styles/globals.css";
import BaseLayout from '../common/layouts/baseLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
     <Component {...pageProps} />
    </BaseLayout>

  )
}
