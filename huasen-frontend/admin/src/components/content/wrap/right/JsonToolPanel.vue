<!--
 * @Autor: huasenjio
 * @Date: 2023-03-18 16:19:38
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-29 23:33:09
 * @Description: 
-->
<template>
  <HsDialog title="JSON编辑器" :fullscreen="true" :visible="visible" :buttons="{ cancel: '关 闭' }" @closeDialog="close" @close="close">
    <div>
      <div class="json-tool-top-panel">
        <div class="title">字符缩进</div>
        <el-radio-group class="radio-group" v-model="retract" @input="handleRetract">
          <el-radio :label="0">0个字符</el-radio>
          <el-radio :label="2">2个字符</el-radio>
          <el-radio :label="4">4个字符</el-radio>
        </el-radio-group>
      </div>
      <el-tabs class="json-tool-body-panel" v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="操作编辑" name="edit">
          <div class="json-tool-panel-left" :class="{ error: isError }">
            <el-input type="textarea" placeholder="请输入JSON字符串" :autosize="{ minRows: 4 }" v-model="jsonText" @input="handleCheckJSON"></el-input>
          </div>
        </el-tab-pane>
        <el-tab-pane label="内容预览" name="view">
          <div class="json-tool-panel-right">
            <VueJsonEditor class="json-edit" v-model="json" :showBtns="false" :expandedOnStart="true"></VueJsonEditor>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </HsDialog>
</template>

<script>
import HsDialog from '@/components/common/dialog/Dialog.vue';
import VueJsonEditor from 'vue-json-editor';
export default {
  name: 'JsonToolPanel',

  components: {
    HsDialog,
    VueJsonEditor,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      activeName: 'edit', // view || edit
      retract: 0,
      transfer: 0,
      isError: true,
      jsonText: '',
      json: {},
    };
  },

  methods: {
    handleRetract(val) {
      if (!this.isError) {
        this.jsonText = JSON.stringify(JSON.parse(this.jsonText), null, val);
      } else {
        this.$tips('error', '格式化失败', 'top-right', 1200);
      }
    },

    handleTabClick(tabVM) {
      if (tabVM.name === 'view') {
        if (!this.isError) {
          this.json = JSON.parse(this.jsonText);
        } else {
          this.$tips('error', '请检查JSON是否正确', 'top-right', 1200);
        }
      }
    },

    validJSON(val, notify = true) {
      try {
        let obj = JSON.parse(val);
        if (notify) this.$tips('error', 'JSON字符串解析失败', 'top-right', 1200);
        return Object.prototype.toString.call(obj) === '[object Object]' || Array.isArray(obj) ? true : false;
      } catch (err) {
        return false;
      }
    },

    handleCheckJSON(val) {
      if (this.validJSON(val)) this.isError = false;
    },

    close() {
      this.$emit('update:visible', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.json-tool-top-panel {
  .title {
    font-size: 16px;
  }
  .radio-group {
    margin: 8px auto;
  }
}
.json-tool-body-panel {
  margin-top: 20px;
  .json-tool-panel-left {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px dashed var(--gray-500);
    background-color: var(--gray-50);
  }
  .json-tool-panel-right {
    width: 100%;
    ::v-deep .json-edit {
      height: 100%;
      .jsoneditor-vue {
        width: 100%;
        height: 100%;
      }
    }
  }
  .error {
    border-color: var(--red-400);
  }
}
</style>
