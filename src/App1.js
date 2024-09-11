import './App.css';
// import CardItemComponent from './components/card-item-component/CardItem-component';
import { propTypes } from 'react-bootstrap/esm/Image';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
function App1() {

    const itemsList = [
    {id: 1, name: "An apartment in San-Francisco", imgurl:"./images/img1.jpeg"},
    {id: 2, name: "An apartment in San-Diego", imgurl: "./images/img2.jpeg"},
    {id: 3, name: "An apartment in New York", imgurl: "./images/img3.jpeg"}
 
];

  return (
    <section className="app">
      <main>
        <section className="mt-container">
          <div className="row">
            {
              itemsList.map(item=>{
                return(
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgurl} />
      <Card.Body>
        <Card.Title>Product Details</Card.Title>
        <Card.Text>
        {item.name}  
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>);
              })
            }
          </div>
        </section>
      </main>
    </section>
  );
}
export {App1};