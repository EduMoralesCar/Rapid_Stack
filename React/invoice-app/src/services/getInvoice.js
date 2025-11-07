import { invoice } from "../data/invoice";

export const getInvoice = () => {
    
    let total = 0;
    
    invoice[0].items.forEach(item => {
        total += item.quantity * item.price;
    });
    
    invoice[0].total = total;
    
    return invoice[0];
}