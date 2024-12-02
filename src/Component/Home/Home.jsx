import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation - 1.json';
import linkdin from './../../img/linkedin.png';
import github from './../../img/github.png';
import x from './../../img/twitter-x.png';
export default function Home(){
    const defaultOptions = {
        loop: true,           // Mettre sur true si vous voulez que l'animation soit en boucle
        autoplay: true,       // Mettre sur true pour que l'animation démarre automatiquement
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    


    return(
        <>
        <section className="section1" id='home'>
            <div className="container">
                <div className="row me">
                    <div className="col-12 col-md-6">
                        <h1 className='yns'>Hello, <br></br>My Name is <span>Younes</span></h1>
                        <p>I'm Web Developer</p>
                        <div>
                            <a href="https://www.linkedin.com/in/younes-boudfel-302788254/"><img src={linkdin} alt=""/></a>
                            <a href="https://github.com/younesboudfel"><img src={github} alt=""/></a>
                            <a href="https://x.com/youness_bdfl"><img src={x} alt=""/></a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-5">
                        <div className='lottie'>
                            <Lottie options={defaultOptions} height={400} width={400} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
