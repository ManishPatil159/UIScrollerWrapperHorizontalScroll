@isTest
public with sharing class DatabaseScrollingController_Test {
    @TestSetup
    static void initializeAccounts(){
        List<Account> accountLst = new List<Account>();
        for(Integer i=0; i<5; i++) {
            accountLst.add(new Account(Name = 'Account ' + i));
        }
    }

    @isTest static void fetchAccountsTest() {
        List<Account> accountLst = [SELECT Name FROM Account];
        List<Account> accountReturnedLst = DatatableScrollingController.fetchAccounts();
        System.assertEquals(accountLst.size(), accountReturnedLst.size());
    }

}
