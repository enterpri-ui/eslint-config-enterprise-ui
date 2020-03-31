import { expect } from 'chai';

import { the, should } from './utils';
import config from './../';

the('config', () => {

  should('extend AirBnB config', () => {

    expect(config.extends).to.equal('airbnb');
  });
});