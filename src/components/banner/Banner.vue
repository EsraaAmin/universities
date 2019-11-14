<template>
  <div id="carouselExampleControls" class="carousel slide mt-1" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="@/assets/images/banner.jpg" alt="First slide">

        <div class="overlay">
          <div class="content container">
            <form action="">
              <div class="row">
                <div class="col-md-6 col-12">
                  <autocomplete ref="autocomplete" :placeholder="$t('banner.facultyName')"
                    :source="distributionGroupsEndpoint" input-class="form-control" results-property="data"
                    :results-display="formattedDisplay" :request-headers="authHeaders" @selected="addDistributionGroup">
                  </autocomplete>
                </div>
                <div class="col-md-6 col-12">
                  <autocomplete ref="autocomplete" :placeholder="$t('banner.universityName')"
                    :source="distributionGroupsEndpoint" input-class="form-control" results-property="data"
                    :results-display="formattedDisplay" :request-headers="authHeaders" @selected="addDistributionGroup">
                  </autocomplete>
                </div>
              </div>
              <div class="col-12 text-center mt-4">
                <router-link class="btn w-25 bg-white" :to="`/${$i18n.locale}/WhoAreYou`">{{ $t('banner.search')}}</router-link>
              </div>
            </form>
          </div> 
        </div>
      </div>




    </div>

  </div>
</template>
<script src="../banner/Banner.js"></script>
