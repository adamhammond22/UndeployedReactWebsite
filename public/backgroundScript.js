/* This script is used with index.html to make the loading screen consistant with the theme
    This script is used in index.html twice 
        1 - to query localStorage and determine the correct background color 
        2 - to override body's styling before it loads and flashbangs the user */
/* Hack-ey script to avoid flashbang*/

var color;

try {
    /* We try to set the background color, this will only work within the
    second script call, because the body will have been created */
    if (!color) color = '#faf4ec'
    document.body.style.backgroundColor = color;
} catch {
    /* We will catch on the first call to this function, and set our correct background state beforehand.
    localstorage is slow and we need to call it in advance. */
    const theme = localStorage.getItem('themeState') || 'light';
    color = theme == 'dark' ? '#121212' : '#faf4ec';
}