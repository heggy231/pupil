import { Route } from 'react-router-dom';
import Landing from "./landing/Landing"
import About from "./about/About"
import Findmentor from "./findmentor/Findmentor"
import Mentors from "./mentors/Mentors"
import Login from "./login/Login"
import Become from "./becomementor/Become"
import Skills from "./skills/Skills"
import Profiles from "./profile/Profiles"
import Mentorstype from './findmentor/Mentorstype';

const Routes = () => {
    return (
<>
    <Route
        exact={true}
        path="/"    
        render={() => <Landing /> }
    />

    <Route
        exact={true}
        path="/about"    
        render={() => <About /> }
    />

    <Route
        exact={true}
        path="/findmentor" 
        render={() => <Findmentor /> }
    />     

    <Route
        exact={true}
        path="/mentors" 
        render={() => <Mentors /> }
    />    

    <Route
        exact={true}
        path="/login" 
        render={() => <Login /> }
    />       
    <Route
        exact={true}
        path="/become" 
        render={() => <Become /> }
    />    
    <Route
        exact={true}
        path="/skills" 
        render={() => <Skills /> }
    />    
    <Route
        path="/profiles/:id" 
        component={Profiles}
    />    
    
     <Route
        path="/mentorstype" 
        component={Mentorstype}
    />    
</>
    );
};

export default Routes