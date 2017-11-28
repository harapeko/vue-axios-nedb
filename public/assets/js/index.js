'use strict';

const DATA_URL = "/db/shopping.json"

let vue = new Vue({
  el: '#app',
  data() {
    return {
      shopping_list: [],
    }
  },
  computed: {
    total: function(){
      return this.shopping_list.reduce(function(a, b) {
        return {
          price: a.price + b.price,
          quantity: a.quantity + b.quantity,
        }
      }, {price: 0, quantity: 0})
    },
  },
  async created() {
    try {
      let res = await axios.get(DATA_URL)
      this.shopping_list = res.data
    } catch (e) {
      console.error(e)
    }
  }
})

