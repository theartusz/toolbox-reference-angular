export {
    NgModule,
    Component, OnInit, Input,
    ViewEncapsulation, Output, EventEmitter, Injectable,
    DebugElement, Injector, Inject, ViewChild,
    CUSTOM_ELEMENTS_SCHEMA, OnDestroy,
    Pipe, PipeTransform,
    Directive, ElementRef, NO_ERRORS_SCHEMA,

} from '@angular/core';

export {
    HttpClientModule, HttpClient, HTTP_INTERCEPTORS, HttpEvent,
    HttpInterceptor, HttpHandler, HttpRequest,
} from '@angular/common/http';
export { CommonModule, APP_BASE_HREF } from '@angular/common';
export { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export {
    ActivatedRoute, Router, Routes, RouterModule,
    CanLoad, Route,
} from '@angular/router';

export {
    FormsModule, ReactiveFormsModule, FormBuilder, FormGroup,
    Validators, FormGroupDirective, FormControl,
    AbstractControl, NgForm,
} from '@angular/forms';

export { TestBed, ComponentFixture, getTestBed, async } from '@angular/core/testing';
export { RouterTestingModule } from '@angular/router/testing';
export { By } from '@angular/platform-browser';

