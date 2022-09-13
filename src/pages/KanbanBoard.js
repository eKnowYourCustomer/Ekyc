import Base from '../components/Base';
// import './KanbanBoard.css';
import Board from '../components/Board';
import Cards from '../components/Cards';
import {Card} from "react-bootstrap";

const KanbanBoard=()=>{
  return (
    <div className="KanbanBoard">
      
      <main className="flexbox"> 
        <Board id="board-1" className="board">
          <h3>Work To Be Done</h3>
          <Cards id="card-1" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title>Use Case 1: Cloud</Card.Title>
                <Card.Text>
                <li>AWS Cloud Deployment - React</li>
                <li>AWS Cloud Deployment - Microservices</li>
                
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-1-1" className="card" draggable="true">
          <Card>
              <Card.Body>
              <Card.Title>Use Case 1: Flexible UI</Card.Title>
                <Card.Text>
             <li> Movable Ribbon Bar</li>
             <li>Draggable Implemention</li>
<li>Flexible UI Features</li>
<li>Table - Flexible Integrate</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
        <Board id="board-2" className="board">
          <h3>Work in Progress</h3>
          <Cards id="card-2" className="card" draggable="true">
          <Card>
              <Card.Body>
              <Card.Title>Use Case 1: Configurable UI</Card.Title>
                <Card.Text>
                <li>Configurable UI Enhancement for Admins</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-2-1" className="card" draggable="true">
          <Card>
              <Card.Body>
              <Card.Title>Use Case 1: Orchestration/Rules Engine</Card.Title>
                <Card.Text>
                  <li>Drools Microservices Integrate with React: ROI Calculation</li>
                  <li>JBPM Implemention</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
        <Board id="board-3" className="board">
          <h3>Work to be Reviewed</h3>
          <Cards id="card-3" className="card" draggable="true">
          <Card>
              <Card.Body>
              <Card.Title>Use Case 1: Architecture/Design</Card.Title>
                <Card.Text>
               <li>UI Theme Presentable Color Changes using Bootstrap</li>
               <li>Redux State Integration - Calculate your savings calculator</li>
               <li>Atomic Design Pattern Implemention</li>


                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-3-1" className="card" draggable="true">
          <Card>
              <Card.Body>
              <Card.Title>Use Case 2: COTS</Card.Title>
                <Card.Text>
                COTS Product Evaluation

                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
      </main>
    </div>
  );
}

export default KanbanBoard;