<script>
import { Minimum } from "laravel-nova";
import Partitionmetric from "../../../../../nova/resources/js/components/Metrics/Partitionmetric.vue";
export default {
  extends: Partitionmetric,

  created() {
    if (this.card.refreshWhenActionRuns) {
      Nova.$on("action-executed", () => this.fetch());
    }

    if (this.resourceName) {
      Nova.$on("resources-loaded", () => this.fetch());
    }
  },

  methods: {
    fetch() {
      this.loading = true;
      Minimum(Nova.request().get(this.metricEndpoint, this.metricPayload)).then(
        ({
          data: {
            value: { value }
          }
        }) => {
          this.chartData = value;
          this.loading = false;
        }
      );
    }
  },
  computed: {
    metricPayload() {
      let payload = { params: {} };
      if (this.resourceName) {
        const filters = this.$route.query[`${this.resourceName}_filter`];
        payload.params.filters = filters;
      }
      return payload;
    }
  }
};
</script>
