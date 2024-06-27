
### React Hook Form Learning

## Lec 1 - Introduction (3:38)

# Forms - Forms are crucial aspects of any business application that used for taking user inputs.

# Users - Registering, Logging in

# Developers - handling form data, Enforcing validation

# React Hook form - A small library that helps deal with forms in React.

Q. Why to use React Hook Form ?

# Manage form data
# Submit form data
# Enforce validations
# Provide visual feedback
# React Hook Form provides a simple, scalable and performant way to manage even the most complex of forms.

## Lec 2 - Form Setup (6:38)

# Youtube Form Setup -  Form contains Username, Email, Channel Name

## Lec 3 - useForm Hook (2:09)

# useForm hook - This is the primary tool that library provides for managing forms with ease.

# useForm hook accepts an optional object as an argument and it return an object which we call 'form'. This object help us in 1). managing from data, 2). submitting form data, 3). enforcing validations and provide visual feedback.

## Lec 4 - Managing Form State (4:16)

Q. What is Form state?
# Every form has a few moving parts that keep changing from the time a user loads the form to the time they submit it. For example,
a). current value of every field in the form
b). whether a field has been interacted with
c). whether the form is invalid

# In code we can represent the form state as an object with key value pairs

# To help manage form's state React Hook Form(RHF) provides a method called 'register' that can be accessed on the form object 

# 'register' method allows us to register a form control with RHF. We can called this method passing in string argument like register("username"). 'register' method in turn returns four methods that we need to hook into the form control. They are - name, ref, onChange, onBlur

## Lec 5 - DevTools Visualization (3:13)

# In order to visualize, form's state we will use @hookform/devtools package from npm.

# Once DevTool is installed, then we need to associate this component with the form we are tracking. For this we can use 'control' object that 'useForm' hook return. We will use DevTool as below syntax

===> <DevTool control={control} />

# 'Touched' indicates whether the field has been interacted with,

# 'Dirty' indicates whether the field value has changed.

## Lec 6 - Form State and Rerenders (2:10)

# With the help of DevTool in RHF, we are able to track the field values. RHF does this without re-rendering the component. so this is great as performance point of view.

# With traditional React's from when we work with controlled components, every keystroke will cause the component and its children to re-render. RHF doesn't do this with form as it follows the uncontrolled inputs behaviour. 

## Lec 7 - Form Submission (3:00)

# Form submission with the help of RHF :-
It involves three steps :-
1). define the function that should be called when the submit button is pressed,

2). from 'form' object (that is retured from useForm hook) destructure a function called 'handleSubmit', listen to the form on submit event and assign handleSubmit as the handler and pass the onSubmit() function (that user user has defined) to handleSubmit function as argument as below 

==> <form onSubmit={handleSubmit(onSubmit)}>

3). specify the data types as per Typescript specification

## Lec 8 - Form validation (4:14)

# RHF supports various HTML validation rules including :- 
a). required 
b). min length and max length
c). min & max
d). pattern

# noValidate - noValidate attribute on form will prevent browser validation and allowing RHF to handle the validation of form fields.

# validation of form by default occurs only when the form is submitted.

# pattern validation --> for email and password fields

# We can leave the required validation as it is but if want consistency across the rules we can change the required validation to an object as well.

## 