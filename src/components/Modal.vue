<template>
<!-- vue自身的动画效果 -->
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask" @touchmove.prevent @mousewheel.prevent></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a
            href="javascript:;"
            v-on:click="$emit('cancel')"
            class="icon-close"
          ></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <div class="btn-group">
            <!-- 确定按钮 -->
            <a
              href="javascript:;"
              class="btn"
              v-if="btnType == 1"
              v-on:click="$emit('submit')"
              >{{ sureText }}</a
            >
            <!-- 取消按钮 -->
            <a
              href="javascript:;"
              class="btn"
              v-if="btnType == 2"
              v-on:click="$emit('cancel')"
              >{{ cancelText }}</a
            >
          </div>
          <!-- 确定取消都有 -->
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{
              sureText
            }}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              v-on:click="$emit('cancel')"
              >{{ cancelText }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  // 组件的名称，方便调试更好地定位
  name: "modal",
  props: {
    // 父组件传过来的参数
    modalType: {
      // 指定传值类型
      type: String,
      // 弹框类型:小small,中middle,大large,表单form
      // 默认值
      default: "form",
    },
    // 弹框标题
    // 指定传值类型,不写默认值可简写成下面
    title: String,
    //按钮类型：1：确定按钮 2：取消按钮 3：确定取消都有
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>
<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/modal.scss";
@import "../assets/scss/button.scss";
</style>