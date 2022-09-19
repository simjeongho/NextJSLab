import styled from '@emotion/styled';

type StyledProps = {
	isClicked: boolean;
};

export const CustomInput = styled.button<StyledProps>`
	border: 1px solid ${({ isClicked, theme: { colors } }) => (isClicked ? colors.primary.sky : colors.grey[4])};
	border-radius: 10px;
	padding: 16px 12px 16px 16px;
`;
