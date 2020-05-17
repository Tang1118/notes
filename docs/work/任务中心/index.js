export default {
  name: '',
  components: {},
  // filters: {},
  // directives: {},
  mixins: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // beforeCreate() {},
  created() {
  },
  // beforeMount() {},
  mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  beforeDestroy() {
    // 页面销毁前 清除轮训
    this.clearLoop()
  },
  // destroyed() {},
  methods: {
    // 设置空间
    async setSpace() {
      // 静默 切换空间 todo 这里 space 要从后端获取ID，然后到空间列表遍历获取详情
      const space = {}
      await this.$EventBus.$emit('SpaceHandleChange', {
        type: 'organ',
        space,
      })
      // 延时跳转
      setTimeout(() => {
        this.$router.push({ path: '/contract' })
      }, 30)
    },
    // 初始化 任务列表
    async initTask() {
      // 获取接口
      const res = await this.getTaskList()
      
      // 如果有进行中的任务 显示弹窗 特殊处理 5秒 后关闭（字段待定）
      if (res.isTask) {
        this.$message({
          type: 'warning',
          message: '您有进行中的任务，请查看处理',
          duration: 5000,
        })
      }
    },
    // 获取任务列表
    async getTaskList() {
      // 异步获取数据
      // ...
    },
    // 轮训更新列表
    loopTaskList() {
      // 轮训反复
      this.loopTaskId = setInterval(() => {
        this.getTaskList()
      }, 1000 * 60)
    },
    // 清除轮训
    clearLoop() {
      clearInterval(this.loopTaskId)
    },
  },
}
