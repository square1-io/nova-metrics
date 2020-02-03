<?php

namespace Square1\NovaMetrics;

use Laravel\Nova\Metrics\Partition;

class CustomPartition extends Partition
{
    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'CustomPartitionMetric';
    }
}
