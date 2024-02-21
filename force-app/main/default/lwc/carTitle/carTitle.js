// Importing LightningElement and api decorators from the LWC module
import { LightningElement, api } from 'lwc';

// Defining a default export class called CarTitle which extends LightningElement
export default class CarTitle extends LightningElement {
    // Declaring a public property decorated with @api, which allows external components to bind to it
    // Initializing it with an empty object as a default value
    @api car = {};
}
