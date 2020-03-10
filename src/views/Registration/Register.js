import Axios from "axios";



export default {
  name: 'register',
  components: {

    
  },
  data() {
    return {
      register: {
        firtName: "",
        lastName: "",
        email: "",
        password: ""

      }
    };
  },
  mounted() {

    axios.post('http://wwww.weblloapi.dev/register')
  },
  methods: {
  
    
 
 
  },
  computed: {
 
  }
}
