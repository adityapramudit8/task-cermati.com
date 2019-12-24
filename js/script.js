function waithide()
{
  var obj = document.getElementById("notification-panel");
  obj.style.opacity = '0';
  window.setTimeout(
    function removethis()
    {
      obj.style.display='none';
    }, 300);
}
function waithide2()
{
  var obj = document.getElementById("newsletter-panel");
  obj.style.opacity = '0';
  window.setTimeout(
    function removethis()
    {
      obj.style.display='none';
    }, 300);
}