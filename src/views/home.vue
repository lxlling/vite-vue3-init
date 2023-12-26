<template>
    <div>
        111
        <img src="@/assets/images/logo.svg" alt="">
    </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { getInfo } from '@/api/home';

const appStore = useAppStore();
const a = async ()=>{
    const res = await getInfo('sad');
    console.log('res',res.data.records)
}
</script>