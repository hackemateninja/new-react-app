import React, {Component, Fragment} from 'react';
import Header from "./components/Header";
import Noticias from "./components/Noticias";
import Formulario from "./components/Formulario";

class App extends Component{

  state ={
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general')=>{
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=54a0b63930e24f0e937ca2b81ad28b9d`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })
  };

  render() {
    return (
      <Fragment>
          <Header titulo="Noticias react.js API"/>
          <div className="container white contenedor-noticias">
            <Formulario consultarNoticias={this.consultarNoticias}/>
            <Noticias noticias={this.state.noticias}/>
          </div>
      </Fragment>
    );
  }
}

export default App;
