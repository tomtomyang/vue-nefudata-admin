<template>
  <div class="container">
    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog v-dialogDrag title="提示" :visible.sync="dialogVisible" width="200px" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor> -->
    <div class="info-container">
      <el-avatar icon="el-icon-user-solid"
                 size="100"></el-avatar>
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="70px"
               class="demo-ruleForm">
        <el-form-item label="用户名"
                      prop="pass">
          <el-input v-model="ruleForm.pass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="age">
          <el-input v-model.number="ruleForm.age"
                    type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false,
      // 富文本编辑器
      content: '',
      editorOption: {},
      ruleForm: {
        pass: 'test_user',
        checkPass: 'hhhhhhh',
        age: 'hhhhhhh'
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    // 富文本编辑器

    // 准备编辑器
    onEditorReady (editor) { },
    // 失去焦点事件
    onEditorBlur () { },
    // 获得焦点事件
    onEditorFocus () { },
    // 内容改变事件
    onEditorChange () { },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }

  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill;
    },
  }

}
</script>

<style lang='less' scoped>
.info-container {
  display: flex;
  width: 83%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.CodeMirror-hints {
  z-index: 9999 !important;
}
.codeEditor-menu {
  margin-bottom: 10px;
}
/deep/.el-avatar {
  width: 101px;
  height: 100px;
  line-height: 100px;
  margin-bottom: 30px;
}
/deep/.el-avatar--icon {
  font-size: 50px;
}
</style>
