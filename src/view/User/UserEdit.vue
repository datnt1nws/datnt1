<template>
  <div>
    <h1>{{isEdit? 'User Edit Page' : 'User Add Page'}}</h1>
    <div class="form-input">
      <form>
        <div v-show="isEdit" class="row">
          <div class="col-25">
            <label for="id">Id</label>
          </div>
          <div class="col-75">
            <input type="number" :disabled="isEdit" v-model="data.id" placeholder="Id:...">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Full name</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.fullName" placeholder="Full Name:...">
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label>Age</label>
          </div>
          <div class="col-75">
            <input type="number" v-model="data.age" placeholder="Age:...">
          </div>
        </div>

         <div class="row">
          <div class="col-25">
            <label>Sex</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.sex" placeholder="Sex:...">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Address</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.address" placeholder="Address:...">
          </div>
        </div>

         <div class="row">
          <div class="col-25">
            <label>Email</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.email" placeholder="Email:...">
          </div>
        </div>

         <div class="row">
          <div class="col-25">
            <label>Phone Number</label>
          </div>
          <div class="col-75">
            <input type="number" v-model="data.phoneNumber" placeholder="Phone Number:...">
          </div>
        </div>
      </form>
      <div class="row">
        <button @click="cancel">Cancel</button>
        <button @click="save">Save</button>
        <button @click="dele" v-show="isEdit" class="delete">Delete</button>
      </div>
    </div>
      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { userService } from '@/service';
import { UserRequest } from '@/models/user';

@Component
export default class UserEditPage extends Vue {
  private data: UserRequest = new UserRequest();
  private isEdit = false;

  private created() {
    if (this.$router.currentRoute.params.id) {
      const id = Number(this.$router.currentRoute.params.id);
      this.isEdit = true;
      userService.getUser(id).then((res) => {
        this.data = res.data;
      });
    }
  }

  private save() {
   if (this.isEdit) {
      userService.updateUser(this.data).then((res) => {
        this.golistUser();
    });
   } else {
     userService.saveUser(this.data).then((res) => {
        this.golistUser();
     });
   }
  }

  private delete() {
    const id = Number(this.data.id);
    userService.deleteUser(id).then((res) => {
      alert('Đã xóa: ' + this.data.fullName);
      this.golistUser();
    });
  }

  private cancel() {
    this.golistUser();
  }

  private golistUser() {
    this.$router.push(
          {
            name: 'user',
          },
    );
  }
}
</script>