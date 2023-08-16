import React, { useEffect, useState } from "react";
//router
import { Link, useParams } from "react-router-dom";
//react redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { cleanDetail, getDetail } from "../../redux/actions/index";
//css
import "./Detail.css";

function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const detail = useSelector((state) => state.getDetail);

  //verify if is a valid id
  const [idValid, setIdValid] = useState(true);

  useEffect(() => {
    dispatch(getDetail(id, setIdValid));
    return dispatch(cleanDetail());
  }, [dispatch, id]);

  //when component is dismount return empty object (dispatch action)

  return (
    <div className="div-detail-father">
      {/*if id does not exist show a text and button from home*/}
      {!idValid && (
        <div>
          <p className="id-not-valid">ID not valid</p>
          <Link to="/home">GO BACK</Link>
        </div>
      )}
      {idValid && (
        <>
          {/*if id exist show pokemons*/}
          {detail ? (
            <div className="div-detail">
              <div className="card-detail-container">
                <div className="card-detail-image">
                  <img src={detail.image && detail.image} alt={detail.name} />
                </div>
                <div className="card-detail-content">
                  <div className="card-detail-name">
                    <h3>
                      {detail.name &&
                        detail.name.charAt(0).toUpperCase() +
                          detail.name.slice(1)}
                    </h3>
                  </div>
          
                  <div className="card-detail-attributes">

                  {/*health points*/}
                    <div className="card-detail-in-attributes">
                      <p>Health Points: </p>
                      <h3>{detail.health_points && detail.health_points}</h3>
                    </div>
                 

                  {/*attack*/}
                  <div className="card-detail-in-attributes">
                    <p>Attack: </p>
                    <h3>{detail.attack && detail.attack}</h3>
                  </div>

                  {/*defense*/}
                  <div className="card-detail-in-attributes">
                    <p>Defense: </p>
                    <h3>{detail.defense && detail.defense}</h3>
                  </div>

                  {/*height*/}
                  <div className="card-detail-in-attributes">
                    <p>Height: </p>
                    <h3>{detail.height ? detail.height : "Unknown height"}</h3>
                  </div>

                  {/*weight*/}
                  <div className="card-detail-in-attributes">
                    <p>Weight: </p>
                    <h3>{detail.weight ? detail.weight : "Unknown weight"}</h3>
                  </div>

                  {/*speed*/}
                  <div className="card-detail-in-attributes">
                    <p>Speed: </p>
                    <h3>{detail.speed ? detail.speed : "Unknown speed"}</h3>
                  </div>

                  {/*doble verify for types*/}
                  <div className="card-detail-in-attributes">
                    <p>Types:</p>
                    <h3>
                      {Array.isArray(detail.types) &&
                        detail.types
                          .map((type) =>
                            typeof type === "object" ? type.name.charAt(0).toUpperCase() + type.name.slice(1) : type
                          )
                          .join(" - ")}
                    </h3>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        <div className="div-bottom-link-to-home">
          <Link className="bottom-link-to-home" to="/home">GO BACK</Link>
        </div>
        </>
      )}
    </div>
  );
}

export default Detail;
