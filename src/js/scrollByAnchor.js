export default function scrollByAnchor() {
  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+'px'}, 2000);
    return false;
  });
}
