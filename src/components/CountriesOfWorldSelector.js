import React, { useEffect, useState } from 'react';
import SelectSearch from 'react-select-search';

const CountriesOfWorldSelector = (props) => {
    const [country, setCountry] = useState('NL');
    const countriesList = require('../json/CountriesOfWorld.json');

    useEffect(() => {
        props.onChange(country);
    }, [country])

    return (
        <SelectSearch options={countriesList} value={country} onChange={setCountry} name={props.name} placeholder="Kies een land" search />
    );
};

CountriesOfWorldSelector.defaultProps = {
    onChange: () => { }
};

export default CountriesOfWorldSelector;