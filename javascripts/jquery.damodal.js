/*!
 * Da modal v1.0
 *
 * @name     damodal
 * @author   David Noguera Gutierrez
 * @date 	 2012-6-02
 * @license	 Released under the MIT license
 */
$(document).ready(function(){
	  var capaTrans = $('<div id="damodal-window"></div>');
	  var capaModal = $('<div id="damodal-window-int"><div class="damodal-close damodal-close-button" title="Cerrar"></div><div id="damodal-content"></div></div>');
	  capaTrans.appendTo(document.body);
	  capaModal.appendTo(document.body);


	  /*Evento click de la clase damodal-open*/
	  $(".damodal-open").click(function(e){
	    e.preventDefault();
		var contenedor = $(this).attr("title");
		contenedor = contenedor.replace(/[ .]/gi,"-");
	    var lanzador = $('#' + contenedor);
	    $("#damodal-window-int").data("ventana", lanzador);
	    lanzador.css({"display": "block"});
	    $("#damodal-content").after(lanzador);
	    $("#damodal-window").css({width: $(document).width(), height: $(document).height(),opacity: 0.8}).fadeIn("fast");
	    $("#damodal-window-int").fadeIn("fast").css({
				"top": $(document).height()/3,
				"left": "50%",
				"display": "block",
				"margin-left": - $("#damodal-window-int").width()/2});
	  });	
	  /*Evento click de la clase damodal-close*/
	  $(".damodal-close").click(function(e){
		e.preventDefault();
		var windowRemove = $("#damodal-window-int").data("ventana");
		$("#damodal-window").fadeOut(300);
		$("#damodal-window-int").slideUp(500, function()
		  { windowRemove.css({"display" : "none"});}
		);
	  });
	  /*Evento resize de la ventana*/
	  $(window).resize(function() {
		$("#damodal-window").css({width: $(document).width(), height: $(document).height(),opacity: 0.8});		
	  });
});