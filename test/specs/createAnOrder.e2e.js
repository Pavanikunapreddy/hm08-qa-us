const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url (`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
   
   
    it('Setting the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.settingTheAddress();
       await expect($(page.fromFeildWithAddress)).toHaveValue('East 2nd Street, 601');
       await expect($(page.toFeildWithAddress)).toHaveValue('1300 1st St');

    })


    it('Selecting Supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.supportivePlaneSelected();
        await expect($(`${page.supportiveActive}`)).toBeExisting();
        
    })

    
    it('Adding a payment method', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addPaymentMethod();
        await expect($(`${page.paymenMethodCloseButton}`)).toBeExisting();
       
    })

    it('Writing a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addMessageForTheDriver(); 
        await expect($(`${page.messageToTheDriverFeild}`)).toBeExisting();
        })

    it('Ordering a blanket and handkerchief', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.orderingBlanketAndHandkerchief();
        await expect($(`${page.blanketAndHandkerchief}`)).toBeExisting();
        
    })


    it('Ordering 2 icecreams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.orderIceCream();
        //await expect($(page.iceCreamPlusValue)).toStrictEqual(2);
        await expect($(`div=2`)).toBeExisting();
    })
    
    it('car search modal appears ', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await page.enterTheOrder(); 
        await browser.pause(30000);
        await expect($(`${page.driverWillArriveModal}`)).toBeExisting();

       
    })




})

