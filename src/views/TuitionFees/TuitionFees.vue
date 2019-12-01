<template>
  <div class="container-fluid tuitionFees serviceForm component-content text-center d-flex">
    <div class="overlay"></div>
    <div class="container align-self-center form-container">
      <form id="contact" class="contact" action="" method="post" v-if="showForm" @submit.prevent="submitForm()">
        <h3 class="mb-3 page-title">{{ $t('studentSrevices.tuitionFees')}}</h3>
        <fieldset>
          <input :placeholder="$t('studentSrevices.studentName')" type="text" tabindex="1" required v-model="inputName">
        </fieldset>
        <fieldset>
          <input :placeholder="$t('studentSrevices.studentId')" type="text" tabindex="2" required v-model="inputId">
        </fieldset>
        <fieldset>
          <input :placeholder="$t('studentSrevices.studentNumber')" type="text" tabindex="3" required
            v-model="inputStudentNum">
        </fieldset>
        <fieldset>
          <input :placeholder="$t('studentSrevices.Year')" type="text" tabindex="4" required v-model="inputYear">
        </fieldset>

        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit=""
            >{{$t('studentSrevices.submit')}}</button>
        </fieldset>
      </form>

      <div class="checkout contact text-white" v-else>
        <h2>{{$t('studentSrevices.checkoutPhrase')}} <span>{{$t('studentSrevices.tuitionFees')}}</span></h2>
        <div class="checkoutDetails m-auto col-lg-5 col-md-7 col-12">
          <p><strong>{{$t('studentSrevices.studentName')}}:</strong> {{inputName}}</p>
          <p><strong>{{$t('studentSrevices.studentId')}}:</strong> {{inputId}}</p>
          <p><strong>{{$t('studentSrevices.studentNumber')}}:</strong> {{inputStudentNum}}</p>
          <p><strong>{{$t('studentSrevices.Year')}}:</strong> {{inputYear}}</p>
          <p><strong>{{$t('whoYouAre.price')}}: 300 <span>{{$t('whoYouAre.EgCurrency')}}</span></strong></p>
        </div>

        <fieldset class="text-center">
          <a class="ml-2 btn" name="submit" type="submit" id="contact-submit"
            data-submit="" @click="backForm">{{$t('studentSrevices.back')}}</a>

          <router-link :to="`/${$i18n.locale}/Checkout`" name="submit" type="submit" id="contact-submit"
            data-submit="" class="btn">{{$t('studentSrevices.submit')}}</router-link>
        </fieldset>


      </div>


    </div>
  </div>
</template>

<script src="./TuitionFees.js"></script>