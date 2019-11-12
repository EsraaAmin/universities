<template>
  <nav class="navbar navbar-expand-lg navbar-light  container-fluid" id="nav">
    <div class="container">
      <router-link :to="`/${$i18n.locale}`" class="navbar-brand" href="#">logo</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto text-center">
          <li class="nav-item">
            <router-link class="nav-link" :to="`/${$i18n.locale}/login`">{{ $t('nav.login')}}</router-link>
            <!-- <font-awesome-icon icon="user-edit" class="fal"></font-awesome-icon> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/${$i18n.locale}/register`">{{ $t('nav.register')}}</router-link>
            <!-- <font-awesome-icon icon="user"></font-awesome-icon> -->
          </li>
          <li class="nav-item">
            <select v-model="$i18n.locale" @change="changeLanguage" class="h-100 border-0 switchLang">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}
              </option>
            </select>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>



<script>
  export default {
    name: 'locale-changer',
    data() {
      return { langs: ['en', 'ar'] }
    },

    methods: {
      changeLanguage(e) {
        const lang = e.target.value
        const to = this.$router.resolve({ params: { lang } })
        this.$router.push(to.location)  
      }
    }
  }
</script>