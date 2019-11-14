<template id="registerTemplate">
    <div>
        <div class="form_wrapper">
            <div class="form_container">
                <div class="title_container">
                    <h2>
                        <p>{{$t('auth.registration')}}</p>
                    </h2>
                </div>
                <div class="row clearfix">
                    <div class="">
                        <form>
                            <div class="row clearfix">
                                <div class="col_half">
                                    <div class="input_field">
                                        <span>
                                            <font-awesome-icon icon="user"></font-awesome-icon>
                                        </span>
                                        <input type="text" name="name" :placeholder="$t('auth.firstName')" required />
                                    </div>
                                </div>
                                <div class="col_half">
                                    <div class="input_field"> <span>
                                            <font-awesome-icon icon="user"></font-awesome-icon></i>
                                        </span>
                                        <input type="text" name="name" :placeholder="$t('auth.lastName')" required />
                                    </div>
                                </div>
                            </div>
                            <div class="input_field">
                                <span>
                                    <font-awesome-icon icon="envelope"></font-awesome-icon>
                                </span>
                                <input type="email" name="email" :placeholder="$t('auth.emailAddress')" required />
                            </div>
                            <div class="input_field">
                                <span>
                                    <font-awesome-icon icon="lock"></font-awesome-icon>
                                </span>
                                <input type="password" name="password" :placeholder="$t('auth.password')" required />
                            </div>
                            <div class="input_field">
                                <span>
                                    <font-awesome-icon icon="lock"></font-awesome-icon>
                                </span>
                                <input type="password" name="password" :placeholder="$t('auth.confirmPass')" required />
                            </div>

                            <div class="input_field radio_option">
                                <input type="radio" name="radiogroup1" id="rd1">
                                <label for="rd1">{{$t('auth.male')}}</label>
                                <input type="radio" name="radiogroup1" id="rd2">
                                <label for="rd2">{{$t('auth.female')}}</label>
                            </div>
                            <div class="input_field select_option">
                                <select>
                                    <option>{{$t('auth.selectCountry')}}</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <div class="select_arrow"></div>
                            </div>
                            <div class="input_field checkbox_option">
                                <input type="checkbox" id="cb1">
                                <label for="cb1">{{$t('auth.agreeTerms')}}</label>
                            </div>
                            <input class="button" type="submit" :value="$t('auth.register')" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">
    @import "@/assets/css/components/registration.scss";
</style>