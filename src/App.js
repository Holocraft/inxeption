import React, { Component } from 'react';
import { DateTime } from 'luxon';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { records: [] };

  componentDidMount() {
    fetch(
      'https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-air-quality-measurements&q=&rows=10&sort=-measurements_parameter&facet=city&facet=location&facet=measurements_unit&facet=measurements_parameter&facet=measurements_lastupdated'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ records: data.records });
      });
  }

  render() {
    console.log('state', this.state.records);
    const table = this.state.records.map((val, index) => {
      const dt = DateTime.fromISO(val.fields.measurements_lastupdated);
      const fullDt = dt.toLocaleString(DateTime.DATETIME_FULL);
      return (
        <tr key={index}>
          <td>
            {val.fields.city}, {val.fields.country}
          </td>
          <td className="value">{val.fields.measurements_value}</td>
          <td className="date-time">{fullDt}</td>
        </tr>
      );
    });

    return (
      <div className="App">
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </nav>
        <header>
          <div className="header-title">Lorem ipsum dolor sit amet</div>
          <div className="header-text">
            <strong>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </strong>
          </div>
        </header>
        <div className="first-div">
          <div className="first-div-title">consectetur adipiscing elit</div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className="second-div">
          <div className="second-div-title">
            Eget nunc scelerisque viverra mauris in aliquam sem
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            malesuada pellentesque elit eget gravida cum. Facilisis magna etiam
            tempor orci. Mattis enim ut tellus elementum sagittis vitae et leo
            duis. Facilisis sed odio morbi quis. Congue nisi vitae suscipit
            tellus mauris a diam maecenas. Cursus in hac habitasse platea
            dictumst quisque. Lobortis mattis aliquam faucibus purus in massa
            tempor.
          </p>
          <p>
            Etiam sit amet nisl purus. In pellentesque massa placerat duis
            ultricies lacus sed turpis tincidunt. Montes nascetur ridiculus mus
            mauris. Eleifend quam adipiscing vitae proin. Scelerisque varius
            morbi enim nunc faucibus a pellentesque sit. Elementum nisi quis
            eleifend quam adipiscing vitae proin. Congue eu consequat ac felis
            donec et odio pellentesque diam. Dolor morbi non arcu risus quis.
            Habitant morbi tristique senectus et netus et malesuada. Scelerisque
            felis imperdiet proin fermentum leo. Consectetur adipiscing elit
            duis tristique sollicitudin nibh sit.
          </p>
          <p>
            Amet nulla facilisi morbi tempus. Maecenas volutpat blandit aliquam
            etiam erat. Quis hendrerit dolor magna eget est lorem ipsum dolor
            sit. Interdum velit laoreet id donec ultrices tincidunt arcu non.
            Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.
            Diam sollicitudin tempor id eu. Varius quam quisque id diam vel quam
            elementum pulvinar etiam.
          </p>
        </div>
        <div className="third-div">
          <div className="third-div-title">Etiam sit amet nisl purus</div>
          <div className="third-div-subtitle">
            In pellentesque massa placerat duis ultricies lacus sed turpis
            tincidunt. Montes nascetur ridiculus mus mauris.
          </div>
          <div className="third-div-text-ctn">
            <p>
              Amet nulla facilisi morbi tempus. Maecenas volutpat blandit
              aliquam etiam erat. Quis hendrerit dolor magna eget est lorem
              ipsum dolor sit. Interdum velit laoreet id donec ultrices
              tincidunt arcu non. Tellus integer feugiat scelerisque varius
              morbi enim nunc faucibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              malesuada pellentesque elit eget gravida cum. Facilisis magna
              etiam tempor orci. Mattis enim ut tellus elementum sagittis vitae
              et leo duis. Facilisis sed odio morbi quis.
            </p>
          </div>
          <p>
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Interdum
            velit laoreet id donec ultrices tincidunt arcu non. Tellus integer
            feugiat scelerisque varius morbi enim nunc faucibus. Diam
            sollicitudin tempor id eu. Varius quam quisque id diam vel quam
            elementum pulvinar etiam.
          </p>
        </div>
        <div className="fourth-div">
          <div className="fourth-div-title">
            Quis hendrerit dolor magna eget est
          </div>
          <table>
            <colgroup span="3"></colgroup>
            <tr className="header-row">
              <th className="location">Location</th>
              <th className="pm2">PM2.5</th>
              <th className="last-updated">Last Updated</th>
            </tr>
            <tbody>{table}</tbody>
          </table>
        </div>
        <div className="fifth-div">
          <div className="fifth-div-title">
            Etiam sit amet nisl purus magna eget est.
          </div>
          <div className="fifth-div-subtitle">
            In pellentesque massa placerat duis ultricies lacus sed tur.
          </div>
        </div>
        <footer>
          Copyright &#169; 2020, General Company. All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
