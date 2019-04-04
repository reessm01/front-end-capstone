import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
//import { connect } from "react-redux";
import { getFlowerData } from "../actions/getFlowerData";
//import flower from "../Images/flower.png";

const styles = {
    cardPosition: {
        margin: "40px",
        padding: "20px"
    }
};

export class FlowerCards extends Component {
    render() {
        // console.log(this.props.flower);
        const { flowers, error } = this.props;
        // if (error) {
        //   return <div>{error.message}</div>;
        // }
        return (
            <React.Fragment>
                
                <Card.Group>
                    {flowers.map((flower, i) => (
                        <Card
                            style={styles.cardPosition}
                            key={flower.scientificName}
                            className="flower-card"
                        >
                            <Card.Content>
                                <h2>{flower.species}</h2>
                                <br />
                                <img src={flower.image} className="thumbnail" />
                                
                                <br />
                                <Modal
                                    size={"small"}
                                    trigger={<Button className="more-info">More Info</Button>}
                                    closeIcon
                                    style={{ marginTop: "20px" }}
                                >
                                    <Modal.Header>{flower.species}</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size="huge" src={flower.image} />
                                        <Modal.Description>
                                            <Header>{flower.species}</Header>
                                            <p>
                                                Scientific Name: <i>{flower.scientificName}</i>
                                            </p>
                                            <p>Type: {flower.type}</p>
                                            <p>
                                                Group: {flower.vSType} ({flower.sType})
                      </p>
                                            <p>Size: {flower.specificSize}</p>
                                            <p>Color(s): {flower.color}</p>
                                            <p>Characteristics: {flower.characteristics}</p>
                                            <p>State(s): {flower.location}</p>

                                            <a href={flower.site} target="_blank">
                                                Click here to research more about {flower.species}!
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
