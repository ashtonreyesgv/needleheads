// little "open now" pill. checks the clock once when it shows up, which is plenty for a page visit
import { useState } from 'react';
import { getOpenStatus } from '../../utils/hours.js';

export default function OpenBadge({ tone = 'light' }) {
    const [status] = useState(() => getOpenStatus());
    const dark = tone === 'dark';

    return (
        <span className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-bold ${dark ? 'bg-canvas-50/10 text-canvas-50' : 'bg-navy-900/8 text-navy-900'}`}>
            <span className={`h-2.5 w-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500' : 'bg-sign-500'}`} />
            <span>
                {status.label}
                {status.detail && <span className={dark ? 'text-canvas-50/65' : 'text-navy-900/60'}> · {status.detail}</span>}
            </span>
        </span>
    );
}
