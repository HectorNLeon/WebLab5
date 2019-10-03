function watchForm(){
    $("#submitButton").click( function(e){
        e.preventDefault();
        var liN = document.createElement("li");
        var liDiv = document.createElement("div");
        var parL = document.createElement("p");
        parL.textContent = $("#textC").val();

        var checkB = document.createElement("button");
        checkB.type = "submit";
        checkB.innerHTML = "check";
        checkB.className = "checkB";

        var delB = document.createElement("button");
        delB.type = "submit";
        delB.className = "deleteB";
        delB.innerHTML = "delete";

        liDiv.appendChild(checkB);
        liDiv.appendChild(delB);

        liN.appendChild(parL);
        liN.appendChild(liDiv);

        $("ul").append(liN);
        $("#textC").val("");
    });

    $("ul").on("click",".checkB", function(e){
        e.preventDefault();
        var pL = $(this).parent().parent().find("p");
        if(!pL.hasClass("checked")){
            pL.css("text-decoration", "line-through");
            pL.addClass("checked");
        }
        else{
            pL.css("text-decoration", "none");
            pL.removeClass("checked");
        }
     });

     $("ul").on("click",".deleteB", function(e){
        e.preventDefault();
        $(this).parent().parent().remove();
     });

}


watchForm();