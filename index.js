function addingEventListener() {

    const input = document.getElementById('input');
    input.addEventListener('mousedown', function() {
        alert('I was clicked!');
});

} 

addingEventListener();