<template>
  <a-dropdown
    v-if="currentUser && currentUser.name"
    placement="bottomRight"
  >
    <span class="ant-pro-account-avatar">
      <!-- <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" class="antd-pro-global-header-index-avatar" /> -->
      <span>{{ currentUser.name }}</span>
    </span>
    <template #overlay>
      <a-menu
        class="ant-pro-drop-down menu"
        :selected-keys="[]"
      >
        <a-menu-item
          v-if="menu"
          key="center"
          @click="handleToCenter"
        >
          <UserOutlined />
          个人中心
        </a-menu-item>
        <!-- <a-menu-item v-if="menu" key="settings" @click="handleToSettings">
          <a-icon type="setting" />
          个人设置
        </a-menu-item> -->
        <a-menu-divider v-if="menu" />
        <a-menu-item
          key="logout"
          @click="handleLogout"
        >
          <LogoutOutlined />
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <span v-else>
    <a-spin
      size="small"
      :style="{ marginLeft: 8, marginRight: 8 }"
    />
  </span>
</template>

<script>
import { Modal } from 'ant-design-vue';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons-vue';

export default {
    name: 'AvatarDropdown',
    components: {
        UserOutlined,
        LogoutOutlined,
    },
    props: {
        currentUser: {
            type: Object,
            default: () => null,
        },
        menu: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        handleToCenter() {
            this.$router.push({ path: '/vue2/user' });
        },
        handleToSettings() {
            this.$router.push({ path: '/vue2/account/settings' });
        },
        handleLogout(e) {
            Modal.confirm({
                title: '提示',
                content: '确定要注销登录吗？',
                onOk: () => {
                    // return this.$store.dispatch('Logout').then(() => {
                    //   this.$router.push({ name: 'login' })
                    // })
                    this.$store.dispatch('Logout');
                },
                onCancel() {},
            });
        },
    },
};
</script>

<style lang="less" scoped>
.ant-pro-drop-down {
    :deep(.action) {
        margin-right: 8px;
    }
    // :deep(.ant-dropdown-menu-item) {
    //     min-width: 160px;
    // }
}
</style>
