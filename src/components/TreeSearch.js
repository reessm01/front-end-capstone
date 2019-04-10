import React, { Component } from "react";
import {TreeCards} from "./TreeCards";
import { NavBar } from "./NavBar"

import { connect } from "react-redux";
import { getTreeData } from "../actions/getTreeData";

class TreeSearch extends Component {
    state = { activeIndex: 0, filtertrees: this.props.trees || [], value: "" };
    componentDidMount() {
        this.props.getTreeData();
    }
    componentDidUpdate(prevProps) {
       
        if (this.props.trees !== prevProps.trees) {
            this.setState({ filtertrees: this.props.trees });
        }
    }
    
    render() {
        const { activeIndex } = this.state;
        return (
            <React.Fragment>
                <NavBar /> 
                        <TreeCards trees={this.state.filtertrees} />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { trees: state.trees.tree, error: state.error };
};
const mapDispatchToProps = dispatch => {
    return { getTreeData: () => dispatch(getTreeData()) };
};
 export default connect(
   mapStateToProps,
    mapDispatchToProps
 )(TreeSearch);