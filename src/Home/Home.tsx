import { FunctionComponent, useEffect, useState } from "react";
import Patients from "../Patients/Patients";
import { Patient } from "../types/patients";
import { getPatientList } from "../api/patients";
import NextPatient from "../NextPatient/NextPatient";
import Calendar from "../Calendar/Calendar";
import News from "../News/News";
import Task from "../Task/Task";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [mounted, setMounted] = useState(false);
  const [patientList, setPatientList] = useState<Patient[]>([]);

  const getPatientData = async (): Promise<void> => {
    const patients = await getPatientList();
    setPatientList(patients);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    getPatientData();
  }, [mounted]);

  return (
    <div className="container-fluid">
      <p className="display-6">
        Welcome <b>Dr. Doe!</b>
      </p>
      <div className="row g-4">
        <div className="col">
          <div className="row g-4">
            <div className="col-12">
              <div className="card">
                
                <div className="row">
                  <div className="col-6">
                    <News />
                  </div>
                  <div className="col-6">
                    <Task />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <Calendar />
            </div>
            <div className="col-6">
              <NextPatient patientInfo={patientList[0]} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <Patients patientList={patientList} />
        </div>
      </div>
    </div>
  );
};

export default Home;
