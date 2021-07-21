<template>
  <div>
      <h1>User List</h1>
      <div class="button">
        <input v-model="searchId" class="search" type="number" placeholder="Search by id" />
         <button @click="search">Search</button>
         <button @click="add">Add User</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Full name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in this.data" :key="item.id">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ item.fullName }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.sex }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phoneNumber }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import { userService } from '@/service'
import { UserResponse } from '@/models/user'
import { component } from 'vue/types/umd'

@Component
export default class UserList extends Vue {
    private data: UserResponse [] = [];
  private datas: any;
  private searchId?: number | null = null;
   private created() {
    return userService.getAllUser().then((res) => {
       this.data = res.data;
    });
  }
  private edit(item: any) {
     if (!item.id) {
      return;
    }
    this.$router.push(
      {
        name: 'user_edit',
        params: { id: item.id },
      },
    );
  }
  private add() {
    this.$router.push(
      {
        name: 'user_add',
      },
    );
  }
  private search() {
    const id = Number(this.searchId);
    if (id !== 0) {
      userService.getUser(id).then((res) => {
        this.data = [];
        this.data.push({
          id: res.data.id,
          fullName: res.data.fullName,
          age: res.data.age,
          sex: res.data.gender,
          address: res.data.address,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
        });
    });
    }
  }
}
</script>

<style>

</style>