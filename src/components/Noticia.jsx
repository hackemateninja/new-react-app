import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    //extraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    // condicional para cargar la imagen si está disponible

    const imagen = {urlToImage} ?
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
        : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} rel="noopener noreferrer" target="_blank" className="waves-effect waves-light btn">
                        Ver Noticia
                    </a>
                </div>
            </div>
        </div>
    );
};

Noticia.propType = {
  noticia: PropTypes.object.isRequired
};

export default Noticia;
