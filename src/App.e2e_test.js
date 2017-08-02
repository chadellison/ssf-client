Feature('Home Page')

Scenario('user can create a space', (I) => {
    I.amOnPage('/')
    I.click('Add Space')
    I.see('Create a new Space')
    I.fillField('Name', 'Jones')
    I.fillField('Memory', '20')
    I.fillField('Disk', '20')
    // I.click('Create')
    // I.see("Jones")
    // I.see("20%")
    // I.see("20%")
})