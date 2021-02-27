import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../../utils/API";
import "./SingleTrip.css";
import UserContext from "../../contexts/UserContext";

const SingleTrip = () => {
  const { userContext } = useContext(UserContext);

  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [travelers, setTravelers] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  // browser params
  const { tripId } = useParams();
  const { userId } = useParams();

  useEffect(() => {
    if (tripId) {
      API.getTrip(tripId)
        .then((response) => {
          // console.log(response.data);
          setDestination(response.data.destination);
          const responseStartDate = new Date(response.data.startDate);
          const responseEndDate = new Date(response.data.endDate);
          setStartDate(responseStartDate);
          setEndDate(responseEndDate);
          setTravelers(response.data.travelers);
          setImageUrl(response.data.imageUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="container mt-6 pl-6 pr-6">
      <h1 className="title has-text-centered">Your trip to {destination}!</h1>
      <h1 className="subtitle has-text-centered">
        {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
      </h1>

      <div className="columns is-centered">
        <div className="column is-6 trip-container">

          <figure>
            <img className="trip-image" src={imageUrl} />
          </figure>
        {/* </div>
        <div className="column is-3"> */}
          <div class="card single-trip-card">
            <div class="card-content">
              <div class="content">
                <h2 className="subtitle">Travelers:</h2>
                <ul>
                  {travelers.map((traveler, index) => {
                    console.log(traveler.travelerEmail);
                    console.log(userContext.email);
                    return (
                      <li key={index}>
                        {traveler.travelerEmail === userContext.email && (
                          <span>YOU - </span>
                        )}
                        {`${traveler.travelerEmail} - `}
                        <span>
                          <em>{traveler.status}</em>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-2">
         /
          <Link
            to={`/user/${userId}/trips`}
            className="button is-primary mr-4 is-size-4"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTrip;
