import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import linkdin from './../../img/linkedin.png';
import github from './../../img/github.png';
import x from './../../img/twitter-x.png';


export default function Footer(){
    return(
        <>
        <footer className='p-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className='text-center'>© Copyright <strong>Boudfel Younes</strong> All Rights Reserved</p>
                        <div className='d-flex justify-content-center gap-3'>
                            <a href="https://www.linkedin.com/in/younes-boudfel-302788254/"><img src={linkdin} alt=""/></a>
                            <a href="https://github.com/younesboudfel"><img src={github} alt=""/></a>
                            <a href="https://x.com/youness_bdfl"><img src={x} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}