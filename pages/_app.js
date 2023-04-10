import '@/styles/globals.css'
import "../styles/styles.css";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  return (
<SessionProvider session={session}>
  <Component {...pageProps} />
  </SessionProvider>
  )
}
