import React, { Component } from "react"
import { Tab, Transition } from "semantic-ui-react"
import { Input, Button, Dropdown, Form, Select, Message } from "semantic-ui-react"
import { generalStyling, buttonStyling, tabStyling } from "./styles"

export default class MainMenu extends Component {
    render() {
        const options = [{ key: 1, text: 'Choice 1', value: 1 }, { key: 2, text: 'Choice 2', value: 2 }]
        const stateOptions = [
            { key: 1, text: "All States", value: "allStates" },
            { key: 2, text: "Alabama", value: "alabama" },
            { key: 3, text: "Alaska", value: "alaska" },
            { key: 4, text: "Arizona", value: "arizona" },
            { key: 5, text: "Arkansas", value: "arkansas" },
            { key: 6, text: "California", value: "california" },
            { key: 7, text: "Colorado", value: "colorado" },
            { key: 8, text: "Conneticut", value: "conneticut" },
            { key: 9, text: "Delaware", value: "delaware" },
            { key: 10, text: "Florida", value: "florida" },
            { key: 11, text: "Georgia", value: "georgia" },
            { key: 12, text: "Hawaii", value: "hawaii" },
            { key: 13, text: "Idaho", value: "idaho" },
            { key: 14, text: "Illinois", value: "illinois" },
            { key: 15, text: "Indiana", value: "indiana" },
            { key: 16, text: "Iowa", value: "iowa" },
            { key: 17, text: "Kansas", value: "kansas" },
            { key: 18, text: "Kentucky", value: "kentucky" },
            { key: 19, text: "Louisiana", value: "lousiana" },
            { key: 20, text: "Maine", value: "maine" },
            { key: 21, text: "Maryland", value: "maryland" },
            { key: 22, text: "Massachussettes", value: "massachussettes" },
            { key: 23, text: "Michigan", value: "michigan" },
            { key: 24, text: "Minnesota", value: "minnesota" },
            { key: 25, text: "Mississippi", value: "mississippi" },
            { key: 26, text: "Missouri", value: "missouri" },
            { key: 27, text: "Montana", value: "montana" },
            { key: 28, text: "Nebraska", value: "nebraska" },
            { key: 29, text: "Nevada", value: "nevada" },
            { key: 30, text: "New Hampshire", value: "newHampshire" },
            { key: 31, text: "New Jersey", value: "newJersey" },
            { key: 32, text: "New Mexico", value: "newMexico" },
            { key: 33, text: "New York", value: "newYork" },
            { key: 34, text: "North Carolina", value: "northCarolina" },
            { key: 35, text: "North Dakota", value: "northDakota" },
            { key: 36, text: "Ohio", value: "ohio" },
            { key: 37, text: "Oklamaha", value: "oklamaha" },
            { key: 38, text: "Oregon", value: "oregon" },
            { key: 39, text: "Pennsylvania", value: "pennsylvania" },
            { key: 40, text: "Rhode Island", value: "rhodeIsland" },
            { key: 41, text: "South Carolina", value: "southCarolina" },
            { key: 42, text: "South Dakota", value: "southDakota" },
            { key: 43, text: "Tennessee", value: "tennessee" },
            { key: 44, text: "Texas", value: "texas" },
            { key: 45, text: "Utah", value: "utah" },
            { key: 46, text: "Vermont", value: "vermont" },
            { key: 47, text: "Virginia", value: "virginia" },
            { key: 48, text: "Washington", value: "washington" },
            { key: 49, text: "West Virginia", value: "westVirginia" },
            { key: 50, text: "Wisconsin", value: "wisconsin" },
            { key: 51, text: "Wyoming", value: "wyoming" },
        ];
        const panes = [
            {
                menuItem: "Save",
                render: () => (
                    <div style={{ maxWidth: this.props.width + 25 + "px" }}>
                        <Form onSubmit={this.props.handleSave}>
                            <Tab.Pane style={tabStyling}>
                                <Input
                                    style={generalStyling}
                                    placeholder="Layout name..."
                                    name="name"
                                    required
                                    onChange={this.props.handleChange}
                                />
                                <Button style={buttonStyling}>Save</Button>
                                {this.props.saveMessage &&
                                    <Message positive>
                                        <Message.Header>Success!</Message.Header>
                                        <p>
                                            Layout saved.
                                        </p>
                                    </Message>
                                }
                                {this.props.errorMessage &&
                                    <Message negative >
                                        <Message.Header>There was some errors with your submission</Message.Header>
                                        <p>
                                            Empty layouts cannot be saved or there was a communicaiton error with the server.
                                        </p>
                                    </Message>
                                }
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
