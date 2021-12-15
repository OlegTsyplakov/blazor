export function hf(){



var lang = $("html").attr("lang");
function SmetaInOut() {
    $(".smeta-login-container").load("/" + lang + "/SmetaLogin", function () {
    });
}
function cdekAddressShow() {
    $(".cartpopup-empty-container").fadeIn();
    $(".cartpopup-empty-container").html("<div id=\"loading\"></div>");
    $(".cartpopup-empty-container").load("/" + lang + "/Cdek", { "city_code": localStorage.getItem("Cdek"), "city_name": localStorage.getItem("City"), "city_latitude": localStorage.getItem("Latitude"), "city_longitude": localStorage.getItem("Longitude") }, function () {
        setTimeout(function () {
            $("ymaps").addClass("x");
        }, 600);
    });
}
function deleteSelected() {
    localStorage.removeItem("comment");
    var allWared = $("[data-wareid]");
    allWared.filter("input").val("");
}
function hideCartBar() {
    $("#cartBar").css("bottom", "-30px");
    $(".calc-delivery-container").fadeOut();
    $(".popup-cart-container").css("bottom", "-1000px");
    $(".popup-cart-container-load").html("");

}
function allArrow() {
    document.getElementById('arrow').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
    document.getElementById('arrow2').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
    document.getElementById('arrow3').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
    document.getElementById('arrow4').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
}
function allNav() {
    document.getElementsByClassName('dropdown-content')[0].setAttribute("style", "pointer-events: none; opacity: 0; display: block;");
    document.getElementsByClassName('dropdown-content2')[0].setAttribute("style", "pointer-events: none; opacity: 0; display: flex; text-align: center;");
    document.getElementsByClassName('dropdown-content3')[0].setAttribute("style", "pointer-events: none;  opacity: 0; display: flex;");
    document.getElementsByClassName('dropdown-content4')[0].setAttribute("style", "pointer-events: none;  opacity: 0; display: flex;");
}
function orderNumber(num) {
    var number = "" + num + "/" + $.now();
    $(".data-order-number").text(number);
}

function filterShow() {
    $(".filter-apply-new").css("background-color", "#2672c3");
    $(".filter-apply-new").css("pointer-events", "auto");
    filterOpen();
}
function filterOpen() {
    if ($(".filter-form-container").css("display") == "none") {
        $(".filter-form-container").fadeIn();
        $(".filter-icon-button-text").text("Скрыть фильтры");
        $(".filter-icon-button-text").css("color", "#1a1a1a");
        $(".filter-icon-button").css("background", "url('../../../img/new/lk/svg/filter-black.svg')  no-repeat");
    }
    else {
        filterClose();
    }
}
function filterClose() {
    $(".filter-form-container").fadeOut();
    $(".filter-icon-button-text").text("Показать фильтры");
    $(".filter-icon-button-text").css("color", "#999");
    $(".filter-icon-button").css("background", "url('../../../img/new/lk/svg/filter.svg')  no-repeat");
}
//Начало autocomplete
var autocomplete_items = [];
var autocomplete_url = [];
$(function () {
    function autocomplete(inp, arr) {

        var currentFocus;

        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;

            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;


            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");

            this.parentNode.appendChild(a);

            for (i = 0; i < arr.length; i++) {


                if (arr[i].toLowerCase().indexOf(val.toLowerCase()) != -1) {


                    b = document.createElement("DIV");
                    b.setAttribute("data-url", "/" + lang + "/cat/" + autocomplete_url[i]);

                    if (arr[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                    }
                    else {
                        b.innerHTML = arr[i].substr(0, arr[i].toLowerCase().indexOf(val.toLowerCase()));
                        b.innerHTML += "<strong>" + arr[i].substr(arr[i].toLowerCase().indexOf(val.toLowerCase()), val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(arr[i].toLowerCase().indexOf(val.toLowerCase()) + val.length);
                    }

                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                    b.addEventListener("click", function () {

                        document.location.href = $(this).attr("data-url");

                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });


        function closeAllLists(elmnt) {

            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }

        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }

    autocomplete(document.getElementById("search-input"), autocomplete_items);


});
//Конец autocomplete
//Начало убрать scrollbar
function addScrollbar() {
    $("body").css("padding-right", "0px");
    $(".line1-empty-nav").css("padding-right", "0px");
}
function removeScrollbar() {
    var scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';
    $(".line1-empty-nav").css("padding-right", scrollbarWidth);
    $("body").css("padding-right", scrollbarWidth);
}
//Конец убрать scrollbar
//Начало убрать #_=_
$(window).on('load', function (e) {
    if (window.location.hash == '#_=_') {
        window.location.hash = ''; // for older browsers, leaves a # behind
        history.pushState('', document.title, window.location.pathname); // nice and clean
        e.preventDefault(); // no page reload
    }
})
//Конец убрать #_=_
$(function () {
    // Начало фильтр новый
    $(document).on("click", ".filter-icon-button-container", function (event) {
        event.stopPropagation();
        filterOpen();
    });

    var check_filter = false;
    $(document).on("click", ".filter-form-item", function () {

        checkFilter(check_filter);
    });
    function checkFilter(check_filter) {
        $(".filter-form-item").each(function () {

            if ($("input", this).is(':checked')) {
                check_filter = true;
            }

        });
        if (check_filter) {
            $(".filter-apply-new").css("background-color", "#2672c3");
            $(".filter-apply-new").css("pointer-events", "auto");
        }
        else {
            $(".filter-apply-new").css("background-color", "#999");
            $(".filter-apply-new").css("pointer-events", "none");
        }
    }
    //Конец фильтр новый
});

// Начало сообщения
$(function () {
    var num = parseInt($(".messages-count").text());
    $(".blob").click(function () {
        $(".messages-container").fadeIn();
        $(".messages-container").on("click", ".message-x", function () {
            $(".messages-container").fadeOut();
            if (num == 0) {
                $(".blobs-container").fadeOut();
            }
        });
    });
    const items = document.querySelectorAll(".message-accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
            items[i].nextElementSibling.setAttribute("style", "height:0px");
            this.nextElementSibling.setAttribute("style", "height:auto");
        }

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
            var height = this.nextElementSibling.offsetHeight;
            this.nextElementSibling.setAttribute("style", "height:" + height + "px");
            readMessage(this.getAttribute("data-message-id"));
            if (num > 0) {
                num--;
                $(".messages-count").text(num);
            }
        }
        else {
            this.nextElementSibling.setAttribute("style", "height:0px");
        }
    }

    Array.from(items).forEach(item => item.addEventListener('click', toggleAccordion));

    function readMessage(id) {
        let formData = new FormData();
        formData.append("id", id);


        $.ajax({
            url: '/' + lang + '/ReadMessage',
            type: 'POST',
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function () {
            },
            error: function () {
            }
        });
    }


});
//Конец сообщения

//Начало checkbox регистрация
var inn;
var inn_cart = false;
var reg_count = true;
var reg_ip = false;
function checkInputINN(inn) {
    if (inn.length == 10 && Number.isInteger(Number(inn)) && reg_count && !reg_ip) {
        reg_count = false;
        getINN(inn);
    }
    if (inn.length == 12 && Number.isInteger(Number(inn)) && reg_count && reg_ip) {
        reg_count = false;
        getINN(inn);
    }
}
function getINN(inn) {
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    var token = "5fc1f6b84089fe974849befd3f4fe8af18819a1a";
    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({ query: inn })
    }
    fetch(url, options)
        .then(response => response.text())
        .then(result => fillFromINN(result, inn_cart))
        .catch(error => console.log("error", error));

}
function fillFromINN(result, inn_cart) {

    var data = JSON.parse(result);
    if (inn_cart) {
        if (data.suggestions[0].data.state.status == "ACTIVE") {
            $("#Name_Ru").val(data.suggestions[0].value);
            $("#INN").val(inn);
            $("#UrAddress").val(data.suggestions[0].data.address.unrestricted_value);
            if (inn.length == 12) {
                $("#ContactPerson").val(data.suggestions[0].data.name.full);
            }
            else {
                if (data.suggestions[0].data.branch_count == 0) {
                    $("#KPP").val(data.suggestions[0].data.kpp);
                }
                $("#ContactPosition").val(data.suggestions[0].data.management.post);
                $("#ContactPerson").val(data.suggestions[0].data.management.name);
            }
            $("#v-gray-cart").addClass("v-green");
            setTimeout(function () {
                $("#reg_inn_popup_container2").fadeOut();
                $("#checkINN2").val("");
                $("#v-gray-cart").removeClass("v-green");
                reg_count = true;
            }, 600);

        } else {
            $("#checkINN2").val("ликвидирована");
            reg_count = true;
        }
    }
    else {
        if (data.suggestions[0].data.state.status == "ACTIVE") {
            $("#RegName").val(data.suggestions[0].value);
            $("#RegTIN").val(inn);
            $("#RegUrAddress").val(data.suggestions[0].data.address.unrestricted_value);
            if (inn.length == 12) {
                $("#RegContactPerson").val(data.suggestions[0].data.name.full);
            }
            else {
                if (data.suggestions[0].data.branch_count == 0) {
                    $("#RegKPP").val(data.suggestions[0].data.kpp);
                }
                $("#RegContactPosition").val(data.suggestions[0].data.management.post);
                $("#RegContactPerson").val(data.suggestions[0].data.management.name);
            }
            $("#v-gray").addClass("v-green");
            setTimeout(function () {
                $("#reg_inn_popup_container").fadeOut();
                $("#checkINN").val("");
                $("#v-gray").removeClass("v-green");
                reg_count = true;
            }, 600);

        } else {
            $("#checkINN").val("ликвидирована");
            reg_count = true;
        }
    }
}
$(function () {
    $(".login-container").on("input propertychange", "input[id='checkINN']", function () {
        inn = $("input[id='checkINN']").val();
        reg_ip = $('#reg_ip').is(':checked');
        inn_cart = false;
        checkInputINN(inn);
    });

    $(".login-container").on("change", "#reg_ip", function () {
        if (this.checked != true) {
            $("#reg_kpp").animate({
                opacity: "1"
            }, 600, function () {
                $("#reg_kpp").css("height", "60px");
            });
        }
        else {
            $("#reg_kpp").animate({
                opacity: "0"
            }, 600, function () {
                $("#reg_kpp").css("height", "0px");
            });
        }
    });

    $(".login-container").on("click", "#reg_inn", function () {
        $("#reg_inn_popup_container").css("display", "flex").hide().fadeIn();
    });
    $(".login-container").on("click", ".cartpopup-red-cross", function () {
        $("#reg_inn_popup_container").fadeOut();
    });
    $(".login-container").on("click", "#reg-toggle-state", function () {
        if (typeof $("#reg_fiz").attr("id") === "undefined") {
            toPerson();
        }
        else {
            toOrganization();
        }
    });
});
function toPerson() {
    $(".label-text").animate({
        opacity: "0"
    }, 600, function () {
        $(this).text("Физическое лицо");
        $("#Kind").val("0");
    }).animate({ 'opacity': 1 }, 600);
    $("#reg_name").animate({
        opacity: "0"
    }, 600, function () {
        $(this).text("Имя");
    }).animate({ 'opacity': 1 }, 600);
    $("#reg_ur").attr("id", "reg_fiz");
    $("#RegName").attr("placeholder", "ФИО");
    $("#reg_inn").fadeOut({
        complete: function () {
            $("#reg_inn_container").animate({
                opacity: "0"
            }, 600, function () {
                $("#reg_inn_container").css("display", "none");
            });
        }
    });
    $(".reg-input-container").animate({
        opacity: "0"
    }, 600, function () {
        $(".reg-input-container").css("height", "0px");
    });
}
function toOrganization() {
    $(".label-text").animate({
        opacity: "0"
    }, 600, function () {
        $(this).text("Юридическое лицо");
        $("#Kind").val("1");
    }).animate({ 'opacity': 1 }, 600);

    $("#reg_name").animate({
        opacity: "0"
    }, 600, function () {
        $(this).text("Название организации");
    }).animate({ 'opacity': 1 }, 600);
    $("#RegName").attr("placeholder", "Название организации");
    $("#reg_fiz").attr("id", "reg_ur");
    $("#reg_inn_container").css("display", "flex");
    $("#reg_inn_container").animate({
        height: "30px",
        opacity: "1"
    }, 600, function () {
        $("#reg_inn").fadeIn();
    });
    $(".reg-input-container").css("display", "flex");
    $(".reg-input-container").animate({
        height: "60px"
    }, 600, function () {
        $(".reg-input-container").css("opacity", "1");
    });
}
//Конец checkbox регистрация
//Начало корзина заполнение по ИНН
$(function () {
    $("#popup-cart-container").on("change", "#reg_ip2", function () {
        if (this.checked != true) {
            $("#KPP").animate({
                opacity: "1",
                height: "30px",
                padding: "10px"
            }, 600, function () {

            });
        }
        else {
            $("#KPP").animate({
                opacity: "0",
                height: "0px",
                padding: "0px"
            }, 600, function () {

            });
        }
    });
    $("#popup-cart-container").on("click", "#reg_inn2", function () {
        $("#reg_inn2").next().css("display", "flex").hide().fadeIn();

    });
    $("#popup-cart-container").on("click", ".cartpopup-red-cross", function () {
        $("#reg_inn_popup_container2").fadeOut();
    });
    $("#popup-cart-container").on("input propertychange", "input[id='checkINN2']", function () {
        inn = $("input[id='checkINN2']").val();
        reg_ip = $('#reg_ip2').is(':checked');
        inn_cart = true;
        checkInputINN(inn);
    });
});

//Конец корзина заполнение по ИНН
//Начало закрытие модальных окон
function ClientContainerScroll() {
    $('html,body').animate({ scrollTop: $('body').offset().top }, 500);
    // var scrollTop = $("body").scrollTop();
    $(".login-container").css("top", 20 + "px");
    // $(".login-container").css("top", scrollTop+20+"px");
}

$(document).click(function (e) {
    if (!$(e.target).is("#loginclick") && !$(e.target).is("#cartpopup-login") && !$(e.target).is("#cartpopup-login2") && $(".login-container").css("display") != "none") {
        if ($(e.target).closest('.login-container').length === 0) {
            $(".login-container").fadeOut();
        }
    }
    if (!$(e.target).is(".calc-x") && $(".smeta-load-error").css("display") != "none") {
        if ($(e.target).closest('.smeta-load-error').length === 0) {
            $(".smeta-load-error").fadeOut({
                complete: function () {
                    $(".smeta-load").html("");
                }
            });
        }
    }
    // if (!$(e.target).is(".calc-x") && $(".feedback-popup-container").css("display") != "none") {
    //     if ($(e.target).closest('.feedback-popup-container').length === 0) {
    //         $(".feedback-popup-container").fadeOut();
    //     }
    // }
    if (!$(e.target).is("#smeta") && !$(e.target).is("#smeta2") && !$(e.target).is("#smeta3") && !$(e.target).is(".slr-box-smeta") && !$(e.target).is(".smeta-del") && !$(e.target).is(".calc-x") && $(".smeta-container").css("display") != "none") {
        if ($(e.target).closest('.smeta-container').length === 0) {
            $(".smeta-container").fadeOut({ complete: function () { $(".smeta-container").css("top", "-50%"); } });
        }
    }
    if (!$(e.target).is("#slr-box-pricelist") && !$(e.target).is("#pricelist2") && !$(e.target).is("#pricelist3") && !$(e.target).is(".slr-box-pricelist") && !$(e.target).is(".calc-x") && $(".slr-pricelist-container").css("display") != "none") {
        if ($(e.target).closest('.slr-pricelist-container').length === 0) {
            $(".slr-pricelist-container").fadeOut();
        }
    }
    if (!$(e.target).is(".filter-icon-button-container") && $(".filter-form-container").css("display") != "none") {
        if ($(e.target).closest('.filter-form-container').length === 0) {
            filterClose();
        }
    }
    if (!$(e.target).is("#client-user-name") && $(".client-user-name-container").css("display") != "none") {
        if ($(e.target).closest('.client-user-name-container').length === 0) {
            $(".client-user-name-container").fadeOut();
        }
    }
    if ($(".popup-cart-container").css("bottom") != "-1000px") {
        var block = $("#popup-cart-container");
        if (!block.is(e.target) && block.has(e.target).length === 0 && !$(e.target).hasClass('cartpopup-del-item') && !$(e.target).hasClass('noclick') && !$(e.target).hasClass('x')) {
            if (step > 0) {
                $(".popup-cart-container").css("bottom", "-1000px");
            }
            else {
                $(".popup-cart-container-load").css("height", "auto");
                $(".popup-cart-container").css("bottom", "-1000px");
                selected_address_container = false;
                $(".popup-cart-container-load").html("");
            }
        }
    }
});
//Конец закрытие модальных окон
//Начало поиск
$(function () {

    $(".search-button").click(function () {
        $(".search-container-enlarge").css("opacity", "1").css("pointer-events", "all");
        document.getElementById("search-input").focus();
        $.getJSON('/' + lang + '/LoadAutoComplete', function (data) {

            $.each(data, function (i, item) {
                if (i > 0) {
                    autocomplete_items.push(item.Ru);
                    autocomplete_url.push(item.Slug);
                }
            });
        });

    });
    $(".search-x").click(function () {
        $(".search-container-enlarge").css("opacity", "0").css("pointer-events", "none");
    });
});
//Конец поиск
//Начало всплывающая корзина
var touch = false;
var cart = false
var step = 0;
function cartpopup(cart) {


    var action = "mouseover";
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        action = "click"
        touch = true;
    }
    if (cart) {
        $(".temp-container").load('/' + lang + '/popupshowcart', function () {
            height = $(".temp-container").height();
            $(".popup-cart-container-load").css("height", height + "px");
            $(".temp-container").fadeIn();
        });

        setTimeout(function () {
            CartUpdateComplete(PopUpData);
            cart_arrows(touch);

        }, 600);


        $(".popup-cart-container-x").click(function () {
            $(".popup-cart-container").css("bottom", "-1000px");

        });
    } else {


        $(".cart-container").on(action, ".cart-container2", function (e) {
            e.stopPropagation();
            if (step < 1 && $(".popup-cart-container").css("bottom") == "-1000px") {
                $(".popup-cart-container").css("bottom", "25px");
                // $(".popup-cart-container").fadeIn();
                $(".popup-cart-container-load").load('/' + lang + '/popupshowcart');

                setTimeout(function () {
                    CartUpdateComplete(PopUpData);
                    cart_arrows(touch);

                }, 600);


                $(".popup-cart-container-x").click(function () {
                    $(".popup-cart-container").css("bottom", "-1000px");

                });
            }
            else {
                $(".popup-cart-container").css("bottom", "25px");

            }
        });
    }
}
$(function () {
    cartpopup(false);
});
function cart_arrows(touch) {
    var cartpopup_pointer = 0;
    var cart_containers = document.getElementsByClassName("cartpopup-3items-container");
    var cart_containers_num = cart_containers.length;

    if (touch) {
        document.getElementsByClassName("cartpopup-all-3items-container")[0].setAttribute("style", "overflow-y:hidden;");

        if (cart_containers_num > 1) {

            $(".cartpopup-arrow-container").css("display", "flex");
            $(".cartpopup-arrow-container").css("height", "21px");
            $(".cartpopup-dots-container").css("height", "10px");
            for (var i = 0; i < cart_containers_num; i++) {
                $(".cartpopup-dots-container").prepend('<div class="dots"></div>');
            }
            var dots = document.getElementsByClassName("dots");
            dots[0].style.opacity = '0.5';
            dots[cartpopup_pointer].classList.add("dots-enlarge");
            $("#cartpopup-nav-right").fadeIn();
            $("#cartpopup-nav-left").fadeIn();
            $("#cartpopup-nav-left").on("click", function () {
                dots[cartpopup_pointer].style.opacity = '0.3';
                if (cartpopup_pointer == 0) { cartpopup_pointer = cart_containers_num - 1; } else { cartpopup_pointer--; }
                dots[cartpopup_pointer].style.opacity = '0.5';
                var clone = cart_containers[cart_containers_num - 1].cloneNode(true);
                clone.classList.remove("hide");
                clone.classList.add("show");

                cart_containers[cart_containers_num - 1].remove();


                cart_containers[0].classList.remove("show");
                cart_containers[0].classList.add("hide");
                document.getElementById('cartpopup-all-3items-container').prepend(clone);
            });
            $("#cartpopup-nav-right").on("click", function () {
                dots[cartpopup_pointer].style.opacity = '0.3';
                if (cartpopup_pointer == cart_containers_num - 1) { cartpopup_pointer = 0; } else { cartpopup_pointer++; }
                dots[cartpopup_pointer].style.opacity = '0.5';
                var clone = cart_containers[0].cloneNode(true);
                clone.classList.remove("show");
                clone.classList.add("hide");
                cart_containers[0].remove();
                cart_containers[0].classList.remove("hide");
                cart_containers[0].classList.add("show");
                document.getElementById('cartpopup-all-3items-container').appendChild(clone);
            });

        } else {
            cart_containers[0].classList.add("show");
        }





    }
    else {


        for (var i = 1; i < cart_containers_num; i++) {
            cart_containers[i].classList.remove("hide");
        }
    }
}

//Конец всплывающая корзина

//Начало слайдеры в меню
$(function () {

    $("#mySlider1").AnimatedSlider({
        prevButton: "#btn_prev1",
        nextButton: "#btn_next1",
        visibleItems: 5,
        infiniteScroll: true,

    });

});



$(function () {

    $("#mySlider2").AnimatedSlider({
        prevButton: "#btn_prev2",
        nextButton: "#btn_next2",
        visibleItems: 5,
        infiniteScroll: true,

    });
});
//Конец слайдеры в меню
//Начало плавающая навигация
$(function () {
    var touch = false;
    var action = "mouseover";
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        action = "click"
        touch = true;
    }
    var nav = $('.line1-empty-nav');
    var nav2 = $('.line3-empty-nav');

    var ham = document.getElementsByClassName('hamburger-icon');
    var ham_container = document.getElementsByClassName('hamburger-container');
    var ham_container_empty = document.getElementsByClassName('hamburger-container-empty');
    var backgroundColor = [
        "#165291",
        "#2673c3"
    ];
    var backgroundImage = [
        "url('../../../img/new/hamburger-icon.png')",
        "url('../../../img/new/hamburger-icon-x.png')"
    ];
    var x_icon = false;
    var range = false;
    var range_quantity = true;

    //Начало клик по гамбургеру

    ham[0].addEventListener('click', function () {
        if (x_icon) {

            ham[0].style.backgroundImage = backgroundImage[0];
            ham_container[0].style.backgroundColor = backgroundColor[0];
            $(".search-container-enlarge").css("background-color", backgroundColor[0]);

            nav2.removeClass("float-nav2");
            $(".float-menu-container").css("opacity", "0").css("pointer-events", "none");
            $('#overlay').fadeOut('fast', function () {
                $('[id=overlay]').remove();
                $(".float-menu-container").html("");

                arrow3.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                arrow2.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
            });
            $('body').removeClass("no-scroll");
            addScrollbar();
            allArrow();



            x_icon = false;


        }
        else {
            $(".search-container-enlarge").css("background-color", backgroundColor[1]);
            ham[0].style.backgroundImage = backgroundImage[1];
            ham_container[0].style.backgroundColor = backgroundColor[1];

            nav2.addClass("float-nav2");
            $(".float-menu-container").css("opacity", "1").css("pointer-events", "all");
            allNav();
            allArrow();

            $(".float-nav2").on(action, ".dropbtn", function () {
                if (range) {
                    $(".float-menu-container2").css("opacity", "0").css("pointer-events", "none");
                    $(".float-menu-container3").css("opacity", "0").css("pointer-events", "none");
                    $(".float-menu-container4").css("opacity", "0").css("pointer-events", "none");
                    document.getElementById('arrow').setAttribute("style", "transform: rotate(90deg); transition: transform 150ms ease;");
                    document.getElementById('arrow2').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    document.getElementById('arrow3').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    document.getElementById('arrow4').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    $(".float-menu-container").html("<div id=\"loading\"></div>");
                    $(".float-menu-container").load("/" + lang + "/Nav1", function () {
                        $(".float-menu-container1").css("opacity", "1").css("pointer-events", "all");
                    });

                }
            });


            $(".float-nav2").on(action, ".dropbtn2", function () {
                if (range) {
                    $(".float-menu-container1").css("opacity", "0").css("pointer-events", "none");
                    $(".float-menu-container3").css("opacity", "0").css("pointer-events", "none");
                    $(".float-menu-container4").css("opacity", "0").css("pointer-events", "none");
                    document.getElementById('arrow').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    document.getElementById('arrow2').setAttribute("style", "transform: rotate(90deg); transition: transform 150ms ease;");
                    document.getElementById('arrow3').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    document.getElementById('arrow4').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    $(".float-menu-container").html("<div id=\"loading\"></div>");
                    $(".float-menu-container").load("/" + lang + "/Nav2", function () {
                        $(".float-menu-container2").css("opacity", "1").css("pointer-events", "all");
                    });

                }
            });

            $(".float-nav2").on(action, ".dropbtn3", function () {
                if (range) {
                    $(".float-menu-container1").css("opacity", "0").css("pointer-events", "none");
                    $(".float-menu-container2").css("opacity", "0").css("pointer-events", "none");
                    $(".float-menu-container4").css("opacity", "0").css("pointer-events", "none");
                    document.getElementById('arrow').setAttribute("style", "transform: rotate(10deg); transition: transform 150ms ease;");
                    document.getElementById('arrow2').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    document.getElementById('arrow3').setAttribute("style", "transform: rotate(90deg); transition: transform 150ms ease;");
                    document.getElementById('arrow4').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    $(".float-menu-container").html("<div id=\"loading\"></div>");
                    $(".float-menu-container").load("/" + lang + "/Nav3", function () {
                        $(".float-menu-container3").css("opacity", "1").css("pointer-events", "all");
                    });

                }
            });

            $(".float-nav2").on(action, ".dropbtn4", function () {
                if (range) {
                    $(".float-menu-container1").css("opacity", "0").css("pointer-events", "none");
                    $(".float-menu-container2").css("opacity", "0").css("pointer-events", "none");
                    $(".float-menu-container3").css("opacity", "0").css("pointer-events", "none");
                    document.getElementById('arrow').setAttribute("style", "transform: rotate(10deg); transition: transform 150ms ease;");
                    document.getElementById('arrow2').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    document.getElementById('arrow3').setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                    document.getElementById('arrow4').setAttribute("style", "transform: rotate(90deg); transition: transform 150ms ease;");
                    $(".float-menu-container").html("<div id=\"loading\"></div>");
                    $(".float-menu-container").load("/" + lang + "/Nav4", function () {
                        $(".float-menu-container4").css("opacity", "1").css("pointer-events", "all");
                    });

                }
            });





            $('.line3-empty').prepend('<div id="overlay" style="display:flex;"></div>');
            if (!$('body').hasClass("no-scroll")) {
                removeScrollbar();
                $('body').addClass("no-scroll");

            }

            $("#overlay").click(function () {
                ham[0].style.backgroundImage = backgroundImage[0];
                ham_container[0].style.backgroundColor = backgroundColor[0];
                $(".search-container-enlarge").css("background-color", backgroundColor[0]);
                nav2.removeClass("float-nav2");
                $('#overlay').fadeOut('fast', function () {
                    $('[id=overlay]').remove();


                });
                allArrow();
                $('body').removeClass("no-scroll");
                $(".float-menu-container").css("opacity", "0").css("pointer-events", "none");
                arrow3.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
                arrow2.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");

                x_icon = false;

            });



            nav2.css("background-color", backgroundColor[1]);
            x_icon = true;


        }

    });



    //Конец клик по гамбургеру

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            range = true;
            if (range && range_quantity) {
                ham[0].setAttribute("style", "opacity: 1; cursor: pointer;");
                ham_container[0].setAttribute("style", "opacity: 1;  width: 55px;");
                nav.addClass("float-nav");
                $(".dropdown-content").css("display", "none");
                $(".dropdown-content2").css("display", "none");
                $(".dropdown-content3").css("display", "none");
                range = false;
                range_quantity = false;

            }

        } else {
            range_quantity = true;
            range = false;
            ham[0].setAttribute("style", "opacity: 0; pointer-events: none;");
            ham_container[0].setAttribute("style", "opacity: 0; width: 0px;");
            ham_container[0].style.backgroundColor = backgroundColor[0];
            nav2.css("background-color", backgroundColor[0]);
            $(".dropdown-content").css("display", "flex");
            $(".dropdown-content2").css("display", "flex");
            $(".dropdown-content3").css("display", "flex");
            nav2.removeClass("float-nav2");
            nav.removeClass("float-nav");
            $(".float-menu-container").html("");
        }
    });

});
//Конец плавающая навигация +







