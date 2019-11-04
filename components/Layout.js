import React, { Component } from 'react'

import Link from 'next/link'
import Head from 'next/head'
import {
    Responsive,
    Visibility,
    Container,
    Segment
  } from 'semantic-ui-react'
// import HomePageHeader from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

class Layout extends Component {
    state = {}
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
        <div>
            <Head>
                <title>yomu.io - reading space</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Container>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment inverted>
                    <Navbar />
                    </Segment>
                </Visibility>
                {children}
                {/* <Head>
                    <title>yomu.io - reading space</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                </Head>
                
                {props.children}
                <Footer />
                </Visibility> */}
                <Footer />
                </Container>
            </Responsive>
        </div>
)
    }
}

export default Layout