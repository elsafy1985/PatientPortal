$(document).ready(function(){
    $('.sidenav').sidenav();
    $('select').formSelect();
    //$('select.noSearchBar').formSelect();
    //$('select.searchBar').select2({width: "100%"});
    $('.tooltipped').tooltip();
    $(".dropdown-trigger").dropdown();
    $(".dropdown-trigger.navBar").dropdown({
        hover: true,
        coverTrigger: false,
        constrainWidth: false
    });
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('.modal').modal({
        dismissible: false
    });
    $('.datepicker').datepicker({
        container: "body",
        autoClose: true,
    });
    
    $(".datatable").fancyTable({
    sortColumn:0, 
    sortable: true,
    pagination: true, 
    searchable: true,
    globalSearch: true,
    });
    
   $('a.warning').click(function() {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to return!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        closeOnClickOutside: false
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your appointment has been deleted!", {
            icon: "success",
          });
          $(this).closest("tr").remove();
        } else {
          swal("Your appointment is safe!");
        }
      });
    });

    $('a.confirm').click(function() {
        swal({
            title: "Are you sure?",
            text: "your Appointment will be at 13:00 - 17/09/2019",
            icon: "warning",
            buttons: ["NO", "YES"],
            dangerMode: false,
            closeOnClickOutside: false
          })
          .then((willConfirm) => {
            if (willConfirm) {
              swal("Great! Your appointment has been booked!", {
                icon: "success",
              });
              $('a.confirm').addClass("disabled")
            } else {
              swal("Your appointment is canceled!");
            }
          });
        });

    $('#collapseMenu').click(function() {
        $('.sidebar-fixed').toggleClass('collapse');
        $('nav, main, footer').toggleClass('expand');
    })

    $(".dentalApproveBtn").click(function() {
        $(".divOne").addClass("zoomOut").css({height: "0"});
        $(".divTwo").removeClass("hide")
    })

    $(".dentalNextBtn").click(function() {
        $(".divTwo").addClass("zoomOut").css({height: "0"});
        $(".divThree").removeClass("hide").css({height: "auto"})

    })

    $(".dentalBackBtn").click(function() {
        $(".divThree").addClass("zoomOut, hide").css({height: "0"});
        $(".divTwo").removeClass("zoomOut").css({height: "auto"}).addClass("zoomIn")
    })

    
    

  });