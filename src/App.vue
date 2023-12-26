<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
const prefixCls = import.meta.env.VITE_APP_NAME;
console.log('prefixCls',prefixCls)
</script>

<template>
    <ConfigProvider :prefix-cls="prefixCls">
        <router-view />
    </ConfigProvider>
</template>

<style scoped></style>
