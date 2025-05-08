export default class OrderModel {
    constructor(customerName, customerId, itemCode, itemName, price, quantity, total) {
        this.customerName = customerName;
        this.customerId = customerId;
        this.itemCode = itemCode;
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
    }
}