({
	fetchAccHelper : function(component, event, helper) {
        component.set('v.mycolumns', [
{label: 'Id', fieldName: 'Id', type: 'text' },
            {label: 'Name', fieldName: 'Name', type: 'text', initialWidth:400},
{label: 'Type', fieldName: 'Type', type: 'text', initialWidth:200},
{label: 'BillingAddress', fieldName: 'BillingAddress', type: 'text', initialWidth:150},
{label: 'Phone', fieldName: 'Phone', type: 'text', initialWidth:150},
{label: 'Fax', fieldName: 'Fax', type: 'text', initialWidth:150},
{label: 'AccountNumber', fieldName: 'AccountNumber', type: 'text', initialWidth:150},
{label: 'Website', fieldName: 'Website', type: 'text', initialWidth:150},
{label: 'Sic', fieldName: 'Sic', type: 'text', initialWidth:150},
{label: 'Industry', fieldName: 'Industry', type: 'text', initialWidth:150},
{label: 'AnnualRevenue', fieldName: 'AnnualRevenue', type: 'text'},
{label: 'NumberOfEmployees', fieldName: 'NumberOfEmployees', type: 'text'},
{label: 'Ownership', fieldName: 'Ownership', type: 'text'},
{label: 'TickerSymbol', fieldName: 'TickerSymbol', type: 'text'},
{label: 'Rating', fieldName: 'Rating', type: 'text'},
{label: 'SLA__c', fieldName: 'SLA', type: 'text'},
{label: 'NumberofLocations__c', fieldName: 'Number Of Locations', type: 'text'},
{label: 'UpsellOpportunity__c', fieldName: 'Upsell Opportunity', type: 'text'},
{label: 'SLASerialNumber__c', fieldName: 'SLA Serial Number', type: 'text'},
{label: 'SLAExpirationDate__c', fieldName: 'SLA Expiration Date', type: 'text'}        ]);
        var action = component.get("c.fetchAccounts");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.acctList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})