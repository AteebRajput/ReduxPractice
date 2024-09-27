import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default function Timeago({ timestamp }) {
    let timeago = '';

    if (timestamp) {
        const date = parseISO(timestamp);
        const timeperiod = formatDistanceToNow(date);
        timeago = `${timeperiod} ago`;
    }

    return (
        <span>
            &nbsp; <i>{timeago || 'Unknown time'}</i>
        </span>
    );
}

// Prop type validation
Timeago.propTypes = {
    timestamp: PropTypes.string.isRequired, // timestamp should be a string and required
};
