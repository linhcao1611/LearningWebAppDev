var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];
	
	var screenshots=["1","2","3","4"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            } else if($element.parent().is(":nth-child(4)")){
				// display 4 screenshots
				$content=$("<ul>");
				$str1="images/";
				$str2=".jpg";
				$str3="Screenshot #";
				
				screenshots.forEach(function (todo) {
					$content.append($("<p>"));
					$content.append($("<a>").addClass("group4").attr("href",$str1 + todo+$str2).text($str3 +todo));										
				});		
				
			}
			
            $("main .content").append($content);
			$('a.group4').colorbox({  rel:'group4', slideshow:true });

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
