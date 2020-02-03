<?php

namespace Square1\NovaMetrics;

use Laravel\Nova\Metrics\Value;

class CustomValue extends Value
{
    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'CustomValueMetric';
    }
}
