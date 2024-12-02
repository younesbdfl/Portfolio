import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Projet from "./Project";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Project() {
    const [items, setItems] = useState(Projet);
    const [activeCategory, setActiveCategory] = useState("All");

    const filterItems = (catItem) => {
        setActiveCategory(catItem);

        if (catItem === "All") {
            setItems(Projet);
        } else {
            const updateItems = Projet.filter((curItem) => curItem.category === catItem);
            setItems(updateItems);
        }
    };

    return (
        <>
        <section className="section2" id='project'>
            <div className="container py-4">
                <div className="row mb-5">
                    <div className="col-md-12 title">
                        <h2>PROJECT</h2>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-12 d-flex justify-content-center fill">
                        <button
                            type="button"
                            className={`me-3 mb-3 ${activeCategory === "All" ? "active-btn" : ""}`}
                            onClick={() => filterItems("All")}
                        >
                            All
                        </button>
                        <button
                            type="button"
                            className={`me-3 mb-3 ${activeCategory === "web-app" ? "active-btn" : ""}`}
                            onClick={() => filterItems("web-app")}
                        >
                            Web App
                        </button>
                        <button
                            type="button"
                            className={`me-3 mb-3 ${activeCategory === "site-web" ? "active-btn" : ""}`}
                            onClick={() => filterItems("site-web")}
                        >
                            Web Site
                        </button>
                    </div>
                </div>
                <TransitionGroup className="row hidden">
                    {items.map((val) => (
                        <CSSTransition key={val.id} timeout={500} classNames="fade">
                            <div className="col-12 col-md-4 mb-4">
                                <div class="card-container">
                                    <div class="card">
                                        <div class="front-content">
                                            <img src={val.image} alt="..." />
                                        </div>
                                        <div class="content">
                                            <h6 class="heading">{val.title}</h6>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </section>
        </>
    );
}
