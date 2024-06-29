
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

## Lec 9 - Display Error Messages (3:54)

# from 'form' object (that is returned from useForm hook) we can destructure 'formState' object then further we can destructure 'errors' object from 'formState' object. This 'errors' object contains the individual field errors.

# The 'errors' object contains errors for every field that has failed validation. We can access the message property and display it in the UI.

## Lec 10 - Custom Validation (5:20)

# To add a custom validation we need to add a key-value pair to the 'options' object passed into the 'register' function. The key is 'validate' that a method used for custom validation.

# 'validate' method works independently of the regex pattern validation.

# we can use 'validate' as an object with multiple key-value pairs.

# so, RHF makes it really simple to not only add HTML validation but also custom validations.

# For Custom validation - Specify a 'validate' function for single custom rule or specify a validate object for multiple custom rules.

# Notes - 
1). To register a field with RHF, we use 'register' method this automatically start tracking form state.

2). To submit the form, 'handleSubmit' method assigned to the on submit event and pass in our submit function.

3). For validation we can pass options to the register function. These can be HTML validations or custom validations using 'validate' function. In both cases form state is updated and we access the error object with correct key to display the error message to the user.

## Lec 11 - Enhancing React Hook Form (1:07)

# Three pillars of dealing with forms are :-
a). Form state management
b). Form Submission
c). Form Validation

## Lec 12 - Default Values (4:27)

# set default values to the form fields.

# 'useForm' hook accepts an object as argument, inside this object we can specify a key called 'defaultValues' like below example:

==> const form = useForm<Formvalue>({
    defaultValues: {
      username: "tsUser",
      email: "",
      channel: "",
    }
});

# Setting default values can be useful in certain types of form controls. For example, we can set default country in a select drop down, current date in a date field or check the subscribe to newsletter checkbox for the user to opt out. so by using RHF setting default values are very easy.

Q. Can we load previously saved data as default values in RHF?
# Yes we can

# To load previously saved data we change default values to an async function

## Lec 13 -  Nested Objects (4:14)

# Somtimes for more complex forms we may want to group certain data together into a separate object, the reason could be that the API accepts the data in such a format but database stores the data in a particular format, whatever might be the reason we would like to group form data together, for such cases we can use nested objects in RHF.

# suppose we want to collect user's social media profiles such as Twitter & Facebook's data, as two fields are related we want them to be grouped and stored as a nested object. 
Steps to be followed :-
1). add 'social' to form values type,
2). on default values object add a new key-value pair,
3). add required JSX.

## Lec 14 - Arrays (3:40)

# Managing form control values as an array

# suppose we wanted to collect user's phone number, to more preciously we wanted collect their primary and secondary phone number but when storing that data we don't need any clear distinction we just want them stored as an phone numbers under the same label.

# Steps to follow :-
1). add the phone number type,
2). we need to add the property to our default values object,
3). add the required JSX,

# Note - we should use 'dot' notation with array's values phoneNumber , it is used for consistency with TS, we can't use bracket notation for this index.

# 

