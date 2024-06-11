
import { useState } from 'react'
import Layout from '../components/layout/Layout'
import '../styles/index.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const [theme , setTheme] = useState("theme-day")
  return (

      <Layout theme={theme} setTheme={setTheme}>
          <Component {...pageProps} theme={theme} />
       </Layout>

  )
}

export default MyApp
