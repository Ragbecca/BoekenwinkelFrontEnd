import React, { useEffect, useState } from 'react';
import * as apiCalls from '../api/apiCalls';
import SelectSearch from 'react-select-search';

const AddressSelector = (props) => {
    const [tempAddressList, setTempAddressList] = useState([]);
    const [addressList, setAddressList] = useState([]);
    const [initialCall, setInitialCall] = useState(true);
    const [address, setAddress] = useState(0);
    const countriesList = require('../json/CountriesOfWorld.json');

    useEffect(() => {
        async function getData() {
            setInitialCall(false);
            await apiCalls.listAddresses().then(res => setTempAddressList(res.data))
        };
        if (initialCall) {
            getData();
        };
    });

    useEffect(() => {
        if (initialCall) {
            return;
        }
        if (addressList.length === 0) {
            for (let count = 0; count < tempAddressList.length; count++) {
                let indexCountry = countriesList.findIndex((x) => x.value === tempAddressList[count].country);
                const countryName = countriesList[indexCountry].name;
                const combinedAddress = tempAddressList[count].houseNumber + tempAddressList[count].houseNumberAddon + " " + tempAddressList[count].city + " " + countryName;
                const singleCountry = {
                    "name": combinedAddress,
                    "value": tempAddressList[count].id
                };
                setAddressList(oldArray => [...oldArray, singleCountry])
            }
        }
    }, [tempAddressList]);

    useEffect(() => {
        props.onChange(address);
    }, [address]);

    return (
        <div>
            <SelectSearch options={addressList} value={address} onChange={setAddress} name={props.name} placeholder="Kies een adres" search />
        </div>
    );
};

AddressSelector.defaultProps = {
    onChange: () => { }
};

export default AddressSelector;