import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <Link href="/">home</Link>
            <Link href="/about/page">album a day</Link>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/crafterz89">spotify</a>
        </div>
    )
}