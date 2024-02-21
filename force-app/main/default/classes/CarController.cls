public with sharing class CarController {
    //wrapper class
    public class Filters {
        @AuraEnabled
        public String searchKey {get;set;}
        @AuraEnabled
        public Decimal maxPrice {get;set;}
        @AuraEnabled
        public String[] categories {get;set;}
        @AuraEnabled
        public String[] makeType {get;set;}
    }
    
    // This method retrieves a list of Car records based on the provided filters.
    @AuraEnabled(Cacheable=true)
    public static List<Car__c> getCars(Filters filters){
        // Declare variables to hold filter values
        String key, whereClause ='';
        Decimal maxPrice;
        String[] categories, makeType, criteria = new List<String>();
        
        // Check if filters object is not null
        if(filters !=null){
            // Assign filter values to variables
            maxPrice = filters.maxPrice;
            categories = filters.categories;
            makeType = filters.makeType;
            
            // Check if searchKey is not empty, then construct search criteria
            if(!String.isEmpty(filters.searchKey)){
                key = '%'+filters.searchKey + '%';
                criteria.add('Name LIKE: key');
            }
            
            // Check if maxPrice filter is greater than or equal to zero, then construct price criteria
            if(filters.maxPrice >= 0){
                criteria.add('MSRP__c <= :maxPrice');
            }
            
            // Check if categories filter is not null, then construct category criteria
            if(filters.categories != null){
                criteria.add('Category__c IN :categories');
            }
            
            // Check if makeType filter is not null, then construct make type criteria
            if(filters.makeType != null){
                criteria.add('Make__c IN :makeType');
            }
            
            // If any criteria are specified, construct the WHERE clause
            if(criteria.size()>0){
                whereClause =  'WHERE ' + String.join(criteria, ' AND ');
            }
        }
        
        // Construct the SOQL query using the constructed WHERE clause and sort by Name
        String query = 'SELECT Id, Name, MSRP__c, Description__c,Category__c, Picture_URL__c FROM Car__c' + whereClause + ' WITH SECURITY_ENFORCED' + ' ORDER BY Name';
        
        // Execute the query and return the results
        return Database.query(query);
    }
}
