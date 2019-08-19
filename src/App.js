import React from 'react';
import { render } from 'react-dom';
// import Pet from "./Pet";
import SearchParams from './SearchParams';

const App = () => {
    return (
        <div>
            <h1>About Me!</h1>
            <SearchParams />
        </div>
    );
};
render(React.createElement(App), document.getElementById('root'));
