import React, {ReactNode} from 'react'
import Header from "./Header/Header";
import {useRouter} from "next/router";
import Footer from "./Footer/Footer";

type Props = {
    children: JSX.Element | JSX.Element[];
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => {
    const {locale} = useRouter()

    return (
    <div className="Layout flex flex-col min-h-screen" dir={locale === 'en' ? 'ltr' : 'rtl'}>
        <Header/>
        <div className="flex flex-grow justify-center">
            {children}
        </div>
        <Footer/>
    </div>
    )
}

export default Layout
