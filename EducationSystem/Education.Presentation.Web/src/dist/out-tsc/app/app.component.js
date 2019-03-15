var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from './app.service';
var AppComponent = /** @class */ (function () {
    /*
    * Default constructor
    * @param cd
    * @param appService
    */
    function AppComponent(zone, cd, appService) {
        this.zone = zone;
        this.cd = cd;
        this.appService = appService;
        this.employeeForm = new FormGroup({
            name: new FormControl(''),
            address: new FormControl(''),
            image: new FormControl(''),
        });
        this.initDefaultMessage();
    }
    /**
     * method initDefaultMessage
     */
    AppComponent.prototype.initDefaultMessage = function () {
        this.message = { message: '', isSuccess: true };
    };
    /*
    * Method submitForm
    *
    */
    AppComponent.prototype.submitForm = function () {
        var _this = this;
        this.appService.registerEmployee(this.employeeForm.value).
            subscribe(function (response) {
            if (response) {
                _this.message = { text: 'Form successfully submited.', isSuccess: true };
                setTimeout(_this.initDefaultMessage);
                _this.cd.detectChanges();
            }
        }, function (response) {
            if (response) {
                _this.message = { text: 'Form submission failed.', isSuccess: false };
                setTimeout(_this.initDefaultMessage);
                _this.cd.detectChanges();
            }
        });
    };
    /*
    * Method onFIleChange
    * @param event
    */
    AppComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.employeeForm.patchValue({
                    image: reader.result
                });
                _this.cd.markForCheck();
            };
        }
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [NgZone, ChangeDetectorRef, AppService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map