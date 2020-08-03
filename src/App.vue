<template>
  <div id="app">
    <FilterComponent />
    <h1 class="title"> Our  Catalog</h1>
      <div class="range-slider">
        <b-field style="width: 500px;position: relative; left: 100px">
          <b-slider
                  v-model="price"
                  type="is-success"
                  :min="500" :max="5000"
                  :step="100"
                  @input ="filter"
          >

<!--            @change ="setRangeSlider()"-->
          </b-slider>
        </b-field>
      </div>


    <a href="#">
      <div class="card" v-for="(plant, index) in plants" :key="plant.cactus.id+index">
        <div class="card-image">
          <figure class="image  ">
            <img :src="plant.url" alt="Placeholder ">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{plant.cactus.dimension.price}}</p>
              <span class="subtitle is-6">{{plant.cactus.type}}</span>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            <a href="#">height : {{plant.cactus.dimension.height}}</a>,  <a href="#"> width : {{plant.cactus.dimension.width}}</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  import axios from 'axios'
  import FilterComponent from "./components/FilterComponent";

export default {
  name: "app",
  components:{
    FilterComponent
  },
  data(){
    return {
      lightMode: false,
      plants: [],
      allPLants: [],
      minPrice: 500,
      maxPrice: 5000,
      filters: {
        price: '',
        category: '',
      }
    };
  },
  computed: {
    price: {
      get() {
        return this.filters.price
      },
      set(value) {
        this.filters.price = value
      }
    }
  },
  methods:{
    filter(value){
      value = value+"AMD"
      let filtered = this.allPLants.filter(item=>{
        // return item.cactus.dimension.price>=500 && item.cactus.dimension.price<=1000
        console.log(1111111111, value+"AMD")
        return item.cactus.dimension.price===value
      })
      // console.log(filtered)
      this.plants = filtered
    }
  },
async created() {
    try {
      const res = await axios.get(`http://localhost:3000/plants`)
      // handle success
      this.plants = res.data;
      this.allPLants = res.data
      console.log(res.data)
    } catch (error) {
      // handle error
      console.log(error)
    }

},


};
</script>

<style>

  *{
    margin: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*.range-slider{*/
/*  transform: rotate(90deg);*/
/*}*/
.card{
  display: inline-block;
  max-width: 450px !important;
  justify-content: center;
  margin: 50px;
}

</style>
