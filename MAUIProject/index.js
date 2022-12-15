var ko = require('knockout');
require('devexpress-reporting/dx-reportdesigner');
import "./style.css";

window.JsFunctions = {
    _viewerOptions: {
        reportUrl: ko.observable(namaReport),
        requestOptions: {
            host: "https://localhost:7261",
            invokeAction: "/DXXRDV"
        }
    },
    _designerOptions: {        
        reportUrl: ko.observable("SampleReport"),
        requestOptions: {
            host: "https://localhost:7261",
            getDesignerModelAction: "/DXXRD/GetReportDesignerModel"
        }
    },
    //_report1Options: {
    //    reportUrl: ko.observable("Report1"),
    //    requestOptions: {
    //        host: "https://localhost:7261",
    //        invokeAction: "/DXXRDV"
    //    }
    //},
    InitWebDocumentViewer: function (elementId, namaReport) {
        ko.applyBindings(this._viewerOptions, document.getElementById(elementId));
    },
    //InitWebReport1Viewer: function () {
    //    ko.applyBindings(this._report1Options, document.getElementById("report1"));
    //},
    InitReportDesigner: function (elementId) {
        ko.applyBindings(this._designerOptions, document.getElementById("designer"));
    },
    Dispose: function (elementId) {
        var element = document.getElementById(elementId);
        element && ko.cleanNode(element);
    }
}


