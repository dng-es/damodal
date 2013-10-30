/*!
 * Da modal v1.1.2
 *
 * @name     damodal
 * @author   David Noguera Gutierrez
 * @date     2013-10-30
 * @license  Released under the MIT license
 */
(function($) {
 jQuery.fn.damodal = function(options) {
	//Default options
	var configuration = {
		modalWidth : "300px"
	}
	jQuery.extend(configuration, options);

	//create divs
	if(document.getElementById('damodal-window')===null){
		var divTrans = $('<div id="damodal-window"></div>');
		var divModal = $('<div id="damodal-window-int"><div class="damodal-close damodal-close-button"></div><div id="damodal-content"></div></div>');
		divTrans.appendTo(document.body);
		divModal.appendTo(document.body);
		$("#damodal-window").css({
			"display" : "none",
			"left" : "0px",
			"overflow" : "hidden",
			"position" : "absolute",
			"top" : "0px",
			"z-index" : "1098"
		});
		$("#damodal-window-int").css({
			"display" : "none",
			"z-index" : "1099"
		});
		$(".damodal-content").css({
			"display" : "none"
		});
	}

	this.each(function(){
		var e_trigger = $(this);		

		e_trigger.click(function(e){
			e.preventDefault();
			var container = $(this).attr("data-damodal");
			container = container.replace(/[ .]/gi,"-");
		    var content = $('#' + container);
		    content.css({"display": "block"});
		    $("#damodal-content").after(content);
		    $("#damodal-window").css({width: $(document).width(), height: $(document).height(),opacity: 0.8}).fadeIn("fast");
		    $("#damodal-window-int").data("damodalText", content).fadeIn("fast").css({
					"display" : "block",
					"left" : "50%",
					"position" : "fixed",
					"top" : $(window).height() * 0.33,
					"width" : configuration.modalWidth
				}).css({
					"margin-left": - $("#damodal-window-int").width()/2
				});
		});

		$(".damodal-close").click(function(e){
			e.preventDefault();
			var windowRemove = $("#damodal-window-int").data("damodalText");
			$("#damodal-window").fadeOut(600);
			$("#damodal-window-int").slideUp(400, function()
			  { windowRemove.css({"display" : "none"});}
			);
		});
		
		$(window).resize(function() {
			$("#damodal-window").css({width: $(document).width(), height: $(document).height(),opacity: 0.8});		
		});  
	});
	return this;  
};
})(jQuery);
