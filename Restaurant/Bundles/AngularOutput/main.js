(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Common/models.ts":
/*!**********************************!*\
  !*** ./src/app/Common/models.ts ***!
  \**********************************/
/*! exports provided: EmployeeFunction, FoodCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFunction", function() { return EmployeeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCategory", function() { return FoodCategory; });
var EmployeeFunction;
(function (EmployeeFunction) {
    EmployeeFunction[EmployeeFunction["Chef"] = 1] = "Chef";
    EmployeeFunction[EmployeeFunction["Manager"] = 2] = "Manager";
    EmployeeFunction[EmployeeFunction["Waiter"] = 3] = "Waiter";
})(EmployeeFunction || (EmployeeFunction = {}));
var FoodCategory;
(function (FoodCategory) {
    FoodCategory[FoodCategory["Starter"] = 1] = "Starter";
    FoodCategory[FoodCategory["MainCourse"] = 2] = "MainCourse";
    FoodCategory[FoodCategory["Soup"] = 3] = "Soup";
})(FoodCategory || (FoodCategory = {}));


/***/ }),

/***/ "./src/app/Common/validation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Common/validation.service.ts ***!
  \**********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.getErrorMessage = function (control) {
        if (control.errors['max'])
            return 'The limit is: ' + control.errors['max'].max;
        if (control.errors['pattern'])
            return 'Insert a valid value';
        if (control.errors['required'])
            return 'The field is required';
        if (control.errors['min'])
            return 'The minimum value is ' + control.errors['min'].min;
        if (control.errors['minlength'])
            return 'You need to have at least ' + control.errors['minlength'].requiredLength + ' characters';
        if (control.errors['maxlength'])
            return "You can't have more than " + control.errors['maxlength'].requiredLength + ' characters';
    };
    ValidationService.prototype.hasError = function (control, isSubmited) {
        if (isSubmited === void 0) { isSubmited = false; }
        return control.errors && ((control.dirty || control.touched) || isSubmited);
    };
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/Employee/Create/employee-create.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Employee/Create/employee-create.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add employee</h3>\r\n<div class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"FirstName\">First Name</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"FirstName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"LastName\">Last Name</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"LastName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"PhoneNumber\">Phone Number</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"PhoneNumber\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Email\">Email</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Email\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Function\">Function</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Function\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"StartDate\">Start Date</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"StartDate\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Salary\">Salary</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Salary\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Create\" class=\"btn btn-default\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\" back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Employee/Create/employee-create.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Employee/Create/employee-create.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VtcGxveWVlL0NyZWF0ZS9lbXBsb3llZS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Employee/Create/employee-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Employee/Create/employee-create.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/Employee/employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(employeeService, route, _location) {
        this.employeeService = employeeService;
        this.route = route;
        this._location = _location;
    }
    EmployeeCreateComponent.prototype.ngOnInit = function () {
        //let foodID = this.route.snapshot.paramMap.get('id');
        //this.foodService.addFood()
        //  .subscribe((result: any) => {
        //    this.food = result;
        //  });
    };
    EmployeeCreateComponent.prototype.back = function () {
        this._location.back();
    };
    EmployeeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-create',
            template: __webpack_require__(/*! ./employee-create.component.html */ "./src/app/Employee/Create/employee-create.component.html"),
            styles: [__webpack_require__(/*! ./employee-create.component.scss */ "./src/app/Employee/Create/employee-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());



/***/ }),

/***/ "./src/app/Employee/Delete/employee-delete.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Employee/Delete/employee-delete.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Details</h3>\r\n<div *ngIf=\"employee\" class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">First Name </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.PersonDetails.FirstName}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Last Name </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.PersonDetails.LastName}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Phone Number </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.PersonDetails.PhoneNumber}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Email </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.PersonDetails.Email}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Function </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.Function}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Start Date </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{formatDate(employee.StartDate) | date: 'dd/MM/yyyy'}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Salary </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.Salary}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Delete\" class=\"btn btn-default\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\" back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Employee/Delete/employee-delete.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Employee/Delete/employee-delete.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VtcGxveWVlL0RlbGV0ZS9lbXBsb3llZS1kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Employee/Delete/employee-delete.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Employee/Delete/employee-delete.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDeleteComponent", function() { return EmployeeDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/Employee/employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var EmployeeDeleteComponent = /** @class */ (function () {
    function EmployeeDeleteComponent(employeeService, route, _location) {
        this.employeeService = employeeService;
        this.route = route;
        this._location = _location;
    }
    EmployeeDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var employeeID = this.route.snapshot.paramMap.get('id');
        this.employeeService.getDetails(employeeID)
            .subscribe(function (result) {
            _this.employee = result;
        });
    };
    EmployeeDeleteComponent.prototype.back = function () {
        this._location.back();
    };
    EmployeeDeleteComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    EmployeeDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-delete',
            template: __webpack_require__(/*! ./employee-delete.component.html */ "./src/app/Employee/Delete/employee-delete.component.html"),
            styles: [__webpack_require__(/*! ./employee-delete.component.scss */ "./src/app/Employee/Delete/employee-delete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], EmployeeDeleteComponent);
    return EmployeeDeleteComponent;
}());



/***/ }),

/***/ "./src/app/Employee/Details/employee-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Employee/Details/employee-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Details</h3>\r\n<div *ngIf=\"employee\" class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">First Name </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.PersonDetails.FirstName}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Last Name </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.PersonDetails.LastName}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Phone Number </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.PersonDetails.PhoneNumber}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Email </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.PersonDetails.Email}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Function </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.Function}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Start Date </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{formatDate(employee.StartDate) | date: 'dd/MM/yyyy'}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Salary </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{employee.Salary}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\" back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Employee/Details/employee-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Employee/Details/employee-details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VtcGxveWVlL0RldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Employee/Details/employee-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Employee/Details/employee-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/Employee/employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(employeeService, route, _location) {
        this.employeeService = employeeService;
        this.route = route;
        this._location = _location;
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var employeeID = this.route.snapshot.paramMap.get('id');
        this.employeeService.getDetails(employeeID)
            .subscribe(function (result) {
            _this.employee = result;
        });
    };
    EmployeeDetailsComponent.prototype.back = function () {
        this._location.back();
    };
    EmployeeDetailsComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/Employee/Details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.scss */ "./src/app/Employee/Details/employee-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Employee/Edit/employee-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/Employee/Edit/employee-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Edit employee</h3>\r\n<div *ngIf=\"employee\" class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"FirstName\">First Name</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"FirstName\" [(value)]=\"employee.PersonDetails.FirstName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"LastName\">Last Name</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"LastName\" [(value)]=\"employee.PersonDetails.LastName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"PhoneNumber\">Phone Number</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"PhoneNumber\" [(value)]=\"employee.PersonDetails.PhoneNumber\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Email\">Email</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"email\" name=\"Email\" [(value)]=\"employee.PersonDetails.Email\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Function\">Function</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Function\" [(value)]=\"employee.Function\">\r\n    </div>\r\n  </div>\r\n   <!--TODO - modify date format , date picker--> \r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"StartDate\">Start Date</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"date\" name=\"StartDate\" [(value)]=\"employee.StartDate\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Salary\">Salary</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Salary\" [(value)]=\"employee.Salary\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Save\" class=\"btn btn-default\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\"  (click)=\" back()\"/>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Employee/Edit/employee-edit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Employee/Edit/employee-edit.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VtcGxveWVlL0VkaXQvZW1wbG95ZWUtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Employee/Edit/employee-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Employee/Edit/employee-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/Employee/employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(employeeService, route, _location) {
        this.employeeService = employeeService;
        this.route = route;
        this._location = _location;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var employeeID = this.route.snapshot.paramMap.get('id');
        this.employeeService.getDetails(employeeID)
            .subscribe(function (result) {
            _this.employee = result;
        });
    };
    EmployeeEditComponent.prototype.back = function () {
        this._location.back();
    };
    EmployeeEditComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    EmployeeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/Employee/Edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.scss */ "./src/app/Employee/Edit/employee-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/Employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/Employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"employee-container\">\r\n  <input type=\"button\" class=\"btn btn-default add\" value=\"Make a reservation\"  [routerLink]=\"['/Employee/Create']\" />\r\n  <table class=\"table-container\">\r\n    <thead>\r\n      <tr>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Phone Number</th>\r\n        <th>Email</th>\r\n        <th>Function</th>\r\n        <th>Start Date</th>\r\n        <th>Salary</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let employee of employees\">\r\n        <td>{{employee.PersonDetails.FirstName}}</td>\r\n        <td>{{employee.PersonDetails.LastName}}</td>\r\n        <td>{{employee.PersonDetails.PhoneNumber}}</td>\r\n        <td>{{employee.PersonDetails.Email}}</td>\r\n        <td>{{employee.Function}}</td>\r\n        <td>{{formatDate(employee.StartDate) | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{employee.Salary}}</td>\r\n        <td>\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Edit\" [routerLink]=\"['/Employee/Edit', employee.ID]\" />\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Details\" [routerLink]=\"['/Employee/Details', employee.ID]\" />\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Delete\"  [routerLink]=\"['/Employee/Delete', employee.ID]\"/>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"galery-container\">\r\n    <img src=\"../../../../Pictures/tablesetting.jpg\" />\r\n    <img src=\"../../../../Pictures/tablesetting.jpg\" />\r\n    <img src=\"../../../../Pictures/tablesetting.jpg\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Employee/employee.component.scss":
