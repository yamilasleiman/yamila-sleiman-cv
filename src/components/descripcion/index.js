import React from 'react'
import './styles.scss'
import emailImage from '../img/email.png';
import githubImage from '../img/github.png';
import telefonoImage from '../img/telefono.png';

export default function Descripcion() {
    return (
        <>
        <section className = "section-dos">
            <article className = "info">
                <ul>
                    <li>
                        <img src={emailImage} alt="Ícono de Email" />
                        <span>sleimanyamila01@gmail.com</span>
                    </li>
                    <li>
                        <img src={githubImage} alt="Ícono de GitHub" />
                        <a href="github.com/yamilasleiman" target="_blank" className = "git">yamilasleiman</a>
                    </li>
                    <li>
                        <img src={telefonoImage}></img>
                        <span>11 6860 2001</span>
                    </li>
                </ul>
            </article>
            <article className = "bio">
                <h3>Sobre mi</h3>
                <p>Desarrollador web freelance especializado en crear soluciones de alta calidad basadas en diseños proporcionados. Mi stack tecnológico incluye HTML5, CSS con SASS y JavaScript, con un enfoque en la librería React para construir interfaces de usuario dinámicas y responsivas. Me enfoco en la capa de presentación, creando componentes reutilizables y gestionando estados para ofrecer una experiencia de usuario óptima. Mi enfoque en la reutilización de código y la optimización del rendimiento me permite entregar proyectos de alta calidad y escalabilidad.</p>
            </article>
        </section>
        </>
    )
}
