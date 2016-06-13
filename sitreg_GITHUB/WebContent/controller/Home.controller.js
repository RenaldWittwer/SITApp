sap.ui.define([
	"incon/sitreg/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("incon.sitreg.controller.Home", {

		onDisplayNotFound : function (oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},

		onNavToEmployees : function (oEvent){
			this.getRouter().navTo("employeeList");
		},

		onNavToEmployeeOverview : function (oEvent) {
			this.getRouter().navTo("employeeOverview");
		}

	});

});
