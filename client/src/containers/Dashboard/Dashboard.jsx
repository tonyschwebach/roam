import React from "react";
import "./Dashboard.css";
import TripCard from "../../components/TripCard/TripCard";


const Dashboard = () => {

  const {userId} = useParams();
  const {id} = useContext(UserContext);

  useEffect(() => {
    if(userId === id){
      axios.get(`/api/trips/?userId=${userId}`)
    }
     
  }, [])
  return (

    <div className="container has-text-centered">
         {/* global alert for not filling out user profile */}
      <div className="columns is-centered">
        
        <div className="column is-8 has-text-centered">
          {/* conditional rendering for displaying name IF it is in the database */}
          <h1 className="title">Welcome, FirstName!</h1>
          <h1 className="title">Your Trips:</h1>
        </div>
      </div>
     
       <TripCard/>
       <TripCard/>
       <TripCard/>
      
      <button className="button is-primary mr-4 is-size-4">Create Trip</button>
    </div>
  );
};

export default Dashboard;
