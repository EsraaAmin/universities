<template>
    <div class="container-fluid tuitionFees serviceForm component-content text-center d-flex">
        <div class="overlay"></div>
        <div class="container align-self-center form-container">
            <form id="contact" class="contact" action="" method="post">
                <h3 class="mb-3 page-title">{{ $t('graduateSrevices.temporaryCertificate')}}</h3>
                <fieldset>
                    <input :placeholder="$t('studentSrevices.studentName')" type="text" tabindex="1" required>
                </fieldset>
                <fieldset>
                    <input :placeholder="$t('studentSrevices.studentId')" type="text" tabindex="2" required>
                </fieldset>
                <fieldset>
                    <input :placeholder="$t('graduateSrevices.graduationYear')" type="text" tabindex="3" required>
                </fieldset>
                <fieldset>
                    <input :placeholder="$t('graduateSrevices.grade')" type="text" tabindex="4" required>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit"
                        data-submit="">{{$t('studentSrevices.submit')}}</button>
                </fieldset>
            </form>


        </div>
    </div>
</template>