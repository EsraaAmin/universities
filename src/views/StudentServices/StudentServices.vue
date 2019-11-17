<template>
    <div class="container-fluid studentView text-center d-flex">
        <div class="container align-self-center">
            <div class="row">
                <div class="col-12 mb-2">
                    <h2>{{ $t('studentSrevices.selectService')}}</h2>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/tuitionFees`">
                        <div class="studentCard m-auto">
                            <p class="service"> {{ $t('studentSrevices.tuitionFees')}} </p>     
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/StudentCard`">
                        <div class="studentCard m-auto">
                            <p class="service"> {{ $t('studentSrevices.Card')}} </p>   
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4 col-12">
                    <router-link :to="`/${$i18n.locale}/certificateConcern`">
                        <div class="studentCard m-auto">
                            <p class="service"> {{ $t('studentSrevices.certificateConcern')}} </p>      
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>