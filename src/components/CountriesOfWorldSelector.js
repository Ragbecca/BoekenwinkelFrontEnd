import React, { useEffect, useState } from 'react';

const CountriesOfWorldSelector = (props) => {
    const countriesList = require('../json/CountriesOfWorld.json');
    let inputClassName = props.classes;

    return (
        <div>
            {props.label && <label className={props.labelClass}>{props.label}</label>}
            <select name={props.name} className={inputClassName} onChange={props.onChange}>
                {
                    countriesList.map((country) => {
                        return <option value={country.name} key={country.code}>{country.name}</option>
                    })
                }
            </select>
        </div>
    );
};

CountriesOfWorldSelector.defaultProps = {
    onChange: () => { }
};

export default CountriesOfWorldSelector;