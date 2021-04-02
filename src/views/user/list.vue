<template>
  <div class="app-container">

    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="teacherQuery.name" placeholder="姓名"/>
      </el-form-item>

      <el-form-item>
        <el-select v-model="teacherQuery.level" clearable placeholder="性别">
          <el-option :value="1" label="男"/>
          <el-option :value="2" label="女"/>
        </el-select>
      </el-form-item>
      <!-- 自己加的 -->
      <el-form-item>
        <el-input v-model="teacherQuery.name" placeholder="所属学院"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="teacherQuery.name" placeholder="实验室"/>
      </el-form-item>

      <el-form-item label="出生日期">
        <el-date-picker
          v-model="teacherQuery.begin"
          type="datetime"
          placeholder="选择开始时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="teacherQuery.end"
          type="datetime"
          placeholder="选择截止时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>

    <!-- 表格 -->
    <el-table
      :data="list"
      border
      fit
      highlight-current-row>

      <el-table-column
        label="序号"
        width="70"
        align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="name" label="姓名" width="80" />

      <el-table-column label="性别" width="80">
        <template slot-scope="scope">
          {{ scope.row.level === 1 ? '男':'女' }}
        </template>
      </el-table-column>

      <el-table-column prop="birth" label="出生日期" />
      <el-table-column prop="role" label="身份" />
      <el-table-column prop="college" label="学院" />
      <el-table-column prop="lab" label="实验室" />

      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="$router.push('/user/edit/' + scope.row.id)">修改</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />

  </div>
</template>

<script>
import { getUserPage, deleteById } from '@/api/user'

export default {
    data() {
      return {
        list: null,//查询之后接口返回集合
        page: 1,//当前页
        limit: 10,//每页记录数
        total: 0,//总记录数
        teacherQuery: {} //条件封装对象
      }
    },
    created() {
      this.getList() 
    },
    methods:{
      getList(page = 1) {
        this.page = page
        getUserPage(this.page, this.limit, this.teacherQuery)
          .then(response => {
            console.log(response)
            this.list = response.data.rows
            this.total = response.data.total
          }) 
      },
      resetData() {
        this.teacherQuery = {}
        this.getList()
      },
      removeDataById(id) {
        this.$confirm('此操作将删除用户记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
          deleteById(id).then(_ => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            this.getList()
          })
        })
      }
    }
}
</script>