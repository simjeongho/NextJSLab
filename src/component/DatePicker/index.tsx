import * as S from './styled';
import CalenderIco from '@/assets/images/calender.svg';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import MyDatePickerContainer from './CustomContainer';
import 'react-datepicker/dist/react-datepicker.css';
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import CustomDatePickerInput from './CustomInput';
import CustomDatePickerHeader from './CustomHeader';

type Props = {
	initialStartDate?: Date;
	initialEndDate?: Date;
};

const CustomDatePicker = ({ initialStartDate, initialEndDate }: Props) => {
	const [startDate, setStartDate] = useState<Date | null>(initialStartDate || null);
	const [endDate, setEndDate] = useState<Date | null>(initialEndDate || null);
	const [isClicked, setIsClicked] = useState(false);
	const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
	const onChange = (dates: Date[]) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};
	return (
		<>
			<S.DatePickerContainer>
				<DatePicker
					selected={startDate}
					onChange={onChange}
					calendarContainer={MyDatePickerContainer}
					renderCustomHeader={({ date, title, increaseMonth, decreaseMonth }) => (
						<CustomDatePickerHeader
							date={date}
							title={months[date.getMonth()]}
							increaseMonth={increaseMonth}
							decreaseMonth={decreaseMonth}
						/>
					)}
					startDate={startDate}
					endDate={endDate}
					selectsRange
					inline
					dateFormat="yyyy.mm.dd"
				/>
			</S.DatePickerContainer>
		</>
	);
};

export default CustomDatePicker;
