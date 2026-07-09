import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ReadingCalendar.css";

function ReadingCalendar() {
  const [selectedDates, setSelectedDates] = useState([]);

  function handleDateClick(date) {
    const clickedDate = date.toDateString();

    if (selectedDates.includes(clickedDate)) {
      setSelectedDates(
        selectedDates.filter((d) => d !== clickedDate)
      );
    } else {
      setSelectedDates([...selectedDates, clickedDate]);
    }
  }

  return (
    <div className="calendar-container">
      <h2>📅 Reading Planner</h2>

      <div className="calendar-card">
        <Calendar
          onClickDay={handleDateClick}
          tileClassName={({ date }) =>
            selectedDates.includes(date.toDateString())
              ? "selected-day"
              : ""
          }
          next2Label={null}
          prev2Label={null}
          formatShortWeekday={(locale, date) =>
            ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][date.getDay()]
          }
        />

        <div className="calendar-legend">
          <div className="legend-item">
            <span className="legend-dot upcoming"></span>
            <span>Upcoming Event</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot past"></span>
            <span>Past Event</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadingCalendar;