import React, { Component } from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Table from './components/Table';
import Section from './components/Section';

import {
  sectionOneContent,
  sectionTwoContent,
  sectionThreeContent,
} from './sectionContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Header />
        <Section
          name="first-div"
          title="consectetur adipiscing elit"
          content={sectionOneContent}
        />
        <Section
          name="second-div"
          title="Eget nunc scelerisque viverra mauris in aliquam sem"
          content={sectionTwoContent}
        />
        <Section
          name="third-div"
          title="Etiam sit amet nisl purus"
          subtitle="In pellentesque massa placerat duis ultricies lacus sed turpis
              tincidunt. Montes nascetur ridiculus mus mauris."
          content={sectionThreeContent}
        />
        <div className="fourth-div">
          <div className="fourth-div-title">
            Quis hendrerit dolor magna eget est
          </div>
          <Table />
        </div>
        <Section
          name="fifth-div"
          title="Etiam sit amet nisl purus magna eget est."
          subtitle="In pellentesque massa placerat duis ultricies lacus sed tur."
        />
        <footer>
          <div className="footer-ctn">
            Copyright &#169; 2020, General Company. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
