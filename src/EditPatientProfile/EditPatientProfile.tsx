import { FunctionComponent, ChangeEvent, FormEvent } from "react";
import { Patient } from "../types/patients";

interface EditPatientProfileProps {
  patientProfileForm: Patient | undefined;
  setPatientProfileForm: React.Dispatch<
    React.SetStateAction<Patient | undefined>
  >;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  closeModal: () => void;
  loading: boolean
}

const EditPatientProfile: FunctionComponent<EditPatientProfileProps> = (
  props
) => {
  const {
    patientProfileForm,
    setPatientProfileForm,
    handleSubmit,
    closeModal,
    loading
  } = props;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPatientProfileForm((patientInfo: Patient | undefined) => {
      if (patientInfo) {
        return { ...patientInfo, [e.target.name]: e.target.value };
      } else {
        return patientInfo;
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="modal-content position-relative"
      method="post"
    >
      <div className="modal-header">
        <h5 className="modal-title" id="modalTitleId">
          Edit Patient Profile
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={closeModal}
        ></button>
      </div>
      <div className="modal-body px-4">
        <h5 className="mb-3">Demographics</h5>
        <div className="p-2">
          <div className="mb-3 form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              aria-describedby="helpId"
              value={patientProfileForm?.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="name" className="form-label">
              Gender
            </label>
            <br></br>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderMale"
                checked={patientProfileForm?.gender === "Male"}
                value="Male"
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="genderMale">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderFemale"
                checked={patientProfileForm?.gender === "Female"}
                value="Female"
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="genderFemale">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderOther"
                value="Other"
                checked={patientProfileForm?.gender === "Other"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="genderOther">
                Other
              </label>
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="date_of_birth" className="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              name="date_of_birth"
              id="date_of_birth"
              className="form-control"
              aria-describedby="helpId"
              value={patientProfileForm?.date_of_birth}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              max={99}
              min={0}
              maxLength={2}
              className="form-control"
              value={patientProfileForm?.age}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <h5 className="my-3">Contact Information</h5>
        <div className="p-2">
          <div className="mb-3 form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={patientProfileForm?.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              value={patientProfileForm?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              name="address"
              id="address"
              rows={3}
              onChange={handleInputChange}
              value={patientProfileForm?.address}
            ></textarea>
          </div>
        </div>
        <h5 className="my-3">Insurance</h5>
        <div className="p-2">
          <div className="mb-3 form-group">
            <label htmlFor="insurance_member_id" className="form-label">
              Member Id
            </label>
            <input
              type="text"
              name="insurance_member_id"
              id="insurance_member_id"
              className="form-control"
              value={patientProfileForm?.insurance_member_id}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="policy_holder" className="form-label">
              Policy Holder
            </label>
            <input
              type="text"
              name="policy_holder"
              id="policy_holder"
              className="form-control"
              value={patientProfileForm?.policy_holder}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="additional_info" className="form-label">
              Additional Info
            </label>
            <textarea
              className="form-control"
              name="additional_info"
              id="additional_info"
              rows={3}
              value={patientProfileForm?.additional_info}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={closeModal}
        >
          Close
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
     {loading && <div className="loader">
        <div className="spinner-border text-primary"  role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>}
    </form>
  );
};

export default EditPatientProfile;
