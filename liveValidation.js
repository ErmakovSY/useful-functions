/* 
  This code allows to validate user's input data after keydown.
  Require: jQuery.
*/

validateInput = (input, type) => {
  switch (type) {
    case "string": return (input.match(new RegExp('[^a-zA-Zа-яА-ЯЁё- _]'))) ? input.slice(0, -1) : input; break;
    case "number": return (input.match(new RegExp('[^0-9]'))) ? input.slice(0, -1) : input; break;
    /* ...other cases of type of input data...and rules of their validation... */
    default: return input;
  }
}

/* listener of input fields are changing */
let type;
$(':input').on('propertychange input', (e) => {
    switch ($(this).attr('id')) {
        case "inputName": type = "string"; break;
        case "inputOld": type = "number"; break;
        /* ...other cases of <input> id...and type of validation rules... */
    }
    $(this).val(validateInput(e.target.value, type));
    $(this).focus();
});