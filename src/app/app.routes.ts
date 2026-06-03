import { Routes } from '@angular/router';
import { ProductList } from './components/productlist/productlist';
import { EmpJavaCompo } from './components/emp-java-compo/emp-java-compo';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { Userlist } from './components/userlist/userlist';
// import { Products } from './components/products/products';
import { Users } from './components/users/users';
import { Userdetails } from './components/userdetails/userdetails';
import { Productdetailscompo } from './components/productdetailscompo/productdetailscompo';
import { Permanentjob } from './components/permanentjob/permanentjob';
import { Contractjob } from './components/contractjob/contractjob';
import { Uploadvideos } from './components/uploadvideos/uploadvideos';
import { uploadGuard } from './guards/upload-guard';
import { canExitGuard } from './guards/can-exit-guard';
export const routes: Routes = [
    
    //    {path:'',
    //     component: EmpJavaCompo},
        {path: 'home',component:Home},
        {path: 'aboutus',component:Aboutus},
         {path: 'careers',component:Careers,
         children: [
            {path: 'permanent',component:Permanentjob},
            {path: 'contract',component:Contractjob}
         ]},
          {path: 'contactus',component:Contactus,
            canDeactivate:[canExitGuard],
          },
           {path: 'users',component:Users},
           {path:'userdetails/:id',component:Userdetails},
            {path: 'products',
            loadComponent: ()=> import('./components/products/products').then((x)=>x.Products),
            },
            {path:'productdetails',component:Productdetailscompo},
            {path:'upload',component:Uploadvideos,
                canActivate: [uploadGuard]
            },
           {path: '',component:Home},
            {path: '**',component:Notfound},
        
    
];
