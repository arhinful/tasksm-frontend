import styles from "./NavBar.module.css"
import Link from "next/link";
export default function NavBar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TaskMS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="">Tasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link " + styles.hover_nav} href="/cdsd">Add Tasks</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
