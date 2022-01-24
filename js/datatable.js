//js/datatable.js
$(document).ready(function() {
    $('#example').DataTable({
     "columnDefs": [{
      "targets": 0
     }],
     language: {
      "sProcessing": "Procesando...",
      "sLengthMenu": "Mostrar MENU resultados",
      "sZeroRecords": "No se encontraron resultados",
      "sEmptyTable": "Ningún dato disponible en esta tabla",
      "sInfo": "Mostrando resultados START-END de  TOTAL",
      "sInfoEmpty": "Mostrando resultados del 0 al 0 de un total de 0 registros",
      "sInfoFiltered": "(filtrado de un total de MAX registros)",
      "sSearch": "Buscar:",
      "sLoadingRecords": "Cargando...",
      "oPaginate": {
       "sFirst": "Primero",
       "sLast": "Último",
       "sNext": "Siguiente",
       "sPrevious": "Anterior"
      },
     }
    });
   });