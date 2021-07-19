const inpKey = document.querySelector('#inpKey');
const inpValue = document.querySelector('#inpValue');
const btnInsert = document.querySelector('#btnInsert');

btnInsert.onclick = function() {
    const key = inpKey.value;
    const value = inpValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

    console.log(key);
    console.log(value);
}