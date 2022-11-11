import '../common/styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '../common/layouts/baseLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
     <Component {...pageProps} />
    </BaseLayout>

  )
}
