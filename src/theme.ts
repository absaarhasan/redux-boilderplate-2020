import facepaint from 'facepaint';

export type Theme = {
  bg: {
    body: string;
    nav: string;
  };
  tx: {
    heading: string;
    body: string;
    nav: string;
  };
  alert: {
    bg: {
      error: string;
      warn: string;
      success: string;
    };
    tx: {
      header: string;
      body: string;
    };
  };
  font: string;
  mq: any;
}

const theme: Theme = {
  bg: {
    body: '#eaeaea',
    nav: '#04080c',

  },
  tx: {
    heading: '#04080c',
    body: '#778189',
    nav: '#cdd9e2',
  },
  alert: {
    bg: {
      error: '#df142f',
      warn: '#f0a534',
      success: '#488127',
    },
    tx: {
      header: '#ffffff',
      body: '#ffffff',
    },
  },
  font: ' Arial, Helvetica, sans-serif',
  mq: facepaint([
    '@media(min-width: 600px)',
    '@media(min-width: 920px)',
    '@media(min-width: 1120px)',
  ]),

};

export default theme;
