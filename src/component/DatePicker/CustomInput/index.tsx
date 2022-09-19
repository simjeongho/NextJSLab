import * as S from './styled';
type Props = {
	isClicked: boolean;
	placeholder: string;
};

const CustomDatePickerInput = ({ isClicked, placeholder }: Props) => {
	return <S.CustomInput isClicked={isClicked}>{placeholder}</S.CustomInput>;
};

export default CustomDatePickerInput;
