
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

## Lec 15 - Dynamic Fields (9:34) 

# If we want to collect multiple phone numbers or addresses then we would need dynamic fields. Dynamic fields give user the option to add or remove fields based on their needs.

# To implement dynamic fields to collect user's phone numbers in RHF, we need to import 'useFieldArray' hook.

# we need to follow below steps to implement dynamic fields using 'useFieldArray' hook :-
1). import 'useFieldArray' hook
2). add a new property to a form values type , i.e 'phNumbers' as an array of object. In type we will use array of objects instead of an array of strings because 'useFieldArray' hook only works with object values.
3). we need to add same 'phNumbers' property we need to our default values object
4). we need to specify the phone number field as an array of fields (for this we need to use useFieldArray hook),
5). we need to add required JSX.

## Lec 16 - Numeric and Date Values (4:17)

# how to deal with numeric and date values in RHF :- To ensure that we are dealing with numeric values, RHF provides the value as number option on the register function

## Lec 17 - Watch Field Values (4:11)

# how to observe field values for use in the component :- RHF provides a watch method with which we can observe one or more field values.

# from 'form' object we will destructure 'watch' method. we can pass field name (like username) as argument and store the result into a constant. Then we can render that value into UI.

# watch method also accepts an array as argument.(below example)

==> const watchedVal = watch(["username", "email"]);

# If we don't specify any argument to watch method then entire form is watched for changes in value (below example)

==> const watchedForm = watch();

# watch() method will be useful if we wanted to display a preview of the form field values

# If we wnt to perform side effect after watching a value then in such case we can use the callback version of the watch method.

## Lec 18 - Get Field Values (3:05)

# Another method to read field values is getValues() method.

# To use 'getValues' method, we will destructure it from the 'from' object

# Unlike 'watch' method, 'getValues' method will not trigger re-renders or subscribe to input changes making it better option for getting form values when a user clicks on a button or perfrom a specific action.

# In addition to retrieving all field values, we can retrieve specific field values by passing in the field name or an array of field names to the 'getValues' method.

# 'getValues' method is very useful method for retrieving form values when a specific action is performed such as 'clicking a button'.

## Lec 19 - Set Field Value (3:07)

# to set the field value we need to destructure 'setValue' from the 'from' object.

# this 'setValue' method allow us to set the value of a registered field.

# Note - calling 'setValue' method doesn't affect the state of the field such as dirty, touched or validation. if we want to change the field state as if a user is interacting then we need to pass in a third argument to the 'setValue' mathod.

# 'setValue' method allow us to programmatically set the value of registered field in RHF.

## Lec 20 - Touched and Dirty States (3:57)

# When we observe a form field in dev tool, we will see 'touched' and 'dirty' states. 'touched' is a boolean value that indicates whether the user has interacted with the field or not. 'dirty' on the other hand indicates whether the user has modified the input or not.

# Above two states are also available at form label at form level and we can access them by destructuring from 'formState' object.

# RHF provides 'isDirty' which is derived form state that is easier to work with and we can destructure it from 'formState' object.

# 'isDirty' state represent the state of the form itself and not an individual field. This property comes in handy when we have to enable the form submit button only after the user has filled in data.

## Lec 21 - Disabling Fields (3:11)

# Tradionally to disable a form field we would set the disabled attribute on an input element.

# with RHF disabling a form field is done using the disabled option on 'register' function.

# with RHF when a form's field is disabled the value of the field becomes undefined and the validation is also disabled.

## Lec 22 - Handle Submission Error (2:27)

# In RHF, we use the 'handleSubmit' method handle form submission.

Q. Why do we need to use 'handleSubmit' method instead of directly passing onSubmit?
# It is because 'handleSubmit' method accepts a second argument which is the 'onError' handler.

# 'onError' method will be called when form submission fails due to errors.

# Error handler is the perfect place to provide custom error messages based on the error objects or even send reports to your login server. It also provide separation of logic for a successful submission and a failed validation.

## Lec 23 - Disable Form Submission (3:16)

