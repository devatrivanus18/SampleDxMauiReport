var ko = require('knockout');
require('devexpress-reporting/dx-reportdesigner');
import "./style.css";
window.JsFunctions = {
    _viewerOptions: {
        reportUrl: "",
        requestOptions: {
            host: "https://fctestreport.azurewebsites.net/",
            invokeAction: "/DXXRDV"
        }
    },
    _designerOptions: {        
        reportUrl: ko.observable("SampleReport"),
        requestOptions: {
            host: "https://fctestreport.azurewebsites.net/",
            getDesignerModelAction: "/DXXRD/GetReportDesignerModel"
        }
    },
    InitWebDocumentViewer: function (elementId, namaReport) {
        this._viewerOptions.reportUrl = namaReport;
        console.log(this._viewerOptions.reportUrl);
        ko.applyBindings(this._viewerOptions, document.getElementById(elementId));
    },
    InitReportDesigner: function (elementId) {
        console.log(elementId);
        ko.applyBindings(this._designerOptions, document.getElementById(elementId));
    },
    Dispose: function (elementId) {
        var element = document.getElementById(elementId);
        element && ko.cleanNode(element);
    }
}


