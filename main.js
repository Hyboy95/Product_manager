
let arr = [];

function displayProductList(array) {
    let tab = `<table id="tab_list">`;
    for (let i = 0; i < array.length; i++) {
        tab += `<tr class="row">
                    <td class="col_1"><span class="name_prod">${array[i]}</span></td>
                    <td class="col_2"><button class="btn btn_edit" onclick="editProduct(${i})">Edit</button></td>
                    <td class="col_3"><button class="btn btn_delete" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>`;
    }
    tab += `</table>`;
    document.getElementById('product_list').innerHTML = tab;
}

displayProductList(arr);
document.getElementById('quantity_product').innerHTML = `${arr.length} Products`;
function addProduct() {
    let addP = document.getElementById('add_product').value;
    if (Boolean(addP)) {
        if (arr.indexOf(addP) !== -1) {
            alert(`The product name is already in the list`);
            document.getElementById('add_product').value = '';
        } else {
            arr.push(addP);
            document.getElementById('add_product').value = '';
            displayProductList(arr);
            document.getElementById('quantity_product').innerHTML = `${arr.length} Products`;
        }
    } else {
        alert(`The name of the product cannot be left blank`);
    }
}


function editProduct(idx) {
    let x = prompt('Rename product:');
    if (Boolean(x)) {
        if (arr.indexOf(x) !== -1) {
            alert(`The product name is already in the list`);
        } else {
            arr[idx] = x;
            displayProductList(arr);
        }
    } else {
        alert(`The name of the product cannot be left blank`);
    }
}

function deleteProduct(idx) {
    arr.splice(idx,1);
    let confirm_delete = confirm(`Are you sure delete product "${arr[idx]}"?`);
    if (confirm_delete) {
        displayProductList(arr);
        document.getElementById('quantity_product').innerHTML = `${arr.length} Products`;
    }
}

