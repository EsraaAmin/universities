<template>
    <footer class="container-fluid text-light pt-4 mt-4">
        <div class="container f-content">
            <div class="row">
                <div class="col-lg-4 col-12">
                    <div class="block">
                        <div class="block-title">
                            <strong><span>{{ $t('footer.contactInfo.contactInfoTitle')}}</span></strong></div>
                        <div class="block-content">
                            <ul class="features p-0">
                                <li><strong style="color:#fff">{{ $t('footer.contactInfo.address')}} </strong></li>
                                <li style="margin-bottom:0.5em"><a target="_blank"
                                        href="https://www.google.com.eg/maps/place/Buzlin+Inc+-+eCommerce+Solutions+Provider/@30.07259,31.3056293,15.75z/data=!4m5!3m4!1s0x14583e70fe2314b1:0x3130690df84e17b2!8m2!3d30.058868!4d31.345837?hl=en">
                                        {{ $t('footer.contactInfo.addressDetails')}}
                                    </a></li>
                                <li><strong style="color:#fff">{{ $t('footer.contactInfo.phone')}} </strong></li>
                                <li>{{ $t('footer.contactInfo.phone1')}}</li>
                                <li>{{ $t('footer.contactInfo.phone2')}}</li>
                                <li style="margin-top:0.5em"><strong
                                        style="color:#fff">{{ $t('footer.contactInfo.Email')}} </strong></li>
                                <li><a href="mailto:info@artantiko .com" target="_blank" title="Call Now">
                                        <span>{{ $t('footer.contactInfo.emailAddress')}}</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="block">
                        <div class="block-title">
                            <strong><span>{{ $t('footer.importantLinks.importantLinksTitle')}}</span></strong></div>
                        <div class="block-content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <ul class="links p-0">
                                        <li><a href="#" title="About us">{{ $t('footer.importantLinks.aboutUs')}}</a>
                                        </li>
                                        <li><a href="#"
                                                title="Contact Us">{{ $t('footer.importantLinks.contactUs')}}</a></li>
                                        <li><a href="#"
                                                title="My Account">{{ $t('footer.importantLinks.myAccount')}}</a></li>
                                        <li><a href="#"
                                                title="terms&amp;conditions">{{ $t('footer.importantLinks.privacyPolicy')}}</a>
                                        </li>
                                        <li><a href="#"
                                                title="terms&amp;conditions">{{ $t('footer.importantLinks.termsConditions')}}
                                            </a></li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12">test</div>
            </div>
        </div>
    </footer>
</template>