//Начало якорь стрелка наверх
$(function () {
    $('.purple-arrow').click(function () { $('html,body').animate({ scrollTop: $('body').offset().top }, 500); });
});
//Конец якорь стрелка наверх

//Начало выпадающего меню
$(function () {

    var touch = false;
    var action = "mouseover";
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        action = "click"
        touch = true;
    }
    var width = $(document).width();
    var height = $(window).height();
    var arrow = document.getElementById('arrow');
    var arrow2 = document.getElementById('arrow2');
    var arrow3 = document.getElementById('arrow3');
    var arrow4 = document.getElementById('arrow4');
    var dropdown_content = document.getElementsByClassName('dropdown-content');
    var dropdown_content2 = document.getElementsByClassName('dropdown-content2');
    var dropdown_content3 = document.getElementsByClassName('dropdown-content3');
    var dropdown_content4 = document.getElementsByClassName('dropdown-content4');
    var skoba;
    if ($('.skoba-index').length) {
        skoba = document.getElementsByClassName('skoba-index');
    }
    if ($('.skoba').length) {
        skoba = document.getElementsByClassName('skoba');
    }


    $('.line3-dropdown').on("click", '.dropbtn', function (event) {

        if (event.pageY < 400) {
            arrow.setAttribute("style", "transform: rotate(90deg); transition: transform 150ms ease;");
            dropdown_content[0].setAttribute("style", "pointer-events: all; transition: opacity 1s ease-in-out; opacity: 1; display: block;");
            dropdown_content2[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex; text-align: center;");
            dropdown_content3[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex;");
            dropdown_content4[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex;");
            skoba[0].setAttribute("style", "margin-top:  220px;");
        }


    });

    $('.line3-dropdown').on('mouseleave', '.dropdown', function (event) {
        if (event.pageY < 400) {
            dropdown_content[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: block;");
            arrow.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
            $('.dropbtn').toggleClass('marked');
            $('.dropbtn').toggleClass('marked1');
            if ($('.skoba-index').length) {
                skoba[0].setAttribute("style", "margin-top:  20px;");
            } else {
                skoba[0].setAttribute("style", "margin-top:  0px;");
            }
        }
    });
    $('.line3-dropdown').on("click", '.dropbtn2', function (event) {
        if (event.pageY < 400) {

            dropdown_content4[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex;");
            dropdown_content3[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex;");
            dropdown_content2[0].setAttribute("style", "pointer-events: auto; transition: opacity 1s ease-in-out; opacity: 1; display: flex; text-align: center;");
            skoba[0].setAttribute("style", "margin-top:  320px;");


            arrow2.setAttribute("style", "transform: rotate(90deg); transition: transform 150ms ease;");

        }
    });
    $('.line3-dropdown').on('mouseleave', '#dropdown-content2', function (event) {
        if (event.pageY < 400) {
            dropdown_content2[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex; text-align: center;");
            if ($('.skoba-index').length) {
                skoba[0].setAttribute("style", "margin-top:  20px;");
            } else {
                skoba[0].setAttribute("style", "margin-top:  0px;");
            }
            arrow2.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
        }
    });
    $('.line3-dropdown').on("click", '.dropbtn3', function (event) {
        if (event.pageY < 400) {

            arrow2.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
            arrow4.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
            dropdown_content2[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex; text-align: center;");
            dropdown_content3[0].setAttribute("style", "pointer-events: auto; transition: opacity 1s ease-in-out; opacity: 1; display: flex;");
            dropdown_content4[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex;");
            skoba[0].setAttribute("style", "margin-top:  320px;");


            arrow3.setAttribute("style", "transform: rotate(90deg); transition: transform 150ms ease;");
        }

    });
    $('.line3-dropdown').on('mouseleave', '#dropdown-content3', function (event) {
        if (event.pageY < 400) {
            dropdown_content3[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex;");
            if ($('.skoba-index').length) {
                skoba[0].setAttribute("style", "margin-top:  20px;");
            } else {
                skoba[0].setAttribute("style", "margin-top:  0px;");
            }

            arrow3.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
        }
    });

    $('.line3-dropdown').on("click", '.dropbtn4', function (event) {
        if (event.pageY < 400) {

            arrow2.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
            arrow3.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
            dropdown_content2[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex; text-align: center;");
            dropdown_content3[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex;");
            dropdown_content4[0].setAttribute("style", "pointer-events: all; transition: opacity 1s ease-in-out; opacity: 1; display: flex;");
            skoba[0].setAttribute("style", "margin-top:  180px;");


            arrow4.setAttribute("style", "transform: rotate(90deg); transition: transform 150ms ease;");
        }
    });
    $('.line3-dropdown').on('mouseleave', '#dropdown-content4', function (event) {
        if (event.pageY < 400) {
            dropdown_content4[0].setAttribute("style", "pointer-events: none; transition: opacity 1s ease-in-out; opacity: 0; display: flex;");
            if ($('.skoba-index').length) {
                skoba[0].setAttribute("style", "margin-top:  20px;");
            } else {
                skoba[0].setAttribute("style", "margin-top:  0px;");
            }

            arrow4.setAttribute("style", "transform: rotate(0deg); transition: transform 150ms ease;");
        }
    });


});

//Конец выпадающего меню
// Начало pop-up Выберите Ваш город
$(function () {
    let tel = false;
    let email = false;
    let map = false;
    document.getElementById('choose-city').addEventListener('click', function () {
        if (!tel) {
            $("#choose-city-tel").fadeIn();
            $("#choose-city-tel").css("height", "20px");
            $("#choose-city-tel a").css("opacity", "1");
            $("#footer-arrow-tel").css("transform", "rotate(90deg)");
            tel = true;
        }
        else {
            $("#choose-city-tel").fadeOut();
            $("#choose-city-tel").css("height", "0px");
            $("#choose-city-tel a").css("opacity", "0");
            $("#footer-arrow-tel").css("transform", "rotate(0)");
            tel = false;
        }

    });

    document.getElementById('choose-email').addEventListener('click', function () {
        if (!email) {

            $("#choose-city-email").fadeIn();
            $("#choose-city-email").css("height", "20px");
            $("#choose-city-email a").css("opacity", "1");
            $("#footer-arrow-email").css("transform", "rotate(90deg)");
            email = true;
        }
        else {
            $("#choose-city-email").fadeOut();
            $("#choose-city-email").css("height", "0px");
            $("#choose-city-email a").css("opacity", "0");
            $("#footer-arrow-email").css("transform", "rotate(0)");
            email = false;
        }

    });
    document.getElementById('delivery').addEventListener('click', function () {
        if (!map) {
            $("#choose-city-map").fadeIn();
            $("#choose-city-map").css("height", "20px");
            $("#choose-city-map a").css("opacity", "1");
            $("#footer-arrow-map").css("transform", "rotate(90deg)");
            map = true;
        }
        else {
            $("#choose-city-map").fadeOut();
            $("#choose-city-map").css("height", "0px");
            $("#choose-city-map a").css("opacity", "0");
            $("#footer-arrow-map").css("transform", "rotate(0)");
            map = false;
        }

    });

});
var selected_address_container = false;
var selected_address = "";
var pickuppoint = "";
var delivery_required = false;
var byrex_modal = false;
var cdek_modal = false;
function ClientContainer() {
    $("#client-container").css("opacity", "0");
    setTimeout(function () {
        $("#client-container").load("/" + lang + "/ClientContainer", function () {
        });
        $("#client-container").css("opacity", "1");
    }, 600);
    CartLoad();
    SmetaInOut();
}

function ClientContainerLogout() {
    var loc = window.location.href;
    var hp = window.location.hostname;
    $("#client-container").css("opacity", "0");
    $(".blobs-container").fadeOut();
    $("#client-user-name").fadeOut();
    $("#cartBar").css("bottom", "-30px");
    setTimeout(function () {
        $("#client-container").load("/" + lang + "/logout", function () {
            $("#client-container").css("opacity", "1");
            if (loc.includes("profile")) {
                location.replace("https://" + hp);
            }
            SmetaInOut();
        });
    }, 600);
}
//Конец pop-up Выберите Ваш город 
// Начало pop-up cart
function selectedAddress(selected_address) {
    if (!selected_address_container) {
        var height = $(".popup-cart-container-load").height();
        $(".popup-cart-container-load").css("height", height + 30 + "px");
        $(".cartpopup-selected-address-container").css("height", "30px");
        selected_address_container = true;
        setTimeout(function () {
            $(".cartpopup-small-red-cross-container").css("display", "flex");
            $("#cartpopup-selected-title").fadeIn();
            $("#cartpopup-selected-address").text(selected_address).fadeIn();
        }, 600);
    }
    else {
        $("#cartpopup-selected-address").text(selected_address).fadeIn();
    }

    check_valid_step2(true);
}
function selectedAddressDelete() {
    if (selected_address_container) {
        var height = $(".popup-cart-container-load").height();
        $("#cartpopup-selected-title").fadeOut();
        $("#cartpopup-selected-address").text("").fadeOut();
        $(".cartpopup-small-red-cross-container").css("display", "none");
        selected_address_container = false;
        setTimeout(function () {
            $(".popup-cart-container-load").css("height", height - 30 + "px");
            $(".cartpopup-selected-address-container").css("height", "0px");
        }, 600);

        check_valid_step2(false);
        selected_address = "";
    }
}
function Checkrequred() {
    var valid = true;
    var agreement = $("#agreement").prop('checked');
    var email_check = false;
    if (!$(".email-conformation-container").length) {
        email_check = true;
    }
    function check_valid(valid, agreement, email_check) {
        if (valid && agreement && email_check) {
            $("#cartpopup-step1-right-gray").prop("id", "cartpopup-step1-right");
        }
        else {
            $("#cartpopup-step1-right").prop("id", "cartpopup-step1-right-gray");
        }
    }

    $("#popup-cart-container").on("click", "#cartpopup-small-red-cross", function () {
        cdek_modal = false; byrex_modal = false;
        $("#cdek").removeAttr('checked');
        $("#byrpex").removeAttr('checked');
        $("#address option:first").prop('selected', true);
        hideCalcDelivery();
        selectedAddressDelete();
    });
    $("#popup-cart-container").on("input propertychange", "#email-conformation-input", function () {
        var email = $("#Email").prop("value");
        var code = $("#email-conformation-input").val();
        var url = "/" + lang + "/CartPopUpCheckEmail2";
        if ($("#cartpopup-confirmation-password").length) {
            url = "/" + lang + "/CartPopUpCheckPassword";
        }
        $(".email-conformation-code").load(url, { "code": code, "email": email }, function (response, status, xhr) {
            if (status != "error") {
                if (response == "Ok") {
                    $(".v-gray").removeClass("v-red");
                    $(".v-gray").addClass("v-green");
                    email_check = true;
                    if ($("#cartpopup-confirmation-password").length) {
                        $('#agreement').prop('checked', true);
                        agreement = true;
                    }
                    $("#Email").attr('readonly', 'readonly').css("pointer-events", "none");
                    check_valid(valid, agreement, email_check);
                    setTimeout(function () {
                        $(".email-conformation-container").fadeOut();
                    }, 600);
                    ClientContainer();
                }
                else {
                    $(".v-gray").removeClass("v-green");
                    $(".v-gray").addClass("v-red");
                }

            }
        });
    });

    $('#popup-cart-container input[required]').each(function () {
        if (!$(this).val()) {
            valid = false;
        }
    });
    $("#popup-cart-container").on("change", "#agreement", function () {
        if ($('#agreement').is(':checked')) {
            agreement = true;

        }
        else {
            agreement = false;
        }
        check_valid(valid, agreement, email_check);
    });
    check_valid(valid, agreement, email_check);
    $("#popup-cart-container").on("change", "input[required]", function () {
        valid = true;
        $.each($("#popup-cart-container input[required]"), function (index, value) {

            if (!$(value).val()) {
                valid = false;
            }
        });
        check_valid(valid, agreement, email_check);
    });

}

function Step(step) {
    if (step == 0) {
        var height = $(".popup-cart-container-load").height();
        $(".popup-cart-container-load").html('<div class="temp-container"></div>');
        $(".popup-cart-container-load").css("height", height + "px");
        cartpopup(true);
    }
    else {
        var height = $(".popup-cart-container-load").height();
        $(".popup-cart-container-load").html('<div class="temp-container"></div>');
        $(".popup-cart-container-load").css("height", height + "px");
        $(".temp-container").load("/" + lang + "/CartPopUpStep" + step + "", function () {
            height = $(".temp-container").height();
            $(".popup-cart-container-load").css("height", height + "px");
            $(".temp-container").fadeIn();
            if (step == 2) { fillStep2(); }
            if (step == 1) { Checkrequred(); }

        });
    }
}
function fillStep2() {
    $('textarea#cartpopup-profile-input-textarea').val(localStorage.getItem("comment"));
    if (selected_address_container) {
        if (delivery_required) {
            $('#address option:contains(' + selected_address + ')').prop('selected', true);
            selected_address_container = false;
            setTimeout(function () {
                selectedAddress(selected_address);
            }, 600);

        }
        else {
            if (cdek_modal) {
                $('#cdek').prop('checked', true);
            }
            else {
                $('#byrpex').prop('checked', true);
            }
            selected_address_container = false;
            setTimeout(function () {
                selectedAddress(selected_address);
            }, 600);
        }
    }
}
function StepRight(step, data) {
    var height = $(".popup-cart-container-load").height();
    $(".popup-cart-container-load").html('<div class="temp-container"></div>');
    $(".popup-cart-container-load").css("height", height + "px");
    $(".temp-container").load("/" + lang + "/CartPopUpStep" + step + "", data, function () {
        height = $(".temp-container").height();
        $(".popup-cart-container-load").css("height", height + "px");
        $(".temp-container").fadeIn();
        if (step == 2) { { fillStep2(); } }
        if (step == 3) { if (ppc != "") { $('[value="' + ppc + '"]').prop('checked', true); $("#cartpopup-step1-right-gray").prop("id", "cartpopup-step1-right"); } $(".cartpopup-empty-container").fadeOut(); }
    });

}
function StepPersonOrganization(type) {
    var height = $(".popup-cart-container-load").height();
    $(".popup-cart-container-load").html('<div class="temp-container"></div>');
    $(".popup-cart-container-load").css("height", height + "px");
    $(".temp-container").load("/" + lang + "/CartPopUpStep" + type + "", function () {
        height = $(".temp-container").height();
        $(".popup-cart-container-load").css("height", height + "px");
        $(".temp-container").fadeIn();
        Checkrequred();
    });

}
function check_valid_step2(delivery_check) {
    if (delivery_check) {
        $("#cartpopup-step1-right-gray").prop("id", "cartpopup-step1-right");
    }
    else {
        $("#cartpopup-step1-right").prop("id", "cartpopup-step1-right-gray");
    }
}

function Step4() {
    var data = { "comment": localStorage.getItem("comment"), "ppc": ppc, "selected_address": selected_address, "pickuppoint": pickuppoint, "delivery_required": delivery_required };
    $(".calc-delivery-container").fadeIn();
    $(".calc-delivery-container-load").html("<div id=\"loading\"></div>");
    $(".calc-delivery-container-load").addClass("row").load("/" + lang + "/CartPopUpStep4", data, function () {
        $("#loading").hide();
    });
}
function CalcCdek(postalcode, address) {
    $(".calc-delivery-container-load").html("<div id=\"loading\"></div>");
    $(".calc-delivery-container-load").load("/" + lang + "/CalcCdek", { 'postalcode': postalcode, 'address': address }, function () {
        $("#loading").hide();
    });
}
$(function () {
    var data = {};
    var po = "Person";
    $("#popup-cart-container").on("click", "#place_order", function (e) {
        e.stopPropagation();
        step = 1;
        Step(step);
    });
    $("#popup-cart-container").on("click", ".reg-inn-carpopup", function (e) {
        let target = $(e.target);
        var email;
        var pass;
        if (target.hasClass("reg-inn-carpopup")) {
            $(".reg-already-registered-container").css("display", "flex").hide().fadeIn({
                complete: function () {

                    $(".reg-already-registered-container").load("/" + lang + "/CartPopUpAlreadyRegistered", function () {

                    });


                }
            });
        }
        if (target.attr('id') == 'cartpopup-email-already-registered') {
            $("#popup-cart-container").on("blur", "#cartpopup-email-already-registered", function () {
                email = $("#cartpopup-email-already-registered").val();
                $(".reg-already-registered-container").load("/" + lang + "/CartPopUpAlreadyRegistered", { 'email': email }, function () {

                });

            });
        }
        if (target.attr('id') == 'cartpopup-password-already-registered') {
            $("#popup-cart-container").on("blur", "#cartpopup-password-already-registered", function () {
                pass = $("#cartpopup-password-already-registered").val();
                email = $("#cartpopup-password-already-registered").attr("data-email");
                $(".reg-already-registered-container").load("/" + lang + "/CartPopUpAlreadyRegisteredPassword", { 'password': pass, 'email': email }, function (response, status, xhr) {

                });

            });
        }

    });
    $("#popup-cart-container").on("click", "#reg-toggle-state2", function (e) {
        let target = $(e.target);
        if (target.is("#reg-toggle-state2")) {
            if ($("#reg-toggle-state2").is(':checked')) {
                setTimeout(function () {
                    StepPersonOrganization("Organization"); po = "Organization";
                }, 600);

            }
            else {
                setTimeout(function () {
                    StepPersonOrganization("Person"); po = "Person";
                }, 600);

            }

            // StepPersonOrganization("Person");po = "Person";
        }
        // if(target.is("#radiopers")){StepPersonOrganization("Person");po = "Person";}
        // if(target.is("#radioorg")){StepPersonOrganization("Organization");po = "Organization";}
    });
    $("#popup-cart-container").on("click", ".cartpopup-arrow", function (e) {
        let target = $(e.target);
        var data = {};
        if (target.is("#cartpopup-step1-left")) {
            if (target.attr("data-step-left") == "0") {
                step = 0;
                Step(step);
            }
            if (target.attr("data-step-left") == "1") {
                step = 1;
                Step(step);
            }
            if (target.attr("data-step-left") == "2") {
                step = 2;
                Step(step);
            }
            if (target.attr("data-step-left") == "3") {
                step = 3;
                Step(step);
            }
        }
        if (target.is("#cartpopup-step1-right")) {
            if (target.attr("data-step-right") == "2") {
                if (po == "Person") { data = { "name": $("#Name_Ru").val(), "ContactPhone": $("#ContactPhone").val(), "po": po }; }
                else { data = { "name": $("#Name_Ru").val(), "INN": $("#INN").val(), "KPP": $("#KPP").val(), "ContactPosition": $("#position").val(), "ContactPerson": $("#ContactPerson").val(), "ContactPhone": $("#ContactPhone").val(), "UrAddress": $("#UrAddress").val(), "po": po }; }
                step = 2;
                StepRight(step, data);
            }
            if (target.attr("data-step-right") == "3") {
                step = 3;
                StepRight(step, data);
            }
            if (target.attr("data-step-right") == "4") {
                Step4();
            }
        }
    });
    $(document).on("click", ".calc-x", function (e) {
        if ($(e.target).parent().hasClass("cartpopup-empty-container")) { $(".cartpopup-empty-container").fadeOut(); if ($("#cartpopup-selected-address").html() == "") { $("#cdek").removeAttr('checked'); cdek_modal = false; } }
        if ($(e.target).parent().hasClass("calc-delivery-container")) { $(".calc-delivery-container").fadeOut(); }
        if ($(e.target).parent().hasClass("slr-pricelist-container")) { $(".slr-pricelist-container").fadeOut(); }
        if ($(e.target).parent().hasClass("smeta-load-container")) { $(".smeta-container").fadeOut({ complete: function () { $(".smeta-load-container").html(""); $(".smeta-container").css("top", "-50%"); } }); }
        if ($(e.target).parent().hasClass("setpassword-container")) { $(".login-container").fadeOut({ complete: function () { $(".login-container").html(""); } }); }
        if ($(e.target).parent().hasClass("smeta-load-error")) { $(".smeta-load-error").fadeOut({ complete: function () { $(".smeta-load").css("pointer-events", "none").html(""); } }); }
        if ($(e.target).parent().hasClass("reg-already-registered-container")) { $(".reg-already-registered-container").fadeOut(); }
        if ($(e.target).parent().hasClass("cartpopup-cdek-container")) { $(".cartpopup-cdek-container").fadeOut(); }
        if ($(e.target).parent().hasClass("email-conformation-container")) { $(".email-conformation-container").fadeOut(); }

        if ($(e.target).parent().hasClass("advantage-info-popup-container")) { $(".advantage-info-popup-container").fadeOut(); }
        // if ($(e.target).parent().hasClass("feedback-popup-container")) { $(".feedback-popup-container").fadeOut(); $(".price-container").removeClass("success"); }
    });
    $("#popup-cart-container").on("click", "#calc-delivery", function () {
        $(".calc-delivery-container").fadeIn();
        var postalcode = $(".cartpopup-profile-select option:selected").attr("data-postalcode");
        var address = $(".cartpopup-profile-select option:selected").text();

        CalcCdek(postalcode, address);
    });


    $("#popup-cart-container").on("blur", "#Email", function () {
        var email = $("#Email").prop("value");
        if (email != "") {
            $(".email-conformation-container").load("/" + lang + "/CartPopUpCheckEmail", { "email": email, "po": po }, function (response, status, xhr) {
                if (status != "error") {
                    if (response == "Social") {
                        ShowLoginRegForm();
                    }
                    else {
                        $(".email-conformation-container").fadeIn();
                    }

                }
            });
        }
    });
    $("#popup-cart-container").on("blur", ".cartpopup-profile-input-textarea", function () {
        localStorage.setItem("comment", $(this).val());
    });
    $("#popup-cart-container").on("click", ".cartpopup-tab-delivery-container", function (e) {
        let target = $(e.target);
        var height = $(".popup-cart-container-load").height();
        if (target.is("#cartpopup-self_delivery") && target.css("color") == "rgb(128, 128, 128)") {
            $(".popup-cart-container-load").css("height", height - 30 + "px");
            document.getElementById("cartpopup-self_delivery").setAttribute("style", "color: #105ca3;border-bottom: 1px solid rgba(27, 75, 209, 0.445);");
            document.getElementById("cartpopup-delivery").setAttribute("style", "color: gray;border-bottom: 1px solid rgba(219, 219, 219, 0.3);");
            if (!$(".cartpopup-tab-inner-delivery-container").eq(0).hasClass("show")) {
                $(".cartpopup-tab-inner-delivery-container").eq(0).toggleClass("show");
                $(".cartpopup-tab-inner-delivery-container").eq(1).toggleClass("show");
            }
        }
        if (target.is("#cartpopup-delivery") && target.css("color") == "rgb(128, 128, 128)") {
            $(".popup-cart-container-load").css("height", height + 30 + "px");
            document.getElementById("cartpopup-delivery").setAttribute("style", "color: #105ca3;border-bottom: 1px solid rgba(27, 75, 209, 0.445);");
            document.getElementById("cartpopup-self_delivery").setAttribute("style", "color: gray;border-bottom: 1px solid rgba(219, 219, 219, 0.3);");
            if (!$(".cartpopup-tab-inner-delivery-container").eq(1).hasClass("show")) {
                $(".cartpopup-tab-inner-delivery-container").eq(0).toggleClass("show");
                $(".cartpopup-tab-inner-delivery-container").eq(1).toggleClass("show");
            }
        }
    });


    $("#popup-cart-container").on("change", "#byrpex", function () {

        $("#address option:first").prop('selected', true);
        hideCalcDelivery();
        if ($("#cdek").prop("checked")) {
            $("#cdek").removeAttr('checked');
            selectedAddressDelete();
        }
        cdek_modal = false;
        if (!byrex_modal) {
            $(".cartpopup-empty-container").load("/" + lang + "/CartPopUpByrPexMap", { "city_name": localStorage.getItem("City") }, function () {
                setTimeout(function () {
                    $("ymaps").addClass("x");
                    selected_address = $("#data-map-city").attr("data-map-address");
                    pickuppoint = "Пункт самовывоза г. " + $("#data-map-city").attr("data-map-city") + " склад Бир Пекс";
                    selectedAddress(pickuppoint);
                }, 600);
            });
            $(".cartpopup-empty-container").fadeIn();
            byrex_modal = true;
        }
        else {
            byrex_modal = false;
            $(".cartpopup-empty-container").fadeOut();
            selectedAddressDelete();
        }

    });
    $("#popup-cart-container").on("change", "#cdek", function () {
        $("#address option:first").prop('selected', true);
        hideCalcDelivery();
        if ($("#byrpex").prop("checked")) {
            $("#byrpex").removeAttr('checked');
            selectedAddressDelete();
        }
        byrex_modal = false;
        if (!cdek_modal) {
            cdekAddressShow();

            cdek_modal = true;
        }
        else {
            cdek_modal = false;
            $(".cartpopup-empty-container").fadeOut();
            selectedAddressDelete();
        }
    });
    $("#popup-cart-container").on("click", "#add-address-delivery, #plus-add-address-delivery", function () {

        $(".cartpopup-empty-container").fadeIn();
        $(".cartpopup-empty-container").html("<div id=\"loading\"></div>");
        $(".cartpopup-empty-container").load("/" + lang + "/CartPopUpDeliveryAddress", function () {
            setTimeout(function () {
                $("ymaps").addClass("x");
            }, 600);

        });
    });
    $(".cartpopup-empty-container").on("focus", "#cartpopup-delivery-address", function () {
        $(".suggestions-wrapper *").addClass("x");

        $("#cartpopup-delivery-address").suggestions({
            token: "5fc1f6b84089fe974849befd3f4fe8af18819a1a",
            type: "ADDRESS",
            onSelect: function (suggestion) {

                $('#cartpopup-delivery-address').attr("value", suggestion.value);
                $("#CartPopUp_DA_Fias").attr("value", suggestion.data.city_fias_id);
                $("#CartPopUp_DA_Lat").attr("value", suggestion.data.geo_lat);
                $("#CartPopUp_DA_Lon").attr("value", suggestion.data.geo_lon);
                $("#CartPopUp_DA_PostalCode").attr("value", suggestion.data.postal_code);
                mapD.setCenter([suggestion.data.geo_lat, suggestion.data.geo_lon]);
            }
        });
    });
    $(".cartpopup-empty-container").on("submit", "#cartpopup-address-form", function (e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("DA_Lat", $("#CartPopUp_DA_Lat").attr("value"));
        formData.append("DA_Lon", $("#CartPopUp_DA_Lon").attr("value"));
        formData.append("DA_Fias", $("#CartPopUp_DA_Fias").attr("value"));
        formData.append("DA_PostalCode", $("#CartPopUp_DA_PostalCode").attr("value"));
        formData.append("DA_Address", $('#cartpopup-delivery-address').attr("value"));
        $.ajax({
            url: '/' + lang + '/CartPopUpDeliveryAddress',
            type: 'POST',
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function () {
                $("#add-address-delivery").fadeOut();
                $(".cartpopup-question-container").removeClass("hide");
            },
            error: function () {
            }
        });
        $(".cartpopup-delivery-address-input-container").fadeOut({
            complete: function () {
                $("#cartpopup-cdek-address-container").css("height", "40px");
                $("#cartpopup-delivery-address-input-container").css("height", "0px");
            }
        });

        setTimeout(function () {
            $(".cartpopup-cdek-address-container").fadeIn();
            $(".cartpopup-cdek-address-container").css("display", "flex");
        }, 600);
        $(".cartpopup-cdek-address").text($('#cartpopup-delivery-address').attr("value"));
        selectedAddress($('#cartpopup-delivery-address').attr("value"));
        $('#address').append('<option selected data-postalcode="' + $("#CartPopUp_DA_PostalCode").attr("value") + '">' + $('#cartpopup-delivery-address').attr("value") + '</option>');
        selected_address = $('#cartpopup-delivery-address').attr("value");
        byrex_modal = false;
        cdek_modal = false;
        $("#cartpopup-selected-address").text(selected_address);
        showCalcDelivery();
        if ($("#cdek").prop("checked")) {
            $("#cdek").removeAttr('checked');
        }
        if ($("#byrpex").prop("checked")) {
            $("#byrpex").removeAttr('checked');
        }
    });
    $(".cartpopup-empty-container").on("click", ".cartpopup-red-cross", function (e) {
        selectedAddressDelete();
        if ($(e.target).is("#cartpopup-delete-red-cross")) {
            let formData = new FormData();
            formData.append("DA_Address", $('#cartpopup-delivery-address').attr("value"));
            $.ajax({
                url: '/' + lang + '/CartPopUpDeliveryAddressDelete',
                type: 'POST',
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
                success: function () {
                    var height = $(".popup-cart-container-load").height();
                    $('#address option:selected').remove();
                    $("#address option:first").prop('selected', true);
                    hideCalcDelivery();
                    if ($('#address option').size() < 3) {
                        $("#add-address-delivery").fadeIn();
                        $(".cartpopup-question-container").addClass("hide");
                        setTimeout(function () {
                            $(".popup-cart-container-load").css("height", height - 30 + "px");
                        }, 600);

                    }
                },
                error: function () {
                }
            });
        }
        $(".cartpopup-cdek-address-container").fadeOut({
            complete: function () {
                $("#cartpopup-cdek-address-container").css("height", "0px");
                if ($(".cartpopup-delivery-address-input-container").length > 0) { $("#cartpopup-delivery-address-input-container").css("height", "30px"); }
            }
        });
        setTimeout(function () {
            if ($(".cartpopup-delivery-address-input-container").length > 0) { $(".cartpopup-delivery-address-input-container").fadeIn(); }
        }, 600);
    });

});
//Конец pop-up cart

//Начало подсказка
var show_calc = false;
var ppc = "";
function showCalcDelivery() {
    delivery_required = true;
    if (PopUpData.isByrpex && PopUpData.isQuantityInStock) {
        if (!show_calc) {
            var height = $(".popup-cart-container-load").height();
            $(".popup-cart-container-load").css("height", height + 30 + "px");
            $(".cartpopup-delivery-container").css("height", "30px");
            setTimeout(function () {
                $(".cartpopup-delivery-inner-container").fadeIn();
            }, 600);
            show_calc = true;
        }
    }
}
function hideCalcDelivery() {
    delivery_required = false;
    if (show_calc) {
        var height = $(".popup-cart-container-load").height();
        $(".popup-cart-container-load").css("height", height - 30 + "px");
        $(".cartpopup-delivery-container").css("height", "0px");
        $(".cartpopup-delivery-inner-container").fadeOut();
        show_calc = false;
    }
}
$(function () {
    $("#popup-cart-container").on("mouseover", ".question", function (e) {
        $data_tooltip = $(this).attr("data-tooltip");
        $(this).children("#tooltip").text($data_tooltip).show();
    }).on("mouseleave", ".question", function () {
        $(this).children("#tooltip").hide().text("");
    });
    $("#popup-cart-container").on("mouseover", ".asterisk-blue", function (e) {
        $data_tooltip = $(this).attr("data-tooltip");
        $(this).children("#tooltip2").text($data_tooltip).show();
    }).on("mouseleave", ".asterisk-blue", function () {
        $(this).children("#tooltip2").hide().text("");
    });
    $("#popup-cart-container").on("mouseover", ".question", function (e) {
        $data_tooltip = $(this).attr("data-tooltip");
        $(this).children("#tooltip3").text($data_tooltip).show();
    }).on("mouseleave", ".question", function () {
        $(this).children("#tooltip3").hide().text("");
    });
    $("#popup-cart-container").on("change", "#address", function () {
        var height = $(".popup-cart-container-load").height();

        if ($('#address option').size() > 2) {
            byrex_modal = false;
            cdek_modal = false;
            if ($("#cdek").prop("checked")) {
                $("#cdek").removeAttr('checked');
            }
            if ($("#byrpex").prop("checked")) {
                $("#byrpex").removeAttr('checked');
            }
            var temp_postal = "";
            if ($('#address option:selected').attr("data-postalcode") != "") {
                temp_postal = $('#address option:selected').attr("data-postalcode") + ", ";
            }
            selected_address = temp_postal + $('#address option:selected').text();
            $("#cartpopup-selected-address").text(selected_address);
            selectedAddress(selected_address);
            $('#byrpex').prop('checked', false);
            $('#cdek').prop('checked', false);

            showCalcDelivery();
        }
        else {
            hideCalcDelivery();

        }
    });

    $("#popup-cart-container").on("change", "[id^=ppl]", function () {

        $("#cartpopup-step1-right-gray").prop("id", "cartpopup-step1-right");
        ppc = $(this).val();

    });
    // $("#feedback-popup, #feedback-popup-top, #feedback-popup-top2").on("click", function () {
    // $(".feedback-popup-container").fadeIn();
    //     //FeedbackForm();
    // });

    $("#client-container").on("click", "#loginclick", function () {
        ClientContainerScroll();
        ShowLoginRegForm();
    });
    // function FeedbackForm() {
    //     $(".feedback-popup-container").html("");
    //     $(".feedback-popup-container").load("/" + lang + "/FeedbackForm", function () {
    //     });
    //     setTimeout(function () {
    //         $(".feedback-popup-container").fadeIn();
    //     }, 600);
    // }
    $(".calc-delivery-container").on("click", "#cartpopup-step4-change-button", function () {
        $("#cartpopup-step4-pay-button").css("pointer-events", "none").css("background", "#aaa");
        $("#cartpopup-step4-change-button").text("Подтвердить изменения");
        $("#cartpopup-step4-change-button").prop("id", "cartpopup-step4-change-button2");
        Step4Change();
    });
    $(".calc-delivery-container").on("click", "#cartpopup-step4-change-button2", function () {
        $("#cartpopup-step4-pay-button").css("pointer-events", "all").css("background", "#ef1d4e");
        $("#cartpopup-step4-change-button2").text("Изменить заказ");
        $("#cartpopup-step4-change-button2").prop("id", "cartpopup-step4-change-button");
        $.when(Step4Update()).done(function () {
            if (PopUpData.isByrpex && PopUpData.isQuantityInStock) {
                $("#cartpopup-step4-pay-button").removeClass("hide");
                $("#cartpopup-step4-confirm-button").addClass("hide");
            }
            else {
                $("#cartpopup-step4-confirm-button").removeClass("hide");
                $("#cartpopup-step4-pay-button").addClass("hide");
            }
        });

    });
    $(".calc-delivery-container").on("click", "#cartpopup-step4-cancel-button", function () {
        var id = $("#cartpopup-step4-cancel-button").attr("data-step4-cancel");
        $("#price-container-step4").addClass("success");
        $("#cartpopup-message").html("<div id=\"loading\"></div>");
        let formData = new FormData();
        formData.append("id", id);
        $.ajax({
            url: '/' + lang + '/DiscardOrderStep4',
            type: 'POST',
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (response, status, xhr) {
                if (response == "Ok") {
                    UpdateCurrentDraft();

                    $("#cartpopup-message").html("Заказ отменен!");
                    $("#black-x-step4").on("click", function () {
                        $(".calc-delivery-container").fadeOut();
                        $(".popup-cart-container").css("bottom", "-1000px");
                        $(".popup-cart-container-load").html("");

                        CartUpdateComplete(StartCart);
                        deleteSelected();
                        hideCartBar();

                    });
                }
                else {

                    $("#cartpopup-message").html("Произошла ошибка!");
                }

            },
            error: function () {
                $("#cartpopup-message").html("Произошла ошибка!");
            }
        });
    });
    $(".calc-delivery-container").on("click", "#cartpopup-step4-renew-button", function () {
        var num = $(".cartpopup-step4-main-title").attr("data-num");
        $(".calc-delivery-container-load").animate({
            opacity: "0"
        }, 600, function () {
            $(".calc-delivery-container-load").load("/" + lang + "/CartPopUpStep4Renew", { "num": num }, function () {

                $(".calc-delivery-container-load").css("display", "flex");
                $(".calc-delivery-container-load").animate({
                    opacity: "1"
                }, 600, function () {
                    UpdateCurrentDraft();
                });



            });
        });

    });




    $(".calc-delivery-container").on("click", "#cartpopup-step4-confirm-button", function () {
        $("#price-container-step4").addClass("success");
        var num = $(".cartpopup-step4-main-title").attr("data-num");
        $("#cartpopup-message").html("<div id=\"loading\"></div>");
        $.post("/" + lang + "/CartPopUpStep4Confirm", { "num": num }).done(function (data) {
            if (data == "Ok") {
                UpdateCurrentDraft();
                $("#cartpopup-message").html("Заказ подтвержден!");
                $("#black-x-step4").on("click", function () {
                    $(".calc-delivery-container").fadeOut();
                    $(".popup-cart-container").css("bottom", "-1000px");
                    $(".popup-cart-container-load").html("");
                    $("#cartBar").fadeOut();

                });
                deleteSelected();
            }
            else {
                $("#cartpopup-message").html("Произошла ошибка!");
            }
        });

    });


});
function Step4Change() {
    var height = $(".row").height();
    $(".row").css("height", height + "px");
    var num = $(".cartpopup-step4-main-title").attr("data-num");
    $(".cartpopup-step4-all-3items-container").fadeOut({
        complete: function () {
            $(".cartpopup-step4-all-3items-container").load('/' + lang + '/ChangePopUpShowCart', { "num": num }, function () {
                $(".cartpopup-step4-all-3items-container").fadeIn({
                    complete: function () {
                        height = $(".row").height();
                        $(".row").css("height", height + "px");
                        CartLoad();
                        $("#cartBar").fadeIn();
                    }
                });
            });
        }
    });
}
function Step4Update() {
    var height = $(".row").height();
    $(".row").css("height", height + "px");
    var num = $(".cartpopup-step4-main-title").attr("data-num");
    $(".cartpopup-step4-all-3items-container").fadeOut({
        complete: function () {
            $(".cartpopup-step4-all-3items-container").load('/' + lang + '/CartPopUpStep4Update', { "num": num }, function () {
                $(".cartpopup-step4-all-3items-container").fadeIn({
                    complete: function () {
                        height = $(".row").height();
                        $(".row").css("height", height + "px");

                        CartUpdateComplete(PopUpData);
                    }
                });
            });
        }
    });
}
function UpdateDoneOrder() {
    $(document).is("#profile-anchor")
    {
        $("#profile-order-container2").load('/' + lang + '/ProfileDoneOrder', function () {
            loadProfileContainer("done");
        });
    }
}
function UpdateCurrentOrder() {
    $(document).is("#profile-anchor")
    {
        $("#profile-order-container1").load('/' + lang + '/ProfileCurrentOrder', function () {
            loadProfileContainer("current");
        });
    }
}
function UpdateDraftOrder() {
    $(document).is("#profile-anchor")
    {
        $("#profile-order-container3").load('/' + lang + '/ProfileDraftOrder', function () {
            loadProfileContainer("draft");
        });
    }
}
function UpdateCurrentDraft() {
    $(document).is("#profile-anchor")
    {
        $("#profile-order-container1").load('/' + lang + '/ProfileCurrentOrder', function () {
        });
        $("#profile-order-container3").load('/' + lang + '/ProfileDraftOrder', function () {
            loadProfileContainer();
            if ($(".profile-icon-row").css("opacity") == "1") {
                $(".profile-icon-column").css("opacity", 0.6);
                $(".profile-all-order-container").fadeOut({
                    complete: function () {
                        $(".profile-all-order-container-table").fadeIn();
                    }
                });
            }
        });
    }
}
//Конец подсказка
//Начало Клиент support
$(function () {
    $("#client-container").on("click", "#client-help", function () {

        $(".client-support-container").load("/" + lang + "/ClientSupport", function () {
            var tel_code = ["1500", "1110", "1910"];
            var department = ["tech", "buh", "law"];
            var pos_start_support = 0;
            $(".client-support-container").fadeIn();
            let profile_support_button = document.getElementsByClassName("profile-support-button");
            profile_support_button[0].setAttribute("style", "background-color: #2672c3; color: #ecf1f7;");
            $(".profile-support-button-container").on("click", function (e) {
                let target = $(e.target);
                pos = target.index();

                profile_support_button[pos_start_support].setAttribute("style", "background-color: #ecf1f7; color: #2571bf");
                profile_support_button[pos].setAttribute("style", "background-color: #2571bf; color: #ecf1f7;");
                pos_start_support = pos;
                $("#profile-tel").text(tel_code[pos]);
                $("#Department").val(department[pos]);


            });
            $(document).on("click", ".black-x", function () {
                $(".price-container").removeClass("success");
                $('#support-message').val('');
            });
            $(".profile-support-blue-cross").click(function () {
                $(".client-support-container").fadeOut();
            });
        });

    });

});
//Конец Клиент support
//Начало Клиент dropdown
$(function () {
    $("#client-container").on("click", "#client-user-name", function () {

        $(".client-user-name-container").css("display", "flex");
        $(".client-user-name-container").animate({ opacity: 1 });
    });
    $("#client-container").on("click", "#client-logout", function () {
        ClientContainerLogout();
    });
    $("#profile-logout").click(function () {
        ClientContainerLogout();
    });

});
//Конец Клиент dropdown
function CheckForgotPassword() {
    $(".login-container").on("input propertychange", "#forgot-conformation-input", function () {
        var email = $("#forgot-password-email").attr("data-email");
        var code = $("#forgot-conformation-input").val();
        $(".email-conformation-code").load("/" + lang + "/ForgotPasswordConfirmationCheck", { "code": code, "userId": email }, function (response, status, xhr) {
            if (status != "error") {
                if (response == "Ok") {
                    $(".v-gray").removeClass("v-red");
                    $(".v-gray").addClass("v-green");


                    setTimeout(function () {
                        $("#forgot_results").load("/" + lang + "/ResetPasswordForm", { "code": code, "userId": email }, function () {
                        });

                    }, 600);

                }
                else {
                    $(".v-gray").removeClass("v-green");
                    $(".v-gray").addClass("v-red");
                }

            }
        });
    });
}
function CheckRegisterCode() {
    $(".login-container").on("input propertychange", "#register-conformation-input", function () {
        var email = $("#forgot-password-email").attr("data-email");
        var code = $("#register-conformation-input").val();
        $(".email-conformation-code").load("/" + lang + "/ConfirmEmail", { "code": code, "userId": email }, function (response, status, xhr) {
            if (status != "error") {
                if (response == "Ok") {
                    $(".v-gray").removeClass("v-red");
                    $(".v-gray").addClass("v-green");


                    setTimeout(function () {
                        ClientContainer();
                        $(".login-container").fadeOut({
                            complete: function () {
                                $(".login-container").html("");
                            }
                        });
                    }, 600);
                }
                else {
                    $(".v-gray").removeClass("v-green");
                    $(".v-gray").addClass("v-red");
                }

            }
        });
    });
}
function SetPasswordError() {
    $(".login-container").show().load("/" + lang + "/SetPasswordError");
}
function SetPasswordSuccess(email, code) {
    $(".login-container").show().load("/" + lang + "/SetPasswordSuccess", { "userId": email, "code": code });
}
function ConfirmEmailError() {
    $(".login-container").show().load("/" + lang + "/ConfirmEmailFromEmailError");
}
function ConfirmEmailSuccess(email, code) {
    $(".login-container").show().load("/" + lang + "/ConfirmEmailFromEmailSuccess", { "userId": email, "code": code });
}
//Начало Смета
$(function () {
    $("body").on("click", "#smeta, #smeta2, #smeta3", function () {

        if ($(".smeta-container").css("display") == "none") {
            if ($(".smeta-load-container").children().length > 0) {
                $(".smeta-load-container").fadeIn();
            }
            else {
                $(".smeta-load-container").load("/" + lang + "/Smeta");
            }
            $(".smeta-container").css("display", "flex").animate({
                opacity: "1",
                top: "50%"
            }, 1200);
        }
    });

});
//Конец Смета
//Начало Прайс
$(function () {
    $("body").on("click", "#slr-box-pricelist, #pricelist2, #pricelist3", function () {
        if ($(".slr-pricelist-container-load").children().length > 0) {
            $(".slr-pricelist-container").fadeIn();
        }
        else {
            $(".slr-pricelist-container").fadeIn({
                complete: function () {
                    $(".slr-pricelist-container-load").html("<div id=\"loading\"></div>");
                    $(".slr-pricelist-container-load").load("/" + lang + "/LoadPriceList");
                }
            });
        }

    });
});
//Конец Прайс
//Начало гео координаты

function GetGeoInfo() {
    function getIP() {
        fetch("https://api.ipgeolocation.io/ipgeo?apiKey=e894c2669ee04879915633657a0fed4e&fields=latitude,longitude")
            .then(
                function (response) {
                    response.json().then(function (data) {
                        sessionStorage.setItem("IP", data.ip);
                        GetCityByIP(data.ip);
                    });
                }
            );


    }

    if (sessionStorage.getItem("IP") === null) {
        getIP();
    }



    function GetCityByIP(ip) {
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
        var token = "5fc1f6b84089fe974849befd3f4fe8af18819a1a";
        var query = ip;
        var options = {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            }
        }

        fetch(url + query, options)
            .then(response => response.text())
            .then(result => GetCity(result))
            .catch(error => console.log("error", error));

        function GetCity(result) {
            var data = JSON.parse(result);
            localStorage.setItem("Latitude", data.location.data.geo_lat);
            localStorage.setItem("Longitude", data.location.data.geo_lon);
            localStorage.setItem("City", data.location.data.city);
            GetCityIdCdek(data.location.data.city_kladr_id);
        }
        function GetCityIdCdek(city_kladr_id) {
            var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/delivery";
            var token = "5fc1f6b84089fe974849befd3f4fe8af18819a1a";
            var query = city_kladr_id;

            var options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify({ query: query })
            }

            fetch(url, options)
                .then(response => response.text())
                .then(result => CdekParse(result))
                .catch(error => console.log("error", error));
            function CdekParse(result) {
                var data = JSON.parse(result);
                localStorage.setItem("Cdek", data.suggestions[0].data.cdek_id);
            }
        }
    }
}
//Конец гео координаты
// Начало подсказка
function ShowHint(id, event) {
    $(id).css({ 'left': event.clientX + 10, 'top': event.clientY + 10 }).show();
}
function HideHint(id) {
    $(id).hide();
}
$(function () {
    $(".tbl-price-base,.tbl-price-old")
        .mousemove(function (e) { ShowHint("#PriceHintBase", e); })
        .mouseout(function () { HideHint("#PriceHintBase"); })
        .click(function () { return false; });
    $(".tbl-price-disc")
        .mousemove(function (e) { ShowHint("#PriceHintDisc", e); })
        .mouseout(function () { HideHint("#PriceHintDisc"); })
        .click(function () { return false; });
    $(".tbl-price-sale")
        .mousemove(function (e) { ShowHint("#PriceHintSale", e); })
        .mouseout(function () { HideHint("#PriceHintSale"); })
        .click(function () { return false; });
    $(".tbl-price-min")
        .mousemove(function (e) { ShowHint("#PriceHintMin", e); })
        .mouseout(function () { HideHint("#PriceHintMin"); })
        .click(function () { return false; });
});
//Конец подсказка
}