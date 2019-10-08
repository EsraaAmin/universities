<template id="registerTemplate">
    <div class="container registration" id="signup-form">
        
        <form @submit.prevent action="GET" method="">
                <h3 class="text-center">Register Now</h3>
            <div class="row">
                <div v-for="prop in inputProps" :class="[`input-field ${prop.inputContainerClass}`]">
                  
                    <input v-model="prop.inputValue" :name="prop.inputName" class="validate form-control" :id="prop.inputId"
                        :type="prop.inputType" :pattern="prop.inputPattern" :title="prop.inputTitle"
                        :required="prop.required" :autofocus="prop.autofocus" @input="validateInput(prop)" :placeholder="prop.label"/>
                    <blockquote v-show="prop.inputValue != '' && validateInput(prop) != ''" class="cap pink lighten-5"
                        v-text="validateInput(prop)"></blockquote>
                </div>
            </div>
            <div class="input-field">
                <div>
                    <label>
                        <input type="checkbox" name="acceptTerms" class="filled-in" v-model="acceptTerms" />
                        <span>i have read &amp; accept the terms</span>
                    </label>
                </div>
            </div>
            <div class="input-field">
                <div class="row">
                    <div class="col-12 text-center">
                        <button type="submit" class="btn green ligthen-4 waves-effect m-auto"
                            :class="{disabled: !validationSuccess}" @click="signUp()">
                            sign up
                            <i class="fa fa-fw fa-paper-plane"></i>
                        </button>
                    </div>
                    <!-- <div class="col s6">
                        <button type="reset" class="btn right red ligthen-4 waves-effect" @click="resetData()">
                            reset data
                            <i class="fa Fa-fw fa-redo-alt"></i>
                        </button>
                    </div> -->
                </div>
            </div>
        </form>
    </div>

</template>

<script>
    let defaultIconType = "fa",
        defaultInputContainerClass = "col-6 form-group";

    export default {
        name: 'register',
        data() {
            return {

                validationSuccess: false,
                acceptTerms: false,
                inputProps: [
                    {
                        inputContainerClass: defaultInputContainerClass,
                        iconName: "user",
                        iconType: defaultIconType,
                        inputType: "text",
                        inputId: "firstName",
                        inputName: "firstName",
                        inputValue: '',
                        inputPattern: "[A-Za-z].{4,}",
                        inputTitle: "the first name must be equal or greater than 4 char, and you must enter a letters",
                        required: true,
                        autofocus: true,
                        label: "First Name"
                    },
                    {
                        inputContainerClass: defaultInputContainerClass,
                        iconName: "user",
                        iconType: defaultIconType,
                        inputType: "text",
                        inputId: "lastName",
                        inputName: "lastName",
                        inputValue: '',
                        inputPattern: "[A-Za-z].{4,}",
                        inputTitle: "the last name must be equal or greater than 4 char, and you must enter a letters",
                        required: true,
                        label: "Last Name"
                    },
                    {
                        inputContainerClass: "col-12 mb-3",
                        iconName: "envelope",
                        iconType: defaultIconType,
                        inputType: "email",
                        inputId: "emailField",
                        inputName: "emailField",
                        inputValue: '',
                        inputPattern: "[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}",
                        inputTitle: "you must enter a valid email",
                        required: true,
                        label: "Your Email"
                    },
                    {
                        inputContainerClass: defaultInputContainerClass,
                        iconName: "lock",
                        iconType: defaultIconType,
                        inputType: "password",
                        inputId: "passwordField1",
                        inputName: "pass1",
                        inputValue: '',
                        inputPattern: "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})",
                        inputTitle: "you need to enter a staight passowrd contain capital & lower letters and numbers and special characters, and password length must be greater than 8 char",
                        required: true,
                        label: "Enter Password"
                    },
                    {
                        inputContainerClass: defaultInputContainerClass,
                        iconName: "lock",
                        iconType: defaultIconType,
                        inputType: "password",
                        inputId: "passwordField2",
                        inputName: "pass2",
                        inputValue: '',
                        required: true,
                        label: "Repeat Password"
                    },
                ],
            };
        },

        created() {
            this.inputProps.forEach(el => {
                el.isValid = false;
            });
        },
        watch: {
            acceptTerms: function () {
                if (this.acceptTerms && this.inputsNotEmpty() && this.inputsIsValid()) {
                    this.validationSuccess = true;
                } else {
                    this.validationSuccess = false;
                }
            },
            inputProps: {
                handler: function () {
                    if (this.acceptTerms && this.inputsNotEmpty() && this.inputsIsValid()) {
                        this.validationSuccess = true;
                    } else {
                        this.validationSuccess = false;
                    }
                },
                deep: true,
            },
        },
        methods: {
            inputsNotEmpty: function () {
                return this.inputProps.every((child, i, array) => {
                    return child.inputValue != '';
                });
            },
            inputsIsValid: function () {
                return this.inputProps.every((child, i, array) => {
                    return child.isValid;
                });
            },
            resetData: function () {
                return this.acceptTerms = false,
                    this.validationSuccess = false,
                    this.inputProps.forEach(el => el.isValid = false),
                    this.inputProps.forEach(el => el.inputValue = '');
            },
            signUp: function () {
                if (this.inputsIsValid() && this.inputsNotEmpty() && this.acceptTerms) {
                    alert('signup success...');
                } else {
                    alert('signup fiald');
                }
            },
            validateInput: function (input) {
                let availableRolesName = ["firstName", "lastName", "emailField", "pass1", "pass2"],
                    name = input.inputName;

                if (availableRolesName.includes(name)) {
                    let val = input.inputValue,
                        pattern = input.inputPattern,
                        title = input.inputTitle,
                        eIndex = this.getIndexByName("emailField"),
                        p1Index = this.getIndexByName("pass1"),
                        p2Index = this.getIndexByName("pass2"),
                        flag = (name == availableRolesName[eIndex]) ? "igm" : "g";

                    if (name == "pass2") {
                        if (this.inputProps[p1Index].inputValue != this.inputProps[p2Index].inputValue) {
                            this.inputProps[this.getIndexByName(name)].isValid = false;
                            return "password not mutch";
                        } else {
                            this.inputProps[this.getIndexByName(name)].isValid = true;
                            return '';
                        }
                    } else {
                        if (!new RegExp(pattern, flag).test(val)) {
                            this.inputProps[this.getIndexByName(name)].isValid = false;
                            return title;
                        } else {
                            this.inputProps[this.getIndexByName(name)].isValid = true;
                            return '';
                        }
                    }
                }
            },
            getIndexByName: function (name) {
                let theIndex;
                this.inputProps.forEach(el => {
                    if (el.inputName.match(name)) {
                        theIndex = this.inputProps.indexOf(el);
                    }
                });
                return theIndex;
            }
        },


    };
</script>


<style scoped lang="scss">
@import "@/assets/css/components/registration.scss";
</style>