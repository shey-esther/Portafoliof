import React, { Component } from 'react';
import Utils from './Utils.js';
import './scss/main.css';
import compu from './img/compu.jpg';
import naranja from './img/naranja.jpg';
import postre from './img/postre.jpg';
import laberinto from './img/laberinto.jpg';
import pandita from './img/pandita.png';
import lift from './img/lift.png';
import fotologo from './img/fotologo.png';
import youtuve from './img/youtuve.jpg';
import plane from './img/plane.png';
import bomba from './img/bomba.png';
import recor from './img/recor.jpg';
import trello from './img/trello.jpg';
import register from './img/register.jpg';
import agree from './img/agree.png';



import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'


const HTML = () => {
  return (
    <div className=''>
      <div className="row contfull text-center">
        <div className=" text-center doce">
          <div
            className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX "
            style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
            <div className="image-container center-block stile  escondite  ">

              <img className="img responsive" src={laberinto} />

              <div className="info img-responsive me-escondo ">
                <h4 className="texcategoria">
                Esta pagina es un juego, tiene la funcionalidad de direccionarse a cualquier de sus lados</h4>
                <p className="">
                  <a href="https://github.com/shey-esther/Laberinto"
                  target="_blank"
                    className="btn btn-default codigo">Github</a>
                  <a href='https://shey-esther.github.io/Laberinto/'
                  target="_blank"
                    className="btn btn-default codigo">Proyecto</a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery "
            style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
            <div className="image-container center-block stile escondite">
              <img className="img responsive"
                src={lift} />
              <div className="info img-responsive me-escondo ">
                <p className="texcategoria">
                  Esta página es para dispositivos móviles, tiene la funcionalidad para registrar al usuario y ubicar su dirección.                   </p>
                <p >
                  <a href="https://github.com/shey-esther/Lya-movil-evaluado"
                  target="_blank"
                    className="btn btn-default codigo">Github</a>
                  <a href='https://shey-esther.github.io/Lya-movil-evaluado/'
                  target="_blank"
                    className="btn btn-default codigo">Proyecto</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
            style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
            <div className="image-container center-block stile escondite">
              <img className="img responsive"
                src={pandita} />
              <div className="info img-responsive me-escondo ">
                <p className="texcategoria">
                  Esta página es para dispositivos móviles </p>
                <p >
                  <a href="https://github.com/shey-esther/love-panda"
                  target="_blank"
                    className="btn btn-default codigo">Github</a>
                  <a href='https://shey-esther.github.io/love-panda/'
                  target="_blank"
                    className="btn btn-default codigo">Proyecto</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Jquery = () => {
  return (
    <div className="row contfull text-center">
      <div className="col-md-12 text-center">
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile escondite">

            <img
              className="img responsive"
              src={plane} />
            <div className="info img-responsive me-escondo ">
              <p className="texcategoria">
                Esta página es para dispositivos móviles,es un quiz que tiene preguntas como respuestas para seleccionarlas  </p>
              <p >
                <a href="https://github.com/shey-esther/Deep-dive-evaluado"
                target="_blank"
                  className="btn btn-default codigo">Github</a>
                <a href='https://shey-esther.github.io/Deep-dive-evaluado/'
                target="_blank"
                  className="btn btn-default codigo">Proyecto</a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile escondite">
            <img
              className="img responsive"
              src={bomba} />
            <div className="info img-responsive me-escondo ">
              <p className="texcategoria">
                Esta página es un juego puzzle Buscaminas que es muy bueno para el entretenimiento</p>
              <p >
                <a href="https://github.com/shey-esther/Buscaminas"
                target="_blank"
                  className="btn btn-default codigo">Github</a>
                <a href="https://shey-esther.github.io/Buscaminas/"
                target="_blank"
                  className="btn btn-default codigo">Proyecto</a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block escondite">
            <img
              className="img responsive"
              src={recor} />
            <div className="info img-responsive me-escondo ">
              <p className="texcategoria">
                Esta página tiene la funcionalidad para registrar al usuario y el porcentaje academico </p>
              <p >
                <a href="https://github.com/shey-esther/student-records"
                target="_blank"
                  className="btn btn-default codigo">Github</a>
                <a href='https://shey-esther.github.io/student-records/'
                target="_blank"
                  className="btn btn-default codigo">Proyecto</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const react = () => {
  return (
    <div className="row contfull text-center">
      <div className="col-md-12 text-center">
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block escondite">
            <img
              className="img responsive"
              src={trello} />
            <div className="info img-responsive me-escondo ">
              <p className="texcategoria">
                Es una pagina web donde podras agregar mas tareas que vas a realizar</p>
              
                <a href="https://github.com/shey-esther/trello-firebase"
                target="_blank"
                  className="btn btn-default codigo">Github</a>
                <a href='https://shey-esther.github.io/trello-firebase/'
                target="_blank"
                  className="btn btn-default codigo">Proyecto</a>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile escondite">

            <img
              className="img responsive"
              src={register} />
            <div className="info img-responsive me-escondo ">
              <p className="texcategoria">
                Esta página que tiene la funcionalidad de registrar al usuario y su comentario</p>
              <p >
                <a href="https://github.com/shey-esther/resgistration-app-mvc-react"
                target="_blank"
                  className="btn btn-default codigo">Github</a>
                <a href='https://shey-esther.github.io/resgistration-app-mvc-react/'
                target="_blank"
                  className="btn btn-default codigo">Proyecto</a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile escondite">
            <img
              className="img responsive"
              src={agree} />
            <div className="info img-responsive me-escondo ">
              <p className="texcategoria">
                Esta página es que permite agregar mas usuarios  </p>
              <p >
                <a href="https://github.com/shey-esther/scoreboard-timer"
                target="_blank"
                  className="btn btn-default codigo">Github</a>
                <a href="https://shey-esther.github.io/scoreboard-timer/"
                target="_blank"
                  className="btn btn-default codigo">Proyecto</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Portafolio = () => {
  return (
    <BrowserRouter>
      <section
        className="wow portafolio"
        style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
        <div className="container">
          <div className="text-center title animated swing">Portafolio</div>
          <div className="row">
            <div className="col-md-offset-3 col-xs-12 col-md-6">
              <p className="parrafo text-center ">
                Trabajos realizados, separados por categorías de temas generales. También podrá ver el tipo de herramientas y frameworks utilizados.</p>
            </div>
          </div>
        </div>
        <div className="proyectos-portafolio container">
          <div className="row">
            <section>
              <div className="col-md-12 text-center">
                <NavLink to="/Jquery"
                  className="btnp btn "
                  data-filter="Jquery">Jquery</NavLink>
                <NavLink to="/react"
                  className="btnp btn "
                  data-filter="react">react</NavLink>
                <NavLink to="/HTML"
                  className="btnp btn "
                  data-filter="all">Html/css/Js</NavLink>
              </div>
            </section>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={HTML} />
          <Route path="/HTML" component={HTML} />
          <Route path="/CSS" component={CSS} />
          <Route path="/Jquery" component={Jquery} />
          <Route path="/react" component={react} />
        </Switch>
      </section>
    </BrowserRouter>
  )
}


export default Portafolio;







