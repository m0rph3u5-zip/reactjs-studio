import { Fragment } from 'react';

import BasicForm from './components/BasicForm';
import SimpleInput from './components/SimpleInput';

function App() {
  return (
    <Fragment>
      <div className='app'>
        <h1>Simple Form</h1>
        <SimpleInput />
      </div>
      <div className='app'>
        <h1>Basic Form</h1>
        <BasicForm />
      </div>
    </Fragment>
  );
}

export default App;
