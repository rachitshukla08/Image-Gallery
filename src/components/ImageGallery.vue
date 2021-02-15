<template>
    <div class="outer-div">
        <div class="row">
            <div class="imageList col-md-auto" v-for="image in images" :key="image.id">
                <div class="gallery">
                    <img @click="redirectToPage(image.download_url)" :src="image.download_url" width="200" height="200" :alt="image.url" >
                    <p class="author" @click="redirectToPage(image.download_url)">{{image.author}}</p>
                </div>
            </div>
        </div>
        <div class="buttons">
          <button @click="decrementPage">&laquo;</button>
          <div>
            <span v-if="this.page>1"></span>
            <span v-if="this.page>1" @click="decrementPage" class="page-numbers"> {{this.page-1}}</span>
            <span v-if="this.page<35" class="current-page page-numbers" >{{this.page}}</span>
            <span v-if="this.page<34" @click="incrementPage" class="page-numbers">{{this.page+1}}</span>
            <span v-if="this.page<33">...</span>
          </div>
          <button @click="incrementPage">&raquo;</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ImageGallery',
    data() {
    return {
      images: [],
      urlTemplate:'https://picsum.photos/v2/list?page=',
      page: 1,
    };
  },
  created() {
    this.getData();
  },
  updated(){
    this.getData();
    console.log("Updated")
  },
  methods: {
      getData(){
        axios.get(this.urlTemplate+this.page)
          .then((response)=>{
            console.log(response)
            let responseData = response.data;
            this.images = responseData;
            console.log(this.images)
          });
      },
      redirectToPage(imageUrl){
          window.location.replace(imageUrl)
      },
      incrementPage(){
        if(this.page<34)
          this.page = ++this.page;
        else
          alert('This is the last page')
      },
      decrementPage(){
        if(this.page>1)
          this.page = --this.page;
        else 
          alert('This is the first page')
      },
  }
}
</script>

<style scoped>
img{
  cursor: pointer;
  border-radius: 0%;
}
img:hover {
  border: 1px solid #777;
  border-radius: 5%;
}
.outer-div{
    margin: 5%;
}
.gallery {
  margin: 22px;
  border: 1px solid #ccc;
}
.author {
    padding-top: 15px;
    text-align: center;
}
.author:hover{
    cursor: pointer;
    text-decoration: underline;
    color: blue;
}
.buttons{
  margin: auto;
  width: 20%;
  display: flex;
  padding: 15px;
  justify-content: space-around;
}
button{
  border-radius: 45%;
  background-color: #f1f1f1;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.185);
}
button:hover{
  background-color: #ddd;
  border-radius: 40%;
}
.current-page{
  color: red;
}
.page-numbers{
  cursor: pointer;
  margin: 8px;
  padding: 7px;
  border: 1px solid rgba(0, 0, 0, 0.185);
  border-radius: 48%;
}
.page-numbers:hover{
  font: bold;
  background-color: #ddd;
}
</style>