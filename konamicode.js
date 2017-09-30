cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  swal('ALL YOUR EASTER EGG ARE BELONG TO US.'),
  console.log =
	$.ajax({
      type: "GET",
      url: "https://api.scratch.mit.edu/users/" + DeleteThisAcount,
      success: function(e) {
          $.ajax({
              type: "POST",
              dataType: "html",
              url: "/site-api/comments/user/" + DeleteThisAcount + "/add/",
              data: JSON.stringify({
                  content: document.getElementsByName("I tried the Konami Code")[0].value;
                  parent_id: "",
                  commentee_id:''
              });
          };
		},
document.body.style.backgroundImage = "url('images/pic01.jpg')";
});
