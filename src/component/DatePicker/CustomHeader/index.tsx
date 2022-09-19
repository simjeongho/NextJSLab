import * as S from './styled';
import PreviousArrowIco from '@/assets/images/DatePicker/previous_arrow.svg';
import NextArrowIco from '@/assets/images/DatePicker/next_arrow.svg';

type Props = {
	date: Date;
	title: string;
	increaseMonth: () => void;
	decreaseMonth: () => void;
};

const CustomDatePickerHeader = ({ date, title, decreaseMonth, increaseMonth }: Props) => {
	return (
		<S.CustomHeaderContainer>
			<span>
				<PreviousArrowIco onClick={decreaseMonth} />
			</span>
			<p>{title}</p>
			<span>
				<NextArrowIco onClick={increaseMonth} />
			</span>
		</S.CustomHeaderContainer>
	);
};

export default CustomDatePickerHeader;
