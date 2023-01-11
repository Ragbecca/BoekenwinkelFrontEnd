import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputDisabled from "../../components/InputDisabled";
import * as apiCalls from "../../api/apiCalls";
import Input from "../../components/Input";
import InputURL from "../../components/InputURL";
import ButtonWithProgress from "../../components/ButtonWithProgress";

const AddPublisherPage = () => {
    const countriesList = require('../../json/CountriesOfWorld.json');
    const { idGotten } = useParams();
    const [addressValue, setAddressValue] = useState("");
    const [address, setAddress] = useState('');
    const [addressList, setAddressList] = useState([]);
    const [initialCall, setInitialCall] = useState(true);
    const [userName, setUserName] = useState('');
    const [websiteURL, setWebsiteURL] = useState('');
    const [pendingApiCall, setPendingApiCall] = useState(false);

    useEffect(() => {
        if (!initialCall) {
            return;
        };
        apiCalls.testListCall().then(response => setAddressList(response.data));
        setInitialCall(false);
    }, [address]);

    useEffect(() => {
        if (initialCall) {
            return;
        };
        const addressGottenIndex = addressList.findIndex(address => address.id === +idGotten);
        const addressGotten = addressList[addressGottenIndex];
        let indexCountry = countriesList.findIndex((x) => x.value === addressGotten.country);
        setAddress(addressGotten);
        const countryName = countriesList[indexCountry].name;
        const addressValue = addressGotten.houseNumber + addressGotten.houseNumberAddon + " " + addressGotten.street + " " + addressGotten.city + " " + countryName;
        setAddressValue(addressValue);
    }, [addressList])

    const changeUserName = (event) => {
        setUserName(event.target.value);
    }

    const changeURL = (event) => {
        setWebsiteURL(event.target.value);
    }

    function onClickCreate() {
        const publisher = {
            name: userName,
            url: websiteURL,
            address: address
        }
        setPendingApiCall(true);
        apiCalls.createPublisher(publisher).then((response) => {
            setPendingApiCall(false)
        });
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Voeg een uitgever toe</h1>
            <div className='col-12 mb-3'>
                <InputDisabled
                    label="Adres"
                    type="text"
                    value={addressValue}>
                </InputDisabled>
            </div>
            <div>
                <Input
                    label="Naam"
                    placeholder="Naam"
                    type="text"
                    onChange={changeUserName}>
                </Input>
            </div>
            <div>
                <InputURL
                    label="Website"
                    onChange={changeURL}>
                </InputURL>
            </div>
            <div className='text-center mt-1'>
                <ButtonWithProgress onClick={onClickCreate}
                    disabled={pendingApiCall}
                    pendingApiCall={setPendingApiCall}
                    text="Voeg Adres Toe" />
            </div>
        </div >
    )

}

export default AddPublisherPage;