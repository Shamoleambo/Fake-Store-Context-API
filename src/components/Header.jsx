import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <p className={classes.paragraph}>Fake Store</p>
      <div className={classes.cart}>cart icon</div>
    </header>
  );
}
