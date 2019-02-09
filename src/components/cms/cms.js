import React from 'react';

import Models from './models.js';
import Records from './records.js';
import Record from './record.js';

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
