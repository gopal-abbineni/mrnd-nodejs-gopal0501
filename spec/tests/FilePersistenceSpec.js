
var fs=require('fs');
var getContactFileName = function(id) {

	// We assume contacts are stored under data sub-folder
	return "D:\\MRND\\src\\contacts\\data\\" + id + "-Contact.json";
}

var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request');
var idCreated;

describe("FilePersistence Test Suite", function(){

	//var request = require('request');

	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";
	//var fs = require('fs');

	describe("create persist contact", function(){
		

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){
                
							expect(response.statusCode).toBe(200);
							console.log(body);
							idCreated = body;
							done();
					    });
		});

		it("should persist contact",function(done){

			var fileName = getContactFileName(idCreated);
            console.log(fileName);

			var obj = JSON.parse(fs.readFileSync(fileName));

			expect(obj.firstName).toBe("jagan");
			done();

		});
		xit("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);

							var fileName = getContactFileName(idCreated);

							var obj = JSON.parse(fs.readFileSync(fileName));
							expect(obj.firstName).toBe("jagan-updated");
							done();
					    });
		});
	});

	//TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
	describe("post and get message to contact", function(){
		xit("should post message to contact", function(done){
			//TODO: Write your test case here.
           var updatedContact = new Object();
			updatedContact.message = "jagan-message";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);
                
							var fileName = getContactFileName(idCreated);
                var obj = JSON.parse(fs.readFileSync(fileName));
				console.log(JSON.stringify(obj.message));	
                expect(obj.message).toBe("jagan-message");
							done();
					    });
        });

		xit("should get message for contact", function(done){
			//TODO: Write your test case here.
            request.get({
							url: contacts_url + "/" + idCreated,
							json: true
						},
		    		    function(error, response, body){
                console.log("satya");
							expect(response.statusCode).toBe(200);
							console.log(body);
                var fileName = getContactFileName(idCreated);
var obj = JSON.parse(fs.readFileSync(fileName));
							expect(obj.message).toBe("jagan-message");
                done();
					    });
			

		});

	});

});
