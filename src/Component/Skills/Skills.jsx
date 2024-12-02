import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Skills(){
    return(
        <>
        <section className="section2 skl" id='skills'>
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-12 title title2">
                        <h2>SKILLS</h2>
                    </div>
                </div>
                <div className="row mt-5 hidden card-services">
                    <div className="col-md-12">
                        <div class="skills_section">
                            <div class="skills_main">
                                <div class="skill_bar">
                                    <div class="info">
                                        <p>HTML</p>
                                        <p>90%</p>
                                    </div>
                                    <div class="bar">
                                        <span class="html"></span>
                                    </div>
                                </div>
                                <div class="skill_bar">
                                    <div class="info">
                                        <p>CSS</p>
                                        <p>85%</p>
                                    </div>
                                    <div class="bar">
                                        <span class="css"></span>
                                    </div>
                                </div>
                                <div class="skill_bar">
                                    <div class="info">
                                        <p>Bootstarp</p>
                                        <p>80%</p>
                                    </div>
                                    <div class="bar">
                                        <span class="sass"></span>
                                    </div>
                                </div>
                                <div class="skill_bar">
                                    <div class="info">
                                        <p>Java Script</p>
                                        <p>75%</p>
                                    </div>
                                    <div class="bar">
                                        <span class="js"></span>
                                    </div>
                                </div>
                                <div class="skill_bar">
                                    <div class="info">
                                        <p>React js</p>
                                        <p>65%</p>
                                    </div>
                                    <div class="bar">
                                        <span class="react"></span>
                                    </div>
                                </div>
                                <div class="skill_bar">
                                    <div class="info">
                                        <p>PHP</p>
                                        <p>80%</p>
                                    </div>
                                    <div class="bar">
                                        <span class="node"></span>
                                    </div>
                                </div>
                                <div class="skill_bar">
                                    <div class="info">
                                        <p>Laravel</p>
                                        <p>65%</p>
                                    </div>
                                    <div class="bar">
                                        <span class="express"></span>
                                    </div>
                                </div>
                                <div class="skill_bar">
                                    <div class="info">
                                        <p>My Sql</p>
                                        <p>70%</p>
                                    </div>
                                    <div class="bar">
                                        <span class="mongo"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}