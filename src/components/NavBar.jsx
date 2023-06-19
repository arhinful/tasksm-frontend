'use client'
import styles from "./NavBar.module.css"
import Link from "next/link";
import {FaTasks} from "react-icons/fa"
import {AiOutlineAppstoreAdd} from "react-icons/ai"

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
                                <Link
                                    className={"nav-link " + styles.nav_link}
                                    href=""
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="View all task"
                                >
                                    <FaTasks/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={"nav-link " + styles.nav_link}
                                    href="/cdsd"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Add new task"
                                >
                                    <AiOutlineAppstoreAdd/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
