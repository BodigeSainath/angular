import { Component, Directive } from '@angular/core';
import { Databinding,  } from '../databinding/databinding';
import { Directivescompo } from '../directivescompo/directivescompo';
import { Products } from '../products/products';
import { Users } from '../users/users';
import { MyModal } from '../my-modal/my-modal';
// import { ProductList } from "../productlist/productlist";
import { Employee } from "../employee/employee";
import {  EmployeeCRUD } from "../employeescrud/employeecrud";
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { Demo } from '../demo/demo';
import { Test } from "../test/test";
import { Testdemo } from '../testdemo/testdemo';
import { ParentDemo } from '../parent-demo/parent-demo';
import employeecruddata from '../employeecrud/employeecruddata';
import { Employeecrud } from '../employeecrud/employeecrud';
import { CompocomassignParent } from "../compocomassign-parent/compocomassign-parent";
import { Appdemo2 } from "../appdemo2/appdemo2";
import { Appdemo1 } from '../appdemo1/appdemo1';
import { Empservice } from "../empservice/empservice";
import { ProductForm } from '../../java/products/product-form/product-form';
// // import { ProductList } from '../../java/products/product-list/product-list';
// import { ProductList } from '../../testApp/productlists/productlists';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { ProductListHttp } from '../product-list-http/product-list-http';
import { ProductsComponent } from '../../testApp/productlists/productlists';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeClassModel } from '../employee-class-model/employee-class-model';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { EmpJavaCompo } from '../emp-java-compo/emp-java-compo';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { TodoAdd } from '../todo-add/todo-add';
import { TodoList } from '../todo-list/todo-list';
import { Userlist } from '../userlist/userlist';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { SignalDemo3Assignment } from '../signal-demo3-assignment/signal-demo3-assignment';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateFormDemo1 } from '../template-form-demo1/template-form-demo1';
import { Modelformdemo } from '../modelformdemo/modelformdemo';
import { Dynamicform } from '../dynamicform/dynamicform';
import { SignalForm } from '../signal-form/signal-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [Databinding,
    Directivescompo,
    Products,
    Users,
    MyModal,
    // ProductList,
    Employee,
    EmployeeCRUD,
    PipesDemo,
    Demo,
    Test,
    Testdemo,
    ParentDemo,
    Employeecrud,
    CompocomassignParent,
    Appdemo1, Appdemo2,
     Empservice,
    ProductForm,
     //ProductList,
    ProductsComponent,
    HttpDemo1,
    ProductListHttp,
    // CommentList,
    // EmployeeClassModel,
    //  ObservableDemo1,
    //  ObservableDemo2
    //  EmpJavaCompo,
     SubjectDemo1,
    //  TodoAdd,
    //  TodoList
    // ,Userlist,
    SignalDemo1,
    SignalDemo2,
    // SignalDemo3Assignment
    // FormDemo1
    //TemplateFormDemo1
    // Modelformdemo,
    // Dynamicform
    // SignalForm,
    RouterOutlet
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
