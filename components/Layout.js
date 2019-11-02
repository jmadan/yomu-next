import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
    <div>
        <Head>
            <title>yomu.io - reading space</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        </Head>
        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layout