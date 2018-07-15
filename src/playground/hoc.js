//Higher Order Compoenet (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// abstract State
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>THe info is : {props.info}</p>
    </div>
);

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h1>This is an auth Component </h1>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);
const AdminInfo = WithAdminWarning(Info);


ReactDOM.render(<AuthInfo isAdmin={true} info="Here are the details" />, document.getElementById('app'));