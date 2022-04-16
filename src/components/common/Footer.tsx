import styled from '@emotion/styled'

const nowYear = new Date().getFullYear()

const Container = styled.footer`
	width: 85.4%;
	background-color: white;
	border-radius: 10px 10px 0 0;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	span {
		display: flex;
		padding: 25px 0;
		justify-content: center;
		color: ${({ theme }) => theme.colors.gray_77};
		font-size: ${({ theme }) => theme.fontSizes.lg};
		font-weight: 400;
	}
`

const Footer = () => (
	<Container>
		<span>
			Copyright &copy; {nowYear}. It&apos;s (It study) All Rights Reserved.
		</span>
	</Container>
)

export default Footer
