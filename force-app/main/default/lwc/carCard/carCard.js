import { LightningElement } from 'lwc';

// Car Schema
import NAME_FIELD  from '@salesforce/schema/Car__c.Name';
import PICTURE_URL_FILED from '@salesforce/schema/Car__c.Picture_URL__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c';
import FUEL_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c';
import SEATS_FIELD from '@salesforce/schema/Car__c.Seats__c';
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c';

import {getFieldValue} from 'lightning/uiRecordApi';
// import PRODUCT_IMAGES from '@salesforce/resourceUrl/carhubimages';
export default class CarCard extends LightningElement {
    // exposing  fields to make available  in the template
    categoryField = CATEGORY_FIELD;
    makeField = MAKE_FIELD;
    msrpField = MSRP_FIELD;
    fuelField = FUEL_FIELD;
    seatField = SEATS_FIELD;
    controlField = CONTROL_FIELD;

    // Id of Car__C object to display
    recordId = 'a0I5j000007MyoTEAS';
    carName;
    carPictureUrl;

    handleRecordLoaded(event){
        const {records} = event.detail;
        const recordData = records[this.recordId];
        this.carName =  getFieldValue(recordData,NAME_FIELD );
        this.carPictureUrl = getFieldValue(recordData,PICTURE_URL_FILED );
    }


}