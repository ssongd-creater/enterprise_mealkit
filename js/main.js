$(document).ready(function () {
  $('#fullpage').fullpage({
    // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling: true,
    scrollHorizontally: true,
    lockAnchors: false,
    anchors: ['home', '1st', '2nd', '3rd', '4rd'],
    //sectionColor:['#333333','#666666','#cccccc','#efefef'],
    navigation: true,
    navigationPosition: 'right',
    sectionSelector: '.section',
    css3: true,
    scrollingSpeed: 700,
    fitToSection: true,
    normalScrollElements: '.ps_aiwrap, .board_con, .modal_imgbox',
  });
});