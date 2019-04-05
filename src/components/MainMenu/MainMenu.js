import React, { Component } from "react"
import { Tab } from "semantic-ui-react"
import { Input, Button, Dropdown, Form, Select, Message } from "semantic-ui-react"
import { generalStyling, buttonStyling, tabStyling } from "./styles"

export default class MainMenu extends Component {
    render() {
        const options = [
            { key: 1, text: "Choice 1", value: 1 },
            { key: 2, text: "Choice 2", value: 2 }
        ]
        const panes = [
            {
                menuItem: "Save",
                render: () => (
                    <div style={{ width: this.props.width + 25 + "px" }}>
                        <Form>
                            <Tab.Pane style={tabStyling}>
                                <Input style={generalStyling} placeholder="Layout name..." />
                                <Button style={buttonStyling}>Save</Button>
                                <Message
                                    success
                                    header='Form Completed'
                                    content="You're all signed up for the newsletter" />
                                <Message
                                    error
                                    header='Action Forbidden'
                                    content='Name field required or the layout is empty'
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