/*!**************************************************!*\
  !*** ./src/app/Employee/employee.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-container input {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.employee-container .table-container {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\n.employee-container .table-container td, .employee-container .table-container th {\n    padding: 8px;\n    text-align: center;\n    vertical-align: central; }\n\n.employee-container .table-container td input, .employee-container .table-container th input {\n      margin: 5px; }\n\n.employee-container .table-container th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: center;\n    background-color: #1351d8;\n    color: white; }\n\n.employee-container .table-container tr:nth-child(even) {\n    background-color: #f2f2f2; }\n\n.employee-container .table-container tr:hover {\n    background-color: #ddd; }\n\n.employee-container .galery-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n  margin-top: 25px; }\n\n.employee-container .galery-container img {\n    display: inline-block;\n    height: 75px;\n    width: 75px;\n    margin: auto;\n    border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRW1wbG95ZWUvQzpcXFVzZXJzXFxSb2JlcnQuR2F2cmFcXERvY3VtZW50c1xcV29ya3NwYWNlXFxSZXN0YXVyYW50XFxSZXN0YXVyYW50XFxBbmd1bGFyL3NyY1xcYXBwXFxFbXBsb3llZVxcZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSnZCO0VBUUkseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBVmY7SUFhTSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QixFQUFBOztBQWY3QjtNQWtCUSxXQUFXLEVBQUE7O0FBbEJuQjtJQXVCTSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWSxFQUFBOztBQTNCbEI7SUErQk0seUJBQXlCLEVBQUE7O0FBL0IvQjtJQW1DTSxzQkFBc0IsRUFBQTs7QUFuQzVCO0VBd0NJLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQTNDcEI7SUE4Q00scUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvRW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtY29udGFpbmVyIHtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAudGFibGUtY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRkLCB0aCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudHJhbDtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzUxZDg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgfVxyXG5cclxuICAgIHRyOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5nYWxlcnktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/Employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/Employee/employee.service.ts");



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (result) {
            _this.employees = result;
        });
    };
    EmployeeComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/Employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/Employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/Employee/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Employee/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('Employee/GetEmployees', { responseType: 'json' });
    };
    EmployeeService.prototype.getDetails = function (employeeID) {
        return this.http.get(employeeID, { responseType: 'json' });
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/Food/Create/food-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/Food/Create/food-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add item</h3>\r\n<div class=\"form-horizontal\" [formGroup]=\"registerForm\">\r\n  <div class=\"form-group\" >\r\n    <label class=\"control-label col-md-2\">Category</label>\r\n    <div class=\"col-md-10\" >\r\n      <select class=\"form-control\" formControlName=\"category\" [(ngModel)]=\"foodCategory\">\r\n        <option *ngFor=\"let category of foodCategories\">\r\n          {{category}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div  class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Name\">Name</label>\r\n    <div class=\"col-md-10\" [ngClass]=\"{'has-error': hasError(form.name)}\">\r\n      <input id=\"name\" class=\"form-control\" formControlName=\"name\" [(ngModel)]=\"newFood.name\">\r\n      <span class=\"control-label\" *ngIf=\"hasError(form.name)\">{{errorMessage(form.name)}}</span>\r\n    </div>\r\n  </div>\r\n  <div  class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Ingredients\">Ingredients</label>\r\n    <div class=\"col-md-10\" [ngClass]=\"{'has-error': hasError(form.ingredients)}\">\r\n      <input class=\"form-control\" formControlName=\"ingredients\" [(ngModel)]=\"newFood.ingredients\">\r\n      <span class=\"control-label\" *ngIf=\"hasError(form.ingredients)\">{{errorMessage(form.ingredients)}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Quantity</label>\r\n    <div class=\"col-md-10\" [ngClass]=\"{'has-error': hasError(form.quantity)}\">\r\n      <input class=\"form-control\" type=\"number\" formControlName=\"quantity\" [(ngModel)]=\"newFood.quantity\">\r\n      <span class=\"control-label\" *ngIf=\"hasError(form.quantity)\">{{errorMessage(form.quantity)}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Price\">Price</label>\r\n    <div class=\"col-md-10\" [ngClass]=\"{'has-error': hasError(form.price)}\">\r\n      <input class=\"form-control\" type=\"number\" formControlName=\"price\" [(ngModel)]=\"newFood.price\">\r\n      <span class=\"control-label\" *ngIf=\"hasError(form.price)\">{{errorMessage(form.price)}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Image</label>\r\n    <div class=\"col-md-10\">\r\n      <input type=\"file\" class=\"form-control\" (change)=\"onFileSelected($event)\"/>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Create\" class=\"btn btn-default\" (click)=\"add()\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\"back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Food/Create/food-create.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Food/Create/food-create.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Zvb2QvQ3JlYXRlL2Zvb2QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Food/Create/food-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Food/Create/food-create.component.ts ***!
  \******************************************************/
/*! exports provided: FoodCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCreateComponent", function() { return FoodCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Common_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/models */ "./src/app/Common/models.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../food.service */ "./src/app/Food/food.service.ts");
/* harmony import */ var _Common_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/validation.service */ "./src/app/Common/validation.service.ts");
/* harmony import */ var _Images_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Images/images.service */ "./src/app/Images/images.service.ts");








var FoodCreateComponent = /** @class */ (function () {
    function FoodCreateComponent(location, foodService, validationService, imageService) {
        this.location = location;
        this.foodService = foodService;
        this.validationService = validationService;
        this.imageService = imageService;
        this.newFood = {};
        this.foodCategory = _Common_models__WEBPACK_IMPORTED_MODULE_4__["FoodCategory"][_Common_models__WEBPACK_IMPORTED_MODULE_4__["FoodCategory"].Starter];
        this.isSubmited = false;
        this.imageFile = null;
    }
    FoodCreateComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.newFood.category),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.newFood.name, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)
            ]),
            ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.newFood.ingredients, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)
            ]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.newFood.quantity, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\d+(\.\d{1,2})?$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(10000)
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.newFood.price, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\d+(\.\d{1,2})?$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0.25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(5000)
            ])
        });
        this.foodCategories = this.foodService.getCategories();
    };
    Object.defineProperty(FoodCreateComponent.prototype, "form", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    FoodCreateComponent.prototype.onFileSelected = function (event) {
        this.imageFile = event.target.files[0];
    };
    FoodCreateComponent.prototype.back = function () {
        this.location.back();
    };
    FoodCreateComponent.prototype.add = function () {
        var _this = this;
        this.isSubmited = true;
        if (!this.registerForm.invalid) {
            var file = new FormData();
            file.append('image', this.imageFile, this.imageFile.name);
            this.imageService.saveImage(file).subscribe();
            this.newFood.category = _Common_models__WEBPACK_IMPORTED_MODULE_4__["FoodCategory"][this.foodCategory];
            this.newFood.imageName = this.imageFile.name;
            this.foodService.addFood(this.newFood).subscribe(function () { _this.back(); });
        }
    };
    FoodCreateComponent.prototype.errorMessage = function (control) {
        return this.validationService.getErrorMessage(control);
    };
    FoodCreateComponent.prototype.hasError = function (control) {
        return this.validationService.hasError(control, this.isSubmited);
    };
    FoodCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'food-create',
            template: __webpack_require__(/*! ./food-create.component.html */ "./src/app/Food/Create/food-create.component.html"),
            styles: [__webpack_require__(/*! ./food-create.component.scss */ "./src/app/Food/Create/food-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _food_service__WEBPACK_IMPORTED_MODULE_5__["FoodService"],
            _Common_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"],
            _Images_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"]])
    ], FoodCreateComponent);
    return FoodCreateComponent;
}());



