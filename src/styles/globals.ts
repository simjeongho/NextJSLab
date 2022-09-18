import { css, Theme } from '@emotion/react';

export const global = (theme: Theme) => css`
	* {
		box-sizing: border-box;
		user-select: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-touch-callout: none;
		-webkit-text-size-adjust: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		scroll-behavior: smooth;
	}

	*::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
	}

	body {
		margin: auto;
		width: 100%;
		min-height: 100vh;
		max-width: 1920px;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	button {
		border: none;
	}

	fieldset {
		border: none;
		padding: 0;
		margin: 0;
	}

	textarea {
		resize: none;
	}

	.a11y-hidden {
		position: absolute;
		clip: rect(0, 0, 0, 0);
		width: 1px;
		height: 1px;
		overflow: hidden;
		margin: -1px;
		border: 0;
		padding: 0;
		white-space: nowrap;
	}

	.swiper .swiper-pagination-bullet {
		width: 4px;
		height: 4px;
	}

	.react-datepicker {
		width: 100%;
		border: none !important;
		border-radius: 0 !important;
	}

	.react-datepicker__header {
		background-color: #ffffff !important;
		border: none !important;
		padding: 0 !important;
	}

	.react-datepicker__day-names {
		border-top: 1px solid #eaeeef !important;
		border-bottom: 1px solid #eaeeef !important;
		padding: 0 24px;

		@media screen and (max-width: 320px) {
			padding: 0 12px;
		}
	}

	.react-datepicker__day-name {
		width: 48px !important;
		height: 36px;
		line-height: 36px !important;
		margin: 0 !important;
		font-weight: 400 !important;
		font-family: 'pretendard_regular' !important;
		font-size: 13px;

		@media screen and (max-width: 374px) {
			width: 40px !important;
		}

		@media screen and (max-width: 320px) {
			width: 36px !important;
		}
	}

	.react-datepicker__month-container {
		width: 100%;
		float: none !important;
	}
	.react-datepicker__month {
		width: 100%;
		margin: 0 !important;
		padding: 20px;

		@media screen and (max-width: 320px) {
			padding: 10px;
		}
	}

	.react-datepicker__week {
		width: 100%;

		&
			> div:not(.react-datepicker__day--disabled):not(.react-datepicker__day--selected):not(.react-datepicker__day--range-end):nth-of-type(1) {
			color: #e74c3c !important;
		}
	}

	.react-datepicker__day--disabled {
		color: #ced3d6 !important;
	}

	.react-datepicker__day {
		width: 48px !important;
		height: 48px !important;
		margin: 0 !important;
		line-height: 48px !important;
		font-size: 16px;
		font-weight: 500 !important;
		font-family: 'pretendard_medium' !important;

		&:not(.react-datepicker__day--disabled):not(.react-datepicker__day--today):not(.react-datepicker__day--selected):not(.react-datepicker__day--range-end):not(:nth-of-type(1)) {
			color: #363a3c !important;
		}

		@media screen and (max-width: 374px) {
			width: 40px !important;
			height: 40px !important;
			line-height: 40px !important;
			font-size: 14px;
		}

		@media screen and (max-width: 320px) {
			width: 36px !important;
			height: 36px !important;
			line-height: 36px !important;
			font-size: 12px;
		}
	}

	.react-datepicker__day--today {
		color: #878d91 !important;
		background-color: #f1f5f5 !important;
		border-radius: 50% !important;
	}

	.react-datepicker__day--selected,
	.react-datepicker__day--selecting-range-start {
		background-color: #369fff !important;
		border-radius: 99px 0px 0px 99px !important;
		color: #ffffff !important;
	}

	.react-datepicker__day--range-end:not(.react-datepicker__day--today) {
		background-color: #369fff !important;
		border-radius: 0px 99px 99px 0px !important;
		color: #ffffff !important;
	}

	.react-datepicker__day--in-range:not(.react-datepicker__day--selected):not(.react-datepicker__day--range-end) {
		background-color: #e9f4ff !important;
		border-radius: 0 !important;
	}

	.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range):not(.react-datepicker__day--selecting-range-start) {
		background-color: #ffffff !important;
		border-radius: 0 !important;
	}

	.react-datepicker__day--keyboard-selected:not(.react-datepicker__day--range-end) {
		background-color: #ffffff;
	}

	.ReactCrop__crop-selection {
		border: 2px solid #ced3d6 !important;
	}
`;
