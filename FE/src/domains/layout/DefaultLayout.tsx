import { Logo, getSemanticValue } from '@freenow/wave';
import styled from 'styled-components';

const Container = styled.div`
	background-color: ${getSemanticValue('background-page-default')};
`;

const Header = styled.header`
	padding: 16px 16px 24px 16px;
	border-bottom: 1px solid #F1F2F4;
`;

const Main = styled.main`
	padding: 34px 16px 0 16px;
`;

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container>
			<Header>
				<Logo />
			</Header>
			<Main>{children}</Main>
		</Container>
	);
};