/***/ }),

/***/ "./src/app/Food/Delete/food-delete.component.html":
/*!********************************************************!*\
  !*** ./src/app/Food/Delete/food-delete.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Delete item</h3>\r\n<div *ngIf=\"food\" class=\"form-horizontal leftAlign\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Category :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{foodCategory[food.category]}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Name :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{food.name}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Ingredients :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-4\" type=\"text\">{{food.ingredients}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Quantity :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{food.quantity}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Price :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{food.price}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Delete\" class=\"btn btn-default\" (click)=\"delete()\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\"back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Food/Delete/food-delete.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Food/Delete/food-delete.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.leftAlign div div label {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRm9vZC9EZWxldGUvQzpcXFVzZXJzXFxSb2JlcnQuR2F2cmFcXERvY3VtZW50c1xcV29ya3NwYWNlXFxSZXN0YXVyYW50XFxSZXN0YXVyYW50XFxBbmd1bGFyL3NyY1xcYXBwXFxGb29kXFxEZWxldGVcXGZvb2QtZGVsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVEsZ0JBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0Zvb2QvRGVsZXRlL2Zvb2QtZGVsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmxlZnRBbGlnbiB7XHJcbiAgZGl2IHtcclxuICAgIGRpdiB7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Food/Delete/food-delete.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Food/Delete/food-delete.component.ts ***!
  \******************************************************/
/*! exports provided: FoodDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDeleteComponent", function() { return FoodDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food.service */ "./src/app/Food/food.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Common_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/models */ "./src/app/Common/models.ts");






var FoodDeleteComponent = /** @class */ (function () {
    function FoodDeleteComponent(foodService, route, _location) {
        this.foodService = foodService;
        this.route = route;
        this._location = _location;
        this.foodCategory = _Common_models__WEBPACK_IMPORTED_MODULE_5__["FoodCategory"];
    }
    FoodDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var foodID = this.route.snapshot.paramMap.get('id');
        this.foodService.getDetails(foodID)
            .subscribe(function (result) {
            _this.food = JSON.parse(result);
        });
    };
    FoodDeleteComponent.prototype.back = function () {
        this._location.back();
    };
    FoodDeleteComponent.prototype.delete = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.foodService.deleteFood(id).subscribe(function (data) {
            if (data)
                _this.back();
            else {
                // ERROR
            }
        });
    };
    FoodDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'food-delete',
            template: __webpack_require__(/*! ./food-delete.component.html */ "./src/app/Food/Delete/food-delete.component.html"),
            styles: [__webpack_require__(/*! ./food-delete.component.scss */ "./src/app/Food/Delete/food-delete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], FoodDeleteComponent);
    return FoodDeleteComponent;
}());



/***/ }),

/***/ "./src/app/Food/Details/food-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Food/Details/food-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Details</h3>\r\n<div *ngIf=\"food\" class=\"form-horizontal leftAlign\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Category :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{foodCategory[food.category]}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Name :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{food.name}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Ingredients :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-4 \" type=\"text\">{{food.ingredients}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Quantity :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{food.quantity}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Price :</label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{food.price}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\" back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Food/Details/food-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Food/Details/food-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.leftAlign div div label {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRm9vZC9EZXRhaWxzL0M6XFxVc2Vyc1xcUm9iZXJ0LkdhdnJhXFxEb2N1bWVudHNcXFdvcmtzcGFjZVxcUmVzdGF1cmFudFxcUmVzdGF1cmFudFxcQW5ndWxhci9zcmNcXGFwcFxcRm9vZFxcRGV0YWlsc1xcZm9vZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVEsZ0JBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0Zvb2QvRGV0YWlscy9mb29kLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubGVmdEFsaWduIHtcclxuICBkaXYge1xyXG4gICAgZGl2IHtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Food/Details/food-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Food/Details/food-details.component.ts ***!
  \********************************************************/
/*! exports provided: FoodDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailsComponent", function() { return FoodDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food.service */ "./src/app/Food/food.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Common_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/models */ "./src/app/Common/models.ts");






var FoodDetailsComponent = /** @class */ (function () {
    function FoodDetailsComponent(foodService, route, _location) {
        this.foodService = foodService;
        this.route = route;
        this._location = _location;
        this.foodCategory = _Common_models__WEBPACK_IMPORTED_MODULE_5__["FoodCategory"];
    }
    FoodDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var foodID = this.route.snapshot.paramMap.get('id');
        this.foodService.getDetails(foodID)
            .subscribe(function (result) {
            _this.food = JSON.parse(result);
        });
    };
    FoodDetailsComponent.prototype.back = function () {
        this._location.back();
    };
    FoodDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'food-details',
            template: __webpack_require__(/*! ./food-details.component.html */ "./src/app/Food/Details/food-details.component.html"),
            styles: [__webpack_require__(/*! ./food-details.component.scss */ "./src/app/Food/Details/food-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], FoodDetailsComponent);
    return FoodDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Food/Edit/food-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/Food/Edit/food-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Edit item</h3>\r\n<div *ngIf=\"food\" class=\"form-horizontal\" [formGroup]=\"registerForm\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Category</label>\r\n    <div class=\"col-md-10\">\r\n      <select class=\"form-control\" type=\"text\" formControlName=\"category\" [(ngModel)]=\"food.category\">\r\n        <option *ngFor=\"let category of foodCategories\" [ngValue]=\"foodCategory[category]\">{{category}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Name</label>\r\n    <div class=\"col-md-10\" [ngClass]=\"{'has-error': hasError(form.name)}\">\r\n      <input class=\"form-control\" type=\"text\" formControlName=\"name\" [(ngModel)]=\"food.name\">\r\n      <span class=\"control-label\" *ngIf=\"hasError(form.name)\">{{errorMessage(form.name)}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Ingredients</label>\r\n    <div class=\"col-md-10\" [ngClass]=\"{'has-error': hasError(form.ingredients)}\">\r\n      <input class=\"form-control\" type=\"text\" formControlName=\"ingredients\" [(ngModel)]=\"food.ingredients\">\r\n      <span class=\"control-label\" *ngIf=\"hasError(form.ingredients)\">{{errorMessage(form.ingredients)}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" >Quantity</label>\r\n    <div class=\"col-md-10\" [ngClass]=\"{'has-error': hasError(form.quantity)}\">\r\n      <input class=\"form-control\" type=\"number\" formControlName=\"quantity\" [(ngModel)]=\"food.quantity\">\r\n      <span class=\"control-label\" *ngIf=\"hasError(form.quantity)\">{{errorMessage(form.quantity)}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Price</label>\r\n    <div class=\"col-md-10\" [ngClass]=\"{'has-error': hasError(form.price)}\">\r\n      <input class=\"form-control\" type=\"number\" formControlName=\"price\" [(ngModel)]=\"food.price\">\r\n      <span class=\"control-label\" *ngIf=\"hasError(form.price)\">{{errorMessage(form.price)}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Save\" class=\"btn btn-default\" (click)=\"edit()\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\"back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Food/Edit/food-edit.component.scss":
/*!****************************************************!*\
  !*** ./src/app/Food/Edit/food-edit.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leftAlign {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRm9vZC9FZGl0L0M6XFxVc2Vyc1xcUm9iZXJ0LkdhdnJhXFxEb2N1bWVudHNcXFdvcmtzcGFjZVxcUmVzdGF1cmFudFxcUmVzdGF1cmFudFxcQW5ndWxhci9zcmNcXGFwcFxcRm9vZFxcRWRpdFxcZm9vZC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0Zvb2QvRWRpdC9mb29kLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdEFsaWduIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Food/Edit/food-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Food/Edit/food-edit.component.ts ***!
  \**************************************************/
/*! exports provided: FoodEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodEditComponent", function() { return FoodEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Common_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/models */ "./src/app/Common/models.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../food.service */ "./src/app/Food/food.service.ts");
/* harmony import */ var _Common_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Common/validation.service */ "./src/app/Common/validation.service.ts");








var FoodEditComponent = /** @class */ (function () {
    function FoodEditComponent(foodService, route, _location, validationService) {
        this.foodService = foodService;
        this.route = route;
        this._location = _location;
        this.validationService = validationService;
        this.food = {};
        this.foodCategory = _Common_models__WEBPACK_IMPORTED_MODULE_5__["FoodCategory"];
        this.isSubmited = false;
        this.keys = Object.keys;
    }
    FoodEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var foodID = this.route.snapshot.paramMap.get('id');
        this.foodCategories = this.foodService.getCategories();
        this.foodService.getDetails(foodID)
            .subscribe(function (result) {
            _this.food = JSON.parse(result);
        });
    };
    FoodEditComponent.prototype.ngAfterContentChecked = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.food.category),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.food.name, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)
            ]),
            ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.food.ingredients, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)
            ]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.food.quantity, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\d+(\.\d{1,2})?$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(10000)
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.food.price, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\d+(\.\d{1,2})?$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0.25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(5000)
            ])
        });
    };
    Object.defineProperty(FoodEditComponent.prototype, "form", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    FoodEditComponent.prototype.back = function () {
        this._location.back();
    };
    FoodEditComponent.prototype.edit = function () {
        var _this = this;
        this.isSubmited = true;
        if (!this.registerForm.invalid) {
            this.foodService.editFood(this.food).subscribe(function () { _this.back(); });
        }
    };
    FoodEditComponent.prototype.errorMessage = function (control) {
        return this.validationService.getErrorMessage(control);
    };
    FoodEditComponent.prototype.hasError = function (control) {
        return this.validationService.hasError(control, this.isSubmited);
    };
    FoodEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'food-edit',
            template: __webpack_require__(/*! ./food-edit.component.html */ "./src/app/Food/Edit/food-edit.component.html"),
            styles: [__webpack_require__(/*! ./food-edit.component.scss */ "./src/app/Food/Edit/food-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _Common_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"]])
    ], FoodEditComponent);
    return FoodEditComponent;
}());



