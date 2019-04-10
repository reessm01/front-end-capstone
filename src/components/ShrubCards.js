import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
import picture from "./Images/Header.png"

const styles = {
    cardPosition: {
        margin: "30px",
        padding: "20px"
    }
};

export class ShrubCards extends Component {
    render() {
        const { shrubs, error } = this.props;
        return (
            <React.Fragment>
                <Header as="h2" color="grey" textAlign="center" className="search">Tree Search</Header>
                <Image src={picture} size="large" centered />
                <Card.Group>
                    {shrubs.map((shrub, i) => (
                        <Card
                            style={styles.cardPosition}
                            key={shrub.name}
                            className="shrub-card"
                        >
                            <Card.Content>
                                <h2>{shrub.name}</h2>
                                <br />
                                <img src={shrub.image} className="thumbnail" />

                                <br />
                                <Modal
                                    size={"small"}
                                    trigger={<Button className="more-info">Read More</Button>}
                                    closeIcon
                                    style={{ marginTop: "20px" }}
                                >
                                    <Modal.Header>{shrub.name}</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size="huge" src={shrub.image} />
                                        <Modal.Description>
                                            <p>Name: <i>{shrub.name}</i></p>
                                            <p>Size: {shrub.height}</p>
                                            <p>Description: {shrub.description}</p>
                                            <p>State(s): {shrub.states}</p>
                                            <a href={shrub.site} target="_blank">
                                                Research more about the {shrub.name} </a>
                                            <br></br>
                                            <br></br>
                                            <Button basic color='green' href={shrub.amazon} target="_blank">
                                                Click to buy from Amazon </Button>
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