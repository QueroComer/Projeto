<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="indexTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page - My ASP.NET MVC Application
</asp:Content>

<asp:Content ID="indexFeatured" ContentPlaceHolderID="FeaturedContent" runat="server">
  
</asp:Content>

<asp:Content ID="indexContent" ContentPlaceHolderID="MainContent" runat="server">    
    <div class="sugestoes">
        <button>Sugestoes</button>
        <ul>
            <li>teste1</li>
            <li>teste2</li>
            <li>teste3</li>
        </ul>
    </div>
    <div class="map">		
        teste
	</div>
</asp:Content>