/***/ }),

/***/ "./src/app/Food/food.component.html":
/*!******************************************!*\
  !*** ./src/app/Food/food.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"food-container\">\r\n  <input type=\"button\" class=\"btn btn-default add\" value=\"Add item\" [routerLink]=\"['/Food/Create']\"/>\r\n  <table class=\"table-container\">\r\n    <thead>\r\n      <tr>\r\n        <th></th>\r\n        <th>Name</th>\r\n        <th>Category</th>\r\n        <th>Ingredients</th>\r\n        <th>Quantity</th>\r\n        <th>Price</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let food of foods\">\r\n        <!--<td><img [src]=\"food.imagePath\" /></td>-->\r\n        <td>{{food.name}}</td>\r\n        <td>{{foodCategory[food.category]}}</td>\r\n        <td>{{food.ingredients}}</td>\r\n        <td>{{food.quantity}}</td>\r\n        <td>{{food.price}}</td>\r\n        <td>\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Edit\" [routerLink]=\"['/Food/Edit', food.ID]\" />\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Details\" [routerLink]=\"['/Food/Details', food.ID]\" />\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Delete\" [routerLink]=\"['/Food/Delete', food.ID]\" />\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"galery-container\">\r\n    <!--<img src=\"../../../../Pictures/tablesetting.jpg\" />-->\r\n    <img src=\"../../../../Pictures/tablesetting.jpg\" />\r\n    <img src=\"../../../../Pictures/tablesetting.jpg\" />\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Food/food.component.scss":
/*!******************************************!*\
  !*** ./src/app/Food/food.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".food-container input {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.food-container .table-container {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\n.food-container .table-container td, .food-container .table-container th {\n    padding: 8px;\n    text-align: center;\n    vertical-align: central; }\n\n.food-container .table-container td input, .food-container .table-container th input {\n      margin: 5px; }\n\n.food-container .table-container th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: center;\n    background-color: #1351d8;\n    color: white; }\n\n.food-container .table-container tr:nth-child(even) {\n    background-color: #f2f2f2; }\n\n.food-container .table-container tr:hover {\n    background-color: #ddd; }\n\n.food-container .galery-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n  margin-top: 25px; }\n\n.food-container .galery-container img {\n    display: inline-block;\n    height: 75px;\n    width: 75px;\n    margin: auto;\n    border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRm9vZC9DOlxcVXNlcnNcXFJvYmVydC5HYXZyYVxcRG9jdW1lbnRzXFxXb3Jrc3BhY2VcXFJlc3RhdXJhbnRcXFJlc3RhdXJhbnRcXEFuZ3VsYXIvc3JjXFxhcHBcXEZvb2RcXGZvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSnZCO0VBUUkseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBVmY7SUFhTSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QixFQUFBOztBQWY3QjtNQWtCUSxXQUFXLEVBQUE7O0FBbEJuQjtJQXVCTSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWSxFQUFBOztBQTNCbEI7SUErQk0seUJBQXlCLEVBQUE7O0FBL0IvQjtJQW1DTSxzQkFBc0IsRUFBQTs7QUFuQzVCO0VBd0NJLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQTNDcEI7SUE4Q00scUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvRm9vZC9mb29kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb2QtY29udGFpbmVyIHtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAudGFibGUtY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRkLCB0aCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudHJhbDtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzUxZDg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgfVxyXG5cclxuICAgIHRyOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5nYWxlcnktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Food/food.component.ts":
/*!****************************************!*\
  !*** ./src/app/Food/food.component.ts ***!
  \****************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.service */ "./src/app/Food/food.service.ts");
/* harmony import */ var _Common_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/models */ "./src/app/Common/models.ts");
/* harmony import */ var _Images_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/images.service */ "./src/app/Images/images.service.ts");





var FoodComponent = /** @class */ (function () {
    function FoodComponent(foodService, imageService) {
        this.foodService = foodService;
        this.imageService = imageService;
        this.foodCategory = _Common_models__WEBPACK_IMPORTED_MODULE_3__["FoodCategory"];
    }
    FoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService.getFoods()
            .subscribe(function (result) {
            _this.foods = new Array(result.length);
            for (var i = 0; i < result.length; i++) {
                _this.foods[i] = JSON.parse(result[i]);
            }
            _this.loadImages();
        });
    };
    FoodComponent.prototype.loadImages = function () {
        var _this = this;
        this.foods.forEach(function (item) {
            if (item && item.imageName)
                _this.imageService.loadImage(item.imageName).subscribe(function (data) {
                    var x = data;
                });
        });
    };
    FoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'food',
            template: __webpack_require__(/*! ./food.component.html */ "./src/app/Food/food.component.html"),
            styles: [__webpack_require__(/*! ./food.component.scss */ "./src/app/Food/food.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"],
            _Images_images_service__WEBPACK_IMPORTED_MODULE_4__["ImagesService"]])
    ], FoodComponent);
    return FoodComponent;
}());



/***/ }),

/***/ "./src/app/Food/food.service.ts":
/*!**************************************!*\
  !*** ./src/app/Food/food.service.ts ***!
  \**************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Common_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/models */ "./src/app/Common/models.ts");




