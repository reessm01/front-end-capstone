import React, { Component } from "react";
import {ShrubCards} from "./ShrubCards";
import { NavBar } from "./NavBar"

import { connect } from "react-redux";
import { getShrubData } from "../actions/getShrubData";

class ShrubSearch extends Component {
    state = { activeIndex: 0, filtershrubs: this.props.shrubs || [], value: "" };
    componentDidMount() {
        this.props.getShrubData();
    }
    componentDidUpdate(prevProps) {
       
        if (this.props.shrubs !== prevProps.shrubs) {
            this.setState({ filtershrubs: this.props.shrubs });
        }
    }
    
    render() {
        const { activeIndex } = this.state;
        return (
            <React.Fragment>
                <NavBar /> 
                        <ShrubCards shrubs={this.state.filtershrubs} />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { shrubs: state.shrubs.shrub, error: state.error };
};
const mapDispatchToProps = dispatch => {
    return { getShrubData: () => dispatch(getShrubData()) };
};
 export default connect(
   mapStateToProps,
    mapDispatchToProps
 )(ShrubSearch);