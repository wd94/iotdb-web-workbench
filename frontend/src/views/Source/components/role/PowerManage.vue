<!-- Right part of role management -->
<template>
  <div id="role-tabs">
    <el-tabs v-if="roleList.length" v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane :label="$t('sourcePage.baseConfig')" name="baseConfig">
        <role-info :roleInfo="current" :role-list="roleList"></role-info>
      </el-tab-pane>
      <template v-if="current.id">
        <el-tab-pane :label="$t('sourcePage.dataManagePrivilege')" name="dataManagePrivilege">
          <data-manage :roleInfo="current"></data-manage>
        </el-tab-pane>
        <el-tab-pane :label="$t('sourcePage.permitPermission')" name="permitPermission">
          <auth-manage :roleInfo="current" :base-info="baseInfo"></auth-manage>
        </el-tab-pane>
      </template>
    </el-tabs>
    <div v-else class="no-data">{{ $t('common.noData') }}</div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import RoleInfo from './RoleInfo.vue';
import AuthManage from './AuthManage';
import DataManage from './DataManage';
export default {
  name: 'PowerManage',
  props: {
    current: {
      type: Object,
      default: () => {},
    },
    roleList: {
      type: Array,
      default: () => [],
    },
    baseInfo: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const { t, locale } = useI18n();
    const activeTab = ref('baseConfig');
    const handleClick = () => {};
    watch(
      () => props.current,
      () => {
        activeTab.value = 'baseConfig';
      }
    );

    return {
      t,
      locale,
      activeTab,
      handleClick,
    };
  },
  components: {
    RoleInfo,
    AuthManage,
    DataManage,
  },
};
</script>
<style scoped lang="scss">
#role-tabs {
  flex: 1;
  &:deep(.el-tabs) {
    margin-left: 20px;
    .el-tabs__header {
      .el-tabs__nav {
        .el-tabs__item.is-active {
          background-color: transparent !important;
          border: 0;
        }
      }

      margin-bottom: 4px;
      background-color: #fff;
    }
  }

  .no-data {
    color: #7a859e;
    padding: 20px;
    height: 100%;
    width: 100%;
    background-color: #f9fbfc;
    box-sizing: border-box;
    font-size: 12px;
  }
}
.el-tabs__content {
  margin-top: 4px;
  background-color: #f9fbfc;
  height: calc(100% - 4px);
}
</style>
