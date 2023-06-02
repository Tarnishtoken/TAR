import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Tarnish<span>Token</span>
				</h1>
				<p>
					
					
					<img
				src="https://i.imgur.com/GWOcvMl.png"
				width={"350px"}
				height={"350px"}
				/>
					
					
					
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://metamask.io/"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>create a wallet</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://ebutemetaverse.com/how-to-buy-matic-on-metamask/"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>buy some matic</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://app.uniswap.org/#/tokens/polygon/0x97780be6224d62b76d20493da7056ec86eeae6f6"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>go to uniswap</p>
					</div>
				</a>
			</div>
			
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/tarnishtoken"
							target={"_blank"}
						>
							Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
