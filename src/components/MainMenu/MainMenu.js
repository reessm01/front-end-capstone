import React, { Component } from "react"
import { Tab } from "semantic-ui-react"
import { Input, Button, Dropdown, Form, Select, Message } from "semantic-ui-react"
import { generalStyling, buttonStyling, tabStyling } from "./styles"

export default class MainMenu extends Component {
    render() {
        const options = [{ key: 1, text: 'Choice 1', value: 1 }, { key: 2, text: 'Choice 2', value: 2 }]
        
          const stateOptions = [
            { text: "Alabama", key: "AL", value: "AL" },
            { text: "Alaska", key: "AK", value: "AK" },
            { text: "Arizona", key: "AZ", value: "AZ" },
            { text: "Arkansas", key: "AR", value: "AR" },
            { text: "California", key: "CA", value: "CA" },
            { text: "Colorado", key: "CO", value: "CO" },
            { text: "Connecticut", key: "CT", value: "CT" },
            { text: "Delaware", key: "DE", value: "DE" },
            { text: "Florida", key: "FL", value: "FL" },
            { text: "Georgia", key: "GA", value: "GA" },
            { text: "Hawaii", key: "HI", value: "HI" },
            { text: "Idaho", key: "ID", value: "ID" },
            { text: "Illinois", key: "IL", value: "IL" },
            { text: "Indiana", key: "IN", value: "IN" },
            { text: "Iowa", key: "IA", value: "IA" },
            { text: "Kansas", key: "KS", value: "KS" },
            { text: "Kentucky", key: "KY", value: "KY" },
            { text: "Louisiana", key: "LA", value: "LA" },
            { text: "Maine", key: "ME", value: "ME" },
            { text: "Maryland", key: "MD", value: "MD" },
            { text: "Massachusetts", key: "MA", value: "MA" },
            { text: "Michigan", key: "MI", value: "MI" },
            { text: "Minnesota", key: "MN", value: "MN" },
            { text: "Mississippi", key: "MS", value: "MS" },
            { text: "Missouri", key: "MO", value: "MO" },
            { text: "Montana", key: "MT", name: "MT", value: "MT" },
            { text: "Nebraska", key: "NE", value: "NE" },
            { text: "Nevada", key: "NV", value: "NV" },
            { text: "New Hampshire", key: "NH", value: "NH" },
            { text: "New Jersey", key: "NJ", value: "NJ" },
            { text: "New Mexico", key: "NM", value: "NM" },
            { text: "New York", key: "NY", value: "NY" },
            { text: "North Carolina", key: "NC", value: "NC" },
            { text: "North Dakota", key: "ND", value: "ND" },
            { text: "Ohio", key: "OH", value: "OH" },
            { text: "Oklahoma", key: "OK", value: "OK" },
            { text: "Oregon", key: "OR", value: "OR" },
            { text: "Pennsylvania", key: "PA", value: "PA" },
            { text: "Rhode Island", key: "RI", value: "RI" },
            { text: "South Carolina", key: "SC", value: "SC" },
            { text: "South Dakota", key: "SD", value: "SD" },
            { text: "Tennessee", key: "TN", value: "TN" },
            { text: "Texas", key: "TX", value: "TX" },
            { text: "Utah", key: "UT", value: "UT" },
            { text: "Vermont", key: "VT", value: "VT" },
            { text: "Virginia", key: "VA", value: "VA" },
            { text: "Washington", key: "WA", value: "WA" },
            { text: "West Virginia", key: "WV", value: "WV" },
            { text: "Wisconsin", key: "WI", value: "WI" },
            { text: "Wyoming", key: "WY", value: "WY" }
        ];

        const panes = [
          {
            menuItem: "Save",
            render: () => (
              <div style={{ width: this.props.width + 25 + "px" }}>
                <Form onSubmit={this.props.handleSave}>
                  <Tab.Pane style={tabStyling}>
                    <Input
                      style={generalStyling}
                      placeholder="Layout name..."
                      name="name"
                      onChange={this.props.handleChange}
                    />
                    <Button style={buttonStyling}>Save</Button>
                    <Message
                      success
                      header="Form Completed"
                      content="Layout saved."
                    />
                    <Message
                      error
                      header="Action Forbidden"
                      content="Name field required or the layout is empty"
                    />
                  </Tab.Pane>
                </Form>
              </div>
            )
          },
          {
            menuItem: "Load",
            render: () => (
              <div style={{ width: this.props.width + 25 + "px" }}>
                <Form>
                  <Tab.Pane style={tabStyling}>
                    {this.props.layoutHasId ? (
                      <Dropdown
                        control={Select}
                        style={generalStyling}
                        placeholder="Skills"
                        multiple
                        selection
                        options={options}
                      />
                    ) : (
                      <Dropdown
                        text="You have not saved a layout, yet..."
                        disabled
                      />
                    )}
                    <Button style={buttonStyling} disabled>
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
                  <Tab.Pane style={tabStyling} >
                    <Dropdown onChange={this.props.chooseState} 
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
        ];
        return (
            <Tab 
                menu={{ borderless: true, attached: false, tabular: false }}
                style={{ width: this.props.width + 25 + "px" }}
                panes={panes}
            />
        )
    }
}
