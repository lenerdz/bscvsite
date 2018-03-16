document.getElementById('cor').onclick = function () { 
    if (document.getElementById('theme_css').href.includes('css/white.css')) {
        document.getElementById('theme_css').href = 'css/black.css';
    } else {
        document.getElementById('theme_css').href = 'css/white.css';
    }
    
};