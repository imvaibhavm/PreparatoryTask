describe('Add Locaion and Validating', function(){

  it('Open the Control Hub website by pining on the URL.',function(){
cy.visit('http://localhost:4200')
cy.get([text="Enter the Room name"]).input("DemoRoom");
cy.click(".md-button__children").click();
})
})
