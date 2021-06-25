import React from "react";
import { Redirect, Route } from "react-router-dom";

import { checkLoggedIn } from "../../CheckLoggedIn/index";


function PrivateRoute({ component: Component, ...rest }) {
    return (
        <div className='homepage'>
            <Route
                {...rest}
                    render={(props) =>
                    checkLoggedIn() ? 
                      (<Component {...props} />) 
                    : 
                      (<Redirect to={{pathname: "/login", state: {from: props.location }}}/>)
                }
            />
        </div>
    );
}

export default PrivateRoute;