import React, { Component } from "react";
import {
    Menu,
    Accordion,
    Form
    
} from "semantic-ui-react";
import {VeggieCards} from "./VeggieCards";
import { NavBar } from "./NavBar"

import { connect } from "react-redux";
import { getVeggieData } from "../actions/getVeggieData";

class VeggieSearch extends Component {
    state = { activeIndex: 0, filterveggies: this.props.veggies || [], value: "" };
    componentDidMount() {
        this.props.getVeggieData();
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.veggies !== prevProps.veggies) {
            this.setState({ filterveggies: this.props.veggies });
        }
    }
    
    render() {
        const { activeIndex } = this.state;
        return (
            <React.Fragment>
                <NavBar /> 
                        <VeggieCards veggies={this.state.filterveggies} />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { veggies: state.veggies.veggie, error: state.error };
};
const mapDispatchToProps = dispatch => {
    return { getVeggieData: () => dispatch(getVeggieData()) };
};
 export default connect(
   mapStateToProps,
    mapDispatchToProps
 )(VeggieSearch);