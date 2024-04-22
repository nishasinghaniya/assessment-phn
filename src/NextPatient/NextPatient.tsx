import { FunctionComponent } from "react";
import { Patient } from "../types/patients";
import LocationIcon from "../assets/location.svg?react";
import NavigateIcon from "../assets/navigate.svg?react";

import "./NextPatient.scss";
import { Link } from "react-router-dom";

interface NextPatientProps {
  patientInfo: Patient;
}

const NextPatient: FunctionComponent<NextPatientProps> = (props) => {
  const { patientInfo } = props;
  return (
    <div className="card">
      <div className="card-body d-flex flex-column gap-3">
      <h5>Next patient's details <Link to={`profiles/${patientInfo?.id}`} state={patientInfo}><NavigateIcon className="float-end" /></Link></h5>
        <div className="d-flex flex-column align-items-center">
          <img
            src="https://github.com/mdo.png"
            width="64"
            height="64"
            alt=""
            className="rounded-circle"
          />
          <span>{patientInfo?.name}</span>
          <span className="patient-age-address">
            <small className="text-muted age">
              {patientInfo?.age} years old
            </small>
            |
            <small className="text-dark address">
              <LocationIcon /> {patientInfo?.address}
            </small>
          </span>
        </div>
        <div className="patient-physique">
          <div className="d-flex flex-column align-items-center">
            <small className="text-secondary">Blood</small>
            <small>
              <b>{patientInfo?.blood_group}</b>
            </small>
          </div>
          <div className="d-flex flex-column align-items-center">
            <small className="text-secondary">Height</small>
            <small>
              <b>{patientInfo?.height}</b>
            </small>
          </div>
          <div className="d-flex flex-column align-items-center">
            <small className="text-secondary">Weight</small>
            <small>
              <b>{patientInfo?.weight}</b>
            </small>
          </div>
        </div>
        <ul
          className="navbar-nav d-flex flex-row gap-4"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-2 active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Summary
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-2"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Conditions
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-2"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Notes
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {patientInfo?.summary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextPatient;
