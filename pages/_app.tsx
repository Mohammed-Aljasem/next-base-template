import React from 'react'
import {AppProps} from 'next/app'
import '../styles/index.css'
import Layout from "../components/Layout";
import {Toaster} from "react-hot-toast";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Layout>
            <div><Toaster position="top-right" reverseOrder={false}/></div>
            <Component {...pageProps} />
        </Layout>
    )
}
export default App;
