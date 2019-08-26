import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component{
    state = {
        categoria: ''
    };

    cambiarCategoria = e =>{
        this.setState({
            categoria: e.target.value
        }, ()=>{
            //pasarlo a la pagina principal
            this.props.consultarNoticias(this.state.categoria);
        })
    }
    render() {
        return(
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Buscar por categoría</h2>
                        <div className="input-field col s12">
                            <select onChange={this.cambiarCategoria}>
                                <option value="business">business</option>
                                <option value="entertainment">entertainment</option>
                                <option value="general">general</option>
                                <option value="health">health</option>
                                <option value="science">science</option>
                                <option value="sports">sports</option>
                                <option value="technology">technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
};

export default Formulario;
