import React from 'react'


const Info = ({ name, charCode, nominal, nominals, value }) => {



  return (
    <>
      <div className='name'>
        <span>
          Валюта:
        </span>&nbsp;
        {name}
        <div className='charCode'>

        </div>

      </div>
      <div className='nominal'>
        <span>
          Номинал: &nbsp;
        </span>
        {!nominal ? nominals : nominal}

        &nbsp;

        {charCode}
      </div>
      <div className='value'>
        <span>
          Стоимость:
        </span> &nbsp;
        {!nominal ? value : value * nominal}

        руб.
      </div>
    </>
  )

}











export default Info
