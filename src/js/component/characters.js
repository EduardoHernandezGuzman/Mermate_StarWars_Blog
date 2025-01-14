import React ,{useContext}from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Character = (props) => {

  const { store, actions } = useContext(Context);

	return (

    //  También he añadido este contenedor para contener toda la card
    <div className=" contenedorPersonajes">
    {/* Aquí */}

        <div className="card " style={{width: "18rem"}}>
        <img src="" className="card-img-top " alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>

          <p className="card-text">Gender: {props.gender}</p>
          <p className="card-text"> Hair color:{props.hair_color}</p>
          <p className="card-text">Eye color: {props.eye_color}</p>
          

         
          <Link className="btn btn-primary" to={"/single/1"}>
						<span>Learn More!</span>
					</Link>

         

          <button onClick={() => actions.changeMessage(props.name)}>

          {/* Hacemos una llamada a la función de Flux heartColor para que cambie el color del corazón al hacer click en el */}
            {actions.heartColor(props.name) ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>}
          </button>



        </div>
      </div>

      {/* añadido */}
      </div>
      // añadido

	);
};