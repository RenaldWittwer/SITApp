sap.ui.define([
	"incon/sitreg/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("incon.sitreg.controller.Register", {

		
		onInit : function(oEvent) {
		      var oRegistrationModel = new sap.ui.model.json.JSONModel();
		      oRegistrationModel.loadData("./model/Registration.json");
		      this.getView().setModel(oRegistrationModel);
		},
		
		onDisplayNotFound : function (oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},
		
		onInsertReg : function (oEvent){
			jQuery.sap.require("sap.m.MessageBox");
			var oRegistrationModel = new sap.ui.model.json.JSONModel();
			oRegistrationModel = this.getView().getModel();
			var registrationJSON = oRegistrationModel.getJSON();
			
			var oRouter = this.getRouter();
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			
			var insertUrl = "./php/insertReg.php";
		       
		    var insertReg =  jQuery.ajax({
		    	      type: "POST",
		              url: insertUrl,  // for different servers cross-domain restrictions need to be handled  
		              data: {'registration': registrationJSON},
		              success: function(data, textStatus, jqXHR) { // callback called when data is received
                        //Transfer ok
		            	if ( data == "OK") { 
		        			// Auch alle anderen Felder löschen
		            		oRegistrationModel.setProperty('/Name', '');
		            		oRegistrationModel.setProperty('/LinkToBio', '');
		            		oRegistrationModel.setProperty('/Twitter', '');
		            		oRegistrationModel.setProperty('/FridayEvent', 1);
		            		oRegistrationModel.setProperty('/SaturdayEvent', 1);
		            		oRegistrationModel.setProperty('/Email', '');
		            		oRegistrationModel.setProperty('/Phone', '');
		            		oRegistrationModel.setProperty('/Receipt', 1);
		            		oRegistrationModel.setProperty('/Address', '');
		            		oRegistrationModel.setProperty('/Company', '');
		            		oRegistrationModel.setProperty('/Relation', 'Other');
		            		oRegistrationModel.setProperty('/Captcha', '');
		        			
			            	oRouter.navTo("regResult");  
			            	
		            	} else {
		            		var message;
		            		switch(data) {
		            		  case "Captcha Error":
		            		    message = "You filled the Security Question wrong. Please fill this field again";
		            		    break;
		            		  case "Email empty":
			            		    message = "We need at least a valid Email address";
			            		    break;
		            		  case "Invalid Email":
			            		    message = "The Email address is invalid";
			            		    break;
			                  case "Name empty":
			            		    message = "Please fill Your Name";
			            		    break;
		            		  case "Connect Error":
			            		    message = "There is currently a problem with the database connection. Please try again later";
			            		    break;
		            		  case "DB Error":
			            		    message = "There is currently a problem with the database. Please try again later";
			            		    break;		            		    
		            		  case "Insert Error":
			            		    message = "An Error occurs during inserting Your registration. Sorry. Please try agasin later";
			            		    break;	
		            		};
		        			sap.m.MessageBox.error(
		        					message,
		        					{
		        						styleClass: bCompact? "sapUiSizeCompact" : ""
		        					}
		        				);
		        			oRegistrationModel.setProperty('/Captcha', '');
		            	}
		              },
		              error: function(jqXHR, textStatus, errorThrown) {
                          //Transfer Error
                          alert('Error during Registration');
		              }
		           });					
			
			//this.getRouter().navTo("regResult");
		}

	});

});
