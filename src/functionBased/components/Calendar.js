import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyApp() {
	const [value, onChange] = useState(new Date());
	return (
		<div className="flex-calendar-container">
			<div>
				<Calendar
					onChange={onChange}
					value={value}
				/>
			</div>
		</div>
	)
}
export default Calendar