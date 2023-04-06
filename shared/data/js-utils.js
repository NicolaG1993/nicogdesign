import { getError } from "../utils/error";
import {
    ageValidation,
    decimalValidation,
    emailValidation,
    extractObjValuesIDs,
    nameValidation,
    numberValidation,
    passwordValidation,
    requestedField,
    requestedValue,
    sortByObjDate,
    sortByObjNumberValue,
    sortByObjValue,
    sortByObjValueLength,
    sortByValue,
    titleValidation,
    createObjectURL,
    revokeObjectURL,
    formatJSDate,
    formatJSDateWithTime,
    formatDateShort,
    formatDateForInput,
    regroupObjects,
    extractGroups,
    sortObjByKey,
} from "../utils/utils";

import Pic from "@/public/portrait.jpeg";

console.log("PIC", Pic);

const jsUtils = [
    {
        title: "extractObjValuesIDs(obj)",
        // slug: "/element/random-numbers-generator",
        // tags: ["Component", "Element", "Tool"],
        stack: ["JavaScript (ES6)"],
        // description: ``,
        // full_description: ``,
        // thumbnail: "",
        // pics: null,
        // urls: null,
        // maintained: true,
        // Component: (pageProps) => <RandomNumbersGenerator {...pageProps} />,
        function: extractObjValuesIDs,
        arguments: {
            data: {
                id: 1,
                name: "John",
                animals: [
                    { id: 2, animal: "Dog", name: "Lucky" },
                    { id: 3, animal: "Cat", name: "Luna" },
                ],
            },
        },
        group: "Data Parsers",
        documentation: (
            <ul>
                <li>
                    used to check all keys inside an object and transform all
                    the array of object into an array of IDs. The idea is to
                    prepare/parse it for API requests or Database queries
                    afterwards.
                </li>
                <li>
                    <strong>obj</strong> has to be a object
                </li>
                <li>returns parsed object</li>
            </ul>
        ),
    },
    {
        title: "sortArrByValue(data, order)",
        stack: ["JavaScript (ES6)"],
        function: sortByValue,
        arguments: {
            data: [
                "Italy",
                "Canada",
                "Germany",
                "USA",
                "Thailand",
                "Spain",
                "Mexico",
                "Japan",
                "Finland",
            ],
            order: "asc",
        },
        group: "Data Sorters",
        documentation: (
            <ul>
                <li>used to order an array</li>
                <li>
                    <strong>data</strong> can be array of strings or array of
                    integers
                </li>
                <li>
                    <strong>order</strong> can be &quot;asc&quot; or
                    &quot;desc&quot;
                </li>
                <li>returns sorted array</li>
            </ul>
        ),
    },
    {
        title: "sortArrByObjValue(data, key, order)",
        stack: ["JavaScript (ES6)"],
        function: sortByObjValue,
        arguments: {
            data: [
                { country: "Italy" },
                { country: "Japan" },
                { country: "Canada" },
                { country: "UK" },
                { country: "Finland" },
                { country: "Brazil" },
            ],
            key: "country",
            order: "asc",
        },
        group: "Data Sorters",
        documentation: (
            <>
                <ul>
                    <li>
                        used to order an array of objects -or JSON -by a
                        specific key value: <u>strings only</u>
                    </li>
                    <li>
                        <strong>data</strong> has to be an array of objects
                    </li>
                    <li>
                        <strong>key</strong> is the object key value to use to
                        sort the array
                    </li>
                    <li>
                        <strong>order</strong> can be &quot;asc&quot; or
                        &quot;desc&quot;
                    </li>
                    <li>returns sorted array</li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>can a key be missing in one or more objects?</li>
                    <li>can a key be only a string?</li>
                    <li>data is not an array</li>
                    <li>data is not an array of objects</li>
                </ul>
            </>
        ),
    },
    {
        title: "sortByObjNumberValue(data, key, order)",
        stack: ["JavaScript (ES6)"],
        function: sortByObjNumberValue,
        arguments: {
            data: [
                { age: 34 },
                { age: 29 },
                { age: 18 },
                { age: 44 },
                { age: 8 },
                { age: 61 },
            ],
            key: "age",
            order: "asc",
        },
        group: "Data Sorters",
        documentation: (
            <>
                <ul>
                    <li>
                        used to order an array of object -or JSON -by a specific
                        key value: integers only
                    </li>
                    <li>
                        <strong>data</strong> has to be an array of objects
                    </li>
                    <li>
                        <strong>key</strong> is the object key value to use to
                        sort the array
                    </li>
                    <li>
                        <strong>order</strong> can be &quot;asc&quot; or
                        &quot;desc&quot;
                    </li>
                    <li>returns sorted array</li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>can a key be missing in one or more objects?</li>
                    <li>can a key be a number but not an integer?</li>
                    <li>data is not an array</li>
                    <li>data is not an array of objects</li>
                </ul>
            </>
        ),
    },
    {
        title: "sortByObjDate(data, key, order)",
        stack: ["JavaScript (ES6)"],
        function: sortByObjDate,
        arguments: {
            data: [
                { date: "2009-09-03 04:39:39" },
                { date: "2004-11-21 16:17:03" },
                { date: "2002-03-07 05:35:57" },
                { date: "2004-04-19 02:04:41" },
                { date: "2027-01-11 12:59:41" },
                { date: "2014-12-08 11:44:06" },
            ],
            key: "date",
            order: "asc",
        },
        group: "Data Sorters",
        documentation: (
            <>
                <ul>
                    <li>
                        used to order an array of object -or JSON -by a specific
                        key value: date only - not sure 🧠
                    </li>
                    <li>
                        <strong>data</strong> has to be an array of objects
                    </li>
                    <li>
                        <strong>key</strong> is the object key value to use to
                        sort the array
                    </li>
                    <li>
                        <strong>order</strong> can be &quot;asc&quot; or
                        &quot;desc&quot;
                    </li>
                    <li>returns sorted array</li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>can a key be missing in one or more objects?</li>
                    <li>
                        what type of key is needed or accepted ? modify first
                        point then
                    </li>
                    <li>data is not an array</li>
                    <li>data is not an array of objects</li>
                </ul>
            </>
        ),
    },
    {
        title: "sortByObjValueLength(data, key, order)",
        stack: ["JavaScript (ES6)"],
        function: sortByObjValueLength,
        arguments: {
            data: [
                {
                    order: ["apple", "pizza", "chicken", "ice cream", "kebab"],
                },
                {
                    order: ["pizza", "chicken", "pasta", "kebab"],
                },
                {
                    order: ["apple"],
                },
                {
                    order: ["pizza", "kebab"],
                },
                {
                    order: ["apple", "banana", "ice cream"],
                },
                {
                    order: ["apple", "banana", "pizza", "chicken", "kebab"],
                },
            ],
            key: "order",
            order: "asc",
        },
        group: "Data Sorters",
        documentation: (
            <>
                <ul>
                    <li>
                        used to order an array of object -or JSON -by a specific
                        key value length: strings and arrays accepted - not sure
                        🧠
                    </li>
                    <li>
                        <strong>data</strong> has to be an array of objects
                    </li>
                    <li>
                        <strong>key</strong> is the object key value to use to
                        sort the array
                    </li>
                    <li>
                        <strong>order</strong> can be &quot;asc&quot; or
                        &quot;desc&quot;
                    </li>
                    <li>returns sorted array</li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>can a key be missing in one or more objects?</li>
                    <li>
                        what type of key is needed or accepted ? modify first
                        point thenObj
                    </li>
                    <li>
                        check if values are all of the same types or throw error
                        back, it may not work as intended if under the same key
                        we find different types of values (ex. string, array,
                        int)
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "requestedValue(fieldValue)",
        stack: ["JavaScript (ES6)"],
        function: requestedValue,
        arguments: {
            fieldValue: "John",
        },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if a value has been passed as argument:{" "}
                        <u>strings only</u> - 🧠 not sure
                    </li>
                    <li>
                        <strong>fieldValue</strong> has to be a string, required
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                </ul>
            </>
        ),
    },
    {
        title: "requestedField(fieldName, fieldValue)",
        stack: ["JavaScript (ES6)"],
        function: requestedField,
        arguments: { fieldName: "First Name", fieldValue: "John" },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if a value has been passed as argument:{" "}
                        <u>strings only</u>
                    </li>
                    <li>
                        same as <u>requestedValue(fieldValue)</u> but the return
                        mentions the <strong>fieldValue</strong>
                    </li>
                    <li>
                        <strong>fieldName</strong> has to be a string, not
                        required
                    </li>
                    <li>
                        <strong>fieldValue</strong> has to be a string, required
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                </ul>
            </>
        ),
    },
    {
        title: "titleValidation(fieldName, fieldValue)",
        stack: ["JavaScript (ES6)", "RegEx"],
        function: titleValidation,
        arguments: { fieldName: "Title", fieldValue: "100 Days" },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if a title is valid: <u>strings only</u>
                    </li>
                    <li>
                        <strong>fieldName</strong> has to be a string, not
                        required.
                    </li>
                    <li>
                        <strong>fieldValue</strong> has to be a string,
                        required: at least 2 letters; It can contain any letter,
                        special letters, symbols or number
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                </ul>
            </>
        ),
    },
    {
        title: "nameValidation(fieldName, fieldValue)",
        stack: ["JavaScript (ES6)", "RegEx"],
        function: nameValidation,
        arguments: { fieldName: "Title", fieldValue: "100 Days" },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if a full name is valid:{" "}
                        <u>strings only</u>
                    </li>
                    <li>
                        the Regular Expression accepts international names:
                        <i>{`"Mathias d'Arras", "Martin Luther King, Jr.", "Hector
                        Sausage-Hausen".`}</i>
                    </li>
                    <li>
                        <strong>fieldName</strong> has to be a string, not
                        required.
                    </li>
                    <li>
                        <strong>fieldValue</strong> has to be a string,
                        required: at least 2 letters; It can contain any letter,
                        special letters, white spaces or symbols
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                    <li>Test Regular Expression, new one never tested</li>
                </ul>
            </>
        ),
    },
    {
        title: "emailValidation(email)",
        stack: ["JavaScript (ES6)", "RegEx"],
        function: emailValidation,
        arguments: { email: "example@email.org" },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if an email is valid: <u>strings only</u>
                    </li>
                    <li>
                        the Regular Expression checks email format: <i>a@a.a</i>
                    </li>
                    <li>
                        <strong>email</strong> has to be a string, in email
                        format
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                </ul>
            </>
        ),
    },
    {
        title: "passwordValidation(fieldValue)",
        stack: ["JavaScript (ES6)"],
        function: passwordValidation,
        arguments: { fieldValue: "MyPassword2023" },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if a password is valid:{" "}
                        <u>strings only</u>
                    </li>
                    <li>
                        <strong>fieldValue</strong> has to be a string, at least
                        6 characters
                    </li>
                    <li>
                        for now it tests only <strong>fieldValue</strong>{" "}
                        length, nothing more
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                </ul>
            </>
        ),
    },
    {
        title: "ageValidation(value, [min, max])",
        stack: ["JavaScript (ES6)"],
        function: ageValidation,
        arguments: { value: 29, limit: [18, 99] },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if the user age is valid:{" "}
                        <u>integers only</u>
                    </li>
                    <li>
                        <strong>value</strong> has to be an integer, if string
                        it gets converted to Number. Required
                    </li>
                    <li>
                        <strong>[min, max]</strong> have to be integers, if
                        strings they get converted to Number. Optional
                    </li>
                    <li>
                        to pass the tests the age must be at least{" "}
                        <strong>min</strong> and under
                        <strong>max</strong>, but only if they exists; Otherwise
                        it checks only if <strong>value</strong> exists
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                    <li>new code, never tested 🧠</li>
                </ul>
            </>
        ),
    },
    {
        title: "numberValidation(fieldName, fieldValue)",
        stack: ["JavaScript (ES6)", "RegEx"],
        function: numberValidation,
        arguments: { fieldName: "amount", fieldValue: "20" },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if value is a number: <u>integers only</u>
                    </li>
                    <li>
                        <strong>fieldName</strong> has to be a string. Not
                        required - test this 🧠
                    </li>
                    <li>
                        <strong>fieldValue</strong> has to be an integer, if
                        string it gets converted to Number. Required - test this
                        🧠
                    </li>
                    <li>
                        a Regular Expression will check if{" "}
                        <strong>fieldValue</strong> is a number, if so it will
                        pass the test. - test this 🧠 it seams like it is for
                        strings now? 🧠
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                    <li>
                        new code, never tested under comment for now: maybe i
                        could need it, but maybe is rendundant 🧠
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "decimalValidation(fieldName, fieldValue)",
        stack: ["JavaScript (ES6)", "RegEx"],
        function: decimalValidation,
        arguments: { fieldName: "price", fieldValue: "99.99" },
        group: "Input Validators",
        documentation: (
            <>
                <ul>
                    <li>
                        used to check if value is a decimal number:{" "}
                        <u>integers only</u>
                    </li>
                    <li>
                        <strong>fieldName</strong> has to be a string. Not
                        required - test this 🧠
                    </li>
                    <li>
                        <strong>fieldValue</strong> has to be a string. Required
                        - test this 🧠
                    </li>
                    <li>
                        a Regular Expression will check if{" "}
                        <strong>fieldValue</strong> is a decimal number, if so
                        it will pass the test. - test this
                    </li>
                    <li>
                        returns a string reporting what error occured, if{" "}
                        <strong>fieldValue</strong> is valid returns{" "}
                        <strong>null</strong>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>Test Highjacking</li>
                    <li>Test not allowed characters or data types</li>
                    <li>
                        test <strong>fieldValue</strong> required format:{" "}
                        {`"0.02", ".2", "0,5",
                        "0.0005"`}
                    </li>
                    <li>
                        new code, never tested under comment for now: maybe i
                        could need it, but maybe is rendundant 🧠
                    </li>
                </ul>
            </>
        ),
    },
    /*
    // 1. Mi serve un vero file per createObjectURL
    // 2. Questi alla fine sono static methods utilizzabili in react, nient'altro
    {
        title: "createObjectURL(object)",
        stack: ["JavaScript (ES6)"],
        function: createObjectURL,
        arguments: {
            object: () => new Blob([], "test file"),
        },
        group: "Local Images",
        documentation: (
            <ul>
                <li>
                    The URL.createObjectURL() static method creates a string
                    containing a URL representing the object given in the
                    parameter. There is a check to make sure it works also in a
                    React enviroment with Webkit
                </li>
                <li>
                    <strong>object</strong> has to be a File, Blob, or
                    MediaSource object to create an object URL for
                </li>
                <li>
                    Returns a string containing an object URL that can be used
                    to reference the contents of the specified source object.
                </li>
                <li>
                    <a>
                        https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
                    </a>
                </li>
            </ul>
        ),
    },
    {
        title: "revokeObjectURL(url)",
        stack: ["JavaScript (ES6)"],
        function: revokeObjectURL,
        arguments: { url: "" },
        group: "Local Images",
        documentation: (
            <ul>
                <li>
                    The URL.revokeObjectURL() static method releases an existing
                    object URL which was previously created by calling
                    URL.createObjectURL(). There is a check to make sure it
                    works also in a React enviroment with Webkit
                </li>
                <li>
                    <strong>url</strong> has to be a string representing an
                    object URL that was previously created by calling
                    createObjectURL()
                </li>
                <li>It returns nothing</li>
                <li>
                    <a>
                        https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
                    </a>
                </li>
            </ul>
        ),
    },
    */
    {
        title: "formatJSDate(date)",
        stack: ["JavaScript (ES6)"],
        function: formatJSDate,
        arguments: { date: "1993-07-18T11:44:06" },
        group: "Timestamps and Dates",
        documentation: (
            <>
                <ul>
                    <li>
                        used to convert a date value (like <u>timestamp</u>) in
                        a readable format for users, only the date
                    </li>
                    <li>
                        <strong>date</strong> can be any data type accepted by{" "}
                        <strong>new Date()</strong> constructor
                    </li>
                    <li>
                        returns readable format date as string: <i>1/31/1999</i>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>
                        add an argument to choose between US and EU date format
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "formatJSDateWithTime(date)",
        stack: ["JavaScript (ES6)"],
        function: formatJSDateWithTime,
        arguments: { date: "1993-07-18T11:44:06" },
        group: "Timestamps and Dates",
        documentation: (
            <>
                <ul>
                    <li>
                        used to convert a date value (like <u>timestamp</u>) in
                        a readable format for users, with date and time
                    </li>
                    <li>
                        <strong>date</strong> can be any data type accepted by{" "}
                        <strong>new Date()</strong> constructor
                    </li>
                    <li>
                        returns readable format date as string:{" "}
                        <i>1/31/1999 11:44</i>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>
                        add an argument to choose between US and EU date format
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "formatDateShort(date)",
        stack: ["JavaScript (ES6)"],
        function: formatDateShort,
        arguments: { date: "1993-07-18T11:44:06" },
        group: "Timestamps and Dates",
        documentation: (
            <>
                <ul>
                    <li>
                        used to convert reduce a <u>timestamp</u> in a readable
                        format for users, with just the date
                    </li>
                    <li>
                        <strong>date</strong> can be any timestamp accepted by{" "}
                        <strong>toString()</strong> method
                    </li>
                    <li>
                        returns readable format date as string:{" "}
                        <i>1999-01-31</i>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>wrong data types</li>
                </ul>
            </>
        ),
    },
    {
        title: "formatDateForInput(date)",
        stack: ["JavaScript (ES6)"],
        function: formatDateForInput,
        arguments: { date: "1993-07-18T11:44:06" },
        group: "Timestamps and Dates",
        documentation: (
            <>
                <ul>
                    <li>
                        used to parse a <strong>date</strong> value to fit{" "}
                        <u>DOM date input type</u>
                    </li>
                    <li>
                        <strong>date</strong> can be any data type accepted by{" "}
                        <strong>new Date()</strong> constructor
                    </li>
                    <li>
                        returns string usable in date input: <i>1999-01-31</i>
                    </li>
                </ul>
                <p>
                    <strong>TO TEST:</strong>
                </p>
                <ul>
                    <li>wrong data types</li>
                </ul>
            </>
        ),
    },
    {
        title: "getError(err)",
        stack: ["JavaScript (ES6)"],
        function: getError,
        arguments: {
            err: {
                response: { data: { message: "Error code 404 - Not Found" } },
            },
        },
        group: "Error Handlers",
        documentation: (
            <>
                <ul>
                    <li></li>
                </ul>
            </>
        ),
    },
    /* NEW 2023 */
    {
        title: "regroupObjects(data, key)",
        stack: ["JavaScript (ES6)"],
        function: regroupObjects,
        arguments: {
            data: [
                { name: "Toby", group: "Dogs" },
                { name: "Luna", group: "Cats" },
                { name: "Lucky", group: "Dogs" },
                { name: "Nemo", group: "Fishes" },
            ],
            key: "group",
        },
        group: "Data Parsers",
        documentation: (
            <>
                <ul>
                    <li></li>
                </ul>
            </>
        ),
    },
    {
        title: "extractGroups(data, key)",
        stack: ["JavaScript (ES6)"],
        function: extractGroups,
        arguments: {
            data: [
                { name: "Toby", group: "Dogs" },
                { name: "Luna", group: "Cats" },
                { name: "Lucky", group: "Dogs" },
                { name: "Nemo", group: "Fishes" },
            ],
            key: "group",
        },
        group: "Data Parsers",
        documentation: (
            <>
                <ul>
                    <li></li>
                </ul>
            </>
        ),
    },
    {
        title: "sortObjByKey(data)",
        stack: ["JavaScript (ES6)"],
        function: sortObjByKey,
        arguments: {
            data: {
                b: "foo",
                c: "bar",
                a: "baz",
            },
        },
        group: "Data Sorters",
        documentation: (
            <>
                <ul>
                    <li></li>
                </ul>
            </>
        ),
    },
];

export default jsUtils;

// TEMPLATE
/*
let template = {
    title: "",
    stack: ["JavaScript (ES6)"],
    function: null,
    arguments: {},
    group: "",
    documentation: (
        <>
            <ul>
                <li></li>
            </ul>
        </>
    ),
}
*/

// 🧠 aggiornare funzioni dai progetti nuovi (damamyamamy, bordogna, db-ui)
