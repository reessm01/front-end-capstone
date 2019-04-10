import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
//import { connect } from "react-redux";
import { getFlowerData } from "../actions/getFlowerData";
import picture from "./Images/Header.png"

const styles = {
    cardPosition: {
        margin: "30px",
        padding: "20px"
    }
};

export class FlowerCards extends Component {
    render() {
        const { flowers, error } = this.props;
        return (
            <React.Fragment>
                <Header as="h2" color="grey" textAlign="center" className="search">Flower Search</Header>
                <Image src={picture} size="large" centered />
                <Card.Group>
                    {flowers.map((flower, i) => (
                        <Card
                            style={styles.cardPosition}
                            key={flower.name}
                            className="flower-card"
                        >
                            <Card.Content>
                                <h2>{flower.name}</h2>
                                <br />
                                <img src={flower.image} className="thumbnail" />
                                
                                <br />
                                
                                <Modal
                                    size={"medium"}
                                    trigger={<Button className="more-info">Read More</Button>}
                                    closeIcon
                                    style={{ marginTop: "20px" ,marginLeft:"300px"}}
                                >
                                    <Modal.Header>{flower.species}</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size="huge" src={flower.image} />
                                        <Modal.Description>
                                            <Header>{flower.species}</Header>
                                            <p>Name: <i>{flower.name}</i></p>
                                            <p>Blooms: {flower.blooms} ({flower.blooms})</p>
                                            <p>Size: {flower.size}</p>
                                            <p>Needs: {flower.sun}</p>
                                            <p>Color(s): {flower.color}</p>
                                            <p>Description: {flower.description}</p>
                                            <p>State(s): {flower.states}</p>

                                            <a href={flower.site} target="_blank">
                                                Research more about the {flower.name} </a>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <Button basic color='green' href={flower.amazon} target="_blank">
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
