<template>
  <div class="container">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">设置</el-breadcrumb-item>
        <el-breadcrumb-item>商品设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <div class="search-container">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
        >
          <el-form-item label="商品名称">
            <el-input v-model="formInline.name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品类型">
            <el-select v-model="formInline.type" placeholder="请选择">
              <el-option label="类型1" value="1"></el-option>
              <el-option label="类型2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="formInline.create_time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-button type="primary" size="large" @click="dialogFormVisible = true">新建商品</el-button>
      </div>
      <div class="table-container">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="id"
            label="ID">
          </el-table-column>
          <el-table-column
            prop="info"
            label="商品信息">
          </el-table-column>
          <el-table-column
            prop="status"
            label="商品状态">
          </el-table-column>
          <el-table-column
            prop="type"
            label="商品类型">
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="创建时间">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button type="text"  class="to-see" v-if=" scope.row.status === 'off'" @click="handleEdit('on', scope.row)">上架</el-button>
              <el-button type="text"  class="to-see" v-else @click="handleEdit('off', scope.row)">下架</el-button>
              <el-button type="text"  class="to-see" @click="handleEdit('edit', scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <el-dialog class="demo-dialog" title="弹框" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择商品类型">
            <el-option label="类型一" value="1"></el-option>
            <el-option label="类型二" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        formInline: {
          name: '',
          type: '',
          create_time: '',
        },
        tableData: [
          {
            id: '1',
            info: '商品1',
            status: '上架',
            type: '类型',
            create_time: '2020-03-31',
          }
        ],
        currentPage: 1,
        pageSize: 20,
        total: 0,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          type: ''
        }
      }
    },
    methods: {
      // 查询
      onSearch () {

      },
      handleEdit(type, params) {
        console.log(type, params)
      },
      handleSizeChange(val) {
        console.log(val)
      },
      handleCurrentChange(val) {
        console.log(val)
      }
    }
  }
</script>
