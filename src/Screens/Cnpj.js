import React, { Fragment, useState } from 'react';

function Cnpj() {

  const [validation, setValidation] = useState('');
  const [message, setMessage] = useState('');

  const isValid = (props) => {
    const cnpj = props.target.value;
    //Check format (Mask and first exercise)
    if (cnpj.match(/^\d{14}$/)) {
      if(isValidCD(cnpj)) {
        setValidation(true);
        setMessage('This is a valid CNPJ.');
      }
      else {
        setValidation(false);
        setMessage(`The 'Check Digits' of this CNPJ is invalid.`);
      }
    }
    else{
      if(cnpj === '') {
        setValidation('');
        setMessage('');
      }
      else {
        setValidation(false);
        setMessage('Invalid format');
      }
    }
  };

  const isValidCD = (cnpj) => {
      const arrayCnpj = cnpj.replace(/\D/g,'').split('');
      const arrayWeight = [[5,4,3,2,9,8,7,6,5,4,3,2], [6,5,4,3,2,9,8,7,6,5,4,3,2]];
      var calcCD = [0, 0];


      for(let x = 0; x < arrayWeight.length; x++) {
        for(let y = 0; y < arrayWeight[x].length; y++) {
          calcCD[x] += arrayWeight[x][y] * arrayCnpj[y];
        }
        calcCD[x] = 11 - ((calcCD[x]%11) < 2 ? 0 : calcCD[x]%11);
      }
      return (calcCD[0] == arrayCnpj[12] && calcCD[1] == arrayCnpj[13]) ? true : false;
  }

  return (
    <Fragment>
      <div className="App">
        <h1>CNPJ Validate</h1>
        <p>(Exercises One and Two)</p>
        <div className="input">
          <input type="text" className={validation === '' ? '' : validation ? 'input-valid' : 'input-invalid'} onChange={isValid}></input>
          <p className={validation?'message-valid':'message-invalid'}>{message}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Cnpj;