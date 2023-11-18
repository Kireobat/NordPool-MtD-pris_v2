export function toggleDarkMode(root: HTMLElement) {
    if (root.classList.contains('dark')) {
        // If dark mode is currently enabled, disable it
        root.classList.remove('dark');
        root.classList.add('light');
    } else {
        // If dark mode is currently disabled, enable it
        root.classList.remove('light');
        root.classList.add('dark');
    }
}