import styles from "./Header.module.css";

const Header = () => {
  

	return (
		<header id={styles.header}>
			<div className={styles.nameContainer}>
				<span className={styles.title}>WALLPAPERS</span>
				<br />
				<span className={styles['title-sub']}>of Reddit</span>
			</div>
		</header>
	);
};

export default Header;
