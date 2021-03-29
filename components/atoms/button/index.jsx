const Button = ({ children, to, ...restProps }) => {
  let styles = ``;
  if (!to) return <button className={styles}> {children} </button>;
  return (
    <Link className={styles} {...restProps}>
      {children}
    </Link>
  );
};

export default Button;
