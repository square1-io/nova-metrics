Nova.booting((Vue, router, store) => {
  Vue.component('CustomTrendMetric', require('./components/CustomTrendMetric'))
  Vue.component('CustomValueMetric', require('./components/CustomValueMetric'))
  Vue.component('CustomPartitionMetric', require('./components/CustomPartitionMetric'))
})