var FoodService = /** @class */ (function () {
    function FoodService(http) {
        this.http = http;
    }
    FoodService.prototype.getFoods = function () {
        return this.http.get('Food/GetFoods', { responseType: 'json' });
    };
    FoodService.prototype.getDetails = function (foodID) {
        return this.http.get('/Food/Details/' + foodID, { responseType: 'json' });
    };
    FoodService.prototype.deleteFood = function (idValue) {
        return this.http.delete('/Food/DeleteFood/' + idValue);
    };
    FoodService.prototype.addFood = function (food) {
        return this.http.post('/Food/Create', food);
    };
    FoodService.prototype.editFood = function (food) {
        return this.http.post('/Food/Edit', food);
    };
    FoodService.prototype.getCategories = function () {
        return Object.keys(_Common_models__WEBPACK_IMPORTED_MODULE_3__["FoodCategory"]).filter(function (type) { return isNaN(type) && type !== 'values'; });
    };
    FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FoodService);
    return FoodService;
}());



/***/ }),

/***/ "./src/app/Home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/Home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n  <img class=\"banner\" src=\"../../../Pictures/hamburger.jpg\" />\r\n\r\n  <div class=\"flex-container\">\r\n    <div class=\"item\">\r\n      <img class=\"image\" src=\"../../../Pictures/tablesetting.jpg\" />\r\n    </div>\r\n    <div class=\"item\">\r\n      <div class=\"article\">\r\n        <h1>About us</h1>\r\n        <h4>Tradition since 1889</h4>\r\n        <span class=\"text\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,\r\n          nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,\r\n          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.\r\n          Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.\r\n          In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue\r\n          eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div class=\"flex-container mobile\">\r\n    <div class=\"item\">\r\n      <div class=\"article\">\r\n        <h1>News</h1>\r\n        <span class=\"text\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,\r\n          nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,\r\n          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.\r\n          Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.\r\n          In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue\r\n          eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <img class=\"image\" src=\"../../../../Pictures/tablesetting2.jpg\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/Home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container .banner {\n  width: 100%;\n  margin-bottom: 25px; }\n\n.home-container .flex-container {\n  display: flex;\n  flex-direction: row-reverse; }\n\n@media (max-width: 768px) {\n    .home-container .flex-container {\n      flex-direction: column-reverse; } }\n\n.home-container .flex-container .item {\n    flex: 0 1 50%;\n    text-align: center; }\n\n.home-container .flex-container .item .image {\n      width: 75%; }\n\n.home-container .flex-container .item .article h4 {\n      text-decoration: underline;\n      color: gray; }\n\n.home-container .flex-container .item .article .text {\n      font-size: 18px; }\n\n@media (max-width: 768px) {\n  .home-container .mobile {\n    flex-direction: column; } }\n\n.home-container hr {\n  margin: 30px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9DOlxcVXNlcnNcXFJvYmVydC5HYXZyYVxcRG9jdW1lbnRzXFxXb3Jrc3BhY2VcXFJlc3RhdXJhbnRcXFJlc3RhdXJhbnRcXEFuZ3VsYXIvc3JjXFxhcHBcXEhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBSHZCO0VBT0ksYUFBYTtFQUNiLDJCQUEyQixFQUFBOztBQUUzQjtJQVZKO01BV00sOEJBQThCLEVBQUEsRUFzQmpDOztBQWpDSDtJQWVNLGFBQWE7SUFDYixrQkFBa0IsRUFBQTs7QUFoQnhCO01BbUJRLFVBQVUsRUFBQTs7QUFuQmxCO01Bd0JVLDBCQUEwQjtNQUMxQixXQUFXLEVBQUE7O0FBekJyQjtNQTZCVSxlQUFlLEVBQUE7O0FBT3JCO0VBcENKO0lBcUNNLHNCQUFzQixFQUFBLEVBRXpCOztBQXZDSDtFQTBDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lciB7XHJcbiAgLmJhbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtIHtcclxuICAgICAgZmxleDogMCAxIDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXJ0aWNsZSB7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/Home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/Home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Images/images.component.html":
/*!**********************************************!*\
  !*** ./src/app/Images/images.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"color:red\">Upload Images</h1>\r\n<input type=\"file\" class=\"btn btn-default\" (change)=\"onFileSelected($event)\"/>\r\n<button  class=\"btn btn-default\" (click)=\"save()\">Save</button>\r\n"

/***/ }),

/***/ "./src/app/Images/images.component.scss":
/*!**********************************************!*\
  !*** ./src/app/Images/images.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reservation-container input {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.reservation-container .table-container {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\n.reservation-container .table-container td, .reservation-container .table-container th {\n    padding: 8px;\n    text-align: center;\n    vertical-align: central; }\n\n.reservation-container .table-container td input, .reservation-container .table-container th input {\n      margin: 5px; }\n\n.reservation-container .table-container th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: center;\n    background-color: #1351d8;\n    color: white; }\n\n.reservation-container .table-container tr:nth-child(even) {\n    background-color: #f2f2f2; }\n\n.reservation-container .table-container tr:hover {\n    background-color: #ddd; }\n\n.reservation-container .galery-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n  margin-top: 25px; }\n\n.reservation-container .galery-container img {\n    display: inline-block;\n    height: 75px;\n    width: 75px;\n    margin: auto;\n    border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSW1hZ2VzL0M6XFxVc2Vyc1xcUm9iZXJ0LkdhdnJhXFxEb2N1bWVudHNcXFdvcmtzcGFjZVxcUmVzdGF1cmFudFxcUmVzdGF1cmFudFxcQW5ndWxhci9zcmNcXGFwcFxcSW1hZ2VzXFxpbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSnZCO0VBUUkseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBVmY7SUFhTSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QixFQUFBOztBQWY3QjtNQWtCUSxXQUFXLEVBQUE7O0FBbEJuQjtJQXVCTSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWSxFQUFBOztBQTNCbEI7SUErQk0seUJBQXlCLEVBQUE7O0FBL0IvQjtJQW1DTSxzQkFBc0IsRUFBQTs7QUFuQzVCO0VBd0NJLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQTNDcEI7SUE4Q00scUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvSW1hZ2VzL2ltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNlcnZhdGlvbi1jb250YWluZXIge1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdGQsIHRoIHtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50cmFsO1xyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGgge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTFkODtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICB9XHJcblxyXG4gICAgdHI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdhbGVyeS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/Images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(http) {
        this.http = http;
        this.selectedFile = null;
    }
    ImagesComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    ImagesComponent.prototype.save = function () {
        var uploadData = new FormData();
        uploadData.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('/Image/SaveImage', uploadData).subscribe();
    };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/Images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.scss */ "./src/app/Images/images.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/Images/images.service.ts":
/*!******************************************!*\
  !*** ./src/app/Images/images.service.ts ***!
  \******************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ImagesService = /** @class */ (function () {
    function ImagesService(http) {
        this.http = http;
    }
    ImagesService.prototype.saveImage = function (file) {
        return this.http.post('/Image/SaveImage', file);
    };
    ImagesService.prototype.loadImage = function (name) {
        return this.http.post('/Image/GetImage', { 'name': name });
    };
    ImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImagesService);
    return ImagesService;
}());



/***/ }),

/***/ "./src/app/Reservation/Create/reservation-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Reservation/Create/reservation-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Create reservation</h3>\r\n<div  class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"FirstName\">First Name</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"FirstName\" >\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"LastName\">Last Name</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"LastName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"PhoneNumber\">Phone Number</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"PhoneNumber\" >\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Email\">Email</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Email\" >\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"TableNo\">Table Number</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"TableNo\" >\r\n    </div>\r\n  </div>\r\n  <!-- TODO - modify date format , date picker -->\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Date\">Date</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Date\" >\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"PersNo\">Number of persons</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"PersNo\" >\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Create\" class=\"btn btn-default\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\"  (click)=\" back()\"/>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Reservation/Create/reservation-create.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Reservation/Create/reservation-create.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Jlc2VydmF0aW9uL0NyZWF0ZS9yZXNlcnZhdGlvbi1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Reservation/Create/reservation-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Reservation/Create/reservation-create.component.ts ***!
  \********************************************************************/
