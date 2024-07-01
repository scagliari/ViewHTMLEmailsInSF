<!-- Security Layer -->
 <script runat="server">
    Platform.Load("Core","1.1");
    var CookieValue =
    Platform.Function.Lookup('MSR_Operations_SFMCToSalesforceCookie_20240624','SFMCCookieValue','SFMCCookie','DisplayEmailsInSF');
    var expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);
    Platform.Response.SetCookie("DisplayEmailsInSF", CookieValue, expiration, true);
 </script>
 <!-- End of Security Layer -->

 <!-- CloudPage Security Code -->
 <script runat="server">
  Platform.Load("Core","1.1");
  var CookieValue =
  Platform.Function.Lookup('MSR_Operations_SFMCToSalesforceCookie_20240624','SFMCCookieValue','SFMCCookie','DisplayEmailsInSF');
  var Cookie = Platform.Request.GetCookieValue('DisplayEmailsInSF');
  if(Cookie && Cookie == CookieValue) {
    var loginSession = "True"
  } else 
  {
    var loginSession = "False"
  }
  Variable.SetValue("@LoginSession",loginSession);

</script>
  <!--End of CloudPage Security Code -->
