import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const Profile = (props) => {
    return (
        <div className="component">
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
        </div>
    );
}

const App = () => {
    return (
        <>
            <h1 className="header" style={{ "padding-top": "15px", "color": "white" }}>Team profile</h1>
            <Profile name={"Євген Коваленко"} description="Member 1" />
            <Profile name={"Олена Кравченко"} description="Member 2" />
            <Profile name={"Петро Петрук"} description="Member 3" />
        </>
    )
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<App />);
