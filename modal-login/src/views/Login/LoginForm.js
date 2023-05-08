import classes from './LoginForm.module.css';

function LoginForm() {
  return (
    <form>
        <input 
            type="text" 
            name="username" 
            placeholder="E-mail Address" 
            className={classes["form-control"]}
        />
        
        <input 
            type="password" 
            name="password" 
            placeholder="Password"  
            className={classes["form-control"]}
        />

        <div 
            className={classes.remember}
        >
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">Remember me?</label>
        </div>

        <div 
            className={classes["form-button"]}
        >
            <button type="submit">Login</button>
            <a href="#">Forget Password?</a>
        </div>
    </form>
  );
};

export default LoginForm;
