import React from "react";

import '../styles/pages/Home.css'

const Home = (props) => {
    return (

        <main className="holder">
            <div>
                <img id="tocando" src="images/index/index.jpg" alt="tocando" />
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facere porro illum fuga sit alias!
                        Molestiae corrupti architecto esse, eligendi ipsa unde error inventore commodi, accusamus repellat
                        qui quae repudiandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium omnis
                        saepe aut blanditiis reprehenderit repellendus, corrupti quae at beatae ducimus maxime. Vitae, eum?
                        Deserunt deleniti minus dicta! Tempora, accusamus corrupti.</p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">"Aprendí muchísimo"</span>
                        <span className="autor">Eric Clapton (ex-alumno)</span>
                    </div>
                </section>
            </div>

        </main>

    );

}

export default Home;