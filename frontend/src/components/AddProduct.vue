<template>
  <div class="add-product">
    <div class="content">
      <div class="photo">
        <p>Product Photo</p>
        <div class="img">
          <img :src="require(`../assets/${edit.imgFile}`)" alt="..." />
        </div>
      </div>
      <div class="form">
        <form @submit.prevent="saveProduct">
          <div class="left">
            <label for="title">Product title</label>
            <input type="text" name="title" v-model="edit.title" />

            <label for="shortDesc">Product short desc</label>
            <input type="text" name="shortDesc" v-model="edit.shortDesc" />

            <label for="price">Product price</label>
            <input type="text" name="price" v-model="edit.price" />

            <label for="id">Photo title</label>
            <input type="text" name="id" v-model="edit.imgFile" />
          </div>
          <div class="right">
            <label for="desc">Product description</label>
            <textarea name="desc" v-model="edit.longDesc" class="long" />
            <div class="buttons">
              <input type="submit" value="SAVE EDIT" />

              <button>SAVE NEW</button>
              <button class="delete">DELETE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productToEdit: Object,
  },
  data() {
    return {
      edit: {
        imgFile: "add-img.svg",
        title: "",
        shortDesc: "",
        longDesc: "",
        price: null,
        _id: "",
      },
    };
  },

  methods: {
    saveProduct() {
      console.log(this.edit);
      this.$store.dispatch("changeProduct", this.edit);
      this.$store.dispatch("getProducts");
      location.reload();
    },
  },

  watch: {
    productToEdit() {
      this.edit = this.productToEdit;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  height: 350px;
  background-color: #404040;
  margin-bottom: 20px;
}

.content {
  margin: auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
}

.photo {
  width: 250px;
  text-align: start;
}

p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4px;
  margin-top: 18px;
}
// .form {
//   height: 300px;
// }
.img {
  width: 300px;
  height: 280px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
}

.form {
  height: 350px;
  display: flex;
  align-items: center;
}

form {
  height: 90%;
  width: 680px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  align-self: flex-start;
}

input,
textarea {
  width: 320px;
  background-color: #404040;
  border: 1px solid rgba(255, 255, 255, 0.6);
  height: 40px;
  color: #fff;
}
.left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    margin-bottom: 10px;
  }
}
.right {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  textarea {
    height: 220px;
  }

  input[type="submit"],
  button {
    height: 45px;
    width: 100px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #404040;
    margin-bottom: 10px;
    margin-top: 10px;
    border: none;
  }

  input[type="submit"]:hover,
  button:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
  }

  input[type="submit"]:focus,
  button:focus {
    outline: none;
  }

  .buttons {
    width: 326px;
    display: flex;
    justify-content: space-between;
  }

  .delete {
    background-color: #f56969;
    color: #fff;
  }
}
</style>