/*!
 * Da modal v1.1
 *
 * @name     damodal
 * @author   David Noguera Gutierrez
 * @date 	 2012-6-02
 * @license	 Released under the MIT license
 */
(function($) {
 jQuery.fn.damodal = function(options) {
	//Default options
	var configuration = {
		modalWidth : "300px"
	}
	jQuery.extend(configuration, options);

	if(document.getElementById('damodal-window')===null){
		var capaTrans = $('<div id="damodal-window"></div>');
		var capaModal = $('<div id="damodal-window-int"><div class="damodal-close damodal-close-button" title="Cerrar"></div><div id="damodal-content"></div></div>');
		capaTrans.appendTo(document.body);
		capaModal.appendTo(document.body);
	}

	this.each(function(){
		var e_trigger, idPalette, idInfo, colorsPalette, daPicker,daPickerImg;

		e_trigger = $(this);		


		/*e_trigger click event*/
		e_trigger.click(function(e){
			e.preventDefault();
			var contenedor = $(this).attr("data-damodal");
			contenedor = contenedor.replace(/[ .]/gi,"-");
		    var lanzador = $('#' + contenedor);
		    $("#damodal-window-int").data("ventana", lanzador);
		    lanzador.css({"display": "block"});
		    $("#damodal-content").after(lanzador);
		    $("#damodal-window").css({width: $(document).width(), height: $(document).height(),opacity: 0.8}).fadeIn("fast");
		    $("#damodal-window-int").fadeIn("fast").css({
					"top": ($(document).height() - $(window).height()) + ($(window).height() * 0.33),
					"left": "50%",
					"display": "block",
					"width" : configuration.modalWidth
				}).css({
					"margin-left": - $("#damodal-window-int").width()/2
				});
		});
	/*Evento click de la clase damodal-close*/
	$(".damodal-close").click(function(e){
		e.preventDefault();
		var windowRemove = $("#damodal-window-int").data("ventana");
		$("#damodal-window").fadeOut(600);
		$("#damodal-window-int").slideUp(400, function()
		  { windowRemove.css({"display" : "none"});}
		);
	});
	
	/*Evento resize de la ventana*/
	$(window).resize(function() {
		$("#damodal-window").css({width: $(document).width(), height: $(document).height(),opacity: 0.8});		
	});  
	});
	return this;  
};
})(jQuery);