NuGet Packages
- EntityFrameworkCore.SqlServer
- EntityFrameworkCore.Tools
- CodeGeneration.Design
- CodeGeneration.Utils

NuGet Package Manager
- Add-Migration "InitialCreate"
- Update-Database

AngularCLI
- node -v
- npm uninstall -g @angular/cli
- npm config set registry http://registry.npmjs.org/
- npm install -g @angular/cli@latest
- ng --version

Web App Angular
- ng new PaymentApp
- Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
- ng serve
- ng generate component payment-details -s --skip-tests
- ng generate component payment-details/payment-detail-form -s --skip-tests
- ng generate service shared/payment-detail --skip-tests
- ng generate class shared/payment-detail --type=model --skip-tests
- npm i ngx-toastr