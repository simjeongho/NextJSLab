import { Theme } from '@emotion/react';

const theme: Theme = {
	colors: {
		primary: {
			sky: '#369FFF',
			lightSky: '#ACD7FF',
		},
		sub: {
			failure: '#E74C3C',
			border: '#C9CCCF',
		},
		grey: {
			0: '#f8fafb',
			1: '#f1f5f5',
			2: '#eaeeef',
			3: '#e1e4e6',
			4: '#ced3d6',
			5: '#a9afb3',
			6: '#878d91',
			7: '#4d5256',
			8: '#363a3c',
			9: '#292a2b',
		},
		white: '#ffffff',
	},

	fontSize: {
		xs: '12px',
		sm: '13px',
		md: '14px',
		lg: '16px',
		xl: '18px',
		xxl: '24px',
	},

	fontFamily: {
		regular: 'pretendard_regular',
		medium: 'pretendard_medium',
		semiBold: 'pretendard_semiBold',
		bold: 'pretendard_bold',
	},
};

export default theme;
