import React, { Component } from 'react';
import { DateTime } from 'luxon';

export default class Table extends Component {
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

  renderTable() {
    return this.state.records.map((val, index) => {
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
  }

  render() {
    return (
      <div>
        <table>
          <colgroup span="3"></colgroup>
          <thead>
            <tr className="header-row">
              <th className="location">Location</th>
              <th className="pm2">PM2.5</th>
              <th className="last-updated">Last Updated</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
