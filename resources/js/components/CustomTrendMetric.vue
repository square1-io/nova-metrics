<script>
import TrendMetric from "../../../../../nova/resources/js/components/Metrics/TrendMetric.vue";
export default {
    extends: TrendMetric,

    created() {
        if (this.hasRanges) {
            this.selectedRangeKey = this.card.ranges[0].value;
        }

        if (this.card.refreshWhenActionRuns) {
            Nova.$on("action-executed", () => this.fetch());
        }

        if (this.resourceName) {
            Nova.$on("resources-loaded", () => this.fetch());
        }
    },
    computed: {
        metricPayload() {
            const payload = {
                params: {
                    timezone: this.userTimezone,
                    twelveHourTime: this.usesTwelveHourTime
                }
            };

            if (this.hasRanges) {
                payload.params.range = this.selectedRangeKey;
            }

            if (this.resourceName) {
                const filters = this.$route.query[
                    `${this.resourceName}_filter`
                ];
                payload.params.filters = filters;
            }

            return payload;
        }
    }
};
</script>