# We will disable the form when the user has never interacted with the form or if the form contains errors.

# the assumption is that the form can never be valid if the user has never entered data to begin with.

# To track the validity of our RHF we get access to an isValid form state, we can destructure it from 'formState' object

## Lec 24 - Form Submission State (4:20)

# Form Submission state - It is useful for tracking the progress and outcome of form submission. There are mainly four states related to this :-
1). isSubmitting
2). isSubmitted
3). isSubmitSuccessful
4). submitCount

1). isSubmitting - this property allows us to track whether a form is in the process of being submitted, it is boolean value with a false default value and is set to true when the form is being submitted

2). isSubmitted - this property allow us to track whether a form has been submitted. It is boolean with false default value and is set to true after form is submitted and remains true until the form is 'reset'.

3). isSubmitSuccessful - this property indicates whether the form was successfully submitted without any runtime errors. It is set to true if the form submission is successful and false otherwise.

4). submitCount - this property keeps track of the number of times the form has been submitted. It is incremented by one each time the form is successfully submitted. Initially the submit count is 0.

# Above properties may not have major role in all scenarios one particular property that can be very useful is 'isSubmitting'. We can use this property to disable the submit button while the form is being submitted preventing multiple submission of the same form.

## Lec 25 - Reset Form (3:11)

# To reset form values we can make use of the 'reset' method that is returned by the 'useForm' hook which we can destructure from the 'form' object.

# 'reset' method allow us to reset the form values to the default values.

# Note - When we reset form values using the 'reset' method, the values are not cleared but rather set back to the default values that we initially defined in the form. This can be useful when we wan to clear the user input values in the form and start fresh but still retain any defult values or initial values that we may have set.

# Another scenario where we migh want to reset form field values is after a successful form submission.

# Note - it is recommended to not call the reset method inside the 'onSubmit' function instead we can make use of the 'isSubmitSuccessful' flag to check if the form submission was successful and then we can call 'reset' method inside a useEffect hook.

# 'reset' method accepts some optional parameters such as values and options which allows us to customize the behaviour of the 'reset' method.

## Lec 26 - Async Validation (3:12)

# To use json placeholder API for our form validation we'll add new validation function to the validate object.

# async validation is an important feature to ensure data integirty and improve user experience in form submisison.

## Lec 27 - Validation Modes (3:58)

# By default when we submit form, RHF checks for validation errors and display them accordingly.

# RHF also allow us to change default validation mode by passing an option called 'mode' to the 'useForm' hook.

# the 'mode' option determines when the validation should occur. By default the value of mode is set to 'onSubmit'. We can change the validation mode, let say 'onBlur'. When we set the validation mode to 'onBlur', RHF trigger validation when we focus and then blur out of a form field.

# Another validation mode we can use is 'unTouched'. When we set the mode to 'unTouched' RHF will trigger validation on the first blur event and after that on every change event.

# 'onChange' validation mode - this mode triggers validation on every change event which means that as we start typing into a form field, RHF will continuously validate the input.

# Note - Be careful while using 'onChange' mode as it can lead to multiple re-renders and impact application performance.

# 'all' validation mode - in this case RHF trigger validation on both blur and change events, this means we will see the error messages when we focus and blur out of a form field as well as when we make changes to the input. Thus this mode provides a combination of both 'onBlur' and 'onChange' validation modes.

# We can validation modes based on the requirement of the application.

## Lec 28 - Manually Trigger Validations (2:41)

# RHF provides us with a method called 'trigger' that we cna destructure it from 'form' object which allow us to manually trigegr validations for our form fields.

# RHF also allow us to validate single field as well that we can do by passing field name in 'trigger' method.

## Lec 29 - Yup Integration (4:35)

# Yup is a powerful schema validation library with which we can write schemas and validate our form values.

# hook form resolver is a package which bridges RHF with yup.

# Steps to use Yup
1). install yup package from npm

2). import the yup dependencies,

3). define yup validation schema,

4). connect validation schema with RHF.

## Lec 30 - Zod Integration (3:37)

# Zod is a typescript first schema declaration and validation library