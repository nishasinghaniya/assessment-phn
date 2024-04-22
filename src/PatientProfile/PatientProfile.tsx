import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

import "./PatientProfile.scss";
import { Patient } from "../types/patients";
import { editPatientProfile } from "../api/patients";
import EditPatientProfile from "../EditPatientProfile/EditPatientProfile";


const PatientProfile = () => {
  const [modalOpen, toggleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const [patientProfile, setPatientProfile] = useState<Patient | undefined>(
    state
  );
  const [patientProfileForm, setPatientProfileForm] = useState<Patient>();

  const closeModal = () => {
    toggleModal(false);
  };

  const openModal = () => {
    toggleModal(true);
    if (patientProfile)
      setPatientProfileForm(patientProfile)
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();
    if (patientProfileForm) {
      try {
        const res = await editPatientProfile(patientProfileForm);
        setPatientProfile(res);
        closeModal();
        setLoading(false);
        alert("Profile update successful");
      } catch (error) {
        console.log(error, "error");
        setLoading(false);
        alert("Some error occurrred!");
      }      
    }
  };

  return (
    <div className="d-flex flex-row">
      <Sidebar patientInfo={patientProfile} />
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-end pb-4">
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={openModal}
          >
            Edit Information
          </button>
        </div>
        <div className="card">
          <div className="card-body px-5">
            <h5 className="mb-4">Demographics</h5>
            <div className="d-flex flex-column gap-3 demographics">
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">Name</span>
                <span className="demographics-value">
                  {patientProfile?.name}
                </span>
              </div>
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">
                  Gender
                </span>
                <span className="demographics-value">
                  {patientProfile?.gender}
                </span>
              </div>
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">
                  Date of Birth
                </span>
                <span className="demographics-value">
                  {patientProfile?.date_of_birth}
                </span>
              </div>
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">Age</span>
                <span className="demographics-value">
                  {patientProfile?.age}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body px-5">
            <h5 className="mb-4">Contact Information</h5>
            <div className="d-flex flex-column gap-3 demographics">
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">Email</span>
                <span className="demographics-value">
                  {patientProfile?.email}
                </span>
              </div>
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">Phone</span>
                <span className="demographics-value">
                  {patientProfile?.phone}
                </span>
              </div>
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">
                  Address
                </span>
                <span className="demographics-value">
                  {patientProfile?.address}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body px-5">
            <h5 className="mb-4">Insurance</h5>
            <div className="d-flex flex-column gap-3 demographics">
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">
                  Member ID
                </span>
                <span className="demographics-value">
                  {patientProfile?.insurance_member_id}
                </span>
              </div>
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">
                  Policy Holder
                </span>
                <span className="demographics-value">
                  {patientProfile?.policy_holder}
                </span>
              </div>
              <div className="d-flex flex-row">
                <span className="text-secondary demographics-label">
                  Additional Info
                </span>
                <span className="demographics-value">
                  {patientProfile?.additional_info}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal fade ${modalOpen ? "show" : ""}`}
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
          role="document"
        >
          <EditPatientProfile closeModal={closeModal} handleSubmit={handleSubmit} patientProfileForm={patientProfileForm} setPatientProfileForm={setPatientProfileForm} loading={loading} />
        </div>
      </div>
      <div className={`modal-backdrop fade ${modalOpen ? "show" : ""}`}></div>
    </div>
  );
};

export default PatientProfile;
