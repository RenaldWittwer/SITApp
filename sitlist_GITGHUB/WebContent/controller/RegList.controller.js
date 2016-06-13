jQuery.sap.require("incon.sitreg.util.Formatter");
sap.ui.define([
	"incon/sitreg/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("incon.sitreg.controller.RegList", {

		onInit: function () {
			var maxReg = 60;
			var oModelRegistration = new sap.ui.model.json.JSONModel();
			var oModelWaitinglist = new sap.ui.model.json.JSONModel();
			
			//oModel.loadData("http://in-con.de/sitlist/php/getReglist.php");

			//var data = { registrations: [{"RegistrationID":"1","Name":"Renald Wittwer","LinkToBio":null,"Twitter":"@RenaldWittwer"},{"RegistrationID":"2","Name":"Peter Langner","LinkToBio":null,"Twitter":"@Peter_Langner"}]};
			//oModel.setData(data);
			
		       var aData = 
		           jQuery.ajax({
		              url: "./php/getReglist.php",  // for different servers cross-domain restrictions need to be handled  
		              dataType: "json",
		              success: function(data, textStatus, jqXHR) { // callback called when data is received
		            	  var waitingList = data.slice(0);
		            	  
		            	  // Sort by RegistrationID in the select
		            	  // Now set the Counter for the User		            	  
		            	  for(var i= 0, l = data.length; i< l; i++){
		            			data[i].RegistrationID = i + 1;
		            			if ( i <= maxReg-1 ) {
		            		      waitingList.splice(0,1);		
		            			} else {
		            			  data[i].RegistrationID = "WL";	
		            			}
		            	  }
		            	  
		            	  if ( data.length > maxReg) {
		            		  data.splice(maxReg, data.length-maxReg);
		            	  }
		            	  
		            	  oModelWaitinglist.setData({waitingList: waitingList});
		            	  oModelRegistration.setData({registrations: data});

		                  //oModel.setData({data: data});            // fill the received data into the JSONModel
		              },
		              error: function(jqXHR, textStatus, errorThrown) {
		                  alert(jqXHR);
		                  alert(textStatus);
		                  alert(errorThrown);
		              }
		           });			
			
			this.getView().setModel(oModelRegistration, "Registrations");
			this.getView().setModel(oModelWaitinglist, "Waitinglist");			
		},
		
		onDisplayNotFound : function (oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},

		onBackToWiki: function () {
			window.location.replace("https://wiki.scn.sap.com/wiki/display/events/SAP+Inside+Track+Hamburg+2016+-+%23SITHH");
		}
		
	});

});
