class MenuPage{

    get  MenuButton(){
        return  $('//*[@id="root"]/div/div/header/div/button')
    }
    async  MenuText(){
       
        return await $('//*[@id="root"]/div/div/div/div/ul/a[3]/div[2]/span').getText()
    }

    async  transactionMenuItem(){
        return await $('//span[text()="Transaction"]');
    }
    async  logOutMenuItem(){
        return await $('//span[text()="Logout"]');
    }

    async  transactionSubMenu(){
        return await $$('li');
    }

    async moveTransaction(){
        return await $('//span[text()="Move"]');
    }
    async holdTransaction(){
        return await $('//span[text()="Hold"]');
    }
    async multiHoldTransaction(){
        return await $('//span[text()="Multi Hold"]');
    }
    async multiReleaseTransaction(){
        return await $('//span[text()="Multi Release"]');
    }
    async releaseTransaction(){
        return await $('//span[text()="Release"]');
    }
    async openTransaction(){
        return await $('//span[text()="Open"]');
    }
    async associateTransaction(){
        console.log('associate called')
        return await $('//span[text()="Associate"]');
    }
    async splitRouteCardTransaction(){
       
        return await $('//span[text()="Split Routecard"]');
    }
    async splitQtyCardTransaction(){
       
        return await $('//span[text()="Split Qty"]');
    }
    async combineQtyTransaction(){
       
        return await $('//span[text()="Combine Qty"]');
    }
    //Data Collection
    async combineRouteCardTransaction(){
        //console.log('associate called')
        return await $('//span[text()="Combine RouteCard"]');
    }
    async componentReplaceTransaction(){
        return await $('//span[text()="Component Replace"]');
    }
    async componentIssueTransaction(){
        return await $('//span[text()="Component Issue"]');
    }
    async componentRemoveTransaction(){
        return await $('//span[text()="Component Remove"]');
    }
    async dataCollectionTransaction(){
        return await $('//span[text()="Data Collection"]');
    }
    
    async changeQtyTransaction(){
        console.log('associate called')
        return await $('//span[text()="Change Qty"]');
    }
    async routeCardMaintenanceTransaction(){
       // console.log('associate called')
        return await $('//span[text()="RouteCard Maintenance"]');
    }
    async DissociateTransaction(){
        console.log('disassociate called')
        return await $('//span[text()="Disassociate"]');
    }
    async moveNonStandardTransaction(){
        return await $('//span[text()="Move Non Std"]');
    }
    async reworkTransaction(){
        return await $('//span[text()="Rework"]');
    }
    async closeTransactionMenu(){
        return await $("//span[text()='Close']");
    }
    }
    
    export default new MenuPage();