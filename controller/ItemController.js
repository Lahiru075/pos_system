import {customer_db, item_db} from "../db/Db.js";
import ItemModel from "../model/ItemModel.js";

// load all items

function loadItems(){
    $('#item_table_body').empty();

    item_db.map((item, index) => {
        let name = item.name;
        let price = item.price;
        let quantity = item.quantity;

        let data = `<tr data-index="${index}"> 
                                <td>${index + 1}</td>
                                <td>${name}</td>
                                <td>${price}</td>
                                <td>${quantity}</td>                 
                            </tr>`

        $('#item_table_body').append(data);

    })
}

// save item

$(`#save_item`).on('click', function(){
    let name = $('#item_name').val();
    let price = $('#item_price').val();
    let quantity = $('#item_quantity').val();

    console.log(name)

    if (name === '' || price === '' || quantity === '') {

        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        })

    } else {

        let item_date = new ItemModel(name, price, quantity);

        item_db.push(item_date);

        console.log(item_db);

        loadItems();

        Swal.fire({
            title: "Added Successfully!",
            icon: "success",
            draggable: true
        });

        $('#item_name').val("");
        $('#item_price').val("");
        $('#item_quantity').val("");

    }
})

// search item

$(`#btn-item-search`).on('click', function(){

    let enteredName = $('#search_item_input').val().toLowerCase();

    if (enteredName === ''){
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    $('#item_table_body').empty();

    for (let i = 0; i < item_db.length; i++) {
        let item = item_db[i];
        if (item.name.toLowerCase().includes(enteredName)) {
            let row = `<tr data-index="${i}">
                           <td>${i + 1}</td>
                           <td>${item.name}</td>
                           <td>${item.price}</td>
                           <td>${item.quantity}</td>
                       </tr>`;
            $('#item_table_body').append(row);
        }
    }
});

// clear input field and load items

$(`#btn-item-search-clear`).on('click', function(){
    $('#search_item_input').val("")

    loadItems();
});


// update item

$('#update_item').on('click', function () {
    let idx = $('.selected').data('index');
    let name = $('#update_item_name').val();
    let price = $('#update_item_price').val();
    let quantity = $('#update_item_quantity').val();

    if (name === '' || price === '' || quantity === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    } else {
        item_db[idx] = new ItemModel(name, price, quantity);

        loadItems();

        Swal.fire({
            title: "Updated Successfully!",
            icon: "success",
            draggable: true
        });

        $('#staticBackdrop04').modal('hide');

    }
})

// delete item

$('#delete_item').on('click', function () {
    let idx = $('.selected').data('index');

    if (idx === undefined) {
        Swal.fire({
            title: 'Error!',
            text: 'Please select a item to delete',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    } else {
        item_db.splice(idx, 1); // idx eke idan item 1k delete karanna

        loadItems();

        Swal.fire({
            title: "Deleted Successfully!",
            icon: "success",
            draggable: true
        });

        $('#staticBackdrop04').modal('hide');
    }
});


// select item

$('#item_table_body').on('click', 'tr', function () {
    $('#item_table_body tr').removeClass('selected');
    $(this).addClass('selected');
    let idx = $(this).data('index');
    let obj = item_db[idx];

    $('#update_item_code').prop('readonly', true); // id eka change karanna behe..

    let id = (idx+1);
    let name = obj.name;
    let price = obj.price;
    let quantity = obj.quantity;

    $('#update_item_code').val(id);
    $('#update_item_name').val(name);
    $('#update_item_price').val(price);
    $('#update_item_quantity').val(quantity);


    $('#staticBackdrop04').modal('show');

});

// clear fields

$('#item-btn_close').on('click', function () {
    $('#item_name').val("");
    $('#item_price').val("");
    $('#item_quantity').val("");
})