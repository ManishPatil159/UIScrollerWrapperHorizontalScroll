public class DatatableScrollingController {
	@AuraEnabled
    public static List <Account> fetchAccounts() {
        /*List<Account> accList = [SELECT Id, Name, BillingState, 
                                    Website, Phone, Industry, Type from Account LIMIT 10];
		*/
        List<Account> accList = [SELECT Id, Name, Type, BillingAddress, Phone, Fax, 
                                 		AccountNumber, Website, Sic, Industry, AnnualRevenue, 
                                 		NumberOfEmployees, Ownership, TickerSymbol, Rating, 
                                 		SLA__c, NumberofLocations__c, UpsellOpportunity__c, 
                                 		SLASerialNumber__c, SLAExpirationDate__c 
                                 FROM Account];
        return accList;
    }
}