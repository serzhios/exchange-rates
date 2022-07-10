import React, { useEffect, useState } from 'react';

import Info from './Info'
import axios from 'axios'

import './Servise.css';



function Servise() {

    const [valute, setValute] = useState('');
    const [summ, setSumm] = useState('')
    const [term, setTerm] = useState('')
    const [isOpen, setIsOpen] = useState(true)




    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.cbr-xml-daily.ru/daily_json.js',
            );
            setValute(result.data.Valute);
            console.log(result.data.Valute)
        };
        fetchData();
    }, []);





    const filteredValute = Object.values(valute).filter(valut => {
        return valut.Name.toLowerCase().includes(term.toLowerCase())
    })
    console.log(filteredValute)

    const onUpdateSearch = (e) => {
        setTerm(e.target.value)

        console.log(e.target.value)
    }



    const itemClickHandler = (e) => {
        setTerm(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    const onUpdateSumm = (e) => {
        e.preventDefault()
        setSumm(e.target.value)
    }


    return (
        <div>
            <div className='from'>
                <form className='form_search'>
                    <input
                        className='input'
                        type='number'
                        name='summ'
                        placeholder='введите сумму'
                        onChange={e => onUpdateSumm(e)}
                        value={summ}
                    />
                    <input
                        className='input'
                        type="text"
                        name='term'
                        placeholder="поиск валюты"
                        onChange={e => onUpdateSearch(e)}
                        value={term}
                        onClick={inputClickHandler}
                    />
                    <ul
                        className='autocomplete'>
                        {
                            term && isOpen
                                ? Object.keys(filteredValute).map(key => {
                                    return (
                                        <div key={filteredValute[key].ID}>
                                            <li
                                                className='autocomplete-item'
                                                onClick={itemClickHandler}
                                            >{filteredValute[key].Name}</li>
                                        </div>
                                    )
                                }) : null
                        }


                    </ul>
                </form>
            </div>

            <div>
                {Object.keys(filteredValute).map(key => {
                    return (
                        <div key={filteredValute[key].ID}>
                            <hr />
                            <Info
                                name={filteredValute[key].Name}
                                charCode={filteredValute[key].CharCode}
                                nominals={filteredValute[key].Nominal}
                                // nominal={onUpdateSumm}
                                nominal={summ}
                                // value={filteredValute[key].Value.toFixed(2)}
                                value={Math.trunc(filteredValute[key].Value)}
                            />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Servise;