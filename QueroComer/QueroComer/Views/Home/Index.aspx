<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>


<asp:Content ID="TitleContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="quadro">
        <h2>Encontre lugares para ir!<br />
        Aproveite os melhores precos!<br />
        Experimente os melhores pratos!
            </h2>
    </div>
    <div class="painel">

        <label>Login ou E-mail:</label>
        <input class="login" /><br />
        <label>Senha:</label>
        <input class="login" /><br />
        <button class="botao">Entrar</button>
        <button class="botao" onclick="">Cadastrar</button><br />
        <button class="botao" onclick="loginComFacebook();">Login com o Facebook!</button>
    </div>
</asp:Content>
