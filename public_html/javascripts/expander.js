$(document).ready(function() {
	$("#gradOS, #gradCC").hide();

	$("#ccExp").toggle(
      		function() {
        		$(this).attr("src","images/compress.png");
      			$("#gradCC").slideDown(450); 
      		},
      		function () {
        		$(this).attr("src","images/expand.png");
      			$("#gradCC").slideUp(450); 
      		}
    	);
	
	$("#osExp").toggle(
      		function() {
        		$(this).attr("src","images/compress.png");
      			$("#gradOS").slideDown(450); 
      		},
      		function () {
        		$(this).attr("src","images/expand.png");
      			$("#gradOS").slideUp(450); 
      		}
    	);
	
	$("#job .projList .projButton, #grad .projList .projButton").hover(
			  function () {
				  $(this).removeClass('projButton');
			    $(this).addClass('mouseoverButton');
			  }, 
			  function () {
				  $(this).addClass('projButton');  
			    $(this).removeClass('mouseoverButton');
			    
			  }
	);
	
	$("#undergrad .projList .projButton").hover(
			  function () {
				  $(this).removeClass('projButton');
			    $(this).addClass('umouseoverButton');
			  }, 
			  function () {
				  $(this).addClass('projButton');  
			    $(this).removeClass('umouseoverButton');
			    
			  }
	);
	
	$.fx.speeds._default = 450;
	myDialogs = $('#d1, #d2, #d3, #j1, #j2,#j3,#j4,#j5, #g1, #g2,#g3,#g4,#g5');
	$(function() {
		// Dialog
		$(myDialogs).dialog({
			autoOpen: false,
			minHeight: 300,
			maxHeight: 650,
			width: 750,
			//position: "top",
			//title: "Dialog Title",
			modal: true,
			closeOnEscape: true,
			//hide: "explode",
			hide: { effect: 'drop', direction: "down" },
			draggable: true,
			buttons: {
				"Ok": function() {
					$(this).dialog("close");
				}
			}
		});
	});
	
	projBtn = $('.projButton');
	
	$(projBtn).click(function(){
		dval = $(this).attr('dval');
		$(dval).dialog('open');
		return false;
	});
	
	$(document).ready(function(){var a=$("#skills img");$(a).mouseenter(function(){var a=$(this).attr("val");$(this).qtip({content:a,style:{name:"red",tip:{corner:"bottomMiddle"}, border: {
        width: 1,
        radius: 3,
        color: '#DD002E'
     },},position:{corner:{target:"topmiddle",tooltip:"bottomMiddle"},adjust:{x:25,y:0,resize:!0,scroll:!0}},show:{when:!1,ready:!0},hide:!1})}).mouseleave(function(){$(this).data("qtip")&&$(this).qtip("destroy")})});

});
