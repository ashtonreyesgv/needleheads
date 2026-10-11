// turns the quote form into a mailto: link. there's no server behind the site yet, so the form opens
// the visitor's own email app with everything typed out for them
export function buildQuoteEmail(form, to) {
    const subject = `Quote request from ${form.name}${form.service ? `: ${form.service}` : ''}`;

    const lines = [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Looking for: ${form.service || 'Not sure yet'}`,
        `How many: ${form.quantity || 'Not sure yet'}`,
        `Needed by: ${form.neededBy || 'No set date'}`,
        '',
        form.details,
        '',
        '(Attach your logo or a photo to this email if you have one.)'
    ];

    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}
