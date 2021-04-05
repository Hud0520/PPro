/*Search*/
var indexScroll;
$("#show").click(function showSearch(){
    indexScroll=$('html').scrollTop();   
    $("#myinput").css({"height":"100vh","paddingTop":"50vh"});
    $('html, body').addClass("noscroll");
});
$("#hide").click(function hideSearch(){
    $("#myinput").css({"height":"0vh","paddingTop":"0vh"});
    $('html, body').removeClass("noscroll");
    $('html').scrollTop(indexScroll);
});
// Scroll top
$(window).scroll(function(){
   
    if($(window).scrollTop()>100){
        $(".top").addClass("top-scrolled");
        $("#header").addClass("header-scrolled");
    }else{
        $(".top").removeClass("top-scrolled");
        $("#header").removeClass("header-scrolled");
    }
    //face up text-about
    var tas=$(window).height()-100;// Độ cao lăn phần tử đến tóp -100px
    if($(window).scrollTop()>tas){
        $(".text-about p").css({"margin":"0px 10px","opacity":"1"});
    }
    //face up
    var listfaceup= $(".faceup");
    for(var i= 0 ; i<listfaceup.length; i++){
        var h= $(listfaceup[i]).offset();
        var tasface=h.top-tas;
        if($(window).scrollTop()>tasface){
            $(listfaceup[i]).css({"top": "0px","opacity":"1"});
        }
    }
})
//Random background-img text-about
function rdImg(){
    var i= Math.floor((Math.random()*4)+1);
    var link="img/bgc"+i+".jpg";
    $(".text-about img").attr("src",link);
    console.log(link);
}
//Random focus services
function rdSv(){
    var i = Math.floor((Math.random()*3));
    var listSv = $(".carousel-item");
    $(listSv[i]).addClass("active");

}
$(window).ready(rdImg(),rdSv());

//Sinh dữ liệu
function nameItem(i){
    switch (i) {
        case "wed":return "Ảnh Cưới";
        case "mem":return"Kỉ Yếu";
        case "eve":return"Sự Kiện";
        case "day":return "Đời sống";
    }
}
function creatGIteam(i,name,cl){
    var opt=""
    opt+="<div class=\"gallery-item "+cl+"\">";
    opt+="<img src=\"img/Gallery/"+i+".jfif\" alt=\"\" class=\"w-100\">";
    opt+="<\div class=\"infor\">";
	opt+="<h4>"+nameItem(cl)+" "+name+"</h4>";
	opt+="<p>"+nameItem(cl)+"</p>";
	opt+="<a href=\"#\" title=\"Thích\" class=\"a1\"><i class=\"fas fa-heart\"></i></a>";
	opt+="<a href=\"#\" title=\"Thêm\" class=\"a2\"><i class=\"fas fa-link\"></i></a>";
	opt+="</div>"
    opt+="</div>"
    return opt;
}

function filterOpt(c){
    var opt=[
        [1,1,"day"],
        [2,2,"day"],
        [3,1,"wed"],
        [4,1,"eve"],
        [5,2,"wed"],
        [6,3,"day"],
        [7,1,"mem"],
        [8,4,"day"],
        [9,2,"mem"],
        [10,3,"wed"],
        [11,3,"mem"],
        [12,2,"eve"],
        [13,4,"mem"],
        [14,5,"mem"],
        [15,3,"eve"],
        [16,6,"mem"],
        [17,4,"eve"],
        [18,5,"day"],
        [19,5,"eve"],
        [20,4,"wed"],
        ];
    var list= $(".viewG");
    var j=0;
    if(c=="all") c="";
    for(var i=0 ;i<3; i++){
        $(list[i]).html("");
    }
    for(var i=0; i<opt.length;i++){   
        if(opt[i][2].trim().indexOf(c.trim())>-1){
            if(j>=3) j=0;
            $(list[j]).append(creatGIteam(opt[i][0],opt[i][1],opt[i][2]));
            $(".gallery-item").fadeIn("300");
            j++;
        }
    }
}
$(".bottum").click(function(){
    $(".bottum.active").removeClass("active");
    $(this).addClass("active");
});


$(window).ready(
    filterOpt("all"),
);
