/******w*************

 Project 3 Javascript
 Name:			Arjess Reyes
 Date:			April 22, 2022
 Description:	Javascript file of the contact us html page.

 ********************/
// Load Event Listener
document.addEventListener("DOMContentLoaded", load);

// Handles the Load Event of the Document
function load()
{
    // Event Listeners
    document.getElementById("contactform").addEventListener("submit", validate);
    document.getElementById("clear").addEventListener("reset", resetForm);

    hideErrors();
}

// Hides all the error elements
function hideErrors()
{
    let error = document.getElementsByClassName("error");

    for (let i = 0; i < error.length; i++)
    {
        error[i].style.display = "none";
    }
}

// Handles the reset event for the form.
function resetForm(e)
{
    if (confirm('Clear Details?'))
    {
        hideErrors();

        return true;
    }

    e.preventDefault();

    return false;
}

// Handles the submit event of the form.
function validate(e)
{
    hideErrors();

    if (formHasErrors())
    {
        e.preventDefault();

        return false;
    }

    return true;
}

// Does all the error checking of the form.
function formHasErrors()
{
    let errorFlag = false;

    let elements = ["fullname", "phonenumber", "email", "textarea"];

    for (let i = 0; i < elements.length; i++)
    {
        let inputs = document.getElementById(elements[i]);
        let trimmedInputs = trim(inputs.value);

        if (trimmedInputs == null || trimmedInputs == "")
        {
            document.getElementById(elements[i] + "_error").style.display = "block";

            if (!errorFlag)
            {
                inputs.focus();
                inputs.select();
            }
            errorFlag = true;
        }
    }

    //Inputs
    let fullNameInput = document.getElementById("fullname").value;
    let phoneNumberInput = document.getElementById("phonenumber").value;
    let emailInput = document.getElementById("email").value;

    // Regular Expressions
    // let fullNameRegex = new RegExp(/^[a-z ,.'-]+$/);
    let fullNameRegex = new RegExp(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i);
    let phoneNumberRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
    let emailCodeRegex = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/);

    if (!fullNameRegex.test(fullNameInput) && fullNameInput != "")
    {
        document.getElementById("fullnameformat_error").style.display = "block";

        if (!errorFlag)
        {
            document.getElementById("fullname").focus();
            document.getElementById("fullname").select();
        }

        errorFlag = true;
    }

    if (!phoneNumberRegex.test(phoneNumberInput) && phoneNumberInput != "")
    {
        document.getElementById("phonenumberformat_error").style.display = "block";

        if (!errorFlag)
        {
            document.getElementById("phonenumber").focus();
            document.getElementById("phonenumber").select();
        }

        errorFlag = true;
    }

    if (!emailCodeRegex.test(emailInput) && emailInput != "")
    {
        document.getElementById("emailformat_error").style.display = "block";

        if (!errorFlag)
        {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }

        errorFlag = true;
    }


    return errorFlag;
}