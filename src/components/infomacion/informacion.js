import React from 'react'

export default function InformacionComponent() {
    const arrayItems = [
        {
            title: 'UNLAM',
            subtitle: 'Tecnicatura en Desarrollo web.',
            secondSubtitle: '2022 - 2025'
        },
        {
            title: 'CODERHOUSE',
            subtitle: 'Desarrollo frontend de paginas web.',
            secondSubtitle: 'HTML5, git, github, CSS3, SAAS, Bootstrap, SEO, Hosting y Servidores Web <br /> 2020 - 2020.'
        },
        {
            title: 'CODERHOUSE',
            subtitle: 'Javascript.',
            secondSubtitle: 'Programación orientada a objetos con JavaScript, jQuery, DOM, eventos, arrays, functions, class, localStorage, JSON, AJAX, SPA con jQuery <br /> 2021 - 2021.'
        },
        {
            title: 'CODERHOUSE',
            subtitle: 'React Js.',
            secondSubtitle: 'JSX & transpiling, Componentes, Fetching, Axios, consumir APIs, Firebase, Técnicas de rendering, Promises, asincronía y MAP <br /> 2021 - 2021.'
        },
    ]
    return (
        <section className="section-container">
            <div className="content-left">
                <h3>Expericencia</h3>
                <ul className = "aqui">
                    {arrayItems.map((item, index) => (
                        <li className="items-li" key={index}>
                            <h4 className={`nombre-de-la-clase-${item.title}`} >{item.title}</h4>
                            <span>{item.subtitle}</span>
                            <p dangerouslySetInnerHTML={{ __html: item.secondSubtitle }}></p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
    
}

