"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkTscStack = void 0;
var cdk = require("aws-cdk-lib");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
var CdkTscStack = /** @class */ (function (_super) {
    __extends(CdkTscStack, _super);
    function CdkTscStack(scope, id, props) {
        return _super.call(this, scope, id, props) || this;
        // The code that defines your stack goes here
        // example resource
        // const queue = new sqs.Queue(this, 'CdkTscQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
    }
    return CdkTscStack;
}(cdk.Stack));
exports.CdkTscStack = CdkTscStack;
