var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(custinfo) {
        this.ID = custinfo.ID;
        this.name = custinfo.name;
        this.discount = custinfo.discount;
    }
    Customer.prototype.getID = function () {
        return this.ID;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function () {
        return " Name of customer is : " + this.name + " & Customer ID is(" + this.ID + ")";
    };
    return Customer;
}());
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(custInfo, invoiceInfo) {
        var _this = _super.call(this, custInfo) || this;
        _this.inv_ID = invoiceInfo.id;
        // this.customer=invoiceInfo.customer
        _this.amount = invoiceInfo.amount;
        return _this;
    }
    Invoice.prototype.getID = function () {
        return this.inv_ID;
    };
    // getCustomer():Customer
    // {
    //     return this.customer;
    // }
    // setCustomer(cust:Customer)
    // {
    //     this.customer=cust;
    // }
    Invoice.prototype.getAmount = function () {
        return this.amount;
    };
    Invoice.prototype.setamount = function (amo) {
        this.amount = amo;
    };
    Invoice.prototype.getCustomerName = function () {
        return this.name;
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        return (this.amount / 100 * 90);
    };
    return Invoice;
}(Customer));
var CustomerAccount = /** @class */ (function (_super) {
    __extends(CustomerAccount, _super);
    function CustomerAccount(cust, acc) {
        var _this = _super.call(this, cust) || this;
        _this.acc_ID = acc.id;
        // this.customer=acc.customer;
        _this.balance = acc.balance;
        return _this;
    }
    CustomerAccount.prototype.getID = function () {
        return this.acc_ID;
    };
    // getcustomer():Customer{
    //     return this.customer
    // }
    CustomerAccount.prototype.getBalance = function () {
        return this.balance;
    };
    CustomerAccount.prototype.setBalance = function (bal) {
        this.balance = bal;
    };
    CustomerAccount.prototype.getCustomerName = function () {
        return this.name;
    };
    CustomerAccount.prototype.deposite = function (amount) {
        this.balance = this.balance + amount;
        return (this.balance);
    };
    CustomerAccount.prototype.withdrown = function (amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            return this.balance;
        }
        else {
            return ("amount withdrawn exceeds Balance");
        }
    };
    CustomerAccount.prototype.tostr = function () {
        return "Name is " + this.name + ",Balance is " + this.balance;
    };
    return CustomerAccount;
}(Customer));
var acc = new CustomerAccount({ ID: 2, name: "Shelar", discount: 10 }, { id: 2, balance: 45000 });
var inv = new Invoice({ ID: 1, name: "Shailesh", discount: 10 }, { id: 1, amount: 5000 });
var idinv = document.getElementById("inv1");
idinv.innerHTML = "Invoice ID is " + inv.getID();
var amountinv = document.getElementById("inv2");
amountinv.innerHTML = "Invoice Amount is " + inv.getAmount();
var setamount = document.getElementById("inv3");
inv.setamount(12300);
setamount.innerHTML = "Amount after setting new amount " + inv.getAmount();
var custname = document.getElementById("inv4");
custname.innerHTML = "Custmoer Name is " + inv.getCustomerName();
var amountdiscount = document.getElementById("inv5");
amountdiscount.innerHTML = "Total Amount After Getting Discount of " + inv.discount + "% is " + inv.getAmountAfterDiscount();
var accid = document.getElementById("acc1");
accid.innerHTML = "Account Id is " + acc.getID();
var getbalancea = document.getElementById("acc2");
getbalancea.innerHTML = "Account Balance is " + acc.getBalance();
var setblancea = document.getElementById("acc3");
acc.setBalance(25400);
setblancea.innerHTML = "Account Balance After Setting new Balance " + acc.getBalance();
var cusn = document.getElementById("acc4");
cusn.innerHTML = "Customer Name is " + acc.getCustomerName();
var dep = document.getElementById("acc5");
acc.deposite(2000);
dep.innerHTML = "New Balance After adding Deposite " + acc.getBalance();
var withdrow = document.getElementById("acc6");
withdrow.innerHTML = " Account Balance After withdrow some amount:" + acc.withdrown(1000);
