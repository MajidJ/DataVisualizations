import React, {Component} from "react";
// import {Link} from 'react-router-dom';
import Wrapper from "../Wrapper";

class Nav extends Component {
    render() {
        return (
            <nav>
                <Wrapper>
                    <div className="title">Data Test</div>
                    <ul>
                        <li><a href="http://www.google.com">Home</a></li>
                    </ul>
                </Wrapper>
            </nav>
        );
    };
};

export default Nav;