import { LightningElement } from 'lwc';

// Importing schema fields for the Car object
import NAME_FIELD  from '@salesforce/schema/Car__c.Name';
import PICTURE_URL_FILED from '@salesforce/schema/Car__c.Picture_URL__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c';
import FUEL_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c';
import SEATS_FIELD from '@salesforce/schema/Car__c.Seats__c';
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c';

// Importing a utility function from the lightning/uiRecordApi module
import {getFieldValue} from 'lightning/uiRecordApi';

export default class CarCard extends LightningElement {
    // Exposing fields to make them available in the template
    categoryField = CATEGORY_FIELD;
    makeField = MAKE_FIELD;
    msrpField = MSRP_FIELD;
    fuelField = FUEL_FIELD;
    seatField = SEATS_FIELD;
    controlField = CONTROL_FIELD;

    // Id of the Car__c object to display
    recordId = 'a0I5j000007MyoTEAS';
    carName;
    carPictureUrl;

    // Handler for when the record is loaded
    handleRecordLoaded(event){
        const {records} = event.detail;
        const recordData = records[this.recordId];
        // Getting the value of the Name field of the car record
        this.carName =  getFieldValue(recordData, NAME_FIELD);
        // Getting the value of the Picture URL field of the car record
        this.carPictureUrl = getFieldValue(recordData, PICTURE_URL_FILED);
    }
}
