<template id="loginTemplate">
    <div class="login"> 
        <div class="form_wrapper">
            <div class="form_container">
                <div class="title_container">
                    <h2>
                        <p>{{$t('auth.login')}}</p>
                    </h2>
                </div>
                <div class="row clearfix">
                    <div class="">
                        <form>
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
                            <input class="button" type="submit" :value="$t('auth.login')" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>