import './Header.scss'

export default function Header() {
    return (
        <header className="header">
            <a href="#" className="logo">Biterum</a>
            <nav className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#" >Graphs</a>
                <a href="#" >Tables</a>
                <a href="#" >About</a>
            </nav>
        </header>
    )
}