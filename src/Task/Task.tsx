import CalendarIcon from "../assets/calendar.svg?react";
import NavigateIcon from "../assets/navigate.svg?react";

const Task = () => {
  return (
    <div className="card-body d-flex flex-column px-4 gap-2">
      <h5 className="d-flex flex-row justify-content-between">
        Today's Tasks <button className="btn btn-sm btn-primary">12</button>
      </h5>
      <ul className="list-group gap-2 task-list">
        <li className="list-group-item d-flex flex-row align-items-center gap-3">
          <span className="btn btn-primary p-2 d-flex align-items-center">
            <CalendarIcon />
          </span>
          <div className="d-flex flex-column reminder-detail">
            <span className="title">Consultation</span>
            <span className="text-secondary">09:20 AM - 11:30 AM</span>
          </div>
          <span className="flex-grow-1 text-end"><NavigateIcon /></span>
        </li>
        <li className="list-group-item d-flex flex-row align-items-center gap-3">
          <span className="btn btn-primary p-2 d-flex align-items-center">
            <CalendarIcon />
          </span>
          <div className="d-flex flex-column reminder-detail">
            <span className="title">Consultation</span>
            <span className="text-secondary">09:20 AM - 11:30 AM</span>
          </div>
          <span className="flex-grow-1 text-end"><NavigateIcon /></span>
        </li>
        <li className="list-group-item d-flex flex-row align-items-center gap-3">
          <span className="btn btn-primary p-2 d-flex align-items-center">
            <CalendarIcon />
          </span>
          <div className="d-flex flex-column reminder-detail">
            <span className="title">Joint Consultation for Brian Jones</span>
            <span className="text-secondary">09:20 AM - 11:30 AM</span>
          </div>
          <span className="flex-grow-1 text-end"><NavigateIcon /></span>
        </li>
      </ul>
      <a href="#" className="align-self-end">
        View All
      </a>
    </div>
  );
};

export default Task;
