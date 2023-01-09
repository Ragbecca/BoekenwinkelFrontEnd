import React from "react";
import AddressSelector from "../../components/AddressSelector";
import TestComponent from "../../components/TestComponent";
import TestComponentList from "../../components/TestComponentList";

class Testscreen extends React.Component {
    render() {
        return (
            <div>
                <TestComponent />
                <TestComponentList />
                <AddressSelector
                    label="Adres">
                </AddressSelector>
            </div>
        )
    }
}

export default Testscreen;