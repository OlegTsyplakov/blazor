export function alsorecomended(){
    var clicked = false;
    var items = document.getElementsByClassName('also-recommended-item-container');
    var num = items.length;
    var number_containers = 4;
    var left = ["left:0;opacity:1;", "left:25%;opacity:1;", "left:50%;opacity:1;", "left:75%;opacity:1;"];
    var first = 0;
    var last = num - 1;

    if (num == 1) {
        items[0].setAttribute("style", "left:38%;opacity:1;");
    }
    if (num == 2) {
        items[0].setAttribute("style", "left:25%;opacity:1;");
        items[1].setAttribute("style", "left:51%;opacity:1;");
    }
    if (num == 3) {
        items[0].setAttribute("style", "left:13%;opacity:1;");
        items[1].setAttribute("style", "left:37%;opacity:1;");
        items[2].setAttribute("style", "left:63%;opacity:1;");
    }
    if (num == 4) {
        items[0].setAttribute("style", "left:0%;opacity:1;");
        items[1].setAttribute("style", "left:25%;opacity:1;");
        items[2].setAttribute("style", "left:50%;opacity:1;");
        items[3].setAttribute("style", "left:75%;opacity:1;");
    }
    if (num > number_containers) {
        $("#right-arrow").css("opacity", "0.8").css("pointer-events", "all");
        $("#left-arrow").css("opacity", "0.8").css("pointer-events", "all");
        function map() {
            for (var i = 0; i < num; i++) {
                if (i < number_containers) {

                    items[i].setAttribute("style", left[i]);
                }
                else {

                    items[i].setAttribute("style", "left:100%;opacity:0;");
                }

            }
            clicked = false;
        }


        map();

        $("#right-arrow").click(function () {
            if (!clicked) {
                clicked = true;

                var clone = items[first].cloneNode(true);
                items[first].setAttribute("style", "left:-25%;opacity:1;");
                items[first + 1].setAttribute("style", "left:0%;opacity:1;");
                items[first + 2].setAttribute("style", "left:25%;opacity:1;");
                items[first + 3].setAttribute("style", "left:50%;opacity:1;");
                items[first + 4].setAttribute("style", "left:75%;opacity:1;");
                clone.setAttribute("style", "left:100%;");
                document.getElementById('also-recommended-show').appendChild(clone);

                setTimeout(function () {
                    items[first].remove();
                    map();
                }, 600);

            }



        });
        $("#left-arrow").click(function () {
            if (!clicked) {
                clicked = true;

                var clone = items[last].cloneNode(true);
                items[last].remove();
                clone.setAttribute("style", "left:-25%;");
                document.getElementById('also-recommended-show').prepend(clone);
                setTimeout(function () {
                    map();
                }, 300);
            }
        }

        );
    }
    else {

        $("#right-arrow").css("opacity", "0").css("pointer-events", "none");
        $("#left-arrow").css("opacity", "0").css("pointer-events", "none");
    }
}