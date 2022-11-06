import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/layout/Header';
import { wrapper } from '../appState/store';
import { Provider } from "react-redux";
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);
 
  return (
    <Provider store={store}>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;