/*! exports provided: ReservationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationCreateComponent", function() { return ReservationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reservation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reservation.service */ "./src/app/Reservation/reservation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ReservationCreateComponent = /** @class */ (function () {
    function ReservationCreateComponent(reservationService, route, _location) {
        this.reservationService = reservationService;
        this.route = route;
        this._location = _location;
    }
    ReservationCreateComponent.prototype.ngOnInit = function () {
        //let reservationID = this.route.snapshot.paramMap.get('id');
        //this.reservationService.getReservation()
        //  .subscribe((result: any) => {
        //    this.reservation = result;
        //  });
    };
    ReservationCreateComponent.prototype.back = function () {
        this._location.back();
    };
    ReservationCreateComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    ReservationCreateComponent.prototype.save = function () {
        this.reservationService.updateReservation(this.reservation);
    };
    ReservationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reservation-create',
            template: __webpack_require__(/*! ./reservation-create.component.html */ "./src/app/Reservation/Create/reservation-create.component.html"),
            styles: [__webpack_require__(/*! ./reservation-create.component.scss */ "./src/app/Reservation/Create/reservation-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reservation_service__WEBPACK_IMPORTED_MODULE_3__["ReservationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ReservationCreateComponent);
    return ReservationCreateComponent;
}());



/***/ }),

/***/ "./src/app/Reservation/Delete/reservation-delete.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Reservation/Delete/reservation-delete.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Delete</h3>\r\n<div *ngIf=\"reservation\" class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">FirstName </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.CustomerDetails.FirstName}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Last Name </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.CustomerDetails.LastName}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Phone Number </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.CustomerDetails.PhoneNumber}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Email </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.CustomerDetails.Email}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Table Number </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.TableNo}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Date </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{formatDate(reservation.Date) | date: 'dd/MM/yyyy'}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Number of persons </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.PersNo}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Delete\" class=\"btn btn-default\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\" back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Reservation/Delete/reservation-delete.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Reservation/Delete/reservation-delete.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Jlc2VydmF0aW9uL0RlbGV0ZS9yZXNlcnZhdGlvbi1kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Reservation/Delete/reservation-delete.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Reservation/Delete/reservation-delete.component.ts ***!
  \********************************************************************/
/*! exports provided: ReservationDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationDeleteComponent", function() { return ReservationDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reservation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reservation.service */ "./src/app/Reservation/reservation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ReservationDeleteComponent = /** @class */ (function () {
    function ReservationDeleteComponent(reservationService, route, _location) {
        this.reservationService = reservationService;
        this.route = route;
        this._location = _location;
    }
    ReservationDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var reservationID = this.route.snapshot.paramMap.get('id');
        this.reservationService.getDetails(reservationID)
            .subscribe(function (result) {
            _this.reservation = result;
        });
    };
    ReservationDeleteComponent.prototype.back = function () {
        this._location.back();
    };
    ReservationDeleteComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    ReservationDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reservation-delete',
            template: __webpack_require__(/*! ./reservation-delete.component.html */ "./src/app/Reservation/Delete/reservation-delete.component.html"),
            styles: [__webpack_require__(/*! ./reservation-delete.component.scss */ "./src/app/Reservation/Delete/reservation-delete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reservation_service__WEBPACK_IMPORTED_MODULE_3__["ReservationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ReservationDeleteComponent);
    return ReservationDeleteComponent;
}());



/***/ }),

/***/ "./src/app/Reservation/Details/reservation-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Reservation/Details/reservation-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Details</h3>\r\n<div *ngIf=\"reservation\" class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">FirstName </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.CustomerDetails.FirstName}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Last Name </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.CustomerDetails.LastName}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Phone Number </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.CustomerDetails.PhoneNumber}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Email </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.CustomerDetails.Email}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Table Number </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.TableNo}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Date </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{formatDate(reservation.Date) | date: 'dd/MM/yyyy'}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\">Number of persons </label>\r\n    <div class=\"col-md-10\">\r\n      <label class=\"control-label col-md-2\" type=\"text\">{{reservation.PersNo}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\" (click)=\" back()\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Reservation/Details/reservation-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Reservation/Details/reservation-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Jlc2VydmF0aW9uL0RldGFpbHMvcmVzZXJ2YXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Reservation/Details/reservation-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Reservation/Details/reservation-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReservationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationDetailsComponent", function() { return ReservationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reservation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reservation.service */ "./src/app/Reservation/reservation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ReservationDetailsComponent = /** @class */ (function () {
    function ReservationDetailsComponent(reservationService, route, _location) {
        this.reservationService = reservationService;
        this.route = route;
        this._location = _location;
    }
    ReservationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var reservationID = this.route.snapshot.paramMap.get('id');
        this.reservationService.getDetails(reservationID)
            .subscribe(function (result) {
            _this.reservation = result;
        });
    };
    ReservationDetailsComponent.prototype.back = function () {
        this._location.back();
    };
    ReservationDetailsComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    ReservationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reservation-details',
            template: __webpack_require__(/*! ./reservation-details.component.html */ "./src/app/Reservation/Details/reservation-details.component.html"),
            styles: [__webpack_require__(/*! ./reservation-details.component.scss */ "./src/app/Reservation/Details/reservation-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reservation_service__WEBPACK_IMPORTED_MODULE_3__["ReservationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ReservationDetailsComponent);
    return ReservationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Reservation/Edit/reservation-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Reservation/Edit/reservation-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Edit reservation</h3>\r\n<div *ngIf=\"reservation\" class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"FirstName\">First Name</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"FirstName\" [(value)]=\"reservation.CustomerDetails.FirstName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"LastName\">Last Name</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"LastName\" [(value)]=\"reservation.CustomerDetails.LastName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"PhoneNumber\">Phone Number</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"PhoneNumber\" [(value)]=\"reservation.CustomerDetails.PhoneNumber\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Email\">Email</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Email\" [(value)]=\"reservation.CustomerDetails.Email\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"TableNo\">Table Number</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"TableNo\" [(value)]=\"reservation.TableNo\">\r\n    </div>\r\n  </div>\r\n  <!-- TODO - modify date format , date picker -->\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"Date\">Date</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"Date\" [(value)]=\"reservation.Date\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label col-md-2\" for=\"PersNo\">Number of persons</label>\r\n    <div class=\"col-md-10\">\r\n      <input class=\"form-control\" type=\"text\" name=\"PersNo\" [(value)]=\"reservation.PersNo\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-offset-2 col-md-10\">\r\n    <input type=\"submit\" value=\"Save\" class=\"btn btn-default\" />\r\n    <input type=\"button\" style=\"margin-left:10%;\" class=\"btn btn-default\" value=\"Back to Menu\"  (click)=\" back()\"/>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Reservation/Edit/reservation-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Reservation/Edit/reservation-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Jlc2VydmF0aW9uL0VkaXQvcmVzZXJ2YXRpb24tZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Reservation/Edit/reservation-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Reservation/Edit/reservation-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ReservationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationEditComponent", function() { return ReservationEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reservation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reservation.service */ "./src/app/Reservation/reservation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ReservationEditComponent = /** @class */ (function () {
    function ReservationEditComponent(reservationService, route, _location) {
        this.reservationService = reservationService;
        this.route = route;
        this._location = _location;
    }
    ReservationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var reservationID = this.route.snapshot.paramMap.get('id');
        this.reservationService.getDetails(reservationID)
            .subscribe(function (result) {
            _this.reservation = result;
        });
    };
    ReservationEditComponent.prototype.back = function () {
        this._location.back();
    };
    ReservationEditComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    ReservationEditComponent.prototype.save = function () {
        this.reservationService.updateReservation(this.reservation);
    };
    ReservationEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reservation-edit',
            template: __webpack_require__(/*! ./reservation-edit.component.html */ "./src/app/Reservation/Edit/reservation-edit.component.html"),
            styles: [__webpack_require__(/*! ./reservation-edit.component.scss */ "./src/app/Reservation/Edit/reservation-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reservation_service__WEBPACK_IMPORTED_MODULE_3__["ReservationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ReservationEditComponent);
    return ReservationEditComponent;
}());



