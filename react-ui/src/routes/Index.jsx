import { Route } from 'react-router-dom';
import Landing from "./landing/Landing"
import About from "./about/About"
import Findmentor from "./findmentor/Findmentor"
import Mentors from "./mentors/Mentors"

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
</>
    );
};

export default Routes