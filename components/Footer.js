import Link from 'next/link'
import { Container, Menu, Segment } from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted>
        <Container text textAlign='center'>
            <p>yomu.io</p>
        <Menu secondary inverted widths={3}>
            <Menu.Item
            name='privacy policy'
            />
            <Menu.Item
            name='terms of service'
            />
            <Menu.Item
            name='feedback'
            />
            <Menu.Item
            name='contact us'
            />
        </Menu>
        </Container>
      </Segment>
    // <Container textAlign='center'>
    //     <p style={{ fontSize: '1.33em' }}>
    //         <strong>yomu.io</strong>
    //     </p>
    //     <p style={{ fontSize: '1.25em' }}>
    //         <Link href='/feedback'><a>Feedback</a></Link>
    //         &nbsp;
    //         <Link href='/privacy'><a>Privacy Policy</a></Link>
    //         &nbsp;
    //         <Link href='/tnc'><a>Terms of Service</a></Link>
    //         &nbsp;
    //         <Link href='/about-us'><a>About us</a></Link>
    //     </p>
    // </Container>
//     <footer className="bg-dark text-white mt-4">
//     <div className="container-fluid py-3">
//       <p className="text-center">
//         <strong>yomu.io</strong>
//       </p>
//       <p className="text-center">
//           <Link className="icon text-white" href="/feedback">
//             <a><FaEnvelope />
//             &nbsp;Suggest a source</a>
//           </Link>
//         <br />
//         <Link className="btn btn-link text-white" href="/privacy">
//           <a>Privacy Policy</a>
//         </Link>
//         <span> | </span>
//         <Link className="btn btn-link text-white" href="/tnc">
//           <a>Terms of Service</a>
//         </Link>
//         <span> | </span>
//         <Link className="btn btn-link text-white" href="/about-us">
//           <a></a>About us
//         </Link>
//       </p>
//     </div>
//   </footer>
)

export default Footer