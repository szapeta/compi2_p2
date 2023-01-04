import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from "../components/public/home/Home";
import { Login } from "../components/public/login/Login";
import { Registro } from '../components/public/registro/Registro';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

export const DashboardPublic = () => {
  return (
    <>
    <Navbar/>
      <div className='container mt-2'>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/new" component={Registro} />
      </Switch>
      </div>
      <Footer/>
    </>
  );
};
