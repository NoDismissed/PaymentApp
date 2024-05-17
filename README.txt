*** OOD ***
Process of planning a system using object oriented methodology, takes conceptual systems model, use cases, UI, classes, objects

*** OOP ***
Programming model that organizes software design around data or objects rather than functions and logic

*** CLASSES ***
User defined data types that act as blueprint for individual objects, attributes and methods (model about capability of what an object can do)

*** OBJECTS ***
Instances of a class with defined data (real or abstract entity)

*** METHODS ***
Functions defined inside a class that describe behaviors of an object, used for reusability or keep functionality encapsulated inside one object at a time

*** ATTRIBUTES ***
Defined in the class and represent state of an object, objects will have data stored in attributes field and belongs to the class itself

*** ENCAPSULATION ***
Each object maintains a private state inside a class, other object can not access this state directly, instead, they can only invoke a list of public methods, the object manages its own state via these private methods or functions and no other class can alter it unless explicity allowed

*** ABSTRACTION ***
Extension of encapsulation, process of selecting data from a larger pool to show only relevant details to the object

*** INHERITANCE ***
Ability of one object to acquire some or all properties of another object (class and sub class)

*** POLYMORPHISM ***
Gives us a way to use a class exactly like its parent so there is no confusion with mixing types, a sub class can define its own behavior and still share same functionalities of its parent class but a parent class can not have behavior of its subclass, useful when passing a class into a method

*** ABSTRACT CLASS ***
Classes that can not be instantiated, useful for avoid base class instantiation but sub classes

*** INTERFACES ***
Is abstract and can not be instantiated, it contains just methods and properties declarations (only names), can be invoked by classes

*** SOLID ***
S - Single Responsibility Principle (SRP)
A class should only have one reason to change, methods related to class itself
O - Open/Closed Principle (OCP)
Classes should be open for extension but closed for modification, stopping from modifying existing code (create other class and extends main class)
L - Liskov Substitution Principle (LSP)
If class A is a subtype of class B, we should be able to replace B with A without disrupting the behaviour of our program
I - Interface Segregation Principle (ISP)
Larger interfaces should be split into smaller ones, we can ensure that implementing classes only need to be concerned about methods that are of interest to them
D - Dependency Inversion Principle (DIP)
Decoupling of software modules, instead of high level modules depending on low level modules, both will depend on abstractions

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