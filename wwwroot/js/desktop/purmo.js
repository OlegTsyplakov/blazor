export function purmo(){
        json = $.parseJSON($("#data-models").attr("data-models"));
        var model_selected;
        var add_width = "<option disabled selected>Выберите ...</option>";
        var add_height = "<option disabled selected>Выберите ...</option>";
        $("#purmo-model").on("change", function () {
            $("#purmo-width").html("<option disabled selected>Выберите ...</option>");
            model_selected = $("#purmo-model").val();
            var temp_height;
            add_height = "<option disabled selected>Выберите ...</option>";
            for (i = 0; i < json.length; i++) {
                if (json[i].model == model_selected) {
                    if (i == 0) {
                        temp_height = json[i].height;
                        add_height += "<option>" + json[i].height + "</option>";
                    }
                    else {
                        if (json[i].height != temp_height) {
                            add_height += "<option>" + json[i].height + "</option>";
                            temp_height = json[i].height;
                        }
                    }


                }
            }
            $("#purmo-height").html(add_height);
        });
        $("#purmo-height").on("change", function () {
            var height_selected = $("#purmo-height").val();
            var temp_width;
            add_width = "<option disabled selected>Выберите ...</option>";
            for (i = 0; i < json.length; i++) {
                if (json[i].model == model_selected && json[i].height == height_selected) {
                    if (i == 0) {
                        temp_width = json[i].width;
                        add_width += "<option>" + json[i].width + "</option>";
                    }
                    else {
                        if (json[i].width != temp_width) {
                            add_width += "<option>" + json[i].width + "</option>";
                            temp_width = json[i].width;
                        }
                    }


                }
            }
            $("#purmo-width").html(add_width);
            $("#purmo-width").on("change", function () {
                var article = model_selected + "х" + height_selected + "х" + $("#purmo-width").val();
                let formData = new FormData();
                formData.append("article", article);
                $.ajax({
                    url: '/' + lang + '/PurmoLoadModel',
                    type: 'POST',
                    data: formData,
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function (data) {
                        $(".purmo-all-price-container").css("opacity", "1");
                        $(".purmo-price-red").html(data.price + " " + "<div class=\"cartpopup-ruble\"></div>/" + data.unit);
                        $("#purmo-id").find("input").attr("disabled", false);
                        $("#purmo-id").find("[data-wareid]").attr("data-wareid", data.id);

                    },
                    error: function () {
                    }
                });
            });
        });
}