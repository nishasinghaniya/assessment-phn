import { FunctionComponent } from "react"
import { Patient } from "../../types/patients";
import LocationIcon from "../../assets/location.svg?react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  patientInfo: Patient | undefined
}
 
const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  const {patientInfo} = props;
  return ( <div className="d-flex flex-column align-items-center flex-shrink-0 py-4 bg-light" style={{width: '350px'}}>
    <h3 className="mb-5">Patient Profile</h3>
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
  <hr />
  <ul className="nav nav-pills flex-column mb-auto w-100">
    <li className="nav-item">
      <NavLink to="" end className="nav-link px-3 py-2" aria-current="page">
        General Information
      </NavLink>
    </li>
    <li>
      <NavLink to="medical-history" className="nav-link px-3 py-2">
        Medical History
      </NavLink>
    </li>
    <li>
      <NavLink to="consulation" className="nav-link px-3 py-2">
        Consultation Notes
      </NavLink>
    </li>
    <li>
      <NavLink to="action-plans" className="nav-link px-3 py-2">
        Action Plans
      </NavLink>
    </li>
    <li>
      <NavLink to="files" className="nav-link px-3 py-2">
        Files
      </NavLink>
    </li>
    <li>
      <NavLink to="stats" className="nav-link px-3 py-2">
        Wearable Stats
      </NavLink>
    </li>
  </ul>
  <hr />
</div> );
}
 
export default Sidebar;