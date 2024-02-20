public with sharing class CarController {
    @AuraEnabled(Cacheable=true)
   
    public static List<Car__C> getCars(){
        return [Select Id, Name, MSRP__c, Description__c,Category__c, Picture_URL__c from Car__c];
    }
}