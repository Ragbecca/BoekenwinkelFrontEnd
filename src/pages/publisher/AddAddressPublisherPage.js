import React, { useEffect, useState } from "react";
import * as apiCalls from "../../api/apiCalls";
import Input from "../../components/Input";
import ButtonWithProgress from "../../components/ButtonWithProgress";
import CountriesOfWorldSelector from "../../components/CountriesOfWorldSelector";
import InputMinOne from "../../components/InputMinOne";
import { Navigate } from "react-router-dom";

const AddAddressPublisherPage = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('NL');
    const [houseNumber, setHouseNumber] = useState(1);
    const [houseNumberAddon, setHouseNumberAddon] = useState('');
    const [street, setStreet] = useState('');
    const [responseGotten, setResponseGotten] = useState('');
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [initialCall, setInitialCall] = useState(true);

    function onClickCreate() {
        const address = {
            city: city,
            country: country,
            houseNumber: houseNumber,
            houseNumberAddon: houseNumberAddon,
            street: street
        }
        setPendingApiCall(true);
        apiCalls.createAddress(address).then((response) => {
            setPendingApiCall(false)
            setResponseGotten(response.data)
        });
    }

    useEffect(() => {
        if (initialCall) {
            setInitialCall(false);
            return;
        };
        const link = "/publisher/add/2/" + responseGotten;
        return <Navigate to={link} />
    }, [responseGotten]);

    return (
        <div className='container'>
            <h1 className='text-center'>Voeg een adres toe</h1>
            <div className='col-12 mb-3'>
                <Input
                    label="Straat"
                    placeholder='Straat'
                    value={street}
                    onChange={setStreet}>
                </Input>
            </div>
            <div>
                <InputMinOne
                    label="Huisnummer"
                    placeholder="Huisnummer"
                    type="number"
                    value={houseNumber}
                    onChange={setHouseNumber}>
                </InputMinOne>
            </div>
            <div>
                <Input
                    label="Huisnummer Toevoeging"
                    placeholder="Huisnummer Toevoeging"
                    value={houseNumberAddon}
                    onChange={setHouseNumberAddon}>
                </Input>
            </div>
            <div>
                <Input
                    label="Stad"
                    placeholder="Stad"
                    value={city}
                    onChange={setCity}>
                </Input>
            </div>
            <div>
                <CountriesOfWorldSelector
                    onChange={setCountry}>
                </CountriesOfWorldSelector>
            </div>
            <div className='text-center mt-1'>
                <ButtonWithProgress onClick={onClickCreate}
                    disabled={pendingApiCall}
                    pendingApiCall={setPendingApiCall}
                    text="Voeg Adres Toe" />
            </div>
            <div>{responseGotten}</div>
        </div >
    )

}

export default AddAddressPublisherPage;