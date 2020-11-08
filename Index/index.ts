interface custconfig
{
    ID:number;
    name:string
    discount:number
}
interface accountconfig
{
    id:number;
    // customer:Customer;
    balance:number;
}
interface invoiceconfig
{
    id:number;
    // customer:Customer;
    amount:number;
}
class Customer
{
    ID:number
    name:string
    discount:number

    constructor(custinfo:custconfig)
    {
        this.ID=custinfo.ID
        this.name=custinfo.name
        this.discount=custinfo.discount;
    }

    getID():number{
        return this.ID
    }

    getName():string{
        return this.name;
    }

    getDiscount():number{
        return this.discount;
    }

    setDiscount(discount:number):void{
        this.discount=discount
    }

    toString():string{
        return ` Name of customer is : ${this.name} & Customer ID is(${this.ID})`
    }
}

class Invoice extends Customer{
    inv_ID :number;
    customer:Customer;
    amount:number;

    constructor(custInfo:custconfig, invoiceInfo:invoiceconfig)
    {
        super(custInfo)
        this.inv_ID=invoiceInfo.id;
        // this.customer=invoiceInfo.customer
        this.amount=invoiceInfo.amount;

    }

        getID():number
        {
            return this.inv_ID;
        }

        // getCustomer():Customer
        // {
        //     return this.customer;
        // }

        // setCustomer(cust:Customer)
        // {
        //     this.customer=cust;
        // }

        getAmount():number
        {
            return this.amount;
        }

        setamount(amo:number)
        {
            this.amount=amo;
        }

        getCustomerName():string{
            return this.name;
        }

        getAmountAfterDiscount():number{
            return(this.amount/100*90)
        }
}


class CustomerAccount extends Customer
{
    acc_ID:number;
    // customer:Customer;
    balance:number;

    constructor(cust:custconfig,acc:accountconfig)
    {
        super(cust)
        this.acc_ID=acc.id
        // this.customer=acc.customer;
        this.balance=acc.balance;

    }
    getID():number{
        return this.acc_ID
    }

    // getcustomer():Customer{
    //     return this.customer
    // }

    

    getBalance():number
    {
        return this.balance;
    }

    setBalance(bal:number){
        this.balance=bal;
    }

    getCustomerName():string{
        return this.name;

    }


    deposite(amount:number)
    {
        this.balance=this.balance+amount
            return (this.balance)
    }


    withdrown(amount:number)
    {
        if(this.balance>=amount)
        {
            this.balance=this.balance-amount;
            return this.balance
            
        }
        else{
            return("amount withdrawn exceeds Balance")
            
        }
    }

    tostr():string{
        return `Name is ${this.name},Balance is ${this.balance}`
    }

}
let acc=new CustomerAccount({ID:2,name:"Shelar",discount:10},{id:2,balance:45000})
let inv=new Invoice({ID:1,name:"Shailesh",discount:10},{id:1,amount:5000})
let idinv=document.getElementById("inv1")
idinv.innerHTML=`Invoice ID is ${inv.getID()}`
let amountinv=document.getElementById("inv2")
amountinv.innerHTML=`Invoice Amount is ${inv.getAmount()}`
let setamount=document.getElementById("inv3")
inv.setamount(12300)
setamount.innerHTML=`Amount after setting new amount ${inv.getAmount()}`
let custname=document.getElementById("inv4")
custname.innerHTML=`Custmoer Name is ${inv.getCustomerName()}`
let amountdiscount=document.getElementById("inv5")
amountdiscount.innerHTML=`Total Amount After Getting Discount of ${inv.discount}% is ${inv.getAmountAfterDiscount()}`
let accid=document.getElementById("acc1")
accid.innerHTML=`Account Id is ${acc.getID()}`

let getbalancea=document.getElementById("acc2")
getbalancea.innerHTML=`Account Balance is ${acc.getBalance()}`

let setblancea=document.getElementById("acc3")
acc.setBalance(25400)
setblancea.innerHTML=`Account Balance After Setting new Balance ${acc.getBalance()}`

let cusn=document.getElementById("acc4")
cusn.innerHTML=`Customer Name is ${acc.getCustomerName()}`

let dep=document.getElementById("acc5")
acc.deposite(2000)
dep.innerHTML=`New Balance After adding Deposite ${acc.getBalance()}`

let withdrow=document.getElementById("acc6")
withdrow.innerHTML=` Account Balance After withdrow some amount:${acc.withdrown(1000)}`