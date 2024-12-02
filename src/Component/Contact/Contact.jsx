import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../../node_modules/leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import local from './../../img/local.png';
import tel from './../../img/tele.png';
import mail from './../../img/mail.png';

export default function Contact(){
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1dc124a9-9fc0-4d23-ba37-e070210dad66");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Message sent");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };






    return(
        <>
            <section className="section2" id='contact'>
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-12 title title2">
                            <h2>CONTACT</h2>
                        </div>
                    </div>
                    <div className="row hidden">
                        <div className="col-md-6">
                            <div className='card-info d-flex flex-column gap-2'>
                                <div className='d-flex align-items-center gap-4'>
                                    <img src={local} width={20} alt="" />
                                    <div>
                                        <h6>Address</h6>
                                        <p>Tiflet, Bloc10</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-4'>
                                    <img src={tel} width={20} alt="" />
                                    <div>
                                        <h6>Phone</h6>
                                        <p>0632254423</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-4'>
                                    <img src={mail} width={20} alt="" />
                                    <div>
                                        <h6>Email</h6>
                                        <p>boudfelyounes@gmail.com</p>
                                    </div>
                                </div>
                                <MapContainer center={[34.020882, -6.841650]} zoom={13} style={{ height: '200px', width: '100%' }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[34.020882, -6.841650]}>
                                        <Popup>Vous êtes à Rabat, Maroc.</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={onSubmit} className='con d-flex flex-column justify-content-center gap-3'>
                                <input type="text" name="nom" id="nom" placeholder='Name' />
                                <input type="email" name="email" id="email"  placeholder='Email' />
                                <input type="text" name="obj" id="obj" placeholder='Object' />
                                <textarea name="msg" id="msg"  placeholder='Message' rows={5} />
                                <button type="submit">Send</button>
                                <span>{result}</span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}