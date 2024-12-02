import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import web from './../../img/coding.png';
import ui from './../../img/web-design.png';
import app from './../../img/app.png';
import ps from './../../img/adobe-photoshop.png';

export default function Services() {
    document.querySelectorAll('.fill > button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.fill > button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    window.addEventListener('scroll',reveal);
    function reveal(){
        var reveals =document.querySelectorAll('.hidden');

        for(var i=0; i<reveals.length; i++){
            var wndowheight =window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < wndowheight - revealpoint){
                reveals[i].classList.add('show');
            } else{
                reveals[i].classList.remove('show');
            }
        }
    }

    return (
        <>
        <section className="section2" id='services'>
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-12 title">
                        <h2>SERVICES</h2>
                    </div>
                </div>
                <div className="row mt-5 card-services hidden">
                    <div className="col-md-12">
                        <div id="servicesCarousel" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="services d-flex justify-content-between flex-wrap">
                                        <div className="block col-sm-6 col-12 col-md-4 mb-4">
                                            <img src={web} alt="" />
                                            <div>
                                                <h5 className='text-center'>Developer web full stack</h5>
                                                <p>Développement complet de sites et applications web, en intégrant à la fois la partie front-end et back-end pour une solution robuste et performante.</p>
                                            </div>
                                        </div>
                                        <div className="block col-sm-6 col-12 col-md-4 mb-4">
                                            <img src={ui} alt="" />
                                            <div>
                                                <h5 className='text-center'>UI/UX Design</h5>
                                                <p>Création d'interfaces utilisateur intuitives et esthétiques, avec un design centré sur l'expérience utilisateur pour améliorer l'engagement.</p>
                                            </div>
                                        </div>
                                        <div className="block col-sm-6 col-12 col-md-4 mb-4">
                                            <img src={app} alt="" />
                                            <div>
                                                <h5 className='text-center'>App Development</h5>
                                                <p>Conception et développement d'applications mobiles modernes et responsives, adaptées aux besoins spécifiques de vos utilisateurs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="services d-flex justify-content-start flex-wrap">
                                        <div className="block col-sm-6 col-12 col-md-4 mb-4">
                                            <img src={ps} alt="" />
                                            <div>
                                                <h5 className='text-center'>Graphic Design</h5>
                                                <p>Création de visuels attractifs et impactants, adaptés à tous vos supports de communication, pour transmettre efficacement votre message et renforcer votre image de marque.</p>
                                            </div>
                                        </div>
                                        <div className="block col-sm-6 col-12 col-md-4 mb-4">
                                            <img src={ps} alt="" />
                                            <div>
                                                <h5 className='text-center'>Graphic Design</h5>
                                                <p>Création de visuels attractifs et impactants, adaptés à tous vos supports de communication, pour transmettre efficacement votre message et renforcer votre image de marque.</p>
                                            </div>
                                        </div>
                                        <div className="block col-sm-6 col-12 col-md-4 mb-4">
                                            <img src={ps} alt="" />
                                            <div>
                                                <h5 className='text-center'>Graphic Design</h5>
                                                <p>Création de visuels attractifs et impactants, adaptés à tous vos supports de communication, pour transmettre efficacement votre message et renforcer votre image de marque.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
