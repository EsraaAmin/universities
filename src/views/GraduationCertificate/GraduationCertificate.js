
export default {

    components: {},
    data() {
        return {
            showForm: true,
            inputName: "",
            inputId: "",
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