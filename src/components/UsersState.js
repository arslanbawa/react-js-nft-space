import React from "react";

function UsersState() {
  return (
    <div className="usersContainer">
      <div className="row">
        <div className="col-4">
          <div>
            <div className="row">
              <div className="col-10">
                <div className="usersContentWrapper">
                  <p className="statesHeading">Active Users</p>
                  <p className="statesText">80K</p>
                </div>
              </div>
              <div className="col-2">
                <div className="vertical"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div>
            <div className="row">
              <div className="col-10">
                <div className="usersContentWrapper">
                  <p className="statesHeading">Art Work</p>
                  <p className="statesText">10K</p>
                </div>
              </div>
              <div className="col-2">
                <div className="vertical"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div>
            <div className="row">
              <div className="col-10">
                <div className="usersContentWrapper">
                  <p className="statesHeading">Artist</p>
                  <p className="statesText">20K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersState;
