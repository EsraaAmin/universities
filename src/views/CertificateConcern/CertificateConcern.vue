<template>
  <div class="container-fluid tuitionFees serviceForm  text-center d-flex">
    <div class="container align-self-center">
      <form id="contact" class="contact" action="" method="post" v-if="showForm" @submit.prevent="submitForm()">
        <h3 class="mb-3">{{ $t('studentSrevices.certificateConcern')}}</h3>
        <fieldset>
          <input :placeholder="$t('studentSrevices.studentName')" type="text" tabindex="1" required v-model="inputName">
        </fieldset>
        <fieldset>
          <input :placeholder="$t('studentSrevices.studentId')" type="text" tabindex="2" required v-model="inputId">
        </fieldset>
        <fieldset>
          <input :placeholder="$t('studentSrevices.Destination')" type="tel" tabindex="3" required
            v-model="destination">
        </fieldset>

        <fieldset>
          <button name="submit" type="submit" id="contact-submit"
            data-submit="">{{$t('studentSrevices.submit')}}</button>
        </fieldset>
      </form>


      <div class="checkout contact" v-else>
        <h2>{{$t('studentSrevices.checkoutPhrase')}} <span>{{$t('studentSrevices.tuitionFees')}}</span></h2>
        <p><strong>{{$t('studentSrevices.studentName')}}:</strong> {{inputName}}</p>
        <p><strong>{{$t('studentSrevices.studentId')}}:</strong> {{inputId}}</p>
        <p><strong>{{$t('studentSrevices.Destination')}}:</strong> {{destination}}</p>

        <fieldset class="text-center">
          <button class="ml-2" name="submit" type="submit" id="contact-submit" data-submit=""
            @click="backForm">{{$t('studentSrevices.back')}}</button>

          <button name="submit" type="submit" id="contact-submit"
            data-submit="">{{$t('studentSrevices.submit')}}</button>
        </fieldset>


      </div>


    </div>
  </div>
</template>


<script src="./CertificateConcern.js"></script>