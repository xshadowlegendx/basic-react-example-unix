
import React from 'react';
import { render } from 'react-dom';

console.log( "Working !" );

class Button extends React.Component {

    onClickAlert () {

        alert ( "yo bro and sis" );

    }

};

class SimpleApp extends Button {

    render () {
        return (
            <div>
                <button onClick={ this.onClickAlert.bind( this ) }>Click Me</button>
            </div>
        );
    }

};

render ( < SimpleApp />, window.document.getElementById ( "root" ) );
