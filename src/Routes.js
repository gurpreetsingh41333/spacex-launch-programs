import Main from './Main';
import App from './App';

export default [
  {
    ...Main,
    routes: [
      {
        ...App,
        path: '/',
      },
    ],
  },
];
