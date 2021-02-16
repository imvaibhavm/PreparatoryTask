describe('TestApp', function(){

  it('Automate the creation of room.',function(){
cy.visit('http://localhost:4200')
cy.get([text="Enter the Room name"]).input("DemoRoom");
cy.click(".md-button__children").click();
})
})
