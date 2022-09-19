import { ReactNode } from 'react';
import * as S from './styled';

type Props = {
	children: ReactNode;
};
const MyDatePickerContainer = ({ children }: Props) => {
	return (
		<S.MyDatePickerContainer>
			<S.CalenderContainer>what is your favorite day?</S.CalenderContainer>
			{children}
		</S.MyDatePickerContainer>
	);
};

export default MyDatePickerContainer;
