<template>
  <div class="container-fluid tuitionFees serviceForm  text-center d-flex">
    <div class="container align-self-center">
      <form id="contact" class="contact" action="" method="post">
        <h3 class="mb-3">{{ $t('studentSrevices.Card')}}</h3>
        <fieldset>
          <input :placeholder="$t('studentSrevices.studentName')" type="text" tabindex="1" required>
        </fieldset>
        <fieldset>
          <input :placeholder="$t('studentSrevices.studentNumber')" type="text" tabindex="3" required>
        </fieldset>
        <fieldset>
          <input :placeholder="$t('studentSrevices.Year')" type="text" tabindex="4" required>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit"
            data-submit="">{{$t('studentSrevices.submit')}}</button>
        </fieldset>
      </form>


    </div>
  </div>
</template>