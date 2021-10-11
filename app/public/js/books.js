
const SomeApp = {
    data() {
      return {
        book: [],
      }
    },
    computed: {},
    methods: {
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBooksData() {
            fetch('/api/book/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.book = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchBooksData();
    }

  }

  Vue.createApp(SomeApp).mount('#bookApp'); 