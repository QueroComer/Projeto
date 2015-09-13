<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="indexTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page - My ASP.NET MVC Application
</asp:Content>

<asp:Content ID="indexFeatured" ContentPlaceHolderID="FeaturedContent" runat="server">
  
</asp:Content>

<asp:Content ID="indexContent" ContentPlaceHolderID="MainContent" runat="server">    
    <div class="painel">		
        <button onclick="checkLoginState();">Login com o Facebook!</button>
		<label>E-mail:</label>
		<input class="login" />
		<button>Entrar</button><br />
		<label>Senha:</label>
		<input class="login" />
		<button onclick="">Cadastrar</button>
	</div>
</asp:Content>
