import { Outlet } from 'react-router-dom';
//import './FormWrapper.css';

function FormWrapper() {
  return (
    <section style={{
        backgroundColor: "#eaf1ec",
        padding: "1rem"
    }}>
        <Outlet context={"Hello World"}></Outlet>
    </section>
  );
}

export default FormWrapper;
