cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  swal({
    title: 'All your easter egg are belong to us!',
    text: "If you are prone to seizures please press cancel.",
    type: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Click for magic!'
  }).then(function () {
    var colors = ['red', 'green', 'blue']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
    var active = 0;
    setInterval(function(){
        document.querySelector('body').style.background = colors[active];
        active++;
        if (active == colors.length) active = 0;
    }, 300)
  }),
document.body.style.backgroundColor = "#a4c2f4";
});
