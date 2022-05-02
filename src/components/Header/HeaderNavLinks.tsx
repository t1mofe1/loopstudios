import { Link, LinkContainer, LinksList, StyledNav } from './HeaderNavLinks.styles';

type HeaderNavLinksProps = {
	mobile?: boolean;
	isOpen?: boolean;
};
export function HeaderNavLinks({ mobile = false, isOpen = false }: HeaderNavLinksProps) {
	return (
		<StyledNav {...{ mobile, isOpen }}>
			<LinksList {...{ mobile, isOpen }}>
				<LinkContainer {...{ mobile, isOpen }}>
					<Link {...{ mobile, isOpen }} href="/about">
						About
					</Link>
				</LinkContainer>
				<LinkContainer {...{ mobile, isOpen }}>
					<Link {...{ mobile, isOpen }} href="/careers">
						Careers
					</Link>
				</LinkContainer>
				<LinkContainer {...{ mobile, isOpen }}>
					<Link {...{ mobile, isOpen }} href="/events">
						Events
					</Link>
				</LinkContainer>
				<LinkContainer {...{ mobile, isOpen }}>
					<Link {...{ mobile, isOpen }} href="/products">
						Products
					</Link>
				</LinkContainer>
				<LinkContainer {...{ mobile, isOpen }}>
					<Link {...{ mobile, isOpen }} href="/support">
						Support
					</Link>
				</LinkContainer>
			</LinksList>
		</StyledNav>
	);
}
