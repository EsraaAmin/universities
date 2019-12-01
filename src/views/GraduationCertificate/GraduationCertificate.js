
export default {

    components: {},
    data() {
        return {
            showForm: true,
            inputName: "",
            inputId: "",
            inputYear: "",
            num: "",
            price: 300
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