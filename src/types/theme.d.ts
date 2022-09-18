import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: {
				sky: string;
				lightSky: string;
			};
			sub: {
				failure: string;
				border: string;
			};
			grey: {
				0: string;
				1: string;
				2: string;
				3: string;
				4: string;
				5: string;
				6: string;
				7: string;
				8: string;
				9: string;
			};
			white: string;
		};

		fontSize: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			xxl: string;
		};

		fontFamily: {
			regular: string;
			medium: string;
			semiBold: string;
			bold: string;
		};
	}
}
