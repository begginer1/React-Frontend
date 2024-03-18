import React, { useContext, useEffect } from "react";
import Profile from "../images/ProfilePic.png";
import { AuthContext } from "./context/AuthProvider";

import { useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
export default function DownloadReport() {
  const { auth, incId } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  console.log(auth)
  const navigate=useNavigate()
  useEffect(() => {
    UserService.downloadReport(incId, auth)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .then();
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{ backgroundColor: "#C7C8CC", width: "25%", height: "100%" }}
        />
        <div
          style={{ backgroundColor: "#FBF9F1", width: "50%", height: "100%" }}
        >
          <p
            className="text"
            style={{
              textAlign: "center",
              backgroundColor: "#50C4ED",
              height: "4%",
            }}
          >
            Report
          <button className="btn btn-primary " style={{display:'flex'}} onClick={()=>navigate("/dashboard")}>Back</button> 
          </p>

          <div
            style={{ display: "flex", justifyContent: "center", height: "16%" }}
          >
            <img src={Profile} alt="profilepic" />
          </div>
          <p
            style={{ textAlign: "center", marginTop: "1%", fontWeight: "bold" }}
          >
            Name:{user?.name}
          </p>
          <p
            className="text"
            style={{ backgroundColor: "#50C4ED", textAlign: "center" }}
          >
            User Details
          </p>
          <div
            style={{
              display: "flex",
              alignSelf: "center",
              justifyContent: "space-between",
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            <span>
              <div>
                <p className="text">UserId:</p>
                <p  className="text"style={{ fontWeight: "lighter", marginLeft: "1%" }}>
                  {user?.id}
                </p>
              </div>
              <div>
                <p className="text">PanNumber:</p>
                <p  className="text"style={{ fontWeight: "lighter", marginLeft: "1%" }}>
                  {user?.panNumber}
                </p>
              </div>
            </span>

            <span>
              <div>
                <p className="text">AadharNumber:</p>
                <p  className="text"style={{ fontWeight: "lighter", marginLeft: "1%" }}>
                  {user?.aadharNumber}
                </p>
              </div>
              <div>
                <p className="text">Email:</p>
                <p className="text"style={{ fontWeight: "lighter", marginLeft: "1%" }}>
                  {user?.email}
                </p>
              </div>
            </span>

            <span>
              <div>
                <p className="text">Date-Of-Birth:</p>
                <p  className="text"style={{ fontWeight: "lighter", marginLeft: "1%" }}>
                  {user?.dateOfBirth}
                </p>
              </div>
              <div>
                <p className="text">Age:</p>
                <span className="text" style={{ fontWeight: "lighter", marginLeft: "1%" }}>
                  {user?.age}
                </span>
              </div>
            </span>
            <span>
              
              
            </span>
          </div>

          <p
            className="text"
            style={{ backgroundColor: "#50C4ED", textAlign: "center" }}
          >
            Incident Details
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "16%",
              marginLeft: "2%",
              marginRight: "2%",
              flex:1
            }}
          >
            <span style={{width:'50%'}}>
              <div>
                <p className="text">Incident Id:<span style={{ fontWeight: "lighter",marginLeft:'4%'}}>
                  {user?.incident[0].id}
                  </span></p>
                
              </div>
              <div>
                <p className="text">status:
                <span style={{ fontWeight: "lighter",marginLeft:'4%'}}>
                  {user?.incident[0].status}
                  </span></p>
              </div>
              <div>
                <p className="text">IncidentType:
                <span style={{ fontWeight: "lighter",marginLeft:'4%'}}>
                  {user?.incident[0].incidentType}
                  </span></p>
              </div>
              <div >
                <p className="text">ItemName:
                <span style={{ fontWeight: "lighter",marginLeft:'4%'}}>
                  {user?.incident[0].itemName}
                  </span>
                  </p>
              </div>
            </span>
            <span style={{width:'50%'}}>
              <div>
                <p className="text">Image:
                <span style={{ fontWeight: "lighter",marginLeft:'4%'}}>
                  {user?.incident[0].image}
                  </span></p>
              </div>
              <div>
                <p className="text">Description:<span style={{ fontWeight: "lighter", marginLeft:'4%'}}>
                  {user?.incident[0].description}
                  </span></p>
              </div>
              <div>
                <p className="text">Location:
                <span style={{ fontWeight: "lighter", marginLeft:'4%'}}>
                  {user?.incident[0].location}
                  </span></p>
              </div>
              <div>
                <p className="text">date-Of-Incident
                <span style={{ fontWeight: "lighter", marginLeft:'4%'}}>
                  {user?.incident[0].dateOfIncident}
                  </span></p>
              </div>
            </span>
          </div>

          <p
            className="text"
            style={{
              backgroundColor: "#50C4ED",
              textAlign: "center",
              marginTop: "4%",
            }}
          >
            Officer Details
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "16%",
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            <span style={{width:'50%'}}>
              <div>
                <p className="text">OfficerId:<span style={{ fontWeight: "lighter", marginLeft:'4%'}}>
                  {user?.incident[0]?.officerList[0]?.id}
                  </span></p>
              </div>
              <div>
                <p className="text">Name<span style={{ fontWeight: "lighter", marginLeft:'4%'}}>
                {user?.incident[0]?.officerList[0]?.name}
                  </span></p>
              </div>
              <div>
                <p className="text">Email<span style={{ fontWeight: "lighter", marginLeft:'4%'}}>
                {user?.incident[0]?.officerList[0]?.email}
                  </span></p>
              </div>
            </span>
            <span style={{width:'50%'}}>
              <div>
                <p className="text">badgeNumber<span style={{ fontWeight: "lighter", marginLeft:'4%'}}>
                {user?.incident[0]?.officerList[0]?.badgeNumber}
                  </span></p>
              </div>
              <div>
                <p className="text">Rank<span style={{ fontWeight: "lighter", marginLeft:'4%'}}>
                {user?.incident[0]?.officerList[0]?.rank}
                  </span></p>
              </div>
            </span>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#C7C8CC", width: "25%", height: "100%" }}
        />
      </div>
    </div>
  );
}
