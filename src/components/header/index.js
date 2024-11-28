import React from 'react'
import fondoImagen from '../img/3.png';
import fondoImg from '../img/2.png';
import miaImg from '../img/mia.jpg';


export default function HeaderComponent() {
    return (
        <>
        <section className = "section-uno">
            <div className="background-images">
                <img src= {fondoImagen} className="left-img" alt=""/>
                <img src={fondoImg} className="right-img" alt=""/>
            </div>
            <div className = "circulo-img">
                <img src ={miaImg}/>
            </div>
            <div className="text-content">
                <h1>Yamila Sleiman</h1>
                <h3>Desarrolladora web</h3>
            </div>
        </section>
        </>
    )
}
