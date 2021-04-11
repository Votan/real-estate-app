import { ClickProvider } from '../contexts/click';

export default function App({ Component, pageProps }) {
  return (
    <ClickProvider>
      <Component {...pageProps} />
    </ClickProvider>
  )
};