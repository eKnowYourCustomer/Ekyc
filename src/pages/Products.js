import Board from '../components/Board';
import Cards from '../components/Cards';
import {Card} from "react-bootstrap";

const Products=()=>{

  return (
    <div className="Products">
      <main className="flexbox"> 
        <Board id="board-1" className="board" width='50%'>
          <h3>Checking Accounts</h3>
          <Cards id="card-1.1" className="card" draggable="true">
            <img width="350" src="/acctype1.jpg"></img>
          </Cards>
          <Cards id="card-1.2" className="card" draggable="true">
          <img width="350" src="/acctype2.jpg"></img>
          </Cards>
        </Board>
        <Board id="board-3" className="board" width='50%'>
          <h3>Card Products</h3>
          <Cards id="card-3.1" className="card" draggable="true">
            <img width="350" src="/card1.jpg"></img>
          </Cards>
          <Cards id="card-3.2" className="card" draggable="true">
          <img width="350" src="/card2.jpg"></img>
          </Cards>
        </Board>        
        <Board id="board-2" className="board" width='50%'>
         <h3>New Products</h3>
         <Cards id="card-2.1" className="card" draggable="true">
          <img width="350" src="/acctype3.jpg"></img>
          </Cards>
          <Cards id="card-2.2" className="card" draggable="true">
          <img width="350" src="/acctype4.jpg"></img>
          </Cards>
          <Cards id="card-2.3" className="card" draggable="true">
          <img width="350" src="/acctype5.jpg"></img>
          </Cards>
        </Board>
      </main>
    </div>
  );
}

export default Products;