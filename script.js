* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none; /* Hide default cursor */
}

body {
    font-family: Arial, sans-serif;
    background: #00000;
    color: white;
    text-align: center;
    overflow: hidden;
}

nav {
    background: rgba(0, 0, 0, 0);
    padding: 10px;
    position: fixed;
    top: 0;
    width: 100%;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: cyan;
}

#content {
    margin-top: 60px;
}

.page {
    display: none;
    padding: 20px;
}

.page.active {
    display: block;
}

canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

/* Custom Cursor */
#cursor {
    position: absolute;
    width: 10px;
    height: 10px;
    background: red;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.7);
    pointer-events: none;
    transform: translate(-50%, -50%);
}

/* Click animation */
.click-effect {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 2px solid cyan;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    animation: pulse 0.5s ease-out;
}

@keyframes pulse {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
    }
}
