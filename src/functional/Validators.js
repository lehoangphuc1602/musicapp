// const regex_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,24}/gm  //regex k cần có dấu kí tự đặt biệt

function Validators (formId,options,value){
    value = value.trim()
    const error = {}
    // const loginEmail = /.+@.+\..+/gm
    const loginEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/gm
    const regex_email = /^[a-z]{1,15}[.][a-z]{1,30}([0-9]{0,3})@(vti.com.vn)$/gm;
    const regex_name_vietnamese = /^[A-Z ]{1,}[A-Z]$/m;
    const regex_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,24}/g; //regex cần có dấu kí tự đặt biệt
    const regex_japanese = /^[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠ー]*$/g
    if (formId){
        if (options.name === "fullName"){
            if (value === ""){
                error.id = "fullName"
                error.name =  "er_input_empty"
            }else if (value.length < 6 || value.length > 64 ){
                error.id = "fullName"
                error.name = "er_username_len"
            }
            else if (!regex_name_vietnamese.test(value)){
                error.id = "fullName"
                error.name = "er_username_undi"
            }else {
                error.name = ""
            }
        };

        if (options.name === "email" && !(`${options.getAttribute("exclude")}`.includes(formId.id))){
            if (value === ""){
                error.id = "email"
                error.name =  "er_input_empty"
            }
            else if (value !== "" && regex_email.test(value)){
                error.name = ""
            }
            else { 
                error.id = "email"
                error.name =  "er_email_undi"
            }
        };
        
        if (options.name === "password" ){
            if (value === ""){
                error.id = "password"
                error.name =  "er_input_empty"
            }
            else if (value.length < 8 || value.length > 32){
                error.id = "password"
                error.name =  "er_input_len_password"
            }
            else if (!(regex_password.test(value))){
                error.id = "password"
                error.name = "er_input_rule_password"
            }
            else {
                error.name = ""
            }
        };

        if (options.name === "confirm_password" ){
            if (value === ""){
                error.name =  "er_input_empty"
            }
            else if (value !== formId.querySelector("#password").value){
                error.id = "confirm_password"
                error.name = "er_input_confirm_password"
            }
            else {
                error.name = ""
            }
        };

        if (options.name === "departmentId" ){
            if (value === ""){
                error.id = "departmentId"
                error.name =  "er_select_empty"
            }
            else {
                error.name = ""
            }
        };

        if (options.name === "current_password"){
            if (value === ""){
                error.id = "current_password"
                error.name = "er_input_empty"
            }
            else{
                error.id = ""
                error.name =""
            }
        };

        if ( options.name === "new_password"){
            if (value === ""){
                error.id = "new_password"
                error.name = "er_input_empty"
            }
            else if (value.length < 8 || value.length > 32){
                error.id = "new_password"
                error.name =  "er_input_len_password"
            }
            else if (!(regex_password.test(value))){
                error.id = "new_password"
                error.name = "er_input_rule_password"
            }
            else {
                error.name = ""
            }
        };

        if ( options.name === "confirm_new_password"){
            if (value === ""){
                error.id = "confirm_new_password"
                error.name =  "er_input_empty"
            }
            else if (value !== formId.parentElement.parentElement.parentElement.querySelector("#new_password").value){
                error.id = "er_input_confirm_new_password"
                error.name = "er_input_confirm_new_password"
            }
            else {
                error.name = ""
            }
        };

        if (options.name === "start"){
            if (value === ""){
                error.id = "start"
                error.name = "er_input_empty"
            }
            else {
                error.name = ""
            }
        };

        if (options.name === "goal"){
            if (value === ""){
                error.id = "goal"
                error.name = "er_input_empty"
            }
            else {
                error.name = ""
            }
        };
        
        if ( options.getAttribute("exclude") && `${options.getAttribute("exclude")}`.includes(formId.id)){
            if (value === ""){
                error.name = "er_input_empty";
            }
            else {
                error.name = ""
            }
            if (options.name === "email"){
                if (value === ""){
                    error.id = "email"
                    error.name = "er_input_empty"
                }
                else if (!loginEmail.test(value)){
                    error.id = "email"
                    error.name = "email_type"
                }
                else {
                    error.id = "email"
                    error.name = ""
                }
            }
        }
    }

    return error
};  

export default Validators;