// Settings JavaScript

// Function to set the theme
function setTheme(theme) {
    document.body.className = theme; // Set the body class to the selected theme
}

// Function to set the game server
function setGameServer(server) {
    // Get all game links
    var gameLinks = document.querySelectorAll('.game-link');

    // Iterate over each game link and update the href attribute
    gameLinks.forEach(function(link) {
        var href = link.getAttribute('data-original-href');
        link.href = href.replace('projectassets.teacherease.net', server);
    });
}

// Function to handle theme selection
function handleThemeSelection(theme) {
    switch (theme) {
        case 'light':
            setTheme('light');
            break;
        case 'dark':
            setTheme('dark');
            break;
    }
}

// Function to handle game server selection
function handleServerSelection(server) {
    switch (server) {
        case 'teacherease':
            setGameServer('projectassets.teacherease.net');
            break;
        case 'schoolfacts':
            setGameServer('projectassets.schoolfacts.xyz');
            break;
    }
}

// Event listener for theme selection
document.querySelectorAll('input[name="theme"]').forEach(function(input) {
    input.addEventListener('change', function() {
        var theme = this.value; // Get the selected theme
        handleThemeSelection(theme); // Handle theme selection
    });
});

// Event listener for game server selection
document.querySelectorAll('input[name="server"]').forEach(function(input) {
    input.addEventListener('change', function() {
        var server = this.value; // Get the selected game server
        handleServerSelection(server); // Handle game server selection
    });
});
