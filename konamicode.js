cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(function () {
    var colors = ['red', 'green', 'blue']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
    var active = 0;
    setInterval(function(){
        document.querySelector('body').style.background = colors[active];
        active++;
        if (active == colors.length) active = 0;
    }, 30)
  }),
document.body.style.backgroundColor = "#a4c2f4";
});
