///////////////* DATA PARSERS *///////////////

function extractObjValuesIDs(obj) {
    const parsedObj = {};
    Object.entries(obj).forEach(([key, value]) =>
        Array.isArray(value)
            ? (parsedObj[key] = value.map((it) => it.id))
            : (parsedObj[key] = value)
    );
    return parsedObj;
}

///////////////* DATA SORTERS *///////////////

function sortByValue(data, order) {
    if (order === "desc") {
        return data.sort((a, b) => a.localeCompare(b)).reverse();
    } else if (order === "asc") {
        return data.sort((a, b) => a.localeCompare(b));
    } else {
        throw new Error("Invalid order!");
    }
}

function sortArrByObjValue(data, key, order) {
    if (!data || !key || !order) {
        return [];
    }
    if (order === "desc") {
        return data.sort((a, b) => a[key].localeCompare(b[key])).reverse();
    } else if (order === "asc") {
        return data.sort((a, b) => a[key].localeCompare(b[key]));
    } else {
        throw new Error("Invalid order!");
    }
}

function sortByObjNumberValue(data, key, order) {
    if (order === "desc") {
        const response = data.sort((a, b) => {
            isNaN(Number(a[key])) && (a[key] = 0);
            isNaN(Number(b[key])) && (b[key] = 0);
            return Number(b[key]) - Number(a[key]);
        }); // if NaN is not 0, it breaks the sorting 👍 add to docs
        return response;
    } else {
        return data.sort((a, b) => {
            isNaN(Number(a[key])) && (a[key] = 0);
            isNaN(Number(b[key])) && (b[key] = 0);
            return Number(a[key]) - Number(b[key]);
        });
    }
}

function sortByObjDate(data, key, order) {
    if (order === "desc") {
        const response = data.sort(
            (a, b) => new Date(b[key]) - new Date(a[key])
        );
        return response;
    } else {
        return data.sort((a, b) => new Date(a[key]) - new Date(b[key]));
    }
}

function sortByObjValueLength(data, key, order) {
    // console.log("sortByValue data: ", data);
    let response = data.sort((a, b) => {
        if (!b[key]) {
            return 1;
        }
        if (!a[key] || b[key].length > a[key].length) {
            return -1;
        }
        if (a[key].length > b[key].length) {
            return 1;
        }
    });

    if (order === "desc") return response.reverse();
    else return response;
}

///////////////* INPUT VALIDATORS *///////////////

function requestedValue(fieldValue) {
    if (fieldValue.trim() === "") {
        return `This field is required`;
    }
    return null;
}

function requestedField(fieldName, fieldValue) {
    if (fieldValue.trim() === "") {
        return `${fieldName} is required`;
    } else {
        return null;
    }
}

function titleValidation(fieldName, fieldValue) {
    if (fieldValue.trim() === "") {
        return `${fieldName} is required`;
    }
    if (/[^a-zA-Z0-9&.,:+_ áéíóúàèìòùÁÉÍÓÚÀÈÌÒÙäöüÄÖÜ'`-]/.test(fieldValue)) {
        return "Some of this letters are not allowed";
    }
    if (fieldValue.trim().length < 2) {
        return `${fieldName} is too short`;
    }
    return null;
}

function nameValidation(fieldName, fieldValue) {
    if (fieldValue.trim() === "") {
        return `${fieldName} is required`;
    }
    if (
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
            fieldValue
        )
    ) {
        return "Some of this letters are not allowed";
    }
    if (fieldValue.trim().length < 3) {
        return `${fieldName} is too short`;
    }
    return null;
}

function emailValidation(email) {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(
            email
        )
    ) {
        return null;
    }
    if (email.trim() === "") {
        return "An email address is required";
    }
    return "This email address is not valid";
}

function passwordValidation(fieldValue) {
    if (fieldValue.trim().length < 6) {
        return "This password is still too short";
    } else {
        return null;
    }
}

function ageValidation(value, [min, max]) {
    if (!value) {
        return "Age is required";
    }
    if (min && Number(value) < Number(min)) {
        return "Age must be at least " + min;
    }
    if (max && Number(value) > Number(max)) {
        return "Age must be under " + max;
    }
    return null;
}

function numberValidation(fieldName, fieldValue) {
    if (fieldValue.trim() === "") {
        return `${fieldName || "This"} is required`;
    }
    if (/^\d+$/.test(fieldValue)) {
        return null;
    }
    // if (typeof fieldValue === "number" && !Number.isNaN(fieldValue)) {
    //     return `${fieldName || "This"} is not a number`;
    // }
    return `${fieldName || "This"} is not a number`;
}

function decimalValidation(fieldName, fieldValue) {
    if (fieldValue.trim() === "") {
        return `${fieldName || "This"} is required`;
    }
    if (/^\d*(\.\d{0,2})?$/.test(fieldValue)) {
        return null;
    }
    return `${fieldName || "This"} is not a number`;
}

///////////////* LOCAL IMAGES *///////////////

function createObjectURL(object) {
    return window.URL
        ? window.URL.createObjectURL(object)
        : window.webkitURL.createObjectURL(object);
} // 🧨

function revokeObjectURL(url) {
    return window.URL
        ? window.URL.revokeObjectURL(url)
        : window.webkitURL.revokeObjectURL(url);
} // 🧨

///////////////* TIMESTAMPS & DATES *///////////////

function formatJSDate(date) {
    let dt = new Date(date);
    return dt.getMonth() + 1 + "/" + dt.getDate() + "/" + dt.getFullYear();
}

function formatJSDateWithTime(date) {
    let dt = new Date(date);
    return (
        dt.getMonth() +
        1 +
        "/" +
        dt.getDate() +
        "/" +
        dt.getFullYear() +
        " " +
        dt.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
        })
    );
}

function formatDateShort(date) {
    return date.toString().split("T")[0];
}

function formatDateForInput(date) {
    let dt = new Date(date);
    const day = ("0" + dt.getDate()).slice(-2);
    const month = ("0" + (dt.getMonth() + 1)).slice(-2);
    dt = dt.getFullYear() + "-" + month + "-" + day;

    return dt;
}

///////////////* NEW 2023 *///////////////

function regroupObjects(arr, key) {
    let groups = {};
    arr.map((obj) => {
        if (!groups[obj[key]]) {
            groups[obj[key]] = [obj];
        } else {
            groups[obj[key]].push(obj);
        }
    });
    return groups;
}
function extractGroups(arr, key) {
    let groups = {};
    arr.map((obj) => {
        if (!groups[obj[key]]) {
            groups[obj[key]] = false;
        }
    });
    return groups;
}
function sortObjByKey(data) {
    const result = Object.keys(data)
        .sort()
        .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    return result;
}

export {
    //
    extractObjValuesIDs,
    //
    sortByValue,
    sortArrByObjValue,
    sortByObjNumberValue,
    sortByObjDate,
    sortByObjValueLength,
    //
    requestedValue,
    requestedField,
    titleValidation,
    nameValidation,
    emailValidation,
    passwordValidation,
    ageValidation,
    numberValidation,
    decimalValidation,
    //
    createObjectURL,
    revokeObjectURL,
    //
    formatJSDate,
    formatJSDateWithTime,
    formatDateShort,
    formatDateForInput,
    //
    regroupObjects,
    extractGroups,
    sortObjByKey,
};

// dividere in files separati per gruppo
