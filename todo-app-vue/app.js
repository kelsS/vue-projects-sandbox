// when "add goal" is clicked, the text content within the "goal" input is added to the ul list of todos

// 1. on click -> fetch the user input
// 2. create a new list item
// 3. add new list item to the unordered list of todos

// using Vue -> instead of defining things imperatively we define the desired end result and the data we will need in our Vue app then leave it up to Vue to figure out what needs to be created or added or changed in the DOM

Vue.createApp({
    // data: function() {} --> same as writing data() {}
    data() {
        // must return an object
        return {
            // this is data Vue is now aware of
            goals: [],
            // connect the enteredVal to HTML input by using a directive (special vue html attribute = v-model)
            enteredVal: ''
        };
    },
    methods: {
        // get what is currently stored in enteredVal and add it to the goals[]
        // functions that are callable from inside the HTML
        // Vue ensures that the "this" keyword is scoped to the return object within our data()
        addGoal() {
            this.goals.push(this.enteredVal);
            // we now create our click event using the special vue HTML attribute --> v-on:click="nameOfMethod"
            // reset the input val to empty string
            this.enteredVal = '';
        }
    }
}).mount('#app');
// we use .mount('#app') to connect our vue app to the HTML template

// use this Vue html attr to create loops within the html template --> v-for="arrayName in arrayNames"
// output goal value to the list item text using {{ varName }} which is provided by Vue