export function useState(initialValue) {
    let value = initialValue;

    function setValue(newValue) {
        value = newValue;
    }

    return [value, setValue];
}