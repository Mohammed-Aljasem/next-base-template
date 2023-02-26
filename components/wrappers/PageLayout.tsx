import Head from "next/head";
import React from "react";

type PageLayoutProps = {
    meta_title?: string,
    meta_description?: string,
    meta_keywords?: string,
    children?: JSX.Element | JSX.Element[]
}
const PageLayout = ({meta_title, children, meta_description, meta_keywords}: PageLayoutProps) => {
    return (
        <>
            <Head>
                <title>{meta_title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={meta_description} />
                <meta name="keywords" content={meta_keywords} />
                <link rel="icon" type="image/x-icon" href="/assets/icons/favicon.ico" />
            </Head>
            <div className='w-full'>
                {children}
            </div>
        </>
    )
}

export default PageLayout;
