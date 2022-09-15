import Base from '../components/Base';
// import './OnBoarding.css';
import Board from '../components/Board';
import Cards from '../components/Cards';
import {Card} from "react-bootstrap";

const OnBoarding=()=>{

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="OnBoarding">
      
      <main className="flexbox"> 
        <Board id="board-1" className="board">
          <h3>One Deposit Checking From Citizens</h3>
          <Cards id="card-1.1" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title  align="center" ><button class="btn btn-primary" type="submit" onClick={() => openInNewTab('/appform')}>Open Account</button></Card.Title>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-1.2" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Text>
                  <p><b>Overdraft</b>
                  <ul><li>Citizens Peace of Mind</li></ul></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-1.3" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Text>
                  <p><b>Monthly Maintenance Fee</b>
                  <ul>
                    <li>$0.00 or $9.99</li>
                    <li>How to waive of the fee</li>
                  </ul></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
        <Board id="board-2" className="board">
          <h3>Citizens EverValue Checking</h3>
          <Cards id="card-2.1" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title  align="center" ><button class="btn btn-primary" type="submit" onClick={() => openInNewTab('/appform')}>Open Account</button></Card.Title>
              </Card.Body>
            </Card>
            </Cards>
            <Cards id="card-2.2" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Text>
                  <p><b>Overdraft</b>
                  <ul>
                    <li>No overdraft fees</li>
                    <li>No fees on overdraft plans</li>
                  </ul></p>
                </Card.Text>
              </Card.Body>
            </Card>
            </Cards>
            <Cards id="card-2.3" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Text>
                  <p><b>Monthly Maintenance Fee</b>
                  <ul>
                    <li>$5.00</li>
                    <li>This fee cannot be waived</li>
                  </ul></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
        <Board id="board-3" className="board">
          <h3>Student Checking</h3>
          <Cards id="card-3.1" className="card" draggable="true">
          <Card>
              <Card.Body>
              <Card.Title  align="center" ><button class="btn btn-primary" type="submit" onClick={() => openInNewTab('/appform')}>Open Account</button></Card.Title>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-3.2" className="card" draggable="true">
          <Card>
              <Card.Body>
                <Card.Text>
                  <p><b>Overdraft</b>
                  <ul>
                    <li>No overdraft fees</li>
                    <li>No fees on overdraft plans</li>
                  </ul></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-3.3" className="card" draggable="true">
          <Card>
              <Card.Body>
                <Card.Text>
                  <p><b>Monthly Maintenance Fee</b>
                  <ul>
                    <li>$0.00</li>
                    <li>There is no fee if you are under the age of 25</li>
                  </ul></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
      </main>
    </div>
  );
}

export default OnBoarding;