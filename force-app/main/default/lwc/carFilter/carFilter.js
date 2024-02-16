import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c';
//CAR SCHEMA
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__C';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
const CATEGORY_ERROR='Error loading categories';
const MAKE_ERROR='Error loading make types';
export default class CarFilter extends LightningElement {

    filters={
        searchKey:'',
        maxPrice:999999
    }
   categoryError = CATEGORY_ERROR;
   makeError = MAKE_ERROR;
    /* Fetching category picklists */
    @wire(getObjectInfo,{objectApiName:CAR_OBJECT})
    carObjectInfo
    @wire(getPicklistValues,{
        recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName:CATEGORY_FIELD
    })categories

     /* Fetching Make pciklists */
     @wire(getPicklistValues,{
        recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName:MAKE_FIELD
    })makeType

    // Search key handler
    handleSearchKeyChange(event){
        console.log(event.target.value);
        this.filters={...this.filters,"searchKey":event.target.value};  
    }
    // Price Range Handler
    handleMaxPriceChange(event){
        console.log(event.target.value);
        this.filters={...this.filters,"makePrice":event.target.value}
    }

    handleCheckbox(event){
        const {name,value} = event.target.dataset;
        console.log("name:",name);
        console.log("value:",value);

    }
}