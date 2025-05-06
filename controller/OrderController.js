import { customer_db } from "../db/Db.js";
import {item_db} from "../db/Db.js";

function loadCustomerIds() {
    const dropdown = $('#CustomerId');
    dropdown.empty();
    dropdown.append('<option value="" disabled selected></option>');

    console.log("customer_db:", customer_db);
    console.log(customer_db.length)

    customer_db.map((customer, index) => {
        console.log(index);

        dropdown.append(`<option value="${index + 1}">${index + 1}</option>`);
    });

    dropdown.on('change', function () {
        const selectedId = $(this).val();
        if (selectedId){
            const customerIndex = parseInt(selectedId) - 1;
            const customer = customer_db[customerIndex];

            $('#CustomerName').val(customer.name);
            $('#CustomerAddress').val(customer.address);
        }else {
            $('#CustomerName').val('');
            $('#CustomerAddress').val('');
        }
    });

}

function loadItemIds() {
    const dropdown = $('#ItemId');
    dropdown.empty();
    dropdown.append('<option value="" disabled selected></option>');

    console.log("item_db:", item_db);
    console.log(item_db.length)

    item_db.map((customer, index) => {
        console.log(index);

        dropdown.append(`<option value="${index + 1}">${index + 1}</option>`);
    });

    dropdown.on('change', function () {
        const selectedId = $(this).val();
        if (selectedId){
            const itemIndex = parseInt(selectedId) - 1;
            const item = item_db[itemIndex];

            $('#ItemName').val(item.name);
            $('#Price').val(item.price);
            $('#Quantity').val(item.quantity);
        }else {
            $('#ItemName').val('');
            $('#Price').val('');
            $('#Quantity').val('');
        }
    });
}

// $('#button-add-item').on('click', function() { // add items to table
//     const itemCode = $('#ItemId').val();
//     const itemName = $('#ItemName').val();
//     const itemPrice = $('#Price').val();
//     const quantity = $('#Order-Quantity').val();
//
//     if (itemCode === '' || itemName === '' || itemPrice === '' || quantity === '') {
//         Swal.fire({
//             title: 'Error!',
//             text: 'Invalid Inputs',
//             icon: 'error',
//             confirmButtonText: 'Ok'
//         });
//         return;
//     }
//
//     const price = parseFloat(itemPrice);
//     const qty = parseInt(quantity);
//
//     let existingRow = null;
//     $('#select-items-table-body tr').each(function() {
//         const existingItemCode = $(this).find('td:first').text();
//         if (existingItemCode === itemCode) {
//             existingRow = $(this);
//             return false;
//         }
//     }); // add karana item eke id eka already table eke thiyanawada balanawa...
//
//     if (existingRow) {
//         // Update existing row
//         const currentQty = parseInt(existingRow.find('td:nth-child(4)').text());
//         const newQty = currentQty + qty;
//         const newTotal = price * newQty;
//
//         // Update the row with new price, quantity, and total
//         existingRow.find('td:nth-child(3)').text(price); // Update price
//         existingRow.find('td:nth-child(4)').text(newQty); // Update quantity
//         existingRow.find('td:nth-child(5)').text(newTotal); // Update total
//
//     } else {
//
//         const itemTotal = price * qty;
//         const newRow = `
//             <tr>
//                 <td>${itemCode}</td>
//                 <td>${itemName}</td>
//                 <td>${itemPrice}</td>
//                 <td>${quantity}</td>
//                 <td>${itemTotal}</td>
//             </tr>
//         `;
//         $('#select-items-table-body').append(newRow);
//     }
//
//     $('#ItemId').val('');
//     $('#ItemName').val('');
//     $('#Price').val('');
//     $('#Quantity').val('');
//     $('#Order-Quantity').val('');
//
//
// });


// $('#select-items-table-body').on('click', 'tr', function() {
//     const row = $(this);
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             row.remove(); // Delete the clicked row
//             Swal.fire({
//                 title: "Deleted!",
//                 text: "Item has been deleted.",
//                 icon: "success"
//             });
//         }
//     });
// });





export {loadCustomerIds}
export {loadItemIds}