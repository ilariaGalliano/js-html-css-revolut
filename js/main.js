// Descrizione:
//
// - Focus è rendere funzionali i menu dropdown
//   all’interno della navigazione principale
// - Importante l’uso di $(this)

  $(document).ready(function() {
  // Referenze
  var drop = $('.dropdown > a');
  var dropMenu = $('.dropdown .dropdown-1 > a');

  // Show / Hide
  drop.click( function() {

    var menu = $(this).next('dropdown-1');
    dropMenu.not(menu).hide();

    menu.toggle();

  });
});
