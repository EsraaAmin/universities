<template>
        <div class="container-fluid tuitionFees serviceForm  text-center d-flex">
          <div class="container align-self-center">
            <form id="contact" class="contact" action="" method="post" v-if="showForm" @submit.prevent="submitForm()">
              <h3 class="mb-3">{{ $t('studentSrevices.Card')}}</h3>
              <fieldset>
                <input :placeholder="$t('studentSrevices.studentName')" type="text" tabindex="1" required v-model="inputName">
              </fieldset>
              <fieldset>
                <input :placeholder="$t('studentSrevices.studentNumber')" type="text" tabindex="3" required v-model="inputStudentNum">
              </fieldset>
              <fieldset>
                <input :placeholder="$t('studentSrevices.Year')" type="text" tabindex="4" required v-model="inputYear">
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit"
                  data-submit="">{{$t('studentSrevices.submit')}}</button>
              </fieldset>
            </form>
      
            <div class="checkout contact" v-else>
              <h2>{{$t('studentSrevices.checkoutPhrase')}} <span>{{$t('studentSrevices.Card')}}</span></h2>
              <p><strong>{{$t('studentSrevices.studentName')}}:</strong> {{inputName}}</p>
              <p><strong>{{$t('studentSrevices.studentNumber')}}:</strong> {{inputStudentNum}}</p>
              <p><strong>{{$t('studentSrevices.Year')}}:</strong> {{inputYear}}</p>
      
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
      
      
      <script src="./MasterCard.js"></script>