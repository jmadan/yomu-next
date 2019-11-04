import Link from 'next/link'
import {
    Button,
    Container,
    Header,
    Grid,
    Segment,
    Image
  } from 'semantic-ui-react'
import Layout from '../components/Layout'

const Index = () => (
    <Layout>
        <Segment vertical inverted padded style={{marginTop: '0.5em', padding: '3em'}}>
        <Container text>
            <Header
            as='h1'
            content='yomu'
            inverted
            style={{
                fontSize: '4em',
                fontWeight: 'normal',
                verticalAlign: 'center'
            }}
            />
            <Header
            as='h5'
            content='Japanese for "to read" = yomu'
            inverted
            style={{
                marginTop: '3em',
            }}
            />
            <Header
            as='h2'
            content='One place worth your READING time!'
            inverted
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
            }}
            />
            <Container text>
            Discover amazing content from around the web, share and like what you
            read.
          <br />
            Self learning smart feed based on your interests and on your
            interactions such as liking/disliking
          <br />
            articles, tags and authors.
            </Container>
        </Container>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical placeholder>
            <Grid container stackable verticalAlign='top' >
                <Grid.Row>
                <Grid.Column width={8}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                    Discover
                    </Header>
                    <Segment.Inline>
                    <p style={{ fontSize: '1.33em' }}>
                    The New Yorker, Techcrunch, Wired, Huffington Post, Bloomberg, Hackernoon, HBR, NY Times &amp; many more - don&apos;t miss a beat from around the web.
                    </p>
                    </Segment.Inline>
                </Grid.Column>
                <Grid.Column floated='right' width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Interests
                    </Header>
                    <Segment.Inline>
                    <p style={{ fontSize: '1.33em' }}>
                    Find articles/blogs/news/opinion based on your interests, authors and publishers and stay up-to date with latest - all at one place.
                    </p>
                    </Segment.Inline>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width={8}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                    Personalised
                    </Header>
                    <Segment.Inline>
                    <p style={{ fontSize: '1.33em' }}>
                    Personalise the feed by liking/disliking articles or authors or tags or publisher. The feed learns and customise itself everytime you access it with new content.
                    </p>
                    </Segment.Inline>
                </Grid.Column>
                <Grid.Column floated='right' width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Remind me tomorrow
                    </Header>
                    <Segment.Inline>
                    <p style={{ fontSize: '1.33em' }}>
                    Never loose what you like. Save your favourite articles and easily get back to them when you have time.
                    </p>
                    </Segment.Inline>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </Layout>
  );
  
  export default Index