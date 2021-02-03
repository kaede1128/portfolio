<script>	
function landingpage() {
    $('#loader').fadeOut(1500);
}
const position = document.documentElement;
position.addEventListener("mousemove", e => {
    position.style.setProperty('--x', e.clientX + 'px');
});

</script>
