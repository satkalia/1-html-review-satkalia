
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
        postBook(evt) {
            if (this.selectedBook === null) {
                this.postNewBook(evt);
            } else {
                this.postEditBook(evt);
            }
        },
        postNewBook(evt) {
            //this.bookForm.bookId = this.selectedBook.id;
            console.log("Creating!", this.bookForm);
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
               //TODO: test a result was returned!
               this.book = json;

               //reset the form
               this.bookForm = {};
               this.resetBookForm();
           }); 
        },
        postEditBook(evt) {
            this.bookForm.bookId = this.selectedBook.id;
            this.offerForm.id = this.selecteBook.id;

            console.log("Updating!", this.bookForm);

            fetch('api/book/update.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then(response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                //TODO: test a result was returned!
                this.book = json;

                this.resetBookForm();
            });
        },
        postDeleteBook(b) {
            if (!confirm("Are you sure you want to delete the book from "+b.bk.title+"?")) {
                return;
            }

            fetch('api/offer/delete.php', {
                method: 'POST',
                body: JSON.stringify(b),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then(response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                //TODO: test a result was returned!
                this.book = json;

                this.resetBookForm();
            });
        },
        selectBook(b) {
            this.selectedBook = null;
            this.bookForm = {};
        }
    created() {
        this.fetchBooksData();
    }

  }

  Vue.createApp(SomeApp).mount('#bookApp'); 
