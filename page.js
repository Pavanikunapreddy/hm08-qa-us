module.exports = {
// Inputs
fromField: '#from',
toField: '#to',
phoneNumberField: '#phone',
codeField: '#code',
cardNumberInput : '#number',
cardCode :'.card-code-input #code',
writeMessageToTheDriver : '#comment',

blanketAndHandkerchief : '.switch',
//iceCreamFeild : '.r-link',
carSearchModal : 'div.order-header-content',
driverWillArriveModal: 'div*=The driver will arrive',

// Buttons
callATaxiButton: 'button=Call a taxi',
 phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    addCardButton : '//div[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[3]/div[2]',
    linkButton : 'button=Link',
    closePaymentMethodButton : '.payment-picker .close-button',
   orderRequiermnetButton : '.reqs-header',
   iceCreamPlusValue : '.counter-value=2',
   iceCreamPluseButton :'.counter-plus',
   supportivePlane :'div=Supportive',
   enterTheNumberOrder : '.smart-button-wrapper',
   fromFeildWithAddress : '#from[value="East 2nd Street, 601"]',
   toFeildWithAddress : '#to[value="1300 1st St"]',
   orderButton: '.smart-button-main=Order',

    // Modals
    phoneNumberModal: '.modal', 
    //Misc
    cardPaymentMethodIcon : 'img[alt="Icon"]' ,

    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal); 
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

    settingTheAddress : async function(){
        const fromFeildWithAddress = await $(this.fromFeildWithAddress);
        await fromFeildWithAddress.waitForDisplayed();
       

        const toFeildWithAddress = await $(this.toFeildWithAddress);
        await toFeildWithAddress.waitForDisplayed();
       


    },
    
    supportivePlaneSelected : async function(){
    const supportivePlane = await $(this.supportivePlane);
    await supportivePlane.waitForDisplayed();
    await supportivePlane.click();

},

    addPaymentMethod: async function() {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(this.addCardButton); 
        await addCardButton.waitForDisplayed()
        await addCardButton.click();

        const cardNumberInput = await $(this.cardNumberInput);
        await cardNumberInput.waitForDisplayed();
        await cardNumberInput.setValue(123456789765);

        const cardCode = await $(this.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(576);

        const linkButton = await $(this.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();

        const closePaymentMethodButton = await $(this.closePaymentMethodButton);
        await closePaymentMethodButton.waitForDisplayed();
        await closePaymentMethodButton.click();
 },


 addMessageForTheDriver: async function(Message) {
    const writeMessageToTheDriver = await $(this.writeMessageToTheDriver);
    await writeMessageToTheDriver.waitForDisplayed();
    await writeMessageToTheDriver.setValue("Get some Wishky");
 },

 orderingBlanketAndHandkerchief: async function() {
 
    const blanketAndHandkerchief = await $(this.blanketAndHandkerchief);
    await blanketAndHandkerchief.waitForDisplayed();
    await blanketAndHandkerchief.click();
    
 },

 orderIceCream: async function() {

    const iceCreamPluseButton= await $(this.iceCreamPluseButton);
    await iceCreamPluseButton.waitForDisplayed();
    await iceCreamPluseButton.click();
    await iceCreamPluseButton.waitForDisplayed();
    await iceCreamPluseButton.click();
    
 },

 enterTheOrder: async function() {
    const enterTheNumberOrder = await $(this.enterTheNumberOrder);
    await enterTheNumberOrder.waitForDisplayed();
    await enterTheNumberOrder.click();
    const orderButton = await $(this.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
 },
 

   

};