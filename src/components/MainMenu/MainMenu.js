import React, { Component } from "react"
import { Tab } from 'semantic-ui-react'
import { Input, Button, Dropdown } from 'semantic-ui-react'
import { generalStyling, buttonStyling, tabStyling } from './styles'

export default class MainMenu extends Component {

    render() {
        const options = [{ key: 1, text: 'Choice 1', value: 1 }, { key: 2, text: 'Choice 2', value: 2 }]
        const panes = [
            {
                menuItem: 'Save', render: () =>
                    <div style={{ width: this.props.width + 25 + 'px' }}>
                        <Tab.Pane style={tabStyling}>
                            <Input style={generalStyling} placeholder="Layout name..." />
                            <Button style={buttonStyling}>Save</Button>
                        </Tab.Pane>
                    </div>
            },
            {
                menuItem: 'Load', render: () =>
                    <Tab.Pane style={tabStyling}>
                        {this.props.layoutHasId ?
                            <Dropdown style={generalStyling} placeholder='Skills' multiple selection options={options} />
                            :
                            <Dropdown text='You have not saved a layout, yet...' disabled />}
                        <Button style={buttonStyling}>Load</Button>
                    </Tab.Pane>
            },
        ]
        return (
            <Tab menu={{ borderless: true, attached: false, tabular: false }} style={{ width: this.props.width + 25 + 'px' }} panes={panes} />
        )
    }
}