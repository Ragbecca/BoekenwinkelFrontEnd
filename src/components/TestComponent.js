import React, { useState } from "react";
import * as apiCalls from "../api/apiCalls";

const TestComponent = () => {

    const [testValue, setTestValue] = useState('');
    function testCall() {
        apiCalls.testCall().then(response => setTestValue(response.data));
    }

    testCall();

    return (
        <div>
            <p>TEST CALL - {testValue}</p>
        </div>
    )
}

export default TestComponent;