Data Entry Grid Angular Directive
=================================

This is an Angular directive that creates a table entry rows for a form.  
There are three attributes that you can use to initialize this directive:

- initRows: the initial number of rows to display
- formModel: the form model where the information will be attached from the parent
- entryTypes: an object where the keys are the names of each field (and are also used as column headers).
Each key references an object that has the following keys:
	- type: the input type (text, number, email, etc)
	- required: a `true` or `false` for whether this is required for each row to be valid. 