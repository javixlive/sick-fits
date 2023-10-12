import propTypes from 'prop-types';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	@font-face {
		font-family: 'radnika_next';
		src: url('/static/radnikanext-medium-webfont.woff2');
		format: ('woff2');
		font-weight: normal;
		font-style: normal;

	}

	html {
		--red: #ff0000;
		--black: #393939;
		--grey: #3a3a3a;
		--gray: var(--grey);
		--lightGrey: #e1e1e1;
		--lightGray: var(--lightGrey);
		--offWhite: #ededed;
		--maxWidth: 1000px;
		--bs: 0 12px 24px 0 rgba(0,0,0,0.89);
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		font-family: 'radnika_next', system-ui, -apple-system, 
		BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
	}

	a {
		text-decoration: none;
		color: var()(--black);
	}

	button {
		font-family: 'radnika_next', system-ui, -apple-system, 
		BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
`;

const InnerStyles = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 2rem;
`;

const Page = ({ children, cool }) => (
	<div>
		<GlobalStyles />
		<Header />
		<InnerStyles> {children} </InnerStyles>
		
	</div>
);

Page.propTypes = {
	cool: propTypes.string,
	children: propTypes.any
};

export default Page;
