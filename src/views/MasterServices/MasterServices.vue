<template>
    <div class="container-fluid studentView text-center d-flex">
        <div class="container align-self-center">
            <div class="row">
                <div class="col-12 mb-2">
                    <h2>{{ $t('studentSrevices.selectService')}}</h2>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/MasterTemporaryCertificate`">
                        <div class="studentCard m-auto">
                            <p class="service"> {{ $t('masterServices.temporaryCertificate')}} </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/MasterEnrollmentCertificate`">
                        <div class="studentCard m-auto">
                            <p class="service"> {{ $t('masterServices.CertificateOfEnrollment')}} </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/MasterCard`">
                        <div class="studentCard m-auto">
                            <p class="service"> {{ $t('masterServices.card')}} </p>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>