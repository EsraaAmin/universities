
export default {

    components: {},
    data() {
        return {
            showForm: true,
            inputName: "",
            inputStudentNum: "",
            inputYear: ""
        }
    },
    methods: {
        submitForm() {
          return this.showForm = false
     
        },

        backForm() {
            return this.showForm = true
       
          }
    }
}