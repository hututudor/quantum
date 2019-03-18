import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div>
            <h1>Quantum</h1>
            <h2>If you are coachless, just buy a coach</h2>
          </div>
        </div>
        <div className="about">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis
            dolorem rerum vitae tempora, est nam sunt incidunt earum velit? Quod
            et numquam voluptates omnis sunt ad esse doloremque eveniet? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
            minus, ipsa nostrum fuga accusamus corrupti labore nulla doloribus
            itaque? Est aut illo vero aspernatur sed minima ut sunt voluptatum
            facere. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis excepturi minima fugit recusandae aliquam rerum iusto nihil
            temporibus, dicta repellat rem placeat laudantium officiis. Omnis
            temporibus iusto ipsum. Incidunt, nemo! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ipsa perspiciatis quos fugiat
            voluptatem aliquid, sint accusamus voluptate vero expedita
            exercitationem laboriosam doloribus dolorum ad reiciendis tempora!
            Quaerat animi error excepturi?
          </p>
        </div>
        <div className="features">
          <h1>What do we offer?</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h1>Fast</h1>
                <p>It is very fast, I promise</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h1>Fast</h1>
                <p>It is very fast, I promise</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h1>Fast</h1>
                <p>It is very fast, I promise</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="row">
            <div className="col-md-4 contact">
              <i className="fab fa-facebook" />
              <i className="fas fa-envelope" />
            </div>

            <div className="col-md-4 copyright">
              <h1>Copyright {'\u00a9'} Quantum</h1>
            </div>
            <div className="col-md-4 copyright">
              <h1>Made by Hutu Tudor</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
