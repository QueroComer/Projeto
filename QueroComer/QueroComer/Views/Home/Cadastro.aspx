<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="TitleContent" ContentPlaceHolderID="MainContent" runat="server">
    <form action="Cadastro" method="post" onsubmit="validaForm();">
        <div class="Cadastro">
            <label for="login">Login:*</label>
            <input type="email" placeholder="Digite seu email" id="login" name="Login" required />
            <br />
            <label for="Senha">Senha:*</label>
            <input id="Senha" name="Senha" placeholder="Digite uma senha de 6 a 8 carateres"  type="password" required />
            <br />
            <label for="Confirmacao">Confirme sua Senha:*</label>
            <input id="Confirmacao"  name="Confirmacao" placeholder="Repita sua senha" type="password" required />
            <br />
            <label for="Nome">Nome:*</label>
            <input type="text" id="Nome"  name="Nome" placeholder="Digite seu nome completo" required />
            <br />
            <label for="DataNascimento">Data Nascimento:*</label>
            <input type="date" id="DataNascimento"  name="DataNascimento" required />            
            <br />
            <label for="Cep">Cep:</label>
            <input  type="text"id="Cep" name="Cep" placeholder="Digite seu CEP" />
            <br />
            <label for="Endereco">Endereço:</label>
            <input  type="text" id="Endereco" name="Endereco"  placeholder="Digite seu endereço"  />
            <br />            
            <label for="Estado">Estado:</label>
            <select id="Estado" name="Estado">    
                <option>-- SELECIONE --</option>            
            </select>
            <br />
            <label for="Cidade">Cidade:</label>
            <select id="Cidade" name="Cidade">                
            </select>
        </div>
        <div>
            <input type="submit" value="Cadastrar" />
            <input type="button" value="Cancelar" onclick="window.location = '/Home'" />
        </div>
        <div>
            <label>Campos com "*" são obrigatórios.</label>
        </div>
    </form>
</asp:Content>
