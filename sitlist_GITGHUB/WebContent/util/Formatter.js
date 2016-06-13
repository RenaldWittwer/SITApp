jQuery.sap.declare("incon.sitreg.util.Formatter");
jQuery.sap.require("sap.ui.core.format.DateFormat");
incon.sitreg.util.Formatter = {	_statusStateMap : {
		"P" : "Success",
		"N" : "Warning"
	},
	statusText : function(value) {
		var bundle = this.getModel("i18n").getResourceBundle();
		return bundle.getText("StatusText" + value, "?");
	},
	
	eventText : function(value) {
		var bundle = this.getModel("i18n").getResourceBundle();
		return bundle.getText("Event" + value, "?");
	
	},
	
	statusState : function(value) {
		var map = incon.sitreg.util.Formatter._statusStateMap;
		return (value && map[value]) ? map[value] : "None";
	},
	date : function(value) {
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat
					.getDateTimeInstance({
						pattern : "yyyyMM-dd"
					});

			return oDateFormat.format(new Date(value));
		} else {
			return value;
		}
	}
};