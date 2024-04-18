class HomePage{

get  heading(){
    return  $('//*[@id="root"]/div/div/main/div[2]/span')
}
async  Heading(){
    return await $('//*[@id="root"]/div/div/main/div[2]/span').getText()
}
}

export default new HomePage();