/**
 * Created by iagu on 15-12-16.
 */
$('#example').dataTable({
    "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
    , "sPaginationType": "bootstrap"
    , "oLanguage": {
        "sLengthMenu": "_MENU_ records per page"
    }
});

Template.ViewAllOrders.rendered=function() {
    console.log( $('#allOrders').length);
    $('#allOrders').DataTable().attr('class', '').addClass('table table-hover');
    $('.dataTables_paginate ul').addClass('pagination');
}
