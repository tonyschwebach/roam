import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./TripCard.css";
import UserContext from "../../contexts/UserContext";
import "react-dates/lib/css/_datepicker.css";

const TripCard = ({
  destination,
  startDate,
  endDate,
  travelers,
  tripId,
  tripCreator,
  imageUrl,
}) => {
  const { id } = useContext(UserContext);

  // browser params
  // const { tripId } = useParams();
  const { userId } = useParams();

  return (
    <div className="column is-4 is-one-third-fullhd is-half-desktop ">
      <div className="card trip-card">
        <Link to={`/user/${userId}/trips/${tripId}`}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img className="places-image" src={imageUrl} />
            </figure>
          </div>
        </Link>

        <div className="card-content has-text-left">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-9">
                  <Link to={`/user/${userId}/trips/${tripId}`}>
                    <p className="destination title">{destination} </p>
                  </Link>
                </div>
                <div className="column is-3">
                  {/* <Link to={`/user/${userId}/trips/${tripId}`}>
                    <i className="icon fas fa-eye"></i>
                  </Link> */}
                  {userId === tripCreator && (
                    <Link to={`/user/${userId}/trips/${tripId}/edit`}>
                      <i className="icon far fa-edit m-1"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10">
              <div className="content">
                <svg
                  className="DateRangePickerInput_calendarIcon_svg DateRangePickerInput_calendarIcon_svg_1"
                  focusable="false"
                  viewBox="0 0 1393.1 1500"
                >
                  <path d="m107 1393h241v-241h-241zm295 0h268v-241h-268zm-295-295h241v-268h-241zm295 0h268v-268h-268zm-295-321h241v-241h-241zm616 616h268v-241h-268zm-321-616h268v-241h-268zm643 616h241v-241h-241zm-322-295h268v-268h-268zm-294-723v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm616 723h241v-268h-241zm-322-321h268v-241h-268zm322 0h241v-241h-241zm27-402v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm321-54v1072c0 29-11 54-32 75s-46 32-75 32h-1179c-29 0-54-11-75-32s-32-46-32-75v-1072c0-29 11-54 32-75s46-32 75-32h107v-80c0-37 13-68 40-95s57-39 94-39h54c37 0 68 13 95 39 26 26 39 58 39 95v80h321v-80c0-37 13-69 40-95 26-26 57-39 94-39h54c37 0 68 13 94 39s40 58 40 95v80h107c29 0 54 11 75 32s32 46 32 75z"></path>
                </svg>
                <span className="ml-2">
                  {startDate?.toLocaleDateString()} -{" "}
                  {endDate?.toLocaleDateString()}
                </span>

                <p>
                  <i className="fas fa-users fa-xs mr-2"></i>
                  {travelers.length}
                  <Link to={`/user/${userId}/trips/${tripId}/expenses`}>
                  <p className="is-size-6 expenses-link">
                    View All Expenses
                  </p>
                </Link>
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
