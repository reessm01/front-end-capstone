import React, { Component } from "react"
import { Tab, Select } from "semantic-ui-react"
import { connect } from "react-redux"
import { Input, Button, Dropdown, Form, Message } from "semantic-ui-react"
import { generalStyling, buttonStyling, tabStyling } from "./styles"
import { 
    loadLayout, 
    newLayout,
    saveLayout,
    getUserLayoutData,
    patchLayout
} from "../../actions"
import { stateOptions } from "./constants"

class MainMenu extends Component {
  state = {
    id: null,
    value: null,
    name: ""
  }

  handleLoadChange = (e, data) => {
    let key
    for (let element of data.options)
      if (element.value === data.value) key = element.key
    this.setState({ ...this.state, value: data.value, id: key })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSave = e => {
    e.preventDefault()
    console.log(this.state.name + " " + this.props.grid)
    if (this.props.id !== null) {
      this.props.patchLayout(this.props.grid, this.props.id)
    } else {
      this.props.saveLayout(this.state.name, this.props.grid).then(()=>this.props.getUserLayoutData(this.props.userId))
    }
  }

  handleLoad = e => {
    e.preventDefault()
    this.props.loadLayout(this.state.id)
    this.setState({...this.state, name: this.props.name})
  }

  handleNewLayOut = e => {
      e.preventDefault()
      this.props.newLayout()
  }

  render() {
    const panes = [
        
      {
        menuItem: "New",
        render: () => (
          <div style={{ width: this.props.width + 25 + "px" }}>
            <Form onSubmit={this.handleNewLayOut}>
              <Tab.Pane style={tabStyling}>
                <Button
                  style={{width:"50%"}}
                  disabled={this.props.userHasLayouts ? false : true}
                >
                  New Layout
                </Button>
              </Tab.Pane>
            </Form>
          </div>
        )
      },
      {
        menuItem: "Save",
        render: () => (
          <div style={{ maxWidth: this.props.width + 25 + "px" }}>
            <Form onSubmit={this.handleSave}>
              <Tab.Pane style={tabStyling}>
                <Input
                  style={generalStyling}
                  placeholder="Layout name..."
                  name="name"
                  required
                  onChange={this.handleChange}
                  value={this.props.id===null ? this.state.name:this.props.name}
                  disabled={this.props.id!==null ? true:false}
                />
                <Button
                  style={buttonStyling}
                  disabled={this.props.token === null ? true : false}
                >
                  Save
                </Button>
                {this.props.saveMessage && (
                  <Message positive>
                    <Message.Header>Success!</Message.Header>
                    <p>Layout saved.</p>
                  </Message>
                )}
                {this.props.errorMessage && (
                  <Message negative>
                    <Message.Header>
                      There was some errors with your submission
                    </Message.Header>
                    <p>
                      Empty layouts cannot be saved or there was a communicaiton
                      error with the server.
                    </p>
                  </Message>
                )}
              </Tab.Pane>
            </Form>
          </div>
        )
      },
      {
        menuItem: "Load",
        render: () => (
          <div style={{ width: this.props.width + 25 + "px" }}>
            <Form onSubmit={e => this.handleLoad(e)}>
              <Tab.Pane style={tabStyling}>
                {this.props.userHasLayouts ? (
                  <Dropdown
                    required
                    placeholder={"Select a layout..."}
                    style={generalStyling}
                    onChange={this.handleLoadChange}
                    selection
                    options={this.props.userLayouts.map(object => {
                      return {
                        key: object.id,
                        value: object.name,
                        text: object.name
                      }
                    })}
                    value={this.state.value}
                  />
                ) : (
                  <Dropdown
                    text="You have not saved a layout, yet..."
                    disabled
                  />
                )}
                <Button
                  style={buttonStyling}
                  disabled={this.props.userHasLayouts ? false : true}
                >
                  Load
                </Button>
              </Tab.Pane>
            </Form>
          </div>
        )
      },
      {
        menuItem: "Choose Flowers",
        render: () => (
          <div
            style={{
              width: this.props.width + 25 + "px",
              zIndex: "2000"
            }}
          >
            <Form style={{ zIndex: "2000" }}>
              <Tab.Pane style={tabStyling}>
                <Dropdown
                  onChange={this.props.chooseState}
                  control={Select}
                  style={generalStyling}
                  placeholder="State"
                  options={stateOptions}
                />
              </Tab.Pane>
            </Form>
          </div>
        )
      }
    ]
    return (
      <Tab
        menu={{ borderless: true, attached: false, tabular: false }}
        style={{ width: this.props.width + 25 + "px" }}
        panes={panes}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.login.token !== null ? state.auth.login.token : null,
    userId: state.auth.login.id,
    id: state.grid.id,
    name: state.grid.name,
    userLayouts: state.grid.userLayouts,
    userHasLayouts: state.grid.userHasLayouts,
    saveMessage: state.grid.saveMessage,
    errorMessage: state.grid.errorMessage,
  }
}

const mapDispatchToProps = {
  loadLayout,
  newLayout,
  saveLayout,
  getUserLayoutData,
  patchLayout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)
