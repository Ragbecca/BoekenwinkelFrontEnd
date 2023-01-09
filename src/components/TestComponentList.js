import React, { useState } from "react";
import * as apiCalls from "../api/apiCalls";

const TestComponentList = () => {

    const [testValue, setTestValue] = useState([]);
    const [runFirstTime, setRunFirstTime] = useState(true);

    function testCall() {
        apiCalls.testListCall().then(response => setTestValue(response.data));
    }

    if (runFirstTime) {
        setRunFirstTime(false);
        testCall();
    }

    return (
        <div>
            <ul>TEST CALL LIST - {
                testValue.map(test => {
                    return <li key={test.id}>{test.street} {test.houseNumber} {test.city} {test.country}</li>
                })}</ul>
        </div>
    )
}

export default TestComponentList;