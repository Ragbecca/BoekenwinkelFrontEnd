import React from "react";
import { Navigate, redirect } from "react-router-dom";
import * as apiCalls from "../api/apiCalls";
import Input from "../components/Input";
import ButtonWithProgress from "../components/ButtonWithProgress";
import CountriesOfWorldSelector from "../components/CountriesOfWorldSelector";

class AddAddressPage extends React.Component {
    state = {
        city: '',
        country: 'Afghanistan',
        house_number: 0,
        house_number_addon: '',
        street: '',
        errors: {},
        responseGotten: ''
    };


    onChangeCity = (event) => {
        const value = event.target.value;
        const errors = { ...this.state.errors };
        delete errors.city;
        this.setState({ city: value, errors });
    };

    onChangeCountry = (event) => {
        const value = event.target.value;
        const errors = { ...this.state.errors };
        delete errors.country;
        this.setState({ country: value, errors });
    };

    onChangeHouseNumber = (event) => {
        const value = event.target.value;
        const errors = { ...this.state.errors };
        delete errors.house_number;
        this.setState({ house_number: value, errors });
    };

    onChangeHouseNumberAddon = (event) => {
        const value = event.target.value;
        const errors = { ...this.state.errors };
        delete errors.house_number_addon;
        this.setState({ house_number_addon: value, errors });
    };

    onChangeStreet = (event) => {
        const value = event.target.value;
        const errors = { ...this.state.errors };
        delete errors.street;
        this.setState({ street: value, errors });
    };

    onClickCreate = (event) => {
        const address = {
            city: this.state.city,
            country: this.state.country,
            houseNumber: this.state.house_number,
            houseNumberAddon: this.state.house_number_addon,
            street: this.state.street
        }
        this.setState({ pendingApiCall: true })
        apiCalls.createAddress(address).then((response) => {
            this.setState({ pendingApiCall: false })
            this.setState({ responseGotten: response.data });
        }).catch((apiError) => {
            let errors = { ...this.state.errors }
            if (apiError.response.data && apiError.response.data.validationErrors) {
                errors = { ...apiError.response.data.validationErrors }
            }
            this.setState({ pendingApiCall: false, errors });
        });
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Voeg een adres toe</h1>
                <div className='col-12 mb-3'>
                    <Input
                        label="Straat"
                        placeholder='Straat'
                        value={this.state.street}
                        onChange={this.onChangeStreet}
                        hasError={this.state.errors.street && true}
                        error={this.state.errors.street}>
                    </Input>
                </div>
                <div>
                    <Input
                        label="Huisnummer"
                        placeholder="Huisnummer"
                        type="number"
                        value={this.state.house_number}
                        onChange={this.onChangeHouseNumber}
                        hasError={this.state.errors.house_number && true}
                        error={this.state.errors.house_number}>
                    </Input>
                </div>
                <div>
                    <Input
                        label="Huisnummer Toevoeging"
                        placeholder="Huisnummer Toevoeging"
                        value={this.state.house_number_addon}
                        onChange={this.onChangeHouseNumberAddon}
                        hasError={this.state.errors.house_number_addon && true}
                        error={this.state.errors.house_number_addon}>
                    </Input>
                </div>
                <div>
                    <Input
                        label="Stad"
                        placeholder='Stad'
                        value={this.state.city}
                        onChange={this.onChangeCity}
                        hasError={this.state.errors.city && true}
                        error={this.state.errors.city}>
                    </Input>
                </div>
                <div>
                    <CountriesOfWorldSelector
                        label="Land"
                        value={this.state.country}
                        onChange={this.onChangeCountry}
                        hasError={this.state.errors.country && true}
                        error={this.state.errors.country}>
                    </CountriesOfWorldSelector>
                </div>
                <div className='text-center mt-1'>
                    <ButtonWithProgress onClick={this.onClickCreate}
                        disabled={this.state.pendingApiCall}
                        pendingApiCall={this.state.pendingApiCall}
                        text="Voeg Adres Toe" />
                </div>
                <div>{this.state.responseGotten}</div>
            </div >
        )
    }

}

export default AddAddressPage;