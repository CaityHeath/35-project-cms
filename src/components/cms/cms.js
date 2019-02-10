import React from 'react';

import Models from './models.js';
import Records from './records.js';
import Record from './record.js';
import Reset from '../../styles/reset.css';
import Header from '../../styles/header.scss';
import List from '../../styles/list.scss';
import Form from '../../styles/form.scss';


export default class CMS extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <Models />
          </nav>
        </header>

        <section>
          <Records />
        </section>

        <section>
          <Record />
        </section>
      </>
    );
  }
}
