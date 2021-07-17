import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
	const [value, onChange] = useState(new Date());
	return (
		<div className="calendar-flex-container">
			<div>
				<Calendar
					onChange={onChange}
					value={value}
				/>
			</div>
		</div>
	)
}
export default MyCalendar