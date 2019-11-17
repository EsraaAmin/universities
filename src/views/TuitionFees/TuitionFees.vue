<template>
  <div class="container-fluid tuitionFees serviceForm  text-center d-flex">
    <div class="container align-self-center">
      <form id="contact" class="contact" action="" method="" v-if="showForm">
        <h3 class="mb-3">{{ $t('studentSrevices.tuitionFees')}}</h3>
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
            @click="submitForm">{{$t('studentSrevices.submit')}}</button>
        </fieldset>
      </form>

      <div class="checkout contact" v-else>
        <p>{{$t('studentSrevices.studentName')}}: {{inputName}}</p>
        <p>{{$t('studentSrevices.studentId')}}: {{inputId}}</p>
        <p>{{$t('studentSrevices.studentNumber')}}: {{inputStudentNum}}</p>
        <p>{{$t('studentSrevices.Year')}}: {{inputYear}}</p>

        <fieldset>
          <button class="ml-2" name="submit" type="submit" id="contact-submit"
            data-submit="">{{$t('studentSrevices.submit')}}</button>

          <button name="submit" type="submit" id="contact-submit"
            data-submit="">{{$t('studentSrevices.submit')}}</button>
        </fieldset>


      </div>


    </div>
  </div>
</template>

<script src="./TuitionFees.js"></script>