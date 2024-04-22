import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Patient } from "../types/patients";

import "./Patients.scss";

interface PatientsProps {
  patientList: Patient[];
}

const Patients: FunctionComponent<PatientsProps> = (props) => {
  const { patientList } = props;
  const navigate = useNavigate();

  const handleClick = (patientData: Patient) => {
    navigate(`profiles/${patientData.id}`, {
      state: patientData,
    });
  };

  return (
    <div className="card patient-list-card">
      <div className="card-body">
      <h5>Upcoming Consultations</h5>
        <ul className="list-group list-group-flush">
          {patientList.map((e) => (
            <li key={e.id} className="list-group-item d-flex flex-row align-items-center justify-content-between py-3 gap-3">
              <a role="button" onClick={() => handleClick(e)} style={{display: 'contents'}}>
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="56"
                  height="56"
                  className="rounded-circle"
                />
                <div className="d-flex flex-column patient-details">
                  <span>{e.name}</span>
                  <small className="text-secondary">
                    18 May, 2024 | 9:00PM
                  </small>
                </div>
                <span className="flex-grow-1 text-end">
                  <button
                    className="btn btn-primary"
                  >
                    Clinical Record
                  </button>
              </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Patients;
