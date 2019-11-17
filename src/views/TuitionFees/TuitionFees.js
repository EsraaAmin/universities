
export default {

    components: {},
    data() {
        return {
            showForm: true,
            inputName: "",
            inputId: "",
            inputStudentNum: "",
            inputYear: ""
        }
    },
    methods: {
        submitForm() {
          return this.showForm = false
     
        }
    }
}