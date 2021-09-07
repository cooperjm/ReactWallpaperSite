import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';
import styles from './Header.module.css';
import Menu from './Menu/Menu';

const Header = () => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	return (
		<header id={styles.header}>
			<Menu openMenu={open} />
			<div className={styles.container}>
				<div className={styles.nameContainer}>
					<span className={styles.title}>WALLPAPERS</span>
					<br />
					<span className={styles['title-sub']}>of Reddit</span>
				</div>
			</div>
			<FontAwesomeIcon
				icon={faChevronDown}
				className={styles.openButton}
				onClick={toggleOpen}
			/>
		</header>
	);
};

export default Header;
