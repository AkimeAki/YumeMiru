/** @jsxImportSource @emotion/react */

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props): JSX.Element {
	return (
		<>
			<header>ヘッダー</header>
			<main>{children}</main>
			<footer>フッター</footer>
		</>
	);
}
