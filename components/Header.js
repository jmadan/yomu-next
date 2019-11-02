import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
            <h2>
                <a>Yomu</a>
            </h2>
        </Link>
        <Link href="/feed">
            <a>Feed</a>
        </Link>
        <Link href="/signin">
            <a>Signin</a>
        </Link>
    </div>
)

export default Header