/***/ }),

/***/ "./src/app/Reservation/reservation.component.html":
/*!********************************************************!*\
  !*** ./src/app/Reservation/reservation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reservation-container\">\r\n  <input type=\"button\" class=\"btn btn-default add\" value=\"Make a reservation\"  [routerLink]=\"['/Reservation/Create']\" />\r\n  <table class=\"table-container\">\r\n    <thead>\r\n      <tr>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Phone Number</th>\r\n        <th>Email</th>\r\n        <th>Table Number</th>\r\n        <th>Date</th>\r\n        <th>Pers Number</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let reservation of reservations\">\r\n        <td>{{reservation.CustomerDetails.FirstName}}</td>\r\n        <td>{{reservation.CustomerDetails.LastName}}</td>\r\n        <td>{{reservation.CustomerDetails.PhoneNumber}}</td>\r\n        <td>{{reservation.CustomerDetails.Email}}</td>\r\n        <td>{{reservation.TableNo}}</td>\r\n        <td>{{formatDate(reservation.Date) | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{reservation.PersNo}}</td>\r\n        <td>\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Edit\" [routerLink]=\"['/Reservation/Edit', reservation.ID]\"/>\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Details\" [routerLink]=\"['/Reservation/Details', reservation.ID]\"/>\r\n          <input type=\"button\" class=\"btn btn-default\" value=\"Delete\" [routerLink]=\"['/Reservation/Delete', reservation.ID]\"/>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"galery-container\">\r\n    <img src=\"../../../../Pictures/tablesetting.jpg\" />\r\n    <img src=\"../../../../Pictures/tablesetting.jpg\" />\r\n    <img src=\"../../../../Pictures/tablesetting.jpg\" />\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Reservation/reservation.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Reservation/reservation.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reservation-container input {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.reservation-container .table-container {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\n.reservation-container .table-container td, .reservation-container .table-container th {\n    padding: 8px;\n    text-align: center;\n    vertical-align: central; }\n\n.reservation-container .table-container td input, .reservation-container .table-container th input {\n      margin: 5px; }\n\n.reservation-container .table-container th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: center;\n    background-color: #1351d8;\n    color: white; }\n\n.reservation-container .table-container tr:nth-child(even) {\n    background-color: #f2f2f2; }\n\n.reservation-container .table-container tr:hover {\n    background-color: #ddd; }\n\n.reservation-container .galery-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n  margin-top: 25px; }\n\n.reservation-container .galery-container img {\n    display: inline-block;\n    height: 75px;\n    width: 75px;\n    margin: auto;\n    border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVzZXJ2YXRpb24vQzpcXFVzZXJzXFxSb2JlcnQuR2F2cmFcXERvY3VtZW50c1xcV29ya3NwYWNlXFxSZXN0YXVyYW50XFxSZXN0YXVyYW50XFxBbmd1bGFyL3NyY1xcYXBwXFxSZXNlcnZhdGlvblxccmVzZXJ2YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSnZCO0VBUUkseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBVmY7SUFhTSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QixFQUFBOztBQWY3QjtNQWtCUSxXQUFXLEVBQUE7O0FBbEJuQjtJQXVCTSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWSxFQUFBOztBQTNCbEI7SUErQk0seUJBQXlCLEVBQUE7O0FBL0IvQjtJQW1DTSxzQkFBc0IsRUFBQTs7QUFuQzVCO0VBd0NJLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQTNDcEI7SUE4Q00scUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXJ2YXRpb24tY29udGFpbmVyIHtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAudGFibGUtY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRkLCB0aCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudHJhbDtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzUxZDg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgfVxyXG5cclxuICAgIHRyOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5nYWxlcnktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Reservation/reservation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Reservation/reservation.component.ts ***!
  \******************************************************/
/*! exports provided: ReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationComponent", function() { return ReservationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reservation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation.service */ "./src/app/Reservation/reservation.service.ts");



var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(reservationService) {
        this.reservationService = reservationService;
    }
    ReservationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reservationService.getReservations()
            .subscribe(function (result) {
            _this.reservations = result;
        });
    };
    ReservationComponent.prototype.formatDate = function (date) {
        return parseInt(date.substr(6));
    };
    ReservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reservation',
            template: __webpack_require__(/*! ./reservation.component.html */ "./src/app/Reservation/reservation.component.html"),
            styles: [__webpack_require__(/*! ./reservation.component.scss */ "./src/app/Reservation/reservation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reservation_service__WEBPACK_IMPORTED_MODULE_2__["ReservationService"]])
    ], ReservationComponent);
    return ReservationComponent;
}());



/***/ }),

/***/ "./src/app/Reservation/reservation.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Reservation/reservation.service.ts ***!
  \****************************************************/
/*! exports provided: ReservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationService", function() { return ReservationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ReservationService = /** @class */ (function () {
    function ReservationService(http) {
        this.http = http;
    }
    ReservationService.prototype.getReservations = function () {
        return this.http.get('Reservation/GetReservations', { responseType: 'json' });
    };
    ReservationService.prototype.getDetails = function (reservationID) {
        return this.http.get(reservationID, { responseType: 'json' });
    };
    ReservationService.prototype.updateReservation = function (reservation) {
        return this.http.post('/Reservation/Update', reservation, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' })
        });
    };
    ReservationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReservationService);
    return ReservationService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home/home.component */ "./src/app/Home/home.component.ts");
/* harmony import */ var _Reservation_reservation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reservation/reservation.component */ "./src/app/Reservation/reservation.component.ts");
/* harmony import */ var _Reservation_Edit_reservation_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reservation/Edit/reservation-edit.component */ "./src/app/Reservation/Edit/reservation-edit.component.ts");
/* harmony import */ var _Reservation_Details_reservation_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Reservation/Details/reservation-details.component */ "./src/app/Reservation/Details/reservation-details.component.ts");
/* harmony import */ var _Reservation_Delete_reservation_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Reservation/Delete/reservation-delete.component */ "./src/app/Reservation/Delete/reservation-delete.component.ts");
/* harmony import */ var _Reservation_Create_reservation_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Reservation/Create/reservation-create.component */ "./src/app/Reservation/Create/reservation-create.component.ts");
/* harmony import */ var _Food_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Food/food.component */ "./src/app/Food/food.component.ts");
/* harmony import */ var _Food_Edit_food_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Food/Edit/food-edit.component */ "./src/app/Food/Edit/food-edit.component.ts");
/* harmony import */ var _Food_Delete_food_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Food/Delete/food-delete.component */ "./src/app/Food/Delete/food-delete.component.ts");
/* harmony import */ var _Food_Details_food_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Food/Details/food-details.component */ "./src/app/Food/Details/food-details.component.ts");
/* harmony import */ var _Food_Create_food_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Food/Create/food-create.component */ "./src/app/Food/Create/food-create.component.ts");
/* harmony import */ var _Employee_employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Employee/employee.component */ "./src/app/Employee/employee.component.ts");
/* harmony import */ var _Employee_Edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Employee/Edit/employee-edit.component */ "./src/app/Employee/Edit/employee-edit.component.ts");
/* harmony import */ var _Employee_Details_employee_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Employee/Details/employee-details.component */ "./src/app/Employee/Details/employee-details.component.ts");
/* harmony import */ var _Employee_Create_employee_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Employee/Create/employee-create.component */ "./src/app/Employee/Create/employee-create.component.ts");
/* harmony import */ var _Employee_Delete_employee_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Employee/Delete/employee-delete.component */ "./src/app/Employee/Delete/employee-delete.component.ts");
/* harmony import */ var _Images_images_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Images/images.component */ "./src/app/Images/images.component.ts");




















