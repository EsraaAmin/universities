<template>
    <div class="container-fluid tuitionFees serviceForm component-content text-center d-flex">
        <div class="overlay"></div>
        <div class="container align-self-center form-container">


            <div class="checkout contact text-white">
                <h3>{{$t('whoYouAre.checkoutContact')}}</h3>
                <div class="opc-col-right">
                    <div class="payment-block text-right m-auto col-lg-3 col-md-7 col-12">
                        <h3 class="text-dark">طريقة الدفع</h3>
           
                        <form action="" id="payment-form" class="">
                            <fieldset id="checkout-payment-method-load">
                                <dt  class="active">
                                    <input id="p_method_cashondelivery" value="cashondelivery" type="radio"
                                        name="payment[method]" title="الدفع بالبطاقة"
                                        checked="checked" class="radio"
                                        autocomplete="off">
                                    <label for="p_method_cashondelivery">الدفع بالبطاقة </label>
                                </dt>
                                <dt id="dt_method_banktransfer">
                                    <input value="banktransfer" type="radio"
                                        name="payment[method]" title="تحويل بنكى"
                                        class="radio" autocomplete="off">
                                    <label for="p_method_banktransfer">تحويل بنكى </label>
                                </dt>
                
                            </fieldset>
                        </form>
                   
           
                    </div>


                   
                </div>


                <fieldset class="text-center">
                    <button name="submit" type="submit" id="contact-submit"
                        data-submit="">{{$t('studentSrevices.submit')}}</button>
                </fieldset>


            </div>


        </div>
    </div>
</template>