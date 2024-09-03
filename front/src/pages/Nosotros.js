import React from "react";

import '../styles/pages/Nosotros.css';

const Nosotros = (props) => {
    return (

        <main className="holder">

            <div className="personas">

                <div className="persona">
                    <img src="images/nosotros/alejandro.jpg" alt="Alejandro" />
                    <h5>Alejandro</h5>
                    <h6>Profesor de Rock Pop</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo laboriosam quidem possimus
                        assumenda asperiores? </p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/claudio.jpg" alt="Claudio" />
                    <h5>Claudio</h5>
                    <h6>Profesor de Heavy Metal y sus Variantes</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo laboriosam quidem possimus
                        assumenda asperiores? </p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/elizabeth.jpg" alt="Elizabeth" />
                    <h5>Elizabeth</h5>
                    <h6>Profesora de Música Clásica</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo laboriosam quidem possimus
                        assumenda asperiores? </p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/helena.jpg" alt="Helena" />
                    <h5>Helena</h5>
                    <h6>Profesora de Canto y Acompañamientos</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo laboriosam quidem possimus
                        assumenda asperiores?</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/pedro.jpg" alt="Pedro" />
                    <h5>Pedro</h5>
                    <h6>Profesor de Blues</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo laboriosam quidem possimus
                        assumenda asperiores?</p>
                </div>

            </div>

            <div className="historia">
                <h2>Nuestra historia</h2>
                <p>Temporibus vitae quod veritatis quae sint.
                    Dicta labore incidunt laborum praesentium ex cupiditate inventore, architecto ad ratione ab, corporis
                    commodi non officia.</p>
                <p>Suscipit explicabo ullam neque accusantium
                    delectus a, dignissimos esse, fugiat rem in enim quas odit dolor quidem tempora perspiciatis corrupti
                    qui ex!</p>
            </div>
        </main>

    );

}

export default Nosotros;