// Importing necessary modules from LWC and Salesforce Lightning API
import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';

// Importing the Car object schema
import CAR_OBJECT from '@salesforce/schema/Car__c';

// Importing specific fields from the Car object schema
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';

// Constants for error messages
const CATEGORY_ERROR = 'Error loading categories';
const MAKE_ERROR = 'Error loading make types';

// Defining the CarFilter class
export default class CarFilter extends LightningElement {

    // Initializing filters object with default values
    filters = {
        searchKey: '',  // Search keyword
        maxPrice: 999999  // Maximum price
    };

    // Error messages for category and make
    categoryError = CATEGORY_ERROR;
    makeError = MAKE_ERROR;

    // Wire method to get object information of the Car object
    @wire(getObjectInfo, { objectApiName: CAR_OBJECT })
    carObjectInfo;

    // Wire method to get picklist values for the category field
    @wire(getPicklistValues, {
        recordTypeId: '$carObjectInfo.data.defaultRecordTypeId',  // Dynamic binding to object info
        fieldApiName: CATEGORY_FIELD  // Category field API name
    })
    categories;

    // Wire method to get picklist values for the make field
    @wire(getPicklistValues, {
        recordTypeId: '$carObjectInfo.data.defaultRecordTypeId',  // Dynamic binding to object info
        fieldApiName: MAKE_FIELD  // Make field API name
    })
    makeType;

    // Handler for changes in the search key input
    handleSearchKeyChange(event) {
        this.filters = { ...this.filters, "searchKey": event.target.value };  
    }

    // Handler for changes in the maximum price input
    handleMaxPriceChange(event) {
        this.filters = { ...this.filters, "maxPrice": event.target.value }
    }

    // Handler for checkbox changes
    handleCheckbox(event) {
        const { name, value } = event.target.dataset;
        console.log("name:", name);
        console.log("value:", value);
    }
}
