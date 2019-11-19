<template>
    <div class="container-fluid studentView text-center d-flex component-content">
        <div class="overlay"></div>
        <div class="container align-self-center">
            <div class="row ">
                <div class="col-12 mb-2">
                    <h2 class="page-title">{{ $t('studentSrevices.selectService')}}</h2>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/tuitionFees`">

                        <div class="studentCard m-auto">
                            <div class="employee-image">
                                <img src="@/assets/images/322465-48.png" class="img-fluid d-block m-auto"
                                    alt="employee-image">
                            </div>
                            <div>
                                    <p class="service"> {{ $t('studentSrevices.tuitionFees')}} </p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/StudentCard`">

                        <div class="studentCard m-auto">
                            <div class="employee-image">
                                <img src="@/assets/images/216117-48.png" class="img-fluid d-block m-auto"
                                    alt="employee-image">
                            </div>
                           <div>
                                <p class="service"> {{ $t('studentSrevices.Card')}} </p>
                           </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/certificateConcern`">

                        <div class="studentCard m-auto">
                            <div class="employee-image d-block">
                                <img src="@/assets/images/3883229-48.png" class="img-fluid d-block m-auto"
                                    alt="employee-image">
                            </div>
                            <div>
                                    <p class="service"> {{ $t('studentSrevices.certificateConcern')}} </p>
                            </div>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>