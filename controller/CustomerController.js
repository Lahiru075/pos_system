import {customer_db} from "../db/Db.js";
import CustomerModel from "../model/CustomerModel.js";

// load all customers

function loadCustomers(){
    $('#customer_table_body').empty();

    customer_db.map((item, index) => {
        let name = item.name;
        let address = item.address;
        let contact = item.contact;
        let salary = item.salary;

        let data = `<tr data-index="${index}"> 
                                <td>${index + 1}</td>
                                <td>${name}</td>
                                <td>${address}</td>
                                <td>${contact}</td>     
                                <td>${salary}</td>                  
                            </tr>`

        $('#customer_table_body').append(data);

    })
}

// search customer

$(`#button-search`).on('click', function(){

    let enteredName = $('#search_customer_input').val().toLowerCase();

    if (enteredName === ''){
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    $('#customer_table_body').empty();

    for (let i = 0; i < customer_db.length; i++) {
        let item = customer_db[i];
        if (item.name.toLowerCase().includes(enteredName)) {
            let row = `<tr data-index="${i}">
                           <td>${i + 1}</td>
                           <td>${item.name}</td>
                           <td>${item.address}</td>
                           <td>${item.contact}</td>
                           <td>${item.salary}</td>
                       </tr>`;
            $('#customer_table_body').append(row);
        }
    }
});

// clear input field and load customers

$(`#button-search-clear`).on('click', function(){
    $('#search_customer_input').val("")

    loadCustomers();
});

// save customer

$(`#save_customer`).on('click', function(){
    let name = $('#customer_name').val();
    let address = $('#customer_address').val();
    let contact = $('#customer_contact').val();
    let salary = $('#customer_salary').val();

    console.log(name)

    if (name === '' || address === '' || contact === '' || salary === '') {

        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        })

    } else {

        let customer_data = new CustomerModel(name, address, contact, salary);

        customer_db.push(customer_data);

        console.log(customer_db);

        loadCustomers();

        Swal.fire({
            title: "Added Successfully!",
            icon: "success",
            draggable: true
        });

        $('#customer_name').val("");
        $('#customer_address').val("");
        $('#customer_contact').val("");
        $('#customer_salary').val("");

    }
})

// update customer

$('#update_customer').on('click', function () {
    let idx = $('.selected').data('index');
    let name = $('#update_customer_name').val();
    let address = $('#update_customer_address').val();
    let contact = $('#update_customer_contact').val();
    let salary = $('#update_customer_salary').val();

    if (name === '' || address === '' || contact === '' || salary === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    } else {
        customer_db[idx] = new CustomerModel(name, address, contact, salary);

        loadCustomers();

        Swal.fire({
            title: "Updated Successfully!",
            icon: "success",
            draggable: true
        });

        $('#staticBackdrop02').modal('hide');

    }
})

// select customer

$('#customer_table_body').on('click', 'tr', function () {
    $('#customer_table_body tr').removeClass('selected');
    $(this).addClass('selected');
    let idx = $(this).data('index');
    let obj = customer_db[idx];

    $('#update_customer_id').prop('readonly', true); // id eka change karanna behe..

    let id = (idx+1);
    let name = obj.name;
    let address = obj.address;
    let contact = obj.contact;
    let salary = obj.salary;

    $('#update_customer_id').val(id);
    $('#update_customer_name').val(name);
    $('#update_customer_address').val(address);
    $('#update_customer_contact').val(contact);
    $('#update_customer_salary').val(salary);


    $('#staticBackdrop02').modal('show');
});

// clear fields

$('#customer-btn_close').on('click', function () {
    $('#customer_name').val("");
    $('#customer_address').val("");
    $('#customer_contact').val("");
    $('#customer_salary').val("");
})