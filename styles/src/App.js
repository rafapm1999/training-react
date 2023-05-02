import classes from'./App.module.css';

function App(props) {
  return (
    /* De esta forma podemos añadir varias clases al elemento section, siendo una de ellas dinámica (si recibe por props dark, entonces usa classes.darkTheme) */
    <section className={`${classes.header} ${props.dark && classes.darkTheme}`}>
        <h1 className={classes.sky}>Hello World!</h1>
        <p className={classes.featured}>Lorem Ipsum dolor si tamet consectetur adipisicing elit.</p>
    </section>
  );
}

export default App;
