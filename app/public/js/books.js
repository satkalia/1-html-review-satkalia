
const SomeApp = {
    data() {
      return {
        book: [],
        bookForm: {},
        selectedBook: null
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
        },
        postAddBook(evt) {
            //this.bookForm.bookId = this.selectedBook.id;
            console.log("Posting:", this.bookForm);
            //alert("Posting!");

            fetch('api/book/create.php',{
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
           .then(response => response.json())
           .then(json => {
               console.log("Returned from post:", json);
               //TOFO: test a result was returned!
               this.books = json;

               //reset the form
               this.bookForm = {};
           }); 
        }
    },
    created() {
        this.fetchBooksData();
    }

  }

  Vue.createApp(SomeApp).mount('#bookApp'); 
