Task:2
1.This project was generated with node.js and npx wdio config 

2.By using the operating system is Windows 10

3.How to run this project: Clone the repository to my local directory and other steps
git clone git@github.com:Pavanikunapreddy/hm08-qa-us.git
Try to openfolder  on Visualstudio code and run the command
-npm install

4.After installation "npx wdio config" command was run on the terminal,In taht folder have src/test/spec/**/e2e.js files are created

5.In package.json have chromedriver have change the chromedriver": version "^123.0.6"

6.In wdio.config.js I have change the base URL link: https://cnt-334c8fcf-7cc0-4168-b6b3-2c62aabd47cf.containerhub.tripleten-services.com/

7.In createAnOrder file have by default two tests are passed by running the command npm run wdio

8.In pase.js file have create a locators on urban route maps and create the funtions of 
1.create order 2.phone number 3.supportive plan, 4.add payment method 5.message to the driver,6.odering the blanket and handkerchifs, 7.ordered 2 icecrrams 8.car search modal appears

9.After write the code on the createTheOrder.e2e.js 1.create order 2.phone number 3.supportive plan, 4.add payment method 5.message to the driver,6.odering the blanket and handkerchifs, 7.ordered 2 icecrrams 8.car search modal appears I can pass the command npm run wdio I got this result
[chrome 123.0.6312.106 windows #0-0] » \test\specs\createAnOrder.e2e.js
[chrome 123.0.6312.106 windows #0-0] Create an order
[chrome 123.0.6312.106 windows #0-0]    ✓ should open phone number modal
[chrome 123.0.6312.106 windows #0-0]    ✓ should save the phone
[chrome 123.0.6312.106 windows #0-0]    ✓ Setting the address
[chrome 123.0.6312.106 windows #0-0]    ✓ Selecting Supportive plan
[chrome 123.0.6312.106 windows #0-0]    ✓ Adding a payment method
[chrome 123.0.6312.106 windows #0-0]    ✓ Writing a message for the driver
[chrome 123.0.6312.106 windows #0-0]    ✓ Ordering a blanket and handkerchief
[chrome 123.0.6312.106 windows #0-0]    ✓ Ordering 2 icecreams
[chrome 123.0.6312.106 windows #0-0]    ✖ car search modal appears
[chrome 123.0.6312.106 windows #0-0]
[chrome 123.0.6312.106 windows #0-0] 8 passing (1m 14.3s)
[chrome 123.0.6312.106 windows #0-0] 1 failing

10.For car search modal can you please click order button as manually.

