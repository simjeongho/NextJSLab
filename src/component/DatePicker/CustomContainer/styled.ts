import styled from '@emotion/styled';

export const MyDatePickerContainer = styled.div`
	width: 100%;
	background-color: ${({ theme: { colors } }) => colors.white};
	border-radius: 8px;
	padding: 10px;

	display: flex;
	flex-direction: column;
`;

export const CalenderContainer = styled.div`
	background-color: ${({ theme: { colors } }) => colors.grey[3]};
	border-radius: 8px;
`;
