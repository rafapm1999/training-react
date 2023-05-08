import classes from './LoginPage.module.css';
import LoginForm from './LoginForm';

function LoginPage() {
  return (
    <div className={classes.container}>
      <div className={classes.bgForm}/>
        <div className={classes.formContainer}>
          <div className={classes.formWrapper}>
            <h2>Get all stuffs done with Login engine</h2>
            <p>Acces to remove powerful tool in the entire design and web galaxy.</p>
            <div className={classes["login-links"]}>
              <a href="#" className={classes.active}>Login</a>
              <a href="#">Register</a>
            </div>
            <LoginForm></LoginForm>
          </div>
        </div>
    </div>
  );
}

export default LoginPage;
