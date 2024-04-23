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

    async  transactionSubMenu(){
        return await $$('li');
    }

    async moveTransaction(){
        return await $('//*[@id="root"]/div/div/main/div[2]/div[1]/ul/li[2]');
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
    async moveNonStandardTransaction(){
        return await $('//span[text()="Move Non Std"]');
    }
    }
    
    export default new MenuPage();