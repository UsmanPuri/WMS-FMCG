// export const environment = {
//   production: true,
//   urlAddress: 'http://192.168.1.20:9999'
// };


import { DynamicEnvironment } from './dynamic-environment';

class Environment extends DynamicEnvironment {

  public production: boolean;
  constructor() {
    super();
    this.production = true;
  }
}

export const environment = new Environment();