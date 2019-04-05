// import React, { Component } from "react";
// import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
// //import { connect } from "react-redux";
// import { getFlowerData } from "../actions/getFlowerData";
// import picture from "./Images/Header.png"

// const styles = {
//     cardPosition: {
//         margin: "30px",
//         padding: "20px"
//     }
// };

// export class VeggieCards extends Component {
//     render() {
//         const { veggies, error } = this.props;
//         return (
//             <React.Fragment>
//                 <Header as="h2" color="grey" textAlign="center" className="search">Flower Search</Header>
//                 <Image src={picture} size="large" centered />
//                 <Card.Group>
//                     {veggies.map((veggie, i) => (
//                         <Card
//                             style={styles.cardPosition}
//                             key={veggie.name}
//                             className="veggie-card"
//                         >
//                             <Card.Content>
//                                 <h2>{veggie.name}</h2>
//                                 <br />
//                                 <img src={veggie.image} className="thumbnail" />
                                
//                                 <br />
//                                 <Modal
//                                     size={"small"}
//                                     trigger={<Button className="more-info">Read More</Button>}
//                                     closeIcon
//                                     style={{ marginTop: "20px" }}
//                                 >
//                                     <Modal.Header>{veggie.species}</Modal.Header>
//                                     <Modal.Content image>
//                                         <Image wrapped size="huge" src={veggie.image} />
//                                         <Modal.Description>
//                                             <Header>{veggie.species}</Header>
//                                             <p>Name: <i>{veggie.name}</i></p>
//                                             <p>Blooms: {veggie.blooms} ({veggie.blooms})</p>
//                                             <p>Size: {veggie.size}</p>
//                                             <p>Needs: {veggie.sun}</p>
//                                             <p>Color(s): {veggie.color}</p>
//                                             <p>Description: {veggie.description}</p>
//                                             <p>State(s): {veggie.states}</p>

//                                             <a href={veggie.site} target="_blank">
//                                                 Click here to research more about the {veggie.name}!
//                       </a>
//                                         </Modal.Description>
//                                     </Modal.Content>
//                                 </Modal>
//                             </Card.Content>
//                         </Card>
//                     ))}
//                 </Card.Group>
//             </React.Fragment>
//         );
//     }
// }
