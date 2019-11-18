<template>
    <div class="container-fluid applayerCard d-flex ">
        <div class="container align-self-center">
            <div class="employee-container">
                <div class="row">
                    <div class="col-12 text-center mb-2">
                        <h2>{{ $t('whoYouAre.areYou')}}</h2>
                    </div>
                    <div class="col-md-3 col-12 employee-1">
                        <router-link :to="`/${$i18n.locale}/StudentServices`">
                            <div class="employee">
                                <div class="employee-image">
                                    <img src="@/assets/images/2016-05-16-index-student-happiness.jpg"
                                        class="img-fluid d-block m-auto" alt="employee-image">
                                </div>
                                <div class="employee-details">
                                    <div class="employee-name">
                                        <h4 class="text-center">{{ $t('whoYouAre.student')}}</h4>
                                        
                                    </div>

                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-3 col-12 employee-1">
                        <router-link :to="`/${$i18n.locale}/GraduateServices`">
                            <div class="employee">
                                <div class="employee-image">
                                    <img src="@/assets/images/graduation.jpg" class="img-fluid d-block m-auto"
                                        alt="employee-image">
                                </div>
                                <div class="employee-details">
                                    <div class="employee-name">
                                        <h4 class="text-center">{{ $t('whoYouAre.gradute')}}</h4>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-3 col-12 employee-1">
                        <router-link :to="`/${$i18n.locale}/MasterServices`">
                            <div class="employee">
                                <div class="employee-image">
                                    <img src="@/assets/images/Students-focused-in-political-science-class.png"
                                        class="img-fluid d-block m-auto" alt="employee-image">
                                </div>
                                <div class="employee-details">
                                    <div class="employee-name">
                                        <h4 class="text-center">{{ $t('whoYouAre.masterStudent')}}</h4>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-md-3 col-12 employee-1">
                        <router-link :to="`/${$i18n.locale}/facultyMember`">
                            <div class="employee">
                                <div class="employee-image">
                                    <img src="@/assets/images/DSC_1176_resized.jpg" class="img-fluid d-block m-auto"
                                        alt="employee-image">
                                </div>
                                <div class="employee-details">
                                    <div class="employee-name">
                                        <h4 class="text-center">{{ $t('whoYouAre.facultyMember')}}</h4>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../WhoAreYou/WhoAreYou.js"></script>