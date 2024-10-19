"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courier_1 = require("./courier");
let courier = new courier_1.default([{ customerName: 'DHL',
        visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
