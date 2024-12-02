import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import profile from './../../img/profile.jpg';
import arrow from './../../img/arrow.png';

export default function About(){
    return(
        <>
            <section className="section2 skl" id='about'>
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-12 title title2">
                            <h2>ABOUT</h2>
                        </div>
                    </div>
                    <div className="row hidden">
                        <div className="col-md-6 me-img">
                            <img src={profile} alt="" />
                        </div>
                        <div className="col-md-6 me-desc">
                            <h4>Web Developer</h4>
                            <p>Passionate web developer with a knack for building responsive and modern web applications. Dedicated to enhancing user experience through intuitive design and efficient solutions. Ready to contribute innovative ideas to achieve project success.</p>
                            <div className='d-flex gap-5 mt-5'>
                                <div className='d-flex flex-column gap-1'>
                                    <p><span><img src={arrow} width={20} alt="" /></span> <strong>Name:</strong> Boudfel Younes</p>
                                    <p><span><img src={arrow} width={20} alt="" /></span> <strong>Age:</strong> 22 years</p>
                                    <p><span><img src={arrow} width={20} alt="" /></span> <strong>Degree:</strong> Bac +2</p>
                                </div>
                                <div className='d-flex flex-column gap-1'>
                                    <p><span><img src={arrow} width={20} alt="" /></span> <strong>Website:</strong> www.boudfelyounes.com</p>
                                    <p><span><img src={arrow} width={20} alt="" /></span> <strong>Phone:</strong> 0632254423</p>
                                    <p><span><img src={arrow} width={20} alt="" /></span> <strong>Email:</strong> boudfelyounes@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}