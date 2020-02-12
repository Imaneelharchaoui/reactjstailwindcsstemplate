import React, {Component} from 'react';
import Main from "./Main";
import Page from "../Page";

class MainPage extends Component {
    render() {
        const ComponentHoc = Page(Main);
        return (
            <div>
                <ComponentHoc {...this.props}/>
            </div>
        );
    }
}

export default MainPage;
