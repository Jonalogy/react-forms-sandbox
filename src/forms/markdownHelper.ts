export function jsonSource(raw: Record<string, unknown>): string {
    return `
##### Form State
\`\`\`JSON
${JSON.stringify(raw, replacer, 2)}
\`\`\`
`;
}

function replacer(key, value) {
    // Filtering out properties
    if (!value) {
        return undefined;
    }

    if (typeof value === 'function') {
        return '() => {...}';
        // return `${value}`
    }
    return value;
}
