import React from 'react';
import '../styles/universal.css'
import '../styles/contact.css'

export const Contact = ()=>{
    return(
        <div>
            <section class="title">
                <div class="title__text">
                    <h2>Contactárnos es muy fácil</h2>
                </div>
                <div class="title__steps">
                    <ul>
                        <li>
                            <p>A través del siguiente formulario en donde te contactaremos lo más pronto posible.</p>
                        </li>
                        <li>
                            <p>Por medio de nuestra línea de <a href="#contact">atención</a> al usuario.</p>
                        </li>
                        <li>
                            <p>Desde nuestras diferentes redes sociales.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="form">
                <form action="" class="form__contact" autocomplete="off">
                    <input class="input" aria-label="Nombre Completo" type="text" name="name" id="name" placeholder="Nombre Completo*" required />
                    <input class="input" aria-label="Correo Electrónico" type="email" name="email" id="email" placeholder="Correo Electrónico*" required />
                    <input class="input" aria-label="Teléfono" type="number" name="phone" id="phone" placeholder="Teléfono*" required />
                    <textarea class="input" name="detail" id="detail" cols="30" rows="5" placeholder="Cuéntanos tu inquietud*" required></textarea>
                    <label for="terms"><input type="checkbox" name="terms" id="terms" required /> Acepta nuestra <a href="politica.html">política de privacidad   </a></label>
                    <input class="hero__button" type="submit" value="Enviar Información" />
                </form>
            </section>
        </div>
    );
}
