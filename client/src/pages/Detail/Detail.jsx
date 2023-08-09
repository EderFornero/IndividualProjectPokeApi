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
    return dispatch(cleanDetail())
  }, [dispatch, id]);

  //when component is dismount return empty object (dispatch action)

  return (
    <>
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
          <div><Link to="/home">GO BACK</Link></div>
          {detail ? (
            <div>
              {/*name*/}
              <div>
                <p>Name: </p>
                <h3>{detail.name && detail.name}</h3>
              </div>

              <div>
                <img src={detail.image && detail.image} alt={detail.name} />
              </div>

              {/*hp*/}
              <div>
                <p>Health Points: </p>
                <h3>{detail.health_points && detail.health_points}</h3>
              </div>

              {/*attack*/}
              <div>
                <p>Attack: </p>
                <h3>{detail.attack && detail.attack}</h3>
              </div>

              {/*defense*/}
              <div>
                <p>Defense: </p>
                <h3>{detail.defense && detail.defense}</h3>
              </div>

              {/*height*/}
              <div>
                <p>Height: </p>
                <h3>{detail.height ? detail.height : "Unknow height"}</h3>
              </div>

              {/*weight*/}
              <div>
                <p>Weight: </p>
                <h3>{detail.weight ? detail.weight : "Unknow weight"}</h3>
              </div>

              {/*speed*/}
              <div>
                <p>Speed: </p>
                <h3>{detail.speed ? detail.speed : "Unknow speed"}</h3>
              </div>

              {/*doble verify for types*/}
              <div>
                <p>Types:</p>
                <h3>
                  {Array.isArray(detail.types) &&
                    detail.types.map((type) =>
                    typeof type === "object" ? type.name : type).join(" - ")}
                </h3>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </>
  );
}

export default Detail;
