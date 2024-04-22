import { Patient } from "../types/patients";

interface GetPatientsInterface {
  message: string;
  patients: Patient[];
}

interface PutPatientsInterface {
  message: string;
  data: Patient;
}

const getPatientList = async (): Promise<Patient[]> => {
  return fetch("http://assessment.banoskolar.com/api/patientsList")
    .then((res) => res.json())
    .then((res: GetPatientsInterface) => {
      if (res.message === "Patients found") {
        return res.patients;
      }
      return [];
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

const editPatientProfile = async (
  patientProfile: Patient
): Promise<Patient | undefined> => {
  return fetch(
    `http://assessment.banoskolar.com/api/patient-records/${patientProfile.id}`,
    {
      method: "put",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(patientProfile),
    }
  )
    .then((res) => res.json())
    .then((res: PutPatientsInterface) => {
      if (res.message === "Patient record updated") {
        return res.data;
      } else {
        throw new Error("Some error occurred");
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error("Some error occurred");
    });
};

export { getPatientList, editPatientProfile };
