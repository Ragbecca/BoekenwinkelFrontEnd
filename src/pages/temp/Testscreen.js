import React from "react";
import AddressSelector from "../../components/AddressSelector";
import TestComponent from "../../components/TestComponent";
import TestComponentList from "../../components/TestComponentList";

class Testscreen extends React.Component {

    onChangeAddress = (event) => {
        const value = event;
        console.log(value);
    };

    render() {
        return (
            <div>
                <TestComponent />
                <TestComponentList />
                <AddressSelector
                    onChange={this.onChangeAddress}>
                </AddressSelector>
            </div>
        )
    }
}

export default Testscreen;