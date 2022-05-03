import { useMatch, useResolvedPath } from 'react-router-dom';
import { Link, LinkContainer, LinksList, StyledNav } from './HeaderNavLinks.styles';

type CustomLinkProps = {
	mobile: boolean;
	open: boolean;
	to: string;
	children: React.ReactNode;
};
function CustomLink({ mobile, open, children, to }: CustomLinkProps) {
	const { pathname: path } = useResolvedPath(to);
	const active = !!useMatch({ path, end: true });

	return (
		<LinkContainer $mobile={mobile} open={open}>
			<Link $mobile={mobile} open={open} $active={active} to={to}>
				{children}
			</Link>
		</LinkContainer>
	);
}

type HeaderNavLinksProps = {
	mobile: boolean;
	open: boolean;
};
export default function HeaderNavLinks({ mobile, open }: HeaderNavLinksProps) {
	const links = [
		{
			to: '/about',
			children: 'About',
		},
		{
			to: '/careers',
			children: 'Careers',
		},
		{
			to: '/events',
			children: 'Events',
		},
		{
			to: '/products',
			children: 'Products',
		},
		{
			to: '/support',
			children: 'Support',
		},
	];

	return (
		<StyledNav $mobile={mobile} open={open}>
			<LinksList $mobile={mobile} open={open}>
				{links.map(({ to, children }) => (
					<CustomLink key={to} mobile={mobile} open={open} to={to}>
						{children}
					</CustomLink>
				))}
			</LinksList>
		</StyledNav>
	);
}
