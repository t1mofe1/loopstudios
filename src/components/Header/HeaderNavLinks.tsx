import { Link, LinkContainer, LinksList } from './HeaderNavLinks.styles';

export function HeaderNavLinks() {
	return (
		<nav>
			<LinksList>
				<LinkContainer>
					<Link href="/about">About</Link>
				</LinkContainer>
				<LinkContainer>
					<Link href="/careers">Careers</Link>
				</LinkContainer>
				<LinkContainer>
					<Link href="/events">Events</Link>
				</LinkContainer>
				<LinkContainer>
					<Link href="/products">Products</Link>
				</LinkContainer>
				<LinkContainer>
					<Link href="/support">Support</Link>
				</LinkContainer>
			</LinksList>
		</nav>
	);
}
