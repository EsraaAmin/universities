
import Autocomplete from 'vuejs-auto-complete'

export default {
  name: 'home',
  components: {
    Autocomplete,
    
  },
  data() {
    return {

      state: 'esraa',

    };
  },
  mounted() {

  },
  methods: {
    distributionGroupsEndpoint(input) {
      return process.env.API + '/distribution/search?query=' + input
    },
    addDistributionGroup(group) {
      this.group = group
      // access the autocomplete component methods from the parent
      this.$refs.autocomplete.clear()
    },
    authHeaders() {
      return {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni....'
      }
    },
    formattedDisplay(result) {
      return result.name + ' [' + result.groupId + ']'
    }
  },
  computed: {
    authHeaders() {
      return {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni....'
      }
    },
  }
}