var routes = [
    { path: '', component: _Home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'Reservation', component: _Reservation_reservation_component__WEBPACK_IMPORTED_MODULE_4__["ReservationComponent"] },
    { path: 'Reservation/Edit/:id', component: _Reservation_Edit_reservation_edit_component__WEBPACK_IMPORTED_MODULE_5__["ReservationEditComponent"], pathMatch: 'full' },
    { path: 'Reservation/Details/:id', component: _Reservation_Details_reservation_details_component__WEBPACK_IMPORTED_MODULE_6__["ReservationDetailsComponent"], pathMatch: 'full' },
    { path: 'Reservation/Delete/:id', component: _Reservation_Delete_reservation_delete_component__WEBPACK_IMPORTED_MODULE_7__["ReservationDeleteComponent"], pathMatch: 'full' },
    { path: 'Reservation/Create', component: _Reservation_Create_reservation_create_component__WEBPACK_IMPORTED_MODULE_8__["ReservationCreateComponent"], pathMatch: 'full' },
    { path: 'Food', component: _Food_food_component__WEBPACK_IMPORTED_MODULE_9__["FoodComponent"] },
    { path: 'Food/Edit/:id', component: _Food_Edit_food_edit_component__WEBPACK_IMPORTED_MODULE_10__["FoodEditComponent"], pathMatch: 'full' },
    { path: 'Food/Delete/:id', component: _Food_Delete_food_delete_component__WEBPACK_IMPORTED_MODULE_11__["FoodDeleteComponent"], pathMatch: 'full' },
    { path: 'Food/Details/:id', component: _Food_Details_food_details_component__WEBPACK_IMPORTED_MODULE_12__["FoodDetailsComponent"], pathMatch: 'full' },
    { path: 'Food/Create', component: _Food_Create_food_create_component__WEBPACK_IMPORTED_MODULE_13__["FoodCreateComponent"], pathMatch: 'full' },
    { path: 'Employee', component: _Employee_employee_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeComponent"] },
    { path: 'Employee/Edit/:id', component: _Employee_Edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeEditComponent"], pathMatch: 'full' },
    { path: 'Employee/Details/:id', component: _Employee_Details_employee_details_component__WEBPACK_IMPORTED_MODULE_16__["EmployeeDetailsComponent"], pathMatch: 'full' },
    { path: 'Employee/Create', component: _Employee_Create_employee_create_component__WEBPACK_IMPORTED_MODULE_17__["EmployeeCreateComponent"], pathMatch: 'full' },
    { path: 'Employee/Delete/:id', component: _Employee_Delete_employee_delete_component__WEBPACK_IMPORTED_MODULE_18__["EmployeeDeleteComponent"], pathMatch: 'full' },
    { path: 'Home/UploadImage', component: _Images_images_component__WEBPACK_IMPORTED_MODULE_19__["ImagesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Home/home.component */ "./src/app/Home/home.component.ts");
/* harmony import */ var _Reservation_reservation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Reservation/reservation.component */ "./src/app/Reservation/reservation.component.ts");
/* harmony import */ var _Reservation_Edit_reservation_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Reservation/Edit/reservation-edit.component */ "./src/app/Reservation/Edit/reservation-edit.component.ts");
/* harmony import */ var _Reservation_Details_reservation_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reservation/Details/reservation-details.component */ "./src/app/Reservation/Details/reservation-details.component.ts");
/* harmony import */ var _Reservation_Delete_reservation_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Reservation/Delete/reservation-delete.component */ "./src/app/Reservation/Delete/reservation-delete.component.ts");
/* harmony import */ var _Reservation_Create_reservation_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Reservation/Create/reservation-create.component */ "./src/app/Reservation/Create/reservation-create.component.ts");
/* harmony import */ var _Food_food_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Food/food.component */ "./src/app/Food/food.component.ts");
/* harmony import */ var _Food_Edit_food_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Food/Edit/food-edit.component */ "./src/app/Food/Edit/food-edit.component.ts");
/* harmony import */ var _Food_Delete_food_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Food/Delete/food-delete.component */ "./src/app/Food/Delete/food-delete.component.ts");
/* harmony import */ var _Food_Details_food_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Food/Details/food-details.component */ "./src/app/Food/Details/food-details.component.ts");
/* harmony import */ var _Food_Create_food_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Food/Create/food-create.component */ "./src/app/Food/Create/food-create.component.ts");
/* harmony import */ var _Employee_employee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Employee/employee.component */ "./src/app/Employee/employee.component.ts");
/* harmony import */ var _Employee_Edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Employee/Edit/employee-edit.component */ "./src/app/Employee/Edit/employee-edit.component.ts");
/* harmony import */ var _Employee_Details_employee_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Employee/Details/employee-details.component */ "./src/app/Employee/Details/employee-details.component.ts");
/* harmony import */ var _Employee_Create_employee_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Employee/Create/employee-create.component */ "./src/app/Employee/Create/employee-create.component.ts");
/* harmony import */ var _Employee_Delete_employee_delete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Employee/Delete/employee-delete.component */ "./src/app/Employee/Delete/employee-delete.component.ts");
/* harmony import */ var _Images_images_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Images/images.component */ "./src/app/Images/images.component.ts");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @trademe/ng-defer-load */ "./node_modules/@trademe/ng-defer-load/dist/index.js");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _Reservation_reservation_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Reservation/reservation.service */ "./src/app/Reservation/reservation.service.ts");
/* harmony import */ var _Food_food_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Food/food.service */ "./src/app/Food/food.service.ts");
/* harmony import */ var _Employee_employee_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Employee/employee.service */ "./src/app/Employee/employee.service.ts");
/* harmony import */ var _app_Common_validation_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../app/Common/validation.service */ "./src/app/Common/validation.service.ts");
/* harmony import */ var _Images_images_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Images/images.service */ "./src/app/Images/images.service.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _Home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _Reservation_reservation_component__WEBPACK_IMPORTED_MODULE_9__["ReservationComponent"],
                _Reservation_Edit_reservation_edit_component__WEBPACK_IMPORTED_MODULE_10__["ReservationEditComponent"],
                _Reservation_Details_reservation_details_component__WEBPACK_IMPORTED_MODULE_11__["ReservationDetailsComponent"],
                _Reservation_Delete_reservation_delete_component__WEBPACK_IMPORTED_MODULE_12__["ReservationDeleteComponent"],
                _Reservation_Create_reservation_create_component__WEBPACK_IMPORTED_MODULE_13__["ReservationCreateComponent"],
                _Food_food_component__WEBPACK_IMPORTED_MODULE_14__["FoodComponent"],
                _Food_Edit_food_edit_component__WEBPACK_IMPORTED_MODULE_15__["FoodEditComponent"],
                _Food_Delete_food_delete_component__WEBPACK_IMPORTED_MODULE_16__["FoodDeleteComponent"],
                _Food_Details_food_details_component__WEBPACK_IMPORTED_MODULE_17__["FoodDetailsComponent"],
                _Food_Create_food_create_component__WEBPACK_IMPORTED_MODULE_18__["FoodCreateComponent"],
                _Employee_employee_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeComponent"],
                _Employee_Edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeEditComponent"],
                _Employee_Details_employee_details_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeDetailsComponent"],
                _Employee_Create_employee_create_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeCreateComponent"],
                _Employee_Delete_employee_delete_component__WEBPACK_IMPORTED_MODULE_23__["EmployeeDeleteComponent"],
                _Images_images_component__WEBPACK_IMPORTED_MODULE_24__["ImagesComponent"]
            ],
            imports: [
                _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_25__["DeferLoadModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"], useValue: '/' },
                _Reservation_reservation_service__WEBPACK_IMPORTED_MODULE_26__["ReservationService"],
                _Food_food_service__WEBPACK_IMPORTED_MODULE_27__["FoodService"],
                _Employee_employee_service__WEBPACK_IMPORTED_MODULE_28__["EmployeeService"],
                _app_Common_validation_service__WEBPACK_IMPORTED_MODULE_29__["ValidationService"],
                _Images_images_service__WEBPACK_IMPORTED_MODULE_30__["ImagesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener("DOMContentLoaded", function (event) {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Robert.Gavra\Documents\Workspace\Restaurant\Restaurant\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map