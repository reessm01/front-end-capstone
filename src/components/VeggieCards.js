import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
//import { connect } from "react-redux";
import { getVeggieData } from "../actions/getVeggieData";
import picture from "./Images/Header.png"

const styles = {
    cardPosition: {
        margin: "30px",
        padding: "20px"
    }
};

export class VeggieCards extends Component {
    render() {
        const { veggies, error } = this.props;
        return (
            <React.Fragment>
                <Header as="h2" color="grey" textAlign="center" className="search">Veggie Search</Header>
                <Image src={picture} size="large" centered />
                <Card.Group>
                    {veggies.map((veggie, i) => (
                        <Card
                            style={styles.cardPosition}
                            key={veggie.name}
                            className="veggie-card"
                        >
                            <Card.Content>
                                <h2>{veggie.name}</h2>
                                <br />
                                <img src={veggie.image} className="thumbnail" />
                                
                                <br />
                                <Modal
                                    size={"small"}
                                    trigger={<Button className="more-info">Read More</Button>}
                                    closeIcon
                                    style={{ marginTop: "20px" }}
                                >
                                    <Modal.Header>{veggie.name}</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size="huge" src={veggie.image} />
                                        <Modal.Description>
                                            <Header>{veggie.name}</Header>
                                            <p>Name: <i>{veggie.name}</i></p>
                                            <p>Starts with: {veggie.start}</p>
                                            <p>Sun: {veggie.sun}</p>
                                            <p>Days to harvest: {veggie.days}</p>
                                            <p>Description: {veggie.description}</p>
                                            <a href={veggie.site} target="_blank">
                                                Click here to learn more about {veggie.name}!
                                                <br></br>
                                                <br></br>
                                                <Button basic color='green' href={veggie.amazon} target="_blank">
                                                Click to buy from Amazon </Button> 
                      </a>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </React.Fragment>
        );
    }
}
