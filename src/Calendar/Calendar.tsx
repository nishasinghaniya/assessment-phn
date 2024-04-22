import { FunctionComponent, useState } from "react";
import { addDays, format, startOfISOWeek } from "date-fns";
import PrevIcon from "../assets/prev.svg?react";
import NextIcon from "../assets/next.svg?react";
import PlusIcon from "../assets/plus.svg?react";
import CalendarIcon from "../assets/calendar.svg?react";
import { DayPicker, RowProps, Row, CaptionProps } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { getWeek } from "date-fns";

import "./Calendar.scss";

function CustomCaption(props: CaptionProps) {
  return <p className="mb-3">
    <b>
    <span className="dropdown-toggle">{format(props.displayMonth, 'MMMM yyyy')}</span>
  <span className="float-end"><PlusIcon /> <small>Add remindar</small></span>
  </b>
  </p>
}

function CurrentWeekRow(props: RowProps, week: number) {
  const isNotCurrentWeek = props.dates.every((date) => getWeek(date) !== week);
  if (isNotCurrentWeek) return <></>;
  return <Row {...props} />;
}

const Calendar = () => {
  const [week, setWeek] = useState(getWeek(new Date()));
  const [startDateofWeek, setStartDateofWeek] = useState(
    startOfISOWeek(new Date())
  );
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  const handelNextWeekChange = () => {
    const newDate = addDays(startDateofWeek, 7);
    setStartDateofWeek(newDate);
    setWeek(() => getWeek(newDate));
  };

  const handelPrevWeekChange = () => {
    const newDate = addDays(startDateofWeek, -7);
    setStartDateofWeek(newDate);
    setWeek(() => getWeek(newDate));
  };

  return (
    <div className="card">
      <div className="card-body p-0">
        <div className="d-flex flex-row justify-content-around align-items-center">
          <button className="btn" onClick={handelPrevWeekChange}>
            <PrevIcon />
          </button>
          <DayPicker
            mode="single"
            month={new Date(startDateofWeek)}
            showOutsideDays
            formatters={{formatWeekdayName: (week) => format(week, 'EEE')}}
            selected={selected}
            onSelect={setSelected}
            components={{ Row: (props) => CurrentWeekRow(props, week), Caption: CustomCaption }}
            modifiersClassNames={{
              selected: 'bg-primary text-white',
              today: `${selected === new Date() && 'bg-primary text-white'}`
            }}
          />
          <button className="btn" onClick={handelNextWeekChange}>
            <NextIcon />
          </button>
        </div>
        <ul className="list-group list-group-flush remindar-list">
          <li className="list-group-item d-flex flex-row align-items-center gap-3">
            <span className="btn btn-primary p-2 d-flex align-items-center">
              <CalendarIcon />
            </span>
            <div className="d-flex flex-column reminder-detail">
              <span className="title">
                Consultation
              </span>
              <span>with Sam Lewis</span>
              <span className="text-secondary">09:20 AM - 11:30 AM</span>
            </div>
          </li>
          <li className="list-group-item d-flex flex-row align-items-center gap-3">
            <span className="btn btn-primary p-2 d-flex align-items-center">
              <CalendarIcon />
            </span>
            <div className="d-flex flex-column reminder-detail">
              <span className="title">
                Consultation
              </span>
              <span>with Sam Lewis</span>
              <span className="text-secondary">09:20 AM - 11:30 AM</span>
            </div>
          </li>
          <li className="list-group-item d-flex flex-row align-items-center gap-3">
            <span className="btn btn-primary p-2 d-flex align-items-center">
              <CalendarIcon />
            </span>
            <div className="d-flex flex-column reminder-detail">
              <span className="title">
                Joint Consultation for Brian Jones
              </span>
              <span>with Brain Damage Team</span>
              <span className="text-secondary">09:20 AM - 11:30 AM</span>
            </div>
          </li>
          <li className="list-group-item d-flex flex-row align-items-center gap-3">
            <span className="btn btn-primary p-2 d-flex align-items-center">
              <CalendarIcon />
            </span>
            <div className="d-flex flex-column reminder-detail">
              <span className="title">
                MRI Results
              </span>
              <span>with Carl Friedman</span>
              <span className="text-secondary">09:20 AM - 11:30 AM</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
