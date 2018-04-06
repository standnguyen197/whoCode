<template>
  <div class="posts">
  
    <h1> <Icon type="ios-speedometer-outline"></Icon> Posts</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'addpost' }" class="">Add Post</router-link>
      </div>
      <table>
        <tr>
          <td> Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="post in posts" :key="post">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'editpost', params: { id: post._id } }">Edit</router-link> |
            <a href="#" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>

    </div>
    <div v-else>

      There are no posts.. Lets add one now <br /><br />
     
      <DatePicker type="datetime" placeholder="Xin chọn thời gian" style="width: 200px"></DatePicker>
      <router-link v-bind:to="{ name: 'authFacebook' }"><Button  type="primary" style="background:#2d8cf0;border-color:#2d8cf0" >ĐĂNG NHẬP</Button></router-link>
    
    
    </div>
  </div>
</template>

<script>

export default {
  name: 'posts',
  data () {
    return {
      current: 0,
      posts: [],
    }
  },
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
