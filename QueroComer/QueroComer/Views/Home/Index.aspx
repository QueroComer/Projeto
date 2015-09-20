<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>


<asp:Content ID="TitleContent" ContentPlaceHolderID="MainContent" runat="server">
    <form id="frm_login" method="post" action="<%:Url.Action("Autenticar") %>">
        <div class="quadro">
            <h2>Encontre lugares para ir!<br />
                Aproveite os melhores precos!<br />
                Experimente os melhores pratos!
            </h2>
        </div>
        <div class="painel">

            <label>Login ou E-mail:</label>
            <input type="text" name="txt_usuario" id="txt_usuario" class="login" required /><br />
            <label>Senha:</label>
            <input type="password" name="txt_senha" id="txt_senha" class="login" required /><br />
            <button class="botao" onclick="loginComEmail();">Entrar</button>
            <button class="botao" onclick="">Cadastrar</button><br />
            <button class="botao" onclick="loginComFacebook();">Login com o Facebook!</button>
        </div>
    </form>
</asp:Content>
