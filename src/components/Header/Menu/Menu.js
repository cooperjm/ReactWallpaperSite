import styles from './Menu.module.css';

const Menu = (props) => {
  let isOpen = props.openMenu;

  return (
    <div id={styles.menu} className={isOpen ? styles.open : null}>
      
    </div>
  );

}

export default Menu;