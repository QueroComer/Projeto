<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="indexTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page - My ASP.NET MVC Application
</asp:Content>

<asp:Content ID="indexFeatured" ContentPlaceHolderID="FeaturedContent" runat="server">
  
</asp:Content>

<asp:Content ID="indexContent" ContentPlaceHolderID="MainContent" runat="server">    
    <div class="painel">		
		<label>E-mail:</label>
		<input class="login" /><br />
		<label>Senha:</label>
		<input class="login" /><br />
        <button class="botao">Entrar</button>
		<button class="botao" onclick="">Cadastrar</button><br />
        <button class="botao" onclick="checkLoginState();">Login com o Facebook!</button>
	</div>
</asp:Content>
