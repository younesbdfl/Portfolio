import logo from './../../img/logo-removebg-preview.png';

export default function Header() {


    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container">
                        <a href="#home" class="navbar-brand w-25">
                            <img src={logo} height="35" alt="logo"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse ps-5" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nv">
                                <li class="nav-item">
                                    <a href="#home" class="nav-item nav-link">HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#services" class="nav-item nav-link">SERVICES</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#skills" class="nav-item nav-link">SKILLS</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#project" class="nav-item nav-link">PROJECT</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#about" class="nav-item nav-link">ABOUT ME</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#contact" class="nav-item nav-link">CONTACT</a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                <a class="nav-item nav-link" href='Boudfel-Younes-cv.pdf' download="Boudfel-Younes.pdf">cv</a>
                            </span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
