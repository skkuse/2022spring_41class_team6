import '../styles/globals.css'
import DefaultLayout from "../layouts/defaultLayout";
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {

  return <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
}

export default MyApp
