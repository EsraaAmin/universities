<template>
    <div class="container-fluid studentView text-center component-content d-flex">
        <div class="overlay"></div>
        <div class="container align-self-center form-container">
            <div class="row">
                <div class="col-12 mb-2">
                    <h2 class="page-title">{{ $t('studentSrevices.selectService')}}</h2>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/MasterTemporaryCertificate`">
                        <div class="studentCard m-auto">
                                <img src="@/assets/images/3883229-48.png" class="img-fluid d-block m-auto"
                                alt="employee-image">
                            <p class="service"> {{ $t('masterServices.temporaryCertificate')}} </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/MasterEnrollmentCertificate`">
                        <div class="studentCard m-auto">
                                <img src="@/assets/images/3883229-48.png" class="img-fluid d-block m-auto"
                                alt="employee-image">
                            <p class="service"> {{ $t('masterServices.CertificateOfEnrollment')}} </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/MasterCard`">
                        <div class="studentCard m-auto">
                             <img src="@/assets/images/216117-48.png" class="img-fluid d-block m-auto"
                                    alt="employee-image">
                            <p class="service"> {{ $t('masterServices.card')}} </p>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>