import React, { useEffect, useState } from 'react';
import * as apiCalls from '../api/apiCalls';

const AddressSelector = (props) => {
    const [addressList, setAddressList] = useState([]);
    const [initialCall, setInitialCall] = useState(true);
    let inputClassName = props.classes;

    useEffect(() => {
        async function getData() {
            setInitialCall(false);
            await apiCalls.listAddresses().then(res => setAddressList(res.data))
        }
        if (initialCall) {
            getData();
        }
    })

    return (
        <div>
            {props.label && <label className={props.labelClass}>{props.label}</label>}
            <select name={props.name} className={inputClassName} onChange={props.onChange}>
                {
                    addressList.map((address) => {
                        return <option key={address.id}>{address.street} {address.houseNumber} {address.houseNumberAddon} {address.city} {address.country}</option>
                    })
                }
            </select>
        </div>
    );
};

AddressSelector.defaultProps = {
    onChange: () => { }
};

export default AddressSelector